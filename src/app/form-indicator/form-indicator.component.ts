import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-indicator',
  templateUrl: './form-indicator.component.html',
  styleUrls: ['./form-indicator.component.scss']
})
export class FormIndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chips = [{
    color: "primary",
    selected: true,
    text:"Informacion Personal"
  },
  {
    color: "primary",
    selected: true,
    text:"Informacion Familiar"
  },
  {
    color: "primary",
    selected: true,
    text:"Registro Academico"
  }]

}
