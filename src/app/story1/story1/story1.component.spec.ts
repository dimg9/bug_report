import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story1Component } from './story1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PriorityNumberPipe } from '../priority-number.pipe';
import { ShortentitlePipe } from '../shortentitle.pipe';
import { ReporterUppercasePipe } from '../reporter-uppercase.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('Story1Component', () => {
  let component: Story1Component;
  let fixture: ComponentFixture<Story1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story1Component, PriorityNumberPipe, ShortentitlePipe, ReporterUppercasePipe ],
      imports: [ NgbModule, ReactiveFormsModule, FormsModule, HttpClientModule ],
      providers: [ {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
    }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
