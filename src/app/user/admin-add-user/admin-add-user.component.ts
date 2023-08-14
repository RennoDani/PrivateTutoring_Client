import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopupService } from 'src/app/_service/popup.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  userForm: FormGroup;
  messagePopup: string = '';

  constructor(private userSrv: UserService,
    private popupSrv: PopupService) { }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      nameUser: new FormControl(
        null,
        [Validators.required]
      ),
      emailUser: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      phoneUser: new FormControl(),
      dateBirthUser: new FormControl(),
      profileUser: new FormControl(
        'student',
        [Validators.required]
      )
    });
  }

  onAddUser() {
    //console.log('on Add user');

    this.userSrv.addUser(this.userForm.value).subscribe(response => {
      //console.log('return onAddUser ', response);

      //console.log('User successfully saved!');
      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);

      if (response.success) {
        this.userForm.reset();
      }      
    });

    this.messagePopup = '';
  }


}
