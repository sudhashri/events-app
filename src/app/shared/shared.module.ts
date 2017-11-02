import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Error404Component],
  exports: [Error404Component, CommonModule, FormsModule]
})
export class SharedModule {}
