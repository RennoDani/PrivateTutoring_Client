import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './landingPage/home/home.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { AdminMenuComponent } from './menu/admin-menu/admin-menu.component';
import { StudentMenuComponent } from './menu/student-menu/student-menu.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { AboutUsComponent } from './landingPage/about-us/about-us.component';
import { ContactComponent } from './contactus/contact/contact.component';
import { AdminAddUserComponent } from './user/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './user/admin-edit-user/admin-edit-user.component';
import { AdminNotesComponent } from './classNotes/admin-notes/admin-notes.component';
import { AdminNotesViewComponent } from './classNotes/admin-notes-view/admin-notes-view.component';
import { AdminNotesAddComponent } from './classNotes/admin-notes-add/admin-notes-add.component';
import { AdminNotesEditComponent } from './classNotes/admin-notes-edit/admin-notes-edit.component';
import { AdminViewUserComponent } from './user/admin-view-user/admin-view-user.component';
import { LoginComponent } from './login/login/login.component';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';
import { ViewerPdfComponent } from './viewer-pdf/viewer-pdf.component';
import { AddLessonComponent } from './lesson/add-lesson/add-lesson.component';
import { EditLessonComponent } from './lesson/edit-lesson/edit-lesson.component';
import { ViewLessonComponent } from './lesson/view-lesson/view-lesson.component';
import { AuthenticationService } from './_service/authentication.service';
import { AuthInterceptorService } from './_service/auth-interceptor.service';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { AnswerComponent } from './quiz/answer/answer.component';
import { SearchPipe } from './_pipe/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './_popup/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MainMenuComponent,
    AdminMenuComponent,
    StudentMenuComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    AboutUsComponent,
    ContactComponent,    
    AdminAddUserComponent,
    AdminEditUserComponent,
    AdminNotesComponent,
    AdminNotesViewComponent,
    AdminNotesAddComponent,
    AdminNotesEditComponent,
    AdminViewUserComponent,
    LoginComponent,
    ResetpasswordComponent,
    ViewerPdfComponent,
    AddLessonComponent,
    EditLessonComponent,
    ViewLessonComponent,
    QuizComponent,
    QuestionComponent,
    AnswerComponent,
    SearchPipe,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [
    AuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
