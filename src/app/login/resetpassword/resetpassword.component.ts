import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from 'src/app/_model/login.model';
import { LoginService } from 'src/app/_service/login.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {


  constructor(private loginSrv: LoginService,
    private popupSrv: PopupService) { }

  resetPasswordForm: FormGroup;
  login: Ilogin;
  messagePopup: string = '';


  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      emailLoginReset: new FormControl(
        null,
        [Validators.required, Validators.email]
      )
    })
  }

  onResetPassword() {

    this.login = { email: this.resetPasswordForm.get('emailLoginReset').value };

    this.loginSrv.ResetPassword(this.login).subscribe(response => {

      console.log('reset password - response: ' + response.message);

      this.messagePopup = response.message;
      this.popupSrv.setMessage(this.messagePopup);

      if (response.success) {
        this.resetPasswordForm.reset();
      }
    });

    this.messagePopup = '';
  }



}
