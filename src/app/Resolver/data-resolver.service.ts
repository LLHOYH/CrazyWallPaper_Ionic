import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(private dataSvc:DataService) { }

  resolve(route:ActivatedRouteSnapshot){
    let id= route.paramMap.get('id');
    return this.dataSvc.GetData(id);
  }
}
