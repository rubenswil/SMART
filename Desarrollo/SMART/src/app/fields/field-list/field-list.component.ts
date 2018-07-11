import { Component, OnInit } from '@angular/core';

// Service

import { FieldService } from '../../services/field.service';
import { ToastrService } from 'ngx-toastr';
// class

import { Field } from '../../models/field';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {

  fieldsList: Field[]; 

  constructor(private fieldService: FieldService, private toastr: ToastrService) { }

  ngOnInit() {
    return this.fieldService.getFields().snapshotChanges()
    .subscribe(item => {
      this.fieldsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.fieldsList.push(x as Field);
      })
    })
  }

  onEdit(field: Field){
    this.fieldService.selectedField = Object.assign({}, field);
    this.toastr.success("Campo guardado");
  }

  onDelete($key: string){
    this.fieldService.deleteField($key);
    this.toastr.success("Campo eliminado");
  }


}
