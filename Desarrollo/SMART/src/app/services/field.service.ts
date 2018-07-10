import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//class import

import { Field } from '../models/field';

@Injectable({
  providedIn: 'root'
})

export class FieldService {

  fieldsList: AngularFireList<any>; 
  selectedField: Field = new Field();
  
  constructor(private firebase: AngularFireDatabase) { }


  getFields(){
    return this.fieldsList = this.firebase.list('fields');
  }
  
  insertField(field: Field){
    this.fieldsList.push({
      name: field.name
    });
  }

  updateField(field: Field){
    this.fieldsList.update(field.$key, {
      'name': field.name
    });
  }

  deleteField($key: string){
    this.fieldsList.remove($key);
  }




}
