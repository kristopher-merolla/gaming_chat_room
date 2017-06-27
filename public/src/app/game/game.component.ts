import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// require('require-ensure');
// require('./../../assets/scripts/pong.js');

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) {
    // require.ensure(['./../../assets/scripts/pong.js'], require => {
    //     let yourModule = require('./../../assets/scripts/pong.js');
    //     yourModule.someFunction();
    //  });
   }

  game_profile: any; // setup a game profile tag

  ngOnInit() {
    let url = this._router.url; // we know this will contain "/dashboard/" and then the game
    // console.log(url.substring(11));
    this.game_profile = url.substring(11); // so grab the substring
    if(this.game_profile == "pong") {
      this.loadPong()
    }
  }

  loadPong() {
    console.log('hello pong');
    var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };
    // setup canvas
    var canvas = document.createElement('canvas');
    canvas.width = 560;
    canvas.height = 460;
    console.log(canvas.width);
    var context = canvas.getContext('2d');
    //
    window.onload = function() {
      console.log("inside window onload");
      document.body.appendChild(canvas);
      animate(step);
    };
    var step = function() {
      update();
      render();
      animate(step);
    };
    var update = function() {
    };

    var render = function() {
      context.fillStyle = "#FF00FF";
      console.log("inside render",canvas.width);
      context.fillRect(0, 0, canvas.width, canvas.height);
    };
  }

}
