import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Table } from 'src/app/classes/table';
import { ColorPalette } from './color-palette';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss'],
})
export class AddTableComponent implements OnInit {
  public name: string = '';
  public selectedIcon: any = {
    id: 'smiley',
    name: 'Smiling Face with Open Mouth',
    colons: ':smiley:',
    text: ':)',
    emoticons: ['=)', '=-)'],
    skin: null,
    native: '😃',
  };

  public colorPalette = ColorPalette;
  public selectedColor: string = this.colorPalette[0];
  public showColorPalette: boolean = false;
  public showEmojiDropdown: boolean = false;
  public emojiSize: number = 18;

  constructor(private dialog: MatDialogRef<AddTableComponent>) {}

  ngOnInit(): void {
    this.dialog.updateSize('550px', '550px');
  }

  public addTable() {
    if (!this.name.trim()) return;

    this.dialog.close(this.getNewTable());
  }

  private getNewTable() {
    const newTable = new Table();
    newTable.name = this.name.trim();
    newTable.icon = this.selectedIcon;
    newTable.color = this.selectedColor;
    return newTable;
  }

  public toggleColorPalette() {
    this.showColorPalette = !this.showColorPalette;
  }

  public toggleEmojiDropdown() {
    this.showEmojiDropdown = !this.showEmojiDropdown;
  }

  public onColorSelect(color: string) {
    this.selectedColor = color;
    this.showColorPalette = false;
  }

  public close() {
    this.dialog.close();
  }

  public onEmojiClick(event: any) {
    this.selectedIcon = event.emoji;
    this.showEmojiDropdown = false;
    console.log(event);
  }
}
