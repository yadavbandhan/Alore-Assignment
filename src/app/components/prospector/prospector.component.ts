import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Segment } from 'src/app/classes/segment';
import { AddSegmentComponent } from '../add-segment/add-segment.component';

@Component({
  selector: 'app-prospector',
  templateUrl: './prospector.component.html',
  styleUrls: ['./prospector.component.scss'],
})
export class ProspectorComponent implements OnInit {
  @Input() segments: any;

  public emojiSize: number = 20;
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public addSegment() {
    const segmentDialog = this.dialog.open(AddSegmentComponent);

    segmentDialog.afterClosed().subscribe((res) => {
      if (!res) return;
      this.populateNewSegment(res);
    });
  }

  private populateNewSegment(segment: Segment) {
    this.segments.push(segment);
  }
}
