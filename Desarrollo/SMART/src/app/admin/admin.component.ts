import { Component, OnInit } from '@angular/core';
import { FieldService } from '../services/field.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
  }

}
