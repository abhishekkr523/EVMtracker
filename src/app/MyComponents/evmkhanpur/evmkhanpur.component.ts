import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EvmdialogComponent } from '../evmdialog/evmdialog.component';

@Component({
  selector: 'app-evmkhanpur',
  templateUrl: './evmkhanpur.component.html',
  styleUrls: ['./evmkhanpur.component.scss']
})
export class EvmkhanpurComponent {
  buttonRows: number[][];

  constructor(private dialog: MatDialog) {
    this.buttonRows = this.generateButtonRows(1000, 10);
  }

  private generateButtonRows(totalButtons: number, buttonsPerRow: number): number[][] {
    const buttonArray = Array.from({ length: totalButtons }, (_, index) => index + 1);
    const buttonRows: number[][] = [];

    for (let i = 0; i < buttonArray.length; i += buttonsPerRow) {
      buttonRows.push(buttonArray.slice(i, i + buttonsPerRow));
    }

    return buttonRows;
  }

  openDialog() {
    const dialogRef = this.dialog.open(EvmdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
