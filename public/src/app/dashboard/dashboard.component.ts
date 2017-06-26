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

  activeUser = ""; // null as default

  logoutUser() {
    this.activeUser = "";
    this._cookieService.removeAll();
    this._router.navigateByUrl("/login");
  }

  topic = {
    title: "",
    option_1: "",
    option_2: "",
    option_3: "",
    option_4: ""
    // user_id: "",
    // user: ""
  }

  topic_for_db = {
    title: "",
    option_1: ["",0],
    option_2: ["",0],
    option_3: ["",0],
    option_4: ["",0],
    user_id: "",
    user: ""
  }

  errors = null;
  topics = null;

  addTopic(form){
    console.log("inside dash.comp.ts addTopic function", this.activeUser);
    this.topic_for_db.user = this.activeUser; // set active user as user in topic_for_db
    this.topic_for_db.option_1[0] = this.topic.option_1; // set option
    this.topic_for_db.option_2[0] = this.topic.option_2; // set option
    this.topic_for_db.option_3[0] = this.topic.option_3; // set option
    this.topic_for_db.option_4[0] = this.topic.option_4; // set option
    this.topic_for_db.title = this.topic.title; // set title
    // step 1 (get user_id of active user)
    this._httpService.getUserId(this.activeUser)
      .then((user)=>{
        // THEN - add user_id to this.topic.user_id
        console.log("look what we have:",user.user._id); // now user.user._id is the id of the active user
        this.topic_for_db.user_id = user.user._id; // set user_id for our topic
        // THEN - create the topic in the database
        this._httpService.newTopic(this.topic_for_db)
          .then((data)=>{
            console.log("working on the newTopic function in dashboard comp",data);
            form.resetForm(); // reset the form and "topic" object after the topic was created
            this.topic.title = "";
            this.topic.option_1= "";
            this.topic.option_2= "";
            this.topic.option_3= "";
            this.topic.option_4= "";
            this.topic_for_db.title = "";
            this.topic_for_db.option_1 = ["",0];
            this.topic_for_db.option_2 = ["",0];
            this.topic_for_db.option_3 = ["",0];
            this.topic_for_db.option_4 = ["",0];
            this.topic_for_db.title = "";
            this.topic_for_db.title = "";
            this.getTopics();
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
      this.getTopics();
      this.activeUser = this._cookieService.get('username');
      console.log("cookie:",this._cookieService.get('username'));
    }
  }

  // define a function to get all comments (to display on dashboard)
  getTopics(){
    this._httpService.getTopics()
    .then((data)=>{
      console.log("got topics from getTopics",data);
      if(data.message == "Success"){
          this.topics = data.topics;
      }
      else {
        this.errors = "There was a problem fetching the topics from the DB";
      }
    })
    .catch((err)=>{
      console.log("error doing getTopics:",err)
    })
  }

  deleteTopic(topicId) {
    console.log("inside delete topic");
    this._httpService.deleteTopic(topicId)
    .then((data)=>{
      if(data.message == "Success"){
          this.getTopics();
      }
      else {
        this.errors = "There was a problem fetching the topics from the DB";
      }
    })
    .catch((err)=>{
      console.log("error doing getTopics:",err)
    })
  }

}
