import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ilesson } from 'src/app/_model/lesson.model';
import { Ilevel } from 'src/app/_model/level.model';
import { Itype } from 'src/app/_model/type.model';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { LessonService } from 'src/app/_service/lesson.service';

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
    private location: Location) 
    {
      this.profileUser = authSrv.getProfileUser();
      this.idUser = authSrv.getIdUser();

      //console.log('view lesson - constructor - profileuser: ', this.profileUser);
      //console.log('view lesson - constructor - idUser: ', this.idUser);
    }

  displayLesson: boolean = true;

  lessonList: Ilesson[] = [];
  typeList: Itype[] = [];
  levelList: Ilevel[] = [];

  searchText: any = '';
  searchType: any = '';
  searchLevel: any = '';
  //searchStudent: any = '';

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
  onEdit() {
    this.displayLesson = false;
  }

  onBack() {
    this.location.back();
    this.displayLesson = true;
    this.onGet();
  }

  onClear() {
    this.searchLevel = "";
    this.searchType = "";
    this.searchText = "";
  }

}
