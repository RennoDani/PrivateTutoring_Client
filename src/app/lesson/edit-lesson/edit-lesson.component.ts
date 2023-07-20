import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ilesson } from 'src/app/_model/lesson.model';
import { Ilevel } from 'src/app/_model/level.model';
import { Itype } from 'src/app/_model/type.model';
import { LessonService } from 'src/app/_service/lesson.service';


import { ChangeDetectionStrategy } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {


  // constructor(private route_edit: ActivatedRoute,
  //   private lessonSrv: LessonService) {

  // }


  constructor(private route_edit: ActivatedRoute,
    private lessonSrv: LessonService,
    private pdfService: NgxExtendedPdfViewerService,
    private sanitizer: DomSanitizer) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
  }
  pdfData: SafeResourceUrl;


  lessonForm: FormGroup;
  typeList: Itype[] = [];
  levelList: Ilevel[] = [];
  selectedFile: any = '';
  idlesson: any;
  lesson: Ilesson[] = [];

  ngOnInit() {
    this.onGetType();
    this.onGetLevel();

    this.route_edit.paramMap.subscribe(params => {
      this.idlesson = params.get('id');
    })

    this.lessonForm = new FormGroup({
      idLesson: new FormControl(),
      titleLesson: new FormControl(),
      typeLesson: new FormControl(),
      levelLesson: new FormControl(),
      fileLesson: new FormControl()
    });


    this.lessonSrv.getIdLesson(this.idlesson).subscribe(response => {
      this.lesson = response;
      console.log('edit lessson - response: ', response);
    });

    // this.lessonForm.patchValue({
    //   idLesson : this.lesson[0].idlesson,
    //   titleLesson: this.lesson[0].title,
    //   typeLesson: this.lesson[0].type,
    //   levelLesson: this.lesson[0].level,
    //   fileLesson: this.lesson[0].filepath
    // });

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onEditLesson() {
    const formData = new FormData();

    formData.append('title', this.lessonForm.get('titleLesson').value);
    formData.append('type', this.lessonForm.get('typeLesson').value);
    formData.append('level', this.lessonForm.get('levelLesson').value);
    formData.append('filepath', this.selectedFile);


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
    
console.log('filepath: ',this.lesson[0].filepath);
    
      this.lessonSrv.getPDF(this.lesson[0].filepath).subscribe((data: ArrayBuffer) => {
      // Convert the response data to a Blob and create a URL for it
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Assign the URL to the variable to display the PDF in an iframe or embed it in a <object> element

      this.pdfData = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }

}
