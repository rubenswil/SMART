import { Component, OnInit } from '@angular/core';

import { PollService } from '../../services/poll.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-pyme-questions',
  templateUrl: './pyme-questions.component.html',
  styleUrls: ['./pyme-questions.component.css']
})
export class PymeQuestionsComponent implements OnInit {

  questions1: AngularFireList<any>; 

  constructor(private firebase: AngularFireDatabase) { }

  questions: any[] = 
  [
    {
      "title": "Question 1",
      "content": "This is content 1"
    },
    {
      "title": "Question 2",
      "content": "This is content 2"
    },
    {
      "title": "Question 3",
      "content": "This is content 3"
    },
  ];

  ngOnInit() {
    // console.log(this.questions);
    console.log(this.firebase.list('Encuesta/0/Sector/0/Fase/0/Categoria/0'));
  }

}
