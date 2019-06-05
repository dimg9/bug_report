import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Story1sService } from '../../story1s.service';
import { Router } from '@angular/router';
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

  constructor(private story1sService: Story1sService, private router: Router) { }

  ngOnInit() {
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
    this.story1sService.createBug(this.model).subscribe();
    this.goToRoute('home');
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}


