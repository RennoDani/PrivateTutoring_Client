import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() questionGroup: FormGroup;
  @Input() index: number;

  constructor(private formBuilder: FormBuilder) {}

  addAnswer() {
    const answers = this.questionGroup.get('answers') as FormArray;
    answers.push(this.createAnswer());
  }

  private createAnswer() {
    return this.formBuilder.group({
      text: ['', Validators.required],
      correct: false
    });
  }

  get answers() {
    return this.questionGroup.get('answers') as FormArray;
  }
}
