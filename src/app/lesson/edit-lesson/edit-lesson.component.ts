import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ilesson } from 'src/app/_model/lesson.model';
import { Ilevel } from 'src/app/_model/level.model';
import { Itype } from 'src/app/_model/type.model';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { LessonService } from 'src/app/_service/lesson.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  profileUser: any = '';

  constructor(private route_edit: ActivatedRoute,
    private lessonSrv: LessonService,
    private authSrv: AuthenticationService,
    private popupSrv: PopupService) {
      this.profileUser = authSrv.getProfileUser();
    }

  lessonForm: FormGroup;
  typeList: Itype[] = [];
  levelList: Ilevel[] = [];
  selectedFile: any = '';
  idlesson: any;
  lesson: Ilesson[] = [];
  pdfUrl: string;
  messagePopup: string = '';

  ngOnInit() {
    this.onGetType();
    this.onGetLevel();

    this.route_edit.paramMap.subscribe(params => {
      this.idlesson = params.get('id');
    })

    this.lessonForm = new FormGroup({
      idLesson: new FormControl(),
      titleLesson: new FormControl(
        null,
        Validators.required),
      typeLesson: new FormControl(),
      dstypeLesson: new FormControl(),
      levelLesson: new FormControl(),
      dslevelLesson: new FormControl(),
      fileLesson: new FormControl(),
      displayFileName: new FormControl()
    });


    this.lessonSrv.getIdLesson(this.idlesson).subscribe(response => {

      this.lesson = response;

      //console.log('edit lessson - response: ', response);
      //console.log('filepath: ', this.lesson[0].filepath);

      this.lessonForm.patchValue({
        idLesson: this.lesson[0].idlesson,
        titleLesson: this.lesson[0].title,
        typeLesson: this.lesson[0].type,
        dstypeLesson: this.lesson[0].dstype,
        levelLesson: this.lesson[0].level,
        dslevelLesson: this.lesson[0].dslevel
        //,fileLesson: this.lesson[0].filepath
      });

      this.lessonForm.get('displayFileName').setValue(this.lesson[0].filepath.substring(10));

      this.onGetPDF();

    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onEditLesson() {
    const formData = new FormData();

    formData.append('idlesson', this.lessonForm.get('idLesson').value);
    formData.append('title', this.lessonForm.get('titleLesson').value);
    formData.append('type', this.lessonForm.get('typeLesson').value);
    formData.append('level', this.lessonForm.get('levelLesson').value);
    formData.append('filepath', this.selectedFile);

    this.lessonSrv.editLesson(formData).subscribe(response => {
      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);

      //console.log(response.message);
      //console.log('edit - this.selectedFile: ',this.selectedFile);

      this.lessonForm.get('displayFileName').setValue(this.selectedFile.name);

      this.onGetPDF();

    })

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

  onGetPDF() {
    const namepdfold = this.lesson[0].filepath.substring(10);
    //console.log('namepdfold: ', namepdfold);

    const namepdfnew = this.selectedFile.name;
    //console.log('namepdfnew: ', namepdfnew);

    const namepdf = namepdfnew !== null && namepdfnew !== undefined ? namepdfnew : namepdfold;
    //console.log('namepdf: ', namepdf);

    this.lessonSrv.getPDF(namepdf).subscribe(
      (data) => {
        const file = new Blob([data], { type: 'application/pdf' });
        this.pdfUrl = URL.createObjectURL(file);
      },
      (error) => {
        console.error('Erro ao obter o arquivo PDF do servidor:', error);
      }
    );
  }

}
