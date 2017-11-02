import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Error404Component } from './errors/404.component';

import { DurationPipe } from './pipes/duration.pipe';
import { StringToDatePipe } from './pipes/convert-to-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Error404Component,
    DurationPipe,
    StringToDatePipe
  ],
  exports: [
    Error404Component,
    DurationPipe,
    StringToDatePipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {}
