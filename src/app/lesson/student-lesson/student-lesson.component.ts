import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IlessonUser } from 'src/app/_model/lessonUser.model';
import { LessonService } from 'src/app/_service/lesson.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-student-lesson',
  templateUrl: './student-lesson.component.html',
  styleUrls: ['./student-lesson.component.css']
})
export class StudentLessonComponent implements OnInit{

  idlesson: any = '';
  title: any = '';
  listStudents: IlessonUser[] = [];
  listOtherStudents: IlessonUser[] = [];
  lessonUser: IlessonUser;
  iduserSelected: any = '';
  messagePopup: string = '';


  constructor(private srvLesson: LessonService,
              private route: ActivatedRoute,
              private popupSrv: PopupService){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.idlesson = params.get('idlesson');
      this.title = params.get('title');
    });

    //console.log('student lesson - idlesson: ',this.idlesson);
    //console.log('student lesson - title: ',this.title);

    this.onGetStudents(this.idlesson);
    this.onGetOtherStudents(this.idlesson);
  }


  onAddStudent(){
    this.lessonUser = ({ idlesson: this.idlesson, iduser: this.iduserSelected });

    //console.log('student lesson - onAddStudent - lessonUser: ', this.lessonUser);

    this.srvLesson.addLessonStudent(this.lessonUser).subscribe(response => {
      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);
    });

    this.messagePopup = '';
    this.iduserSelected = '';
    this.onGetStudents(this.idlesson);
    this.onGetOtherStudents(this.idlesson);
  }


  onDelStudent(iduser: any){
    this.lessonUser = ({ idlesson: this.idlesson, iduser: iduser });
    
    //console.log('student lesson - onDelStudent - lessonUser: ', this.lessonUser);

    this.srvLesson.delLessonStudent(this.lessonUser).subscribe(response => {
      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);
    });

    this.messagePopup = '';
    this.iduserSelected = '';
    this.onGetStudents(this.idlesson);
    this.onGetOtherStudents(this.idlesson);
  }


  onGetStudents(idlesson: any){
    this.srvLesson.getAllStudentbyLesson(idlesson).subscribe(response => {
      this.listStudents = response;
      //console.log('student lesson - onGetStudents: ',this.listStudents);
    })
  }

  onGetOtherStudents(idlesson: any){
    this.srvLesson.getOtherStudentbyLesson(idlesson).subscribe(response => {
      this.listOtherStudents = response;
      //console.log('student lesson - onGetOtherStudents: ',this.listOtherStudents);
    })
  }
}
