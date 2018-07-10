import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionsList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getQuestions(){
    return this.questionsList = this.firebase.list('Questions');
  }


}
