import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// Classes
import { Field } from '../../models/field';
import { Company } from '../../models/company';

// Services
import { FieldService } from '../../services/field.service';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-pyme-fillup',
  templateUrl: './pyme-fillup.component.html',
  styleUrls: ['./pyme-fillup.component.css']
})
export class PymeFillupComponent implements OnInit {

  // fields :Field[];
  fieldsList: Field[]; 

  constructor(
    private fieldService: FieldService, 
    private companyService: CompanyService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    return this.fieldService.getFields().snapshotChanges().subscribe(item => {
      this.fieldsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.fieldsList.push(x as Field);
      })
    })
  }
  

  onSubmit(companyForm: NgForm){
      this.companyService.insertCompany(companyForm.value);
      this.toastr.success("Pyme Guardada");
      this.resetForm(companyForm);
    }
    

  resetForm(companyForm? : NgForm){
    if(companyForm != null){
      companyForm.reset();
      this.companyService.selectedCompany = new Company();
    }
  }

}
