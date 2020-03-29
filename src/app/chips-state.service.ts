import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChipsStateService {


  private chipsState = new BehaviorSubject<Array<Object>>([{
    color: "accent",
    selected: true,
    text:"Informacion Personal"
  },
  {
    color: "primary",
    selected: false,
    text:"Informacion Familiar"
  },
  {
    color: "primary",
    selected: false,
    text:"Registro Academico"
  }]);

  actualChipState = this.chipsState.asObservable();

  constructor() { }

  changeChipState(chipObject: Array<Object>){
    this.chipsState.next(chipObject);
  }
}
