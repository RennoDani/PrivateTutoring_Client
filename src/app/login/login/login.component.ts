import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ilogin } from 'src/app/_model/login.model';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginSrv: LoginService) { }

  logInForm: FormGroup;
  login : Ilogin;


  ngOnInit(): void {
    this.logInForm = new FormGroup({
      emailLogin: new FormControl(),
      passwordLogin: new FormControl()
    });
  }


  onLogIn() {
    //console.log('on LogIn');
    this.loginSrv.LogIn(this.logInForm.value).subscribe(response => {
      
      console.log('return Login ',response);      

      if(response.login){
        //console.log('Login successfully!');

        this.login = response;

        console.log(response.message);

        this.logInForm.reset();

      }else{
        //console.log('Invalid Email or Password!');
        console.log(response.message);
      }      
    });
  }


}
