import { Routes } from '@angular/router';
import { Story1Component } from './story1/story1.component';
import { FormsComponent } from './story1/forms/forms.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Story1Component },
  { path: 'forms', component: FormsComponent }
];
