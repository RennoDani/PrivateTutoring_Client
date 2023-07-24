import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // divOptionLanguageLearn: string = '';

  // showDivLanguageLearn(language : string){
  //   this.divOptionLanguageLearn = language;
  // }

  t_path_image_banner1: string = '../assets/images/banner1.jpg';
  t_path_image_banner2: string = '../assets/images/banner2.jpg';
  t_path_image_banner3: string = '../assets/images/banner3.jpg';

  t_path_image_work1: string = '../assets/images/goal.jpg';
  t_path_image_work2: string = '../assets/images/scratch.jpg';
  t_path_image_work3: string = '../assets/images/improving.jpg';

  t1: string = 'Learn and improve your English!';

  t2: string = 'Online sessions.';// with a native Canadian teacher.';

  t3: string = 'You can choose the best time in your time zone.';


  //how works
  t4: string = 'How lessons work:';

  t5: string = 'Create a plan to achieve a goal, including grammar sessions.';

  t6: string = 'From scratch, teaching since a fundamental base.';

  t7: string = 'Improving a specific skill.';

  //
  t8: string = 'Tell me what you need and I can help you in your journey';

  t9: string = 'You can improve your speaking and listening with our exclusive english club, only students can participate and help with other.';

  t10: string = 'If you are interested, send me a message and I will answer your questions related to classes.';


  //Skills
  t11: string = 'Skills:';

  t12: string = 'Speaking';
  t13: string = 'Listening';
  t14: string = 'Writing';
  t15: string = 'Reading';


  //Plan
  t16: string = 'Choose your favorite plan'
  t161: string = 'All lessons meeting are individual.'
  t162: string = 'Duration is 1 hour.';

  t17: string = '1 lesson';

  t18: string = '4 lessons';

  t19: string = '12 lessons';

  t20: string = 'Live speaking and activities'
  t21: string = 'Follow-up within the platform';
  t22: string = 'Homework (optional)';
  t23: string = 'Custom material';
  t24: string = 'Ongoing evaluation';



}
