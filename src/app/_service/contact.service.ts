import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontact } from '../_model/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  getContact(): Observable<Icontact[]> {    
    return this.http.get<Icontact[]>(`${this.apiUrl}/Contact`);
  }

  addContact(contact: Icontact): Observable<any>{
        return this.http.post(`${this.apiUrl}/newContact`, contact);
  }

  //  deleteContact(id: any): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/Contact/delete/`+id, null);
//   }

}
