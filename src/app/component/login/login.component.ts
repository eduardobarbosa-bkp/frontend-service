import { Component, ViewChild, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  private loginForm: NgForm;

  hide = true;


  constructor(public userService: UserService) { }

  ngOnInit() {

  }


  doLogin():void {
    if(this.loginForm.valid) {
      this.userService.login(this.loginForm.value);
    }
  }

}
