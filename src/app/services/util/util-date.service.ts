import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilDateService {
  public pipe:DatePipe;

  constructor() { 
    this.pipe = new DatePipe('en-US'); 
  }

  dateTransform(date:Date, type:string){
    
    return this.pipe.transform(date, type)?.toString();
  }
  dateTransformForm(date:Date, type:string){
    
    return this.pipe.transform(date, type)?.toString().replace('/', '-').replace('/', '-');
  }
}
