import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User, regUser } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registeredUser:User = new User();

  loggedUser:regUser = new regUser()

  constructor(private router:Router, private _service:UserService) { }

  ngOnInit() {
    console.log(this._service);
    
  }

  signUp(){
    this.router.navigate(['/signup']);
  }

  login(){
    //console.log(this.loggedUser)
    this._service.loginUser(this.loggedUser);
  }

}