import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from 'src/app/_model/login.model';
import { PopupComponent } from 'src/app/_popup/popup/popup.component';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  
  
  constructor(private loginSrv: LoginService) { }

  resetPasswordForm: FormGroup;
  login : Ilogin;
  

  ngOnInit() : void {
    this.resetPasswordForm = new FormGroup({
      emailLoginReset: new FormControl(
        null,
        [Validators.required, Validators.email]
      )
    })
  }

  onResetPassword(){    
    
    this.login = {email: this.resetPasswordForm.get('emailLoginReset').value};

    this.loginSrv.ResetPassword(this.login).subscribe(response => {
      console.log('return reset password ', response);

      this.openPopup(response.message);

      // if(response.sucess){}
    })
  }


  openPopup(message: string): void {
    // this.dialog.open(PopupComponent, {
    //   width: '400px',
    //   data: { message: message }
    // });
  }
  
}
