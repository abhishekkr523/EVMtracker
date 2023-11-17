import { Component, OnInit } from '@angular/core';
import data from '../../../assets/election.votersVery.json';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminVoterDetailsComponent } from '../admin-voter-details/admin-voter-details.component';
import axios from 'axios';

// import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-admin-voters',
  templateUrl: './admin-voters.component.html',
  styleUrls: ['./admin-voters.component.scss']
})
export class AdminVotersComponent implements OnInit {


  chart: any;

  chartOptions = {
    title: {
      text: "Data of Teams"
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
        { label: "Home Voting 01", y: 15 },
        { label: "Home Voting 44", y: 20 },
        { label: "Home Voting 13", y: 24 },
        { label: "Home Voting 22", y: 29 }
      ]
    }]
  }
  selectedDate: string = '';
  selectedTeam: string = '';
  selectedConstituency: string = '';

  dateOptions: string[] = []; // Array to hold date options
  teamOptions: string[] = []; // Array to hold team options

  voterData: any[] = data;
  filteredData: any[] = [];

  response: any;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    setInterval(() => {
      axios.get('https://web.grootspace.ninja/api/voters').then((response) => {
        console.log(response.data);
        this.response = response;
        this.extractDropdownOptions(); // Call the function after getting the response
        this.filterData();
      }).catch((error) => {
        console.log(error);
      });
    }, 5000);
    
    console.log("data: ", this.response);
    this.route.queryParams.subscribe((params) => {
      this.selectedConstituency = params['constituency'];
      console.log(this.selectedConstituency);

      // Call filterData only if this.response is defined
      if (this.response) {
        this.filterData();
      }
    });
  }

  extractDropdownOptions() {
    if (this.response && this.response.data) { // Check if response and data are defined
      this.dateOptions = Array.from(new Set(this.response.data.map((voter: { assignedDate: any; }) => voter.assignedDate)));
      this.teamOptions = Array.from(new Set(this.response.data.map((voter: { locationToVisit: any; }) => voter.locationToVisit)));
    }
  }

  filterData() {
    this.filteredData = this.response.data.filter((voter: { assignedDate: string; assignedTeam: string; }) => {
      const dateMatches = this.selectedDate === '' || voter.assignedDate === this.selectedDate;
      const teamMatches = this.selectedTeam === '' || voter.assignedTeam.endsWith(this.selectedConstituency); // Filter by constituency
      return dateMatches && teamMatches;
    });
  }

  getTeamsForConstituency() {
    if (this.response && this.response.data) {
      if (this.selectedConstituency) {
        // Filter and return teams for the selected constituency
        return [...new Set(this.response.data
          .filter((voter: { assignedTeam: string; }) => voter.assignedTeam.endsWith(this.selectedConstituency))
          .map((voter: { assignedTeam: any; }) => voter.assignedTeam)
        )];
      }
    }
    return []; // Return an empty array if no constituency is selected or if response is not available
  }


  openDialog(cards: any) {
    const dialogRef = this.dialog.open(AdminVoterDetailsComponent, {
      data: cards
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  //  // Function to save JSON data to a file
  //  saveDataToFile(): void {
  //   const jsonDataString = JSON.stringify(this.response.data);
  //   const blob = new Blob([jsonDataString], { type: 'application/json' });

  //   // Save the modified data to a file (e.g., data.json)
  //   FileSaver.saveAs(blob, 'data.json');
  // }

}
