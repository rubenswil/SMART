import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service';

import { Question } from '../../models/question';

@Component({
  selector: 'app-pyme-questions',
  templateUrl: './pyme-questions.component.html',
  styleUrls: ['./pyme-questions.component.css']
})
export class PymeQuestionsComponent implements OnInit {

  questionsList: Question[];

  constructor(private questionService: QuestionService) { }
  
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

  // define a key by grabbing the element payload and converting it to
  //  JSON to then get the element from the collection and assigning it 
  //  as an actual key element


}
