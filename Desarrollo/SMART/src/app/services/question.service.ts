import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  questionsList: AngularFireList<any>;
  selectedQuestion: Question = new Question();

  constructor(private firebase: AngularFireDatabase) { }

  getQuestions(){
    return this.questionsList = this.firebase.list('Questions');
  }

  insertQuestion(question: Question){
    this.questionsList.push({
      type: question.type,
      standard: question.standard,
      score: question.score,
      item: question.item
    });
  }

  // updateField(question: Question){
  //   this.questionsList.update(question.$key, {
  //     'name': field.name
  //   });
  // }

  deleteQuestion($key: string){
    this.questionsList.remove($key);
  }


}
