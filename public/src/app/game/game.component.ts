import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// variables for js file functions
declare var startGolf: any;
declare var startPong: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  loadPong() {
    console.log("inside of loadPong");
    new startPong(this.game_profile);
    new startGolf(this.game_profile);
    //new pong(); // starts the pong game
  }

  loadGolf() {
    console.log("inside loadGolf")
    new startGolf(this.game_profile);
    new startPong(this.game_profile);
    //new golf(); // starts the pong game
  }

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) {
   }

  game_profile: any; // setup a game profile tag

  ngOnInit() {
    let url = this._router.url; // we know this will contain "/dashboard/" and then the game
    // console.log(url.substring(11));
    this.game_profile = url.substring(11); // so grab the substring
    if(this.game_profile == "pong") {
      console.log("starting pong...");
      this.loadPong();
    }
    if(this.game_profile == "golf") {
      console.log("starting golf...");
      this.loadGolf();
    }
  }




}
