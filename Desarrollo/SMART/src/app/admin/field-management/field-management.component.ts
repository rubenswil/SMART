import { Component, OnInit } from '@angular/core';
import { FieldService } from '../../services/field.service';

@Component({
  selector: 'app-field-management',
  templateUrl: './field-management.component.html',
  styleUrls: ['./field-management.component.css']
})
export class FieldManagementComponent implements OnInit {

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
  }

}
