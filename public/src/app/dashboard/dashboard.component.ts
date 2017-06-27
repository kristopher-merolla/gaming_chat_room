import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }

  // local (component) variables 
  game_profile = false; // false as default
  activeUser = ""; // null as default

  user_for_db = {
    name: "",
    logStatus: false
  }

  logoutUser() {
    // get user id
    this._httpService.getUserId(this.activeUser)
    .then((user)=>{
      console.log("from logout user, the user is:",user.user);
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
      this.game_profile = false;
      this.activeUser = this._cookieService.get('username');
      console.log("cookie 22:",this._cookieService.get('username'));
      this._httpService.getUserId(this.activeUser)
      .then((user)=>{
        console.log("about to run the logStatusTrue function", user.user);
        this._httpService.logStatusTrue(user.user)
        .then((user)=>{
          this.getPlayers();
        })
        .catch()
      })
      .catch((err)=> {
        console.log("not good",err);
      })
    }
  }

  errors = null;
  players = null;

  // define a function to get all active players
  getPlayers(){
    this._httpService.getPlayers()
    .then((data)=>{
      console.log("got topics from getTopics",data);
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