import { Component, OnInit } from '@angular/core';
import { Field } from '../../models/field';
import { FieldService } from '../../services/field.service';

@Component({
  selector: 'app-pyme-fillup',
  templateUrl: './pyme-fillup.component.html',
  styleUrls: ['./pyme-fillup.component.css']
})
export class PymeFillupComponent implements OnInit {

  // fields :Field[];
  fieldsList: Field[]; 

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
    return this.fieldService.getFields().snapshotChanges().subscribe(item => {
      this.fieldsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.fieldsList.push(x as Field);
      })
    })
  }
  // ngOnInit() {

    


  //   this.fields = [
  //     {$key:"af", name:"sebas"},
  //     {$key:"af2", name:"sebas1"},
  //     {$key:"af3", name:"sebas2"},
  //   ]

  // }

}
