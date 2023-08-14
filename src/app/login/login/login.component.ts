import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { LoginService } from 'src/app/_service/login.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginSrv: LoginService,
    private authSrv: AuthenticationService,
    private router_login: Router,
    private popupSrv: PopupService
    ) { }

  logInForm: FormGroup;
  messagePopup: string = '';


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

      this.messagePopup = response.message;
      
      if(response.success){
        this.authSrv.setToken(response.token);
        this.authSrv.setLoggedIn(response.isloggedIn);
        this.authSrv.setIdUser(response.iduser);
        this.authSrv.setNameUser(response.nameuser);
        this.authSrv.setProfileUser(response.profileuser);

        //console.log('Login successfully!');
        console.log(response.message);
        this.popupSrv.setMessage(this.messagePopup);

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
        this.popupSrv.setMessage(this.messagePopup);
      }      
    });

    this.messagePopup = '';
  }

}
