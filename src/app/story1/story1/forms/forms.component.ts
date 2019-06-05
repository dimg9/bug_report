import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Story1sService } from '../../story1s.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BugTable } from '../../model1.model';

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
  priority: null,
  reporter: null,
  status: null,
  createdAt: '',
  updatedAt: '',
  comments: [{id: '',
              reporter: '',
              description: ''}]
};

  PriorityIsValid: boolean;
  ReporterIsValid: boolean;
  StatusIsValid: boolean;

  ListofPriorities = [1, 2, 3];
  ListofReporters = ['QA', 'PO', 'DEV'];
  ListofStatus = ['Ready for test', 'Done', 'Rejected'];
  edit: string;

  constructor(private story1sService: Story1sService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.edit = this.activatedRoute.snapshot.params['bugid'];
    if (!!this.edit) {
      this.story1sService.getBugbyId(this.edit).subscribe((data) => {
        this.model = data;
      });
    }
  }

  PriorityValidation(event) {
    this.PriorityIsValid = !(this.model.priority === null);
  }

  ReporterValidation(event) {
    this.ReporterIsValid = !(this.model.reporter === null);
  }

  StatusValidation(event) {
    this.StatusIsValid = !(this.model.status === null);
  }



  formSubmit(form: NgForm) {
    if (!form.valid) { return; }
    if (!!this.edit) {
      this.model.updatedAt = Date();
      this.story1sService.updateBug(this.edit, this.model).subscribe();
      this.goToRoute('home');
    } else {
      this.story1sService.createBug(this.model).subscribe();
      this.goToRoute('home');
    }
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}


