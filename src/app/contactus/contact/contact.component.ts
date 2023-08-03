import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/_service/contact.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactSrv: ContactService,
    private popupSrv: PopupService
  ) { }

  contactForm: FormGroup;
  messagePopup: string = '';

  ngOnInit() {

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

    this.contactSrv.addContact(this.contactForm.value).subscribe(response => {

      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);

      if (response.sucess) {
        //console.log('Contact successfully saved!');
        this.contactForm.reset();
      }
    });
  }


}
