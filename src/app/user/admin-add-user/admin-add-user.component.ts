import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userSrv: UserService) { }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      nameUser: new FormControl(),
      emailUser: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      phoneUser: new FormControl(),
      dateBirthUser: new FormControl(),
      profileUser: new FormControl()
    });
  }

  onAddUser() {
    //console.log('on Add user');

    this.userSrv.addUser(this.userForm.value).subscribe(response => {
      //console.log('User successfully saved!');

      console.log('return onAddUser ', response);

      if (response.sucess) {
        this.userForm.reset();
      }
      console.log(response.message);
    });
  }


}
