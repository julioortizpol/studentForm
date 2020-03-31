import { Component, OnInit } from '@angular/core';
import { ChipsStateService } from './chips-state.service';
import {ChipData} from './models/CHIPDATA'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private chipsState: ChipsStateService){
  }
  ngOnInit(){
    this.chipsState.actualChipState.subscribe(chipState => this.chips = chipState);
  }
  chips: Array<ChipData>;
 appName = "Proceso de matriculación";
 acticeElevation=true;
}
