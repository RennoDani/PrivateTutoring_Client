import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/_popup/popup/popup.component';
import { ContactService } from 'src/app/_service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private contactSrv: ContactService,
    private dialog: MatDialog
  ) { }

  contactForm: FormGroup;


  ngOnInit() {

    //this.onGet();

    this.contactForm = new FormGroup({
      nameContact: new FormControl(
        null,
        [Validators.required]
      ),
      emailContact: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      phoneContact: new FormControl(),
      messageContact: new FormControl(
        null,
        [Validators.required]
      )
    });
  }
  

  onAdd() {
    //console.log('on Add Contact');
    //console.log(this.contactForm);

    this.contactSrv.addContact(this.contactForm.value).subscribe(response => {      

      console.log(response);

      this.openPopup(response.message);

      if (response.sucess) {
        console.log('Contact successfully saved!');
        this.contactForm.reset();
      }
    });
  }


  openPopup(message: string): void {
    this.dialog.open(PopupComponent, {
      width: '400px',
      data: { message: message }
    });
  }

}
