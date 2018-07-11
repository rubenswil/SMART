import { Component, OnInit } from '@angular/core';

// Service Imports
import { CompanyService } from '../../services/company.service';

// Class import
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companyList: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    return this.companyService.getCompanies().snapshotChanges()
    .subscribe(item => {
      this.companyList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.companyList.push(x as Company);
      })
    })
  }

}
