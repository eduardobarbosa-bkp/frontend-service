import { Injectable } from '@angular/core';
import {LoginComponent} from '../component/login/login.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JwtHelper} from '../util/jwt-helper';
import {ApiSettings} from '../api.settings';

@Injectable()
export class UserService {

  constructor(private router: Router, private http: HttpClient) { }

  private jwtHelper = new JwtHelper();

  private API_ENDPOINT = ApiSettings.JWT_SERVICE_ENDPOINT;

  get currentUser():Object{
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(): void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  login(data:any): void{

    this.http.post(this.API_ENDPOINT+'/login', data)
      .subscribe(
        res => {
        var token = res['token'];
        var decoded = this.jwtHelper.decodeToken(token);
        localStorage.setItem('currentUser', JSON.stringify({ token: token, name: decoded.sub }));
        this.router.navigate(['/home']);
      }
    );
  }

}
