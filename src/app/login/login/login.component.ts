import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/_model/login.model';
import { PopupComponent } from 'src/app/_popup/popup/popup.component';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginSrv: LoginService,
    private authSrv: AuthenticationService,
    private router_login: Router
    ) { }

  logInForm: FormGroup;
  //login : Ilogin;


  ngOnInit(): void {
    this.logInForm = new FormGroup({
      emailLogin: new FormControl(
        //'edu@email.com',
        'admin@email.com',//null,
        [Validators.required, Validators.email]
      ),
      passwordLogin: new FormControl(
        //'HB4wBX',
        'QzP2nf',//null,
        [Validators.required]
      )
    });
  }


  onLogIn() {
    //console.log('on LogIn',this.logInForm.value);
    this.loginSrv.LogIn(this.logInForm.value).subscribe(response => {      
      
      if(response.success){
        console.log('Login successfully!');

        //console.log('login - response: ',response);

        //localStorage.setItem('token', response.token);
        this.authSrv.setToken(response.token);
        this.authSrv.setLoggedIn(response.isloggedIn);
        this.authSrv.setIdUser(response.iduser);
        this.authSrv.setNameUser(response.nameuser);
        this.authSrv.setProfileUser(response.profileuser);

        console.log(response.message);
        //this.openPopup(response.message);

        this.logInForm.reset();

        if(response.profileuser == 'admin'){
          this.router_login.navigate(['/dashboardAdmin']);
        }else if(response.profileuser == 'student'){
          this.router_login.navigate(['/dashboardStudent']);
        }else{
          console.log('This profile does not have a dashboard - please, contact the admin');
          this.router_login.navigate(['']);
        }
        

      }else{
        //console.log('Invalid Email or Password!');
        console.log(response.message);
        this.openPopup(response.message);
      }      
    });
  }


  openPopup(message: string): void {
    // this.dialog.open(PopupComponent, {
    //   width: '400px',
    //   data: { message: message }
    // });
  }

}
