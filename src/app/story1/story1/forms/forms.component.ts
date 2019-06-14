import { Component, OnInit, NgZone } from '@angular/core';
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

  model: BugTable = {
    id: '',
    title: '',
    description: '',
    priority: 0,
    reporter: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    comments: []
  };

  com: Comm[];

  PriorityIsValid: boolean;
  ReporterIsValid: boolean;
  StatusIsValid: boolean;

  ListofPriorities = [1, 2, 3];
  ListofReporters = ['QA', 'PO', 'DEV'];
  ListofStatus = ['Ready for test', 'Done', 'Rejected'];
  edit: string;

  constructor(private story1sService: Story1sService, private router: Router, private activatedRoute: ActivatedRoute,
    private ngZone: NgZone) { }


  ngOnInit() {
    this.edit = this.activatedRoute.snapshot.params['bugid'];
    if (!!this.edit) {
      this.story1sService.getBugbyId(this.edit).subscribe((data) => {
        this.model = data;
        this.com = this.model.comments;
      });
    }
  }

  PriorityValidation(event) {
    this.PriorityIsValid = !(this.model.priority === 0);
  }

  ReporterValidation(event) {
    this.ReporterIsValid = !(this.model.reporter === '');
  }

  StatusValidation(event) {
    this.StatusIsValid = !(this.model.status === '');
  }



  formSubmit(form: NgForm) {
    if (!form.valid) { return; }
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
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}


