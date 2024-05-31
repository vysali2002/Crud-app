import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""
  constructor(private api:ApiService){}

  login(){
 if(this.email && this.password){
  this.api.loginAPI(this.email,this.password)
 }
  }

}
