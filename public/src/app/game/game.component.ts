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

  ngOnInit() {
    console.log("in the init of the game comp");
    console.log(this._router.url);
  }

}
