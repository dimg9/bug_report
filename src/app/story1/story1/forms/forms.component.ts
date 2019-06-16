import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Story1sService } from '../../story1s.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BugTable, Comm } from '../../model1.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('form') frm: NgForm;

  model: BugTable = {
    id: '',
    title: '',
    description: '',
    priority: null,
    reporter: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    comments: []
  };

  com: Comm[];

  NumberPriority = '';
  PriorityIsValid: boolean;
  ReporterIsValid: boolean;
  StatusIsValid: boolean;


  ListofPriorities = ['1', '2', '3'];
  ListofPriorities2 = [1, 2, 3];
  ListofReporters = ['QA', 'PO', 'DEV'];
  ListofStatus = ['Ready for test', 'Done', 'Rejected'];
  edit: string;

  constructor(private story1sService: Story1sService, private router: Router, private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line: align
    private ngZone: NgZone) { }


  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.edit = this.activatedRoute.snapshot.paramMap.get('bugid');
    if (!!this.edit) {
      this.story1sService.getBugbyId(this.edit).subscribe((data) => {
        this.model = data;
        this.com = this.model.comments;
      });
    }
  }

  PriorityValidation2(event) {
    this.PriorityIsValid = !(this.NumberPriority === null);
  }

  PriorityValidation(event) {
    this.PriorityIsValid = !(this.NumberPriority === '');
  }

  ReporterValidation(event) {
    this.ReporterIsValid = !(this.model.reporter === '');
  }

  StatusValidation(event) {
    this.StatusIsValid = !(this.model.status === '');
  }





  formSubmit(form: NgForm) {
    if (!form.valid) { return; }
    if (this.NumberPriority === '1') {
      this.model.priority = 1;
    } else if (this.NumberPriority === '2') {
      this.model.priority = 2;
    } else if (this.NumberPriority === '3') {
      this.model.priority = 3;
    }
    if (!!this.edit) {
      this.model.updatedAt = Date();
      this.story1sService.updateBug(this.edit, this.model).subscribe(
        (response) => { this.ngZone.run(() => this.goToRoute('home')); }
      );
    } else {
      this.story1sService.createBug(this.model).subscribe(
        (response) => { this.ngZone.run(() => this.goToRoute('home')); }
      );
    }
  }

  handle(event) {
    this.model.comments.push(event);
    if (this.NumberPriority === '1') {
      this.model.priority = 1;
    } else if (this.NumberPriority === '2') {
      this.model.priority = 2;
    } else if (this.NumberPriority === '3') {
      this.model.priority = 3;
    }
    this.story1sService.updateBug(this.edit, this.model).subscribe();
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}




