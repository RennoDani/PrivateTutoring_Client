import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../_model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  addUser(user: Iuser) : Observable<any>{
    console.log('service add user');
    return this.http.post(`${this.apiUrl}/User`, user);
  }

}
