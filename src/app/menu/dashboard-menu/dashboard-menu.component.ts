import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent {

  profileUser: any = '';

  constructor(private authSrv: AuthenticationService ){
    this.profileUser = authSrv.getProfileUser();
  }
}
