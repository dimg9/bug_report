import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { PriorityNumberPipe } from '../../priority-number.pipe';
import { PriorityPipe } from '../../priority.pipe';
import { ShortentitlePipe } from '../../shortentitle.pipe';
import { CommentsComponent } from '../comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsComponent, PriorityNumberPipe, PriorityPipe, ShortentitlePipe, CommentsComponent ],
      imports: [ ReactiveFormsModule, FormsModule, HttpClientModule ],
      providers: [{
        provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigate'); }
      },
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { paramMap: convertToParamMap({})} }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
