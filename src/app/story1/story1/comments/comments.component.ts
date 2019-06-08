import { Component, OnInit, Input, NgZone, Output, EventEmitter } from '@angular/core';
import { BugTable, Comm } from '../../model1.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {





  comments: Comm = {
    id: '',
    reporter: '',
    description: ''
  };



  constructor() { }


  @Output() output: EventEmitter<Comm> = new EventEmitter();
  ngOnInit() {
  }

  commentSubmit(form: NgForm) {
    if (!form.valid) { return; }
    this.output.emit(this.comments);
    this.resetform();
  }

    resetform() {
      this.comments = ({
        id: '',
        reporter: '',
        description: ''
      });
    }
}

