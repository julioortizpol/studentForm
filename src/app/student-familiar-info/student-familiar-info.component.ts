import { Component, OnInit } from '@angular/core';
import { ChipsStateService } from '../chips-state.service';
import {ChipData} from '../models/CHIPDATA'
@Component({
  selector: 'app-student-familiar-info',
  templateUrl: './student-familiar-info.component.html',
  styleUrls: ['./student-familiar-info.component.scss']
})
export class StudentFamiliarInfoComponent implements OnInit {

  constructor(private chipsState: ChipsStateService) { }

  ngOnInit(){
    this.chipsState.actualChipState.subscribe(chipState => this.chips = chipState);
  }
  chips: Array<ChipData>;

}
