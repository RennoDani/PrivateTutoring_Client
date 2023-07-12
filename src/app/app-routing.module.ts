import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landingPage/home/home.component';
import { AboutUsComponent } from './landingPage/about-us/about-us.component';
import { ContactComponent } from './contactus/contact/contact.component';
import { AdminViewUserComponent } from './user/admin-view-user/admin-view-user.component';
import { LoginComponent } from './login/login/login.component';
import { AdminAddUserComponent } from './user/admin-add-user/admin-add-user.component';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';
import { ViewerPdfComponent } from './viewer-pdf/viewer-pdf.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { AdminEditUserComponent } from './user/admin-edit-user/admin-edit-user.component';
import { AddLessonComponent } from './lesson/add-lesson/add-lesson.component';
import { EditLessonComponent } from './lesson/edit-lesson/edit-lesson.component';
import { ViewLessonComponent } from './lesson/view-lesson/view-lesson.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'aboutus', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'dashboardAdmin', component: AdminDashboardComponent,children: [   
    { path: 'user', component: AdminAddUserComponent },
    { path: 'viewuser', component: AdminViewUserComponent,children:[
      { path: ':id', component: AdminEditUserComponent },
    ] },
    
    { path: 'lesson', component: AddLessonComponent },
    { path: 'viewlesson', component: ViewLessonComponent },
    { path: 'editlesson', component: EditLessonComponent },

   ] },
  



  { path: 'viewerpdf', component: ViewerPdfComponent },

  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },


  { path: '**', redirectTo: '' } // default route 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
