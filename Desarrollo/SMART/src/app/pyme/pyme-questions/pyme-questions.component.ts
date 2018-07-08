import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyme-questions',
  templateUrl: './pyme-questions.component.html',
  styleUrls: ['./pyme-questions.component.css']
})
export class PymeQuestionsComponent implements OnInit {

  constructor() { }

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
  }

}
