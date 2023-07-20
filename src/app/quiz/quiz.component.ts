import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      questions: this.formBuilder.array([]),
    });
  }

  onSubmit() {
    // Process the quiz form data here
    console.log(this.quizForm.value);
  }

  // Helper method to get the 'questions' form array control
  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }
  
}
