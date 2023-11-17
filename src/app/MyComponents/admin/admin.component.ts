import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  chart: any;
	
  chartOptions = {
    title:{
      text: "Data of Constituencies"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: ""
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###",
      dataPoints: [
        { label: "Jhalrapatan", y: 98 },
        { label: "Dag", y: 56 },
        { label: "Manoharthana", y: 74 },
        { label: "Khanpur", y: 38 }
      ]
    }]
  }
}
