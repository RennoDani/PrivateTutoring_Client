import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilesson } from '../_model/lesson.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  addLesson(lesson: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/Lesson`, lesson);
  }

}
