import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ChatService } from './../chat.service';

// declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output()
  aTaskEventEmitter = new EventEmitter(); // emit from the form up to the parent

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _cookieService:CookieService,
    private _chatService: ChatService,
  ) {
    if(this._cookieService.get('username')){
      this._router.navigate(['dashboard']);
    }
  }

  user = {
    name: ""
  }

  login(form) {
    // function to check user exists
    this._httpService.checkUser(this.user)
      .then( user => {
        if(user.user != null) {
          // have user in db, update cookie, then redirect
          this._cookieService.put('username', user.user.name);
          // emit event 'user_logged_on'
          form.resetForm();
          this._router.navigateByUrl("/dashboard");
        }
        else {
          // dont have user, need to create, update cookie
          this._httpService.createUser(this.user)
            .then( user => {
              this._cookieService.put('username', user.user.name);
              form.resetForm();
              this._router.navigateByUrl("/dashboard");
            })
            .catch()
        }
      })
      .catch()
  }
}
