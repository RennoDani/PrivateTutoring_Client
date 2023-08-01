import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ilesson } from 'src/app/_model/lesson.model';
import { Ilevel } from 'src/app/_model/level.model';
import { Itype } from 'src/app/_model/type.model';
import { LessonService } from 'src/app/_service/lesson.service';

@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrls: ['./view-lesson.component.css']
})
export class ViewLessonComponent implements OnInit{

  constructor(private lessonSrv: LessonService,
    private location: Location){  }
    
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


  onGet(){
    this.lessonSrv.getAllLesson().subscribe(response => {
      this.lessonList = response;
    })
  }

  onGetType(){
    this.lessonSrv.getType().subscribe(response => {
      this.typeList = response;
    })
  }

  onGetLevel(){
    this.lessonSrv.getLevel().subscribe(response => {
      this.levelList = response;
    })
  
  }
  onEdit() {
    this.displayLesson = false;
  }

  onBack(){
    this.location.back();
    this.displayLesson = true;
    this.onGet();
  }

  onClear(){
    this.searchLevel = "";
    this.searchType = "";
    this.searchText = "";
  }

}
