import { Component, OnInit } from '@angular/core';
import { ChipsStateService } from '../chips-state.service'
@Component({
  selector: 'app-form-indicator',
  templateUrl: './form-indicator.component.html',
  styleUrls: ['./form-indicator.component.scss']
})
export class FormIndicatorComponent implements OnInit {
  chips: Array<Object>;
  constructor(private chipsState: ChipsStateService) { }

  ngOnInit(): void {
    this.chipsState.actualChipState.subscribe(chipState => this.chips = chipState);
  }
  

}
