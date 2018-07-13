import { Component, OnInit } from '@angular/core';

// Service

import { QuestionService } from '../../services/question.service';
import { ToastrService } from 'ngx-toastr';
// class

import { Question } from '../../models/question';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.css']
})
export class PollsListComponent implements OnInit {

  questionsList: Question[]; 

  constructor(private questionService: QuestionService, private toastr: ToastrService) { }

  ngOnInit() {
    return this.questionService.getQuestions().snapshotChanges()
    .subscribe(item => {
      this.questionsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.questionsList.push(x as Question);
      })
    })
  }

  onEdit(question: Question){
    this.questionService.selectedQuestion = Object.assign({}, question);
    // this.toastr.success("Campo guardado");
  }

  onDelete($key: string){
    this.questionService.deleteQuestion($key);
    this.toastr.success("Pregunta eliminada");
  }

}
