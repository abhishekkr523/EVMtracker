import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../assets/election.votersVery.json';
import { MatDialog } from '@angular/material/dialog';
import { VoterDetailsComponent } from '../voter-details/voter-details.component';
@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss']
})
export class VoterListComponent {

  constructor(private router: Router,
    public dialog: MatDialog) { }

voters:any[] = data;

openDialog(cards: any) {
  const dialogRef = this.dialog.open(VoterDetailsComponent, {
    data: cards
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

voterClicked(){
  this.router.navigate(['/voterDetails']);
  console.log("Voter Clicked");
}
}
