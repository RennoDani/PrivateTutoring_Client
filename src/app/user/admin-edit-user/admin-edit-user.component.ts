import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/_model/user.model';
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

  constructor(private route_edit: ActivatedRoute, 
    private router: Router,
    private userSrv: UserService) { }

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
        activeUser: 'yes'
      });

      //or
      // this.editUserForm.controls['idUser'].setValue(user.idUser);


    });
  }

  //const selectedOption = this.editUserForm.get('activeUser').value;
  //selectOptionActive = this.editUserForm.get('activeUser').value;



  //onEdit(user: Iuser){
  onEdituser() {
    console.log('edit user - this.editUserForm.value: ', this.editUserForm.value);

    this.userSrv.editUser(this.editUserForm.value).subscribe(response => {
      //console.log('User successfully saved!');

      console.log('return onEdituser ', response);
      console.log(response.message);
    });

    

  };

  onBack(){
    this.router.navigate['viewuser'];
  }

}