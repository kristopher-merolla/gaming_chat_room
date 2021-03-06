import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { ChatService } from './../chat.service';

// variables for js file functions
declare var startGolf: any;
declare var startPong: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{
  connection;
  messages = [];
  message_obj = {
    message: '',
    name: '',
  }
  @Output() aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _cookieService:CookieService,
    private _chatService: ChatService,
  ){
    // this.sendMessage();
    this._httpService.getMessage()
    .then(obj=>{
      this.messages = obj.reverse();
    })
    .catch(err=>{console.log(err);})
  }
  // sendMessage() {
    // this._chatService.sendMessage(this._cookieService.get('username') + ' has logged on');
    // this.message='';
  // }
  // local (component) variables 
  game_profile = false; // false as default
  activeUser = ""; // null as default

  user_for_db = {
    name: "",
    logStatus: false
  }

  onSubmit(form){
    this.message_obj.name = this._cookieService.get('username');
    this._chatService.sendMessage(this.message_obj);
    this._httpService.createMessage(this.message_obj)
    .then(obj=>{
      // form.resetForm();
      this._httpService.getMessage()
      .then(data=>{
        this.messages = data.reverse();
        form.resetForm();
      })
      .catch(err=>{console.log(err);})
    })
    .catch(err=>{console.log(err);})
  }

  toDashboard() {
    this.game_profile = false;
    new startGolf(this.game_profile);
    new startPong(this.game_profile);
    this._router.navigate(['dashboard']);
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
        this._router.navigate(['']);
      })
      .catch()
    })
    .catch()
  }

  ngOnInit() {
    if(!this._cookieService.get('username')) { // catch a user trying to access dashboard without logging in!
      this._router.navigateByUrl("/");
    }
    else {
      this.connection = this._chatService.getMessages().subscribe(message => {
        this._httpService.getMessage()
        .then(data=>{
          this.messages = data.reverse();
        })
        .catch(err=>{console.log(err);})
      })
      // this.connection = this._chatService.getSocketID().subscribe(id => {
      //   console.log(id + ' disconnected');
      // })
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

  ngOnDestroy() {
    this.connection.unsubscribe();
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

  // snake() {
  //   this.game_profile = true;
  //   this._router.navigateByUrl("/dashboard/snake");
  // }
}