import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Segment } from 'src/app/classes/segment';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.scss'],
})
export class AddSegmentComponent implements OnInit {
  public name: string = '';
  public description: string = '';
  public selectedIcon: any = {
    id: 'smiley',
    name: 'Smiling Face with Open Mouth',
    colons: ':smiley:',
    text: ':)',
    emoticons: ['=)', '=-)'],
    skin: null,
    native: '😃',
  };
  public showEmojiDropdown: boolean = false;
  public emojiSize: number = 18;
  constructor(private dialog: MatDialogRef<AddSegmentComponent>) {}

  ngOnInit(): void {
    this.dialog.updateSize('550px', '550px');
  }

  private getNewSegment() {
    const newSegment = new Segment();
    newSegment.name = this.name.trim();
    newSegment.icon = this.selectedIcon;
    newSegment.description = this.description.trim();
    return newSegment;
  }

  public onDescriptionChange(event: any) {
    this.description = event.target.value;
  }

  public addSegment() {
    if (!this.name.trim()) return;

    this.dialog.close(this.getNewSegment());
  }

  public toggleEmojiDropdown() {
    this.showEmojiDropdown = !this.showEmojiDropdown;
  }

  public onEmojiClick(event: any) {
    this.selectedIcon = event.emoji;
    this.showEmojiDropdown = false;
    console.log(event);
  }

  public close() {
    this.dialog.close();
  }
}
