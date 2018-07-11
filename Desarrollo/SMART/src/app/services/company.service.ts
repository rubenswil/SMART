import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

// Class Import

import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companyList:AngularFireList<any>;
  selectedCompany: Company = new Company();
  
  
  constructor(private firebase: AngularFireDatabase) {

  }

  getCompanies(){
    return this.companyList = this.firebase.list('Company');
  }

  insertCompany(company: Company){
    this.companyList.push({
      name: company.name,
      type: company.type,
      contact: company.contact,
      email: company.email,
      employees: company.employees,
      risk: company.risk,
      arl: company.arl,
      description: company.description
    });
  }




}
