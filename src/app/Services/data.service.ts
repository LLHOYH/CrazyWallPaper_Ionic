import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];

  constructor() { }


  SetData(id, data){
this.data[id]=data;
  }


  GetData(id){
    return this.data[id];
  }
}
