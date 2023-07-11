import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {

  lessonForm: FormGroup;

  ngOnInit() {

    this.lessonForm = new FormGroup({
      typeLesson: new FormControl(
        null,
        Validators.required
      ),
      titleLesson: new FormControl(
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


  onAddLesson(){

  }

}
