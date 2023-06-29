import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../_model/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  LogIn(login: Ilogin): Observable<any>{
    return this.http.post(`${this.apiUrl}/postLogIn`, login);
  }

  ResetPassword(login: Ilogin): Observable<any>{
    return this.http.post(`${this.apiUrl}/postResetPassword`, login);
  }
}
