import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit{

  editUserForm: FormGroup;

  ngOnInit() {
    this.editUserForm = new FormGroup({
      activeUser: new FormControl
    });
  }

  //const selectedOption = this.editUserForm.get('activeUser').value;
  //selectOptionActive = this.editUserForm.get('activeUser').value;



onSave(){

}


}
