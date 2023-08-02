import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/_service/popup.service';


declare var window: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  message: string = '';
  formModal: any;

  constructor(
    private popupSrv: PopupService
  ) {
    //console.log('popup component - this.popupSrv.getMessage(): ', this.popupSrv.getMessage());
    this.message = this.popupSrv.getMessage();
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("messageModal")
    );

    this.openModal();
  }

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hide();
  }
}
