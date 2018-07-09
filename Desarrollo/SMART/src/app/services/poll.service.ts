import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  questions: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  
  getQuestions(){
    return this.questions = this.firebase.list('fields');
  }


}
