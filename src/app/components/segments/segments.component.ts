import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Table } from 'src/app/classes/table';
import { AddTableComponent } from '../add-table/add-table.component';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})
export class SegmentsComponent implements OnInit {
  @Input() segments: any;

  public emojiSize: number = 30;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public addTable(index: number) {
    const dialogRef = this.dialog.open(AddTableComponent);

    dialogRef.afterClosed().subscribe((res: Table) => {
      if (!res) return;
      this.segments[index].tables.push(res);
    });
  }
}
