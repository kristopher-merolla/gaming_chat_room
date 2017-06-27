import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'; // to use map

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  // get all the active players from the database, deliver a promise back
  getPlayers(){
    return this._http.get("/players").map(response=>response.json()).toPromise();
  }

  // check if an existig user is already created in the DB
  checkUser(user) {
    return this._http.post('/userlogin', user).map((data)=>data.json()).toPromise();
  }

  // create a new user (should run checkUser(user) first!!)
  createUser(user) {
    return this._http.post('/usercreate', user).map((data)=>data.json()).toPromise();
  }

  // get the user_id of the active user from the database
  getUserId(user) {
    // need to setup an object to pass the _http.post(__)
    var activeUser = {
      name: user
    }
    return this._http.post('/getUserId', activeUser).map((data)=>data.json()).toPromise();
  }

  // for user logout to change logStatus to FALSE
  logStatusFalse(user) {
    return this._http.post('/logStatusFalse', user).map((data)=>data.json()).toPromise();
  }

  // for user login to change logStatus to TRUE
  logStatusTrue(user) {
    return this._http.post('/logStatusTrue', user).map((data)=>data.json()).toPromise();
  }

  createMessage(message) {
    return this._http.post('/message', message).map((data)=>data.json()).toPromise();
  }

  getMessage() {
    return this._http.get('/messages').map((data)=>data.json()).toPromise();
  }

}
