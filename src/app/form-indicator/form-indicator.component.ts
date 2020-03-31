import { Component, OnInit, OnChanges,DoCheck } from '@angular/core';
import { ChipsStateService } from '../chips-state.service';
import {Router} from '@angular/router';
import {ChipData} from '../models/CHIPDATA'
import {completeFormMessage} from '../utilities/constants';
import {colors,appRoutes} from '../utilities/constants'
@Component({
  selector: 'app-form-indicator',
  templateUrl: './form-indicator.component.html',
  styleUrls: ['./form-indicator.component.scss']
})
export class FormIndicatorComponent implements OnInit,OnChanges,DoCheck{

ngDoCheck(){}
  ngOnChanges(){
    
  }
  
  constructor(private chipsState: ChipsStateService, private router:Router) { 
  }
  
  chips: Array<ChipData>;

  ngOnInit(): void {
    this.chipsState.actualChipState.subscribe(chipState => this.chips = chipState);
  }
  
  navigateToOtherForm(clickedChipIndex){
    let clikedChip = this.chips[clickedChipIndex];
    if(clikedChip.selected){
      switch(clickedChipIndex){
        case 0:
          this.router.navigate([appRoutes.home]);
          break;
        case 1:
          this.router.navigate([appRoutes.familyInfo]);
          break;
        case 2:
          this.router.navigate([appRoutes.academicInfo]);
      }
      
    }else{
      alert(completeFormMessage);
    }
    
  }

}
