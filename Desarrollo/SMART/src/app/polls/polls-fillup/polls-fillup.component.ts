import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { QuestionService } from '../../services/question.service';
import { ToastrService } from 'ngx-toastr';
// class

import { Question } from '../../models/question';

@Component({
  selector: 'app-polls-fillup',
  templateUrl: './polls-fillup.component.html',
  styleUrls: ['./polls-fillup.component.css']
})
export class PollsFillupComponent implements OnInit {

  questionsList: Question[];

  constructor(private questionService: QuestionService, private toastr: ToastrService) { }

  

  ngOnInit() {
    this.questionService.getQuestions();
    this.resetForm();
  }

  resetForm(questionForm? : NgForm){
    if(questionForm != null){
      questionForm.reset();
      this.questionService.selectedQuestion = new Question();
    }
  }

  onSubmit(questionForm: NgForm){
    if(questionForm.value.$key == null){
      this.questionService.insertQuestion(questionForm.value);
      this.toastr.success("Sector Guardado");
      this.resetForm(questionForm);
    }
    else{
      // this.questionService.updateQuestion(questionForm.value);
      this.toastr.success("Sector Modificado");
      this.resetForm(questionForm);
    }
  }

  

}
