import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  // declare and initialize a list with questions
  

  // const db = firebase.database();

  constructor(private firebase: AngularFireDatabase) { }

  getQuestions(){
    var top = this.firebase.list('Encuesta');
  }




}
