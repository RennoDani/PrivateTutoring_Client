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

  addUser(user: Iuser): Observable<any> {
    //console.log('service add user');
    return this.http.post(`${this.apiUrl}/User`, user);
  }

  getUser(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${this.apiUrl}/User`);
  }

  getIdUser(id: any): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${this.apiUrl}/User/`+id);
  }

  editUser(user: Iuser): Observable<any> {
    return this.http.put(`${this.apiUrl}/User/edit/`, user);
  }

//  deleteUser(id: any): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/User/delete/`+id, null);
//   }

}
