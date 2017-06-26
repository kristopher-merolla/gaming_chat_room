import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  activeUser = ""; // null as default

  topic_id = ""; // topic id for this page! (comes from param in router link)
  private sub: any;

  errors = null;
  topics = null;

  constructor(private _httpService: HttpService, private route:ActivatedRoute, private _router: Router, private _cookieService:CookieService) { }

  ngOnInit() {
    if(!this._cookieService.get('username')) { // catch a user trying to access dashboard without logging in!
      this._router.navigateByUrl("/login");
    }
    else {
      this.sub = this.route.params.subscribe(params => {
       this.topic_id = params['id']; // set topic_id to the params[id]
      });
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

  vote(optNum,topicId) {
    console.log(optNum);
    console.log(topicId);
    if(optNum==1){
      console.log("option 1 hit")
      this._httpService.vote1(topicId)
      .then((data)=> {
        console.log("came back from HTTP successfully vote1");
        this.getTopics();
      })
      .catch((err)=>{
        console.log("error doing getTopics:",err);
      })
    }
    else if(optNum==2){
      this._httpService.vote2(topicId)
      .then((data)=> {
        console.log("came back from HTTP successfully vote2");
        this.getTopics();
      })
      .catch((err)=>{
        console.log("error doing getTopics:",err);
      })
    }
    else if(optNum==3){
      this._httpService.vote3(topicId)
      .then((data)=> {
        console.log("came back from HTTP successfully vote3");
        this.getTopics();
      })
      .catch((err)=>{
        console.log("error doing getTopics:",err);
      })
    }
    else if(optNum==4){
      this._httpService.vote4(topicId)
      .then((data)=> {
        console.log("came back from HTTP successfully vote4");
        this.getTopics();
      })
      .catch((err)=>{
        console.log("error doing getTopics:",err);
      })
    }
    else {
      console.log("error somewhere in option select");
    }
    
  }

}
