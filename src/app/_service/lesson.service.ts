import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilesson } from '../_model/lesson.model';
import { Observable } from 'rxjs';
import { Itype } from '../_model/type.model';
import { Ilevel } from '../_model/level.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient,
    private authSrv: AuthenticationService) { }

  private apiUrl = 'http://localhost:3000';

  addLesson(lesson: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Lesson`, lesson);
  }

  editLesson(lesson: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Lesson`, lesson);
  }

  getAllLesson(): Observable<Ilesson[]> {
    return this.http.get<Ilesson[]>(`${this.apiUrl}/Lesson`);
  }

  getIdLesson(id: any): Observable<Ilesson[]> {
    return this.http.get<Ilesson[]>(`${this.apiUrl}/Lesson/` + id);
  }

  getType(): Observable<Itype[]> {
    return this.http.get<Itype[]>(`${this.apiUrl}/LessonType`);
  }

  getLevel(): Observable<Ilevel[]> {
    return this.http.get<Ilevel[]>(`${this.apiUrl}/LessonLevel`);
  }



  getPDF(namepdf: any) {

    const serverUrl = `${this.apiUrl}/LessonPDF/` + namepdf; // Coloque o URL do servidor Node.js aqui
    return this.http.get(serverUrl, { responseType: 'arraybuffer' })

    //return this.http.get(`${this.apiUrl}/`+filepath, { responseType: 'arraybuffer' });      
  }

}
