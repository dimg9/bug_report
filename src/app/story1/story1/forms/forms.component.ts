import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  model = {
    title: '',
    lastName: '',
    priority: null,
    reporter: null,
    status: null
  };
  PriorityIsValid: boolean;
  ReporterIsValid: boolean;
  StatusIsValid: boolean;

  ListofPriorities = ['Minor', 'Major', 'Critical'];
  ListofReporters = ['QA', 'PO', 'DEV'];
  ListofStatus = ['Ready for test', 'Done', 'Rejected'];

  constructor() { }

  ngOnInit() {
  }

  PriorityValidation(event) {
    this.ReporterIsValid = !(this.model.priority === null);
  }

  ReporterValidation(event) {
    this.PriorityIsValid = !(this.model.reporter === null);
  }

  StatusValidation(event) {
    this.StatusIsValid = !(this.model.status === null);
  }



  formSubmit(form: NgForm) {
    if (!form.valid) return;
    console.log(form);

  }
}


