import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ilesson } from 'src/app/_model/lesson.model';
import { Ilevel } from 'src/app/_model/level.model';
import { Itype } from 'src/app/_model/type.model';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { LessonService } from 'src/app/_service/lesson.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrls: ['./view-lesson.component.css']
})
export class ViewLessonComponent implements OnInit {

  profileUser: any = '';
  idUser: any = '';

  constructor(
    private lessonSrv: LessonService,
    private authSrv: AuthenticationService,
    private router: Router,
    private location: Location,
    private popupSrv: PopupService) 
    {
      this.profileUser = authSrv.getProfileUser();
      this.idUser = authSrv.getIdUser();

      //console.log('view lesson - constructor - profileuser: ', this.profileUser);
      //console.log('view lesson - constructor - idUser: ', this.idUser);
    }

  displayLesson: boolean = true;
  displayStudent: boolean = false;

  lessonList: Ilesson[] = [];
  typeList: Itype[] = [];
  levelList: Ilevel[] = [];

  searchText: any = '';
  searchType: any = '';
  searchLevel: any = '';
  //searchStudent: any = '';

  messagePopup: string = '';

  ngOnInit(): void {
    this.onGet();
    this.onGetType();
    this.onGetLevel();

    this.displayLesson = true;
  }


  onGet() {
    if (this.profileUser == 'admin') {
      this.lessonSrv.getAllLesson().subscribe(response => {
        this.lessonList = response;
      })
    }else if (this.profileUser == 'student') {
      this.lessonSrv.getAllUserLesson(this.idUser).subscribe(response => {
        this.lessonList = response;
      })
    }else{
      console.log('This user cannot see lessons');
      this.router.navigate(['']);
    }
  }

  onGetType() {
    this.lessonSrv.getType().subscribe(response => {
      this.typeList = response;
    })
  }

  onGetLevel() {
    this.lessonSrv.getLevel().subscribe(response => {
      this.levelList = response;
    })

  }

  onDelete(id: any, namefile: any){
    this.lessonSrv.delLesson(id, namefile.substring(10)).subscribe(response => {
      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);

    });
    this.messagePopup = '';
    this.onGet();
  }

  onEdit() {
    this.displayLesson = false;
    this.displayStudent = false;
  }

  onAddStudentLesson(){
    this.displayLesson = false;
    this.displayStudent = true;
    //console.log('onAddStudentLesson() - this.displayStudent: ',this.displayStudent);
  }

  onBack() {
    this.location.back();
    this.displayLesson = true;
    this.displayStudent = false;
    this.onGet();
  }

  onClear() {
    this.searchLevel = "";
    this.searchType = "";
    this.searchText = "";
  }
  
  //Pagination
  pageSize = 8; // Itens per page
  currentPage = 1; // current page

  prevPage() {
    if (this.currentPage > 1) {      
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.lessonList.length / this.pageSize)) {
      this.currentPage++;
    }
  }

}
