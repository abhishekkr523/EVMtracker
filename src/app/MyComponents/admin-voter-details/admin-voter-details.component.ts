import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminVotersComponent } from '../admin-voters/admin-voters.component';

@Component({
  selector: 'app-admin-voter-details',
  templateUrl: './admin-voter-details.component.html',
  styleUrls: ['./admin-voter-details.component.scss']
})
export class AdminVoterDetailsComponent {
  constructor (
    private dialogRef: MatDialogRef<AdminVotersComponent>,
    @Inject(MAT_DIALOG_DATA) public cardsData: any
  ){}
  selectedOption: string | null = null;
  showNextButton: boolean = false;

  availability: any[] = [
    {value: 'available', viewValue: 'Available'},
    {value: 'not_available', viewValue: 'Not Available'}
  ];

  onSelectionChange() {
    // This function is called when the selection in the mat-select changes.
    // You can use it to determine if the "Next" button should be shown.
    this.showNextButton = this.selectedOption !== null;
  }
}
