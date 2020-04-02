import { Component, OnInit } from '@angular/core';
//StudentUniversityDataComponent
@Component({
  selector: 'app-student-university-data',
  templateUrl: './student-university-data.component.html',
  styleUrls: ['./student-university-data.component.scss']
})
export class StudentUniversityDataComponent implements OnInit {

  constructor() { }
  value = 50;
  doneFloag:boolean = false;
  ngOnInit(): void {
    this.startTimer();
  }
  interval;
  timeLeft =5;
  startTimer() {
    this.interval = setInterval(() => {
      console.log(this.timeLeft);
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.value = 100;
        this.doneFloag = true;
        clearInterval(this.interval);
        //this.timeLeft = 60;
      }
    },1000)
  }



}
