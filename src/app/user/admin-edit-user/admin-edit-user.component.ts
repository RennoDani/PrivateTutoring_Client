import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ilogin } from 'src/app/_model/login.model';
import { Iuser } from 'src/app/_model/user.model';
import { LoginService } from 'src/app/_service/login.service';
import { PopupService } from 'src/app/_service/popup.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  editUserForm: FormGroup;
  user: Iuser[] = [];
  iduser: any;
  login: Ilogin;
  messagePopup: string = '';

  constructor(private route_edit: ActivatedRoute,
    private userSrv: UserService,
    private loginSrv: LoginService,
    private popupSrv: PopupService) { }

  ngOnInit(): void {

    this.route_edit.paramMap.subscribe(params => {
      this.iduser = params.get('id');
    })

    this.editUserForm = new FormGroup({
      idUser: new FormControl(),
      nameUser: new FormControl(),
      emailUser: new FormControl(),
      phoneUser: new FormControl(),
      dateBirthUser: new FormControl(),
      profileUser: new FormControl(),
      activeUser: new FormControl()
    });

    this.userSrv.getIdUser(this.iduser).subscribe(response => {

      this.user = response;

      console.log('edit user - response: ', response);

      this.editUserForm.patchValue({
        idUser: this.user[0].iduser,
        nameUser: this.user[0].name,
        emailUser: this.user[0].email,
        phoneUser: this.user[0].phone,
        dateBirthUser: this.user[0].datebirth,
        profileUser: this.user[0].profile,
        activeUser: this.user[0].active
      });

      //or
      // this.editUserForm.controls['idUser'].setValue(user.idUser);

      //this.editUserForm.get('idUser').disable();
      this.editUserForm.get('emailUser').disable();
      this.editUserForm.get('profileUser').disable();

    });
  }

  onEdituser() {
    //console.log('edit user - this.editUserForm.value: ', this.editUserForm.value);

    this.userSrv.editUser(this.editUserForm.value).subscribe(response => {
      //console.log('return onEdituser ', response);

      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);
    });

    this.messagePopup = '';
  };




  onResetPassword() {
    const login: Ilogin = {
      email: this.editUserForm.get('emailUser').value
    };

    // this.login.email = this.editUserForm.get('emailUser').value;

    this.loginSrv.ResetPassword(login).subscribe(response => {
      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);
    });

    this.messagePopup = '';

  }

}