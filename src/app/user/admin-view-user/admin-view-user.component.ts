import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/_model/user.model';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit {

  constructor(private userSrv: UserService,
    private location: Location) { }

  displayUsers: boolean = true;

  userList: Iuser[] = [];
  searchText: any = '';

  ngOnInit(): void {
    this.displayUsers = true;
    this.onGet();
  }

  onGet() {
    this.userSrv.getUser().subscribe(response => {
      this.userList = response;
    })
  }

  onEdit() {
    this.displayUsers = false;
  }

  onBack() {
    this.location.back();
    this.displayUsers = true;
    this.onGet();
  }

  onClear() {
    this.searchText = "";
  }

  //Pagination
  pageSize = 6; 
  currentPage = 1; 

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.userList.length / this.pageSize)) {
      this.currentPage++;
    }
  }

}
