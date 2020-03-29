import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ChipData} from './models/CHIPDATA'
@Injectable({
  providedIn: 'root'
})
export class ChipsStateService {


  private chipsState = new BehaviorSubject<Array<ChipData>>([{
    color: "accent",
    selected: true,
    text:"Informacion Personal"
  },
  {
    color: "accent",
    selected: false,
    text:"Informacion Familiar"
  },
  {
    color: "accent",
    selected: false,
    text:"Registro Academico"
  }]);

  actualChipState = this.chipsState.asObservable();

  constructor() { }

  changeChipState(chipObject: Array<ChipData>){
    this.chipsState.next(chipObject);
  }
}
