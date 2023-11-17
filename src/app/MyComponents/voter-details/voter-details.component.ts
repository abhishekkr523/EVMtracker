import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { VoterListComponent } from '../voter-list/voter-list.component';

@Component({
  selector: 'app-voter-details',
  templateUrl: './voter-details.component.html',
  styleUrls: ['./voter-details.component.scss']
})
export class VoterDetailsComponent {
  constructor (
    private dialogRef: MatDialogRef<VoterListComponent>,
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
