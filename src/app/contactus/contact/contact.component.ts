import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/_service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor (private ContactSrv: ContactService){}

  contactForm: FormGroup;


  ngOnInit() {

    //this.onGet();

    this.contactForm = new FormGroup({
      nameContact: new FormControl(),
      emailContact: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      phoneContact: new FormControl(),
      messageContact: new FormControl()
    });

  }


  onGet() {
    //console.log(this.contactForm);
    //this.contactForm.reset();

    console.log('angular 1 - get');

    // this.ContactSrv.getContact().subscribe(response => {
    //   console.log('angular 2 - get');
    //   //console.log(response);
    //   this.contactList = response;
    // });
  }

  onAdd() {
    //console.log(this.contactForm);
    //this.contactForm.reset();

    //console.log('angular 1 - add');
    //console.log(this.contactForm.value);

    this.ContactSrv.addContact(this.contactForm.value).subscribe(response => {
      //console.log('angular 2 - add');     

      console.log('Contact successfully saved!');
      this.contactForm.reset();

      // if(response){
      //   console.log('dentro if response');
      //   this.contactForm.reset();
      // }


    });


  }


}
