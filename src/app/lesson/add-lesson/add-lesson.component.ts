import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ilesson } from 'src/app/_model/lesson.model';
import { LessonService } from 'src/app/_service/lesson.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {

  constructor(private lessonSrv: LessonService){

  }

  lessonForm: FormGroup;
  selectedFile: any = '';
  lesson : Ilesson;

  ngOnInit() {

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

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }


  onAddLesson(){
    // this.lesson = {
    //   title: this.lessonForm.get('titleLesson').value,
    //   type: this.lessonForm.get('typeLesson').value,
    //   level: this.lessonForm.get('levelLesson').value,
    //   filepath: this.selectedFile
    // };

    const formData = new FormData();

    formData.append('title',this.lessonForm.get('titleLesson').value);
    formData.append('type',this.lessonForm.get('typeLesson').value);
    formData.append('level',this.lessonForm.get('levelLesson').value);
    formData.append('filepath',this.selectedFile);

    console.log('add lesson ',formData);

    this.lessonSrv.addLesson(formData).subscribe(response => {
      if (response.sucess) {
        this.lessonForm.reset();
      }
      console.log(response.message);
    })

  }



}
