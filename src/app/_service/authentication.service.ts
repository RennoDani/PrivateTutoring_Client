import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  
  idUser: any = '';
  nameUser: any = '';
  profileUser: any = '';
  isLoggedIn: boolean = false;

  //Authentication
  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  //Authentication logOut
  removeToken(): void {
    localStorage.removeItem('token');
  }


  //Login
  getLoggedIn(): boolean{
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
 

  //User Info
  getIdUser(): string{
    return this.idUser;
  }

  setIdUser(id: string): void{
    this.idUser = id;
  }

  getNameUser(): string{
    return this.nameUser;
  }

  setNameUser(name: string): void{
    this.nameUser = name;
  }

  getProfileUser(): string{
    return this.profileUser;
  }

  setProfileUser(profile: string): void{
    this.profileUser = profile;
  }




  // isAuthenticated(): boolean {
  //   const token = this.getToken();
  //   // Verificar se o token é válido (por exemplo, não expirou)
  //   return !!token;
  // }

}
