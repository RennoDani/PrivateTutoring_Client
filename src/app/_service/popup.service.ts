import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private message: string = '';

  constructor() { }

  getMessage(): string {
    //console.log('popup service - get message - this.message: ',this.message);
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
    //console.log('popup service - set message - this.message: ',this.message);
  }

}
