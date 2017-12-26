import { Component } from '@angular/core';
import { QuestionService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions: any[];

  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.getQuestions();
  }
}
