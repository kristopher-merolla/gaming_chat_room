import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { ChatService } from './../chat/chat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message_obj = {
    message: '',
    name: '',
  }
  @Output() aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _cookieService:CookieService,
    private _chatService: ChatService
  ){
    this._httpService.getMessage()
    .then(obj=>{
      this.messages = obj.reverse();
    })
    .catch(err=>{console.log(err);})
  }

  // local (component) variables 
  game_profile = false; // false as default
  activeUser = ""; // null as default

  user_for_db = {
    name: "",
    logStatus: false
  }

  // sendMessage(){
  //   this._chatService.sendMessage(this.message);
  //   this.message = '';
  // }

  onSubmit(form){
    this.message_obj.name = this._cookieService.get('username');
    this._httpService.createMessage(this.message_obj)
    .then(obj=>{
      form.resetForm();
      this._httpService.getMessage()
      .then(data=>{
        this.messages = data.reverse();
      })
      .catch(err=>{console.log(err);})
    })
    .catch(err=>{console.log(err);})
  }

  logoutUser() {
    // get user id
    this._httpService.getUserId(this.activeUser)
    .then((user)=>{
      // change logStatus of user to FALSE
      this._httpService.logStatusFalse(user.user)
      .then((data)=> {
        // reset active user and remove cookie, reroute to login page
        this.activeUser = "";
        this._cookieService.removeAll();
        this._router.navigateByUrl("/login");
      })
      .catch()
    })
    .catch()
  }

  ngOnInit() {
    if(!this._cookieService.get('username')) { // catch a user trying to access dashboard without logging in!
      this._router.navigateByUrl("/login");
    }
    else {
      // Initialize socket connection
      this.connection = this._chatService.getMessages().subscribe(message => {
        console.log(message)
      })
      this.game_profile = false;
      this.activeUser = this._cookieService.get('username');
      this._httpService.getUserId(this.activeUser)
      .then((user)=>{
        this._httpService.logStatusTrue(user.user)
        .then((user)=>{
          this.getPlayers();
        })
        .catch()
      })
      .catch((err)=> {
        console.log(err);
      })
    }
  }

  errors = null;
  players = null;

  // define a function to get all active players
  getPlayers(){
    this._httpService.getPlayers()
    .then((data)=>{
      if(data.message == "Success"){
          this.players = data.user;
      }
      else {
        this.errors = "There was a problem fetching the topics from the DB";
      }
    })
    .catch((err)=>{
      console.log("error doing getTopics:",err)
    })
  }


  ngOnDestroy(){
    //this.connection.unsubscribe();
  }

  // GAMES
  pong() {
    this.game_profile = true;
    this._router.navigateByUrl("/dashboard/pong");
  }

  golf() {
    this.game_profile = true;
    this._router.navigateByUrl("/dashboard/golf");
  }

  snake() {
    this.game_profile = true;
    this._router.navigateByUrl("/dashboard/snake");
  }

}