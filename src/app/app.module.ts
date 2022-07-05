import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProspectorComponent } from './components/prospector/prospector.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SegmentsComponent } from './components/segments/segments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTableComponent } from './components/add-table/add-table.component';
import { AddSegmentComponent } from './components/add-segment/add-segment.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
@NgModule({
  declarations: [
    AppComponent,
    ProspectorComponent,
    SideBarComponent,
    SegmentsComponent,
    DashboardComponent,
    AddTableComponent,
    AddSegmentComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    PickerModule,
    EmojiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
