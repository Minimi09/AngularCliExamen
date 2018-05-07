import { Component, OnInit } from '@angular/core';
import { LoginGetService } from '../services/login.service';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  user : String;
  password : String;
  valor : Boolean;

  constructor(private _loginService:LoginGetService) { }

  ngOnInit() {
  }

  validateLogin()
  {
    this._loginService.checkLogin(this.user, this.password)
    .subscribe(
      value => {value ? alert('Bienvenido'): alert('Error')},
      error => {console.log("Error");}
    );
  }
}
