import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story1Component } from './story1/story1.component';

@NgModule({
  declarations: [Story1Component],
  imports: [
    CommonModule
  ],
  exports: [
    Story1Component
  ]
})
export class Story1Module { }
