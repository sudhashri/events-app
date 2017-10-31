import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './errors/404.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Error404Component,
    CollapsibleWellComponent
  ],
  exports: [
    CollapsibleWellComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {}
