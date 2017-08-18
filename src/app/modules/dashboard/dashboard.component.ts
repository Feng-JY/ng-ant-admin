import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'app/share/tools';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  charOption: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.charOption = Chart.setBarOption();
    }, 0);
  } 

}
