import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }

  game_profile: any; // setup a game profile tag

  ngOnInit() {
    let url = this._router.url; // we know this will contain "/dashboard/" and then the game
    // console.log(url.substring(11));
    this.game_profile = url.substring(11); // so grab the substring
  }

}
