import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  nameLogin: any;
  profileLogin: any;
  isLoggedIn: boolean = false;
  
  constructor(
    private authSrv: AuthenticationService,
    private router: Router
  ) {

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.nameLogin = this.authSrv.getNameUser();
        this.profileLogin = this.authSrv.getProfileUser();
        this.isLoggedIn = this.authSrv.getLoggedIn();
    
        //console.log('main menu - constructor - this.isLoggedIn: ',this.isLoggedIn);
        // console.log('main menu - name login: ', this.nameLogin);
        // console.log('main menu - profile login: ', this.profileLogin);
      }
    })
  }

  ngOnInit(): void {

  }

  onLogOut(){

    this.authSrv.removeToken();
    this.authSrv.setLoggedIn(false);
    this.authSrv.setNameUser('');
    this.authSrv.setProfileUser('');
    this.authSrv.setIdUser('');    
    
    this.router.navigate(['']);

  }

}
