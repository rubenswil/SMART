import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service

import { FieldService } from '../../services/field.service';
import { ToastrService } from 'ngx-toastr';
// class import

import { Field } from '../../models/field';

@Component({
  selector: 'app-field-management',
  templateUrl: './field-management.component.html',
  styleUrls: ['./field-management.component.css']
})
export class FieldManagementComponent implements OnInit {

  constructor(private fieldService: FieldService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fieldService.getFields();
    this.resetForm();
  }

  onSubmit(fieldForm: NgForm){
    if(fieldForm.value.$key == null){
      this.fieldService.insertField(fieldForm.value);
      this.toastr.success("Sector Guardado");
      this.resetForm(fieldForm);
    }
    else{
      this.fieldService.updateField(fieldForm.value);
      this.toastr.success("Sector Modificado");
      this.resetForm(fieldForm);
    }
  }

  resetForm(fieldForm? : NgForm){
    if(fieldForm != null){
      fieldForm.reset();
      this.fieldService.selectedField = new Field();
    }
  }

}
