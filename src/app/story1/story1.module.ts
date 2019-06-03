import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story1Component } from './story1/story1.component';
import { PageTitleComponent } from './story1/page-title/page-title.component';
import { FormsComponent } from './story1/forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Story1Component, PageTitleComponent, FormsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Story1Component,
    PageTitleComponent,
    FormsComponent
  ]
})
export class Story1Module { }
