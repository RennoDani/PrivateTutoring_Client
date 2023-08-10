import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ilevel } from 'src/app/_model/level.model';
import { Itype } from 'src/app/_model/type.model';
import { LessonService } from 'src/app/_service/lesson.service';
import { PopupService } from 'src/app/_service/popup.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {

  constructor(private lessonSrv: LessonService,
    private popupSrv: PopupService
  ) {

  }

  lessonForm: FormGroup;
  selectedFile: any = '';
  typeList: Itype[] = [];
  levelList: Ilevel[] = [];
  messagePopup: string = '';

  ngOnInit() {
    this.onGetType();
    this.onGetLevel();

    this.lessonForm = new FormGroup({
      titleLesson: new FormControl(
        null,
        Validators.required
      ),
      typeLesson: new FormControl(
        null,
        Validators.required
      ),
      levelLesson: new FormControl(
        null,
        Validators.required
      ),
      fileLesson: new FormControl(
        null,
        Validators.required
      )
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  onAddLesson() {

    const formData = new FormData();

    formData.append('title', this.lessonForm.get('titleLesson').value);
    formData.append('type', this.lessonForm.get('typeLesson').value);
    formData.append('level', this.lessonForm.get('levelLesson').value);
    formData.append('filepath', this.selectedFile);

    //    console.log('add lesson ',formData);

    this.lessonSrv.addLesson(formData).subscribe(response => {

      this.messagePopup = response.message;
      this.popupSrv.setMessage(response.message);

      if (response.success) {
        this.lessonForm.reset();
      }
      console.log(response.message);
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

}
