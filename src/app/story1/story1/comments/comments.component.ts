import { Component, OnInit, Input, NgZone } from '@angular/core';
import { BugTable, Comm } from '../../model1.model';
import { NgForm } from '@angular/forms';
import { Story1sService } from '../../story1s.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {



  model1: BugTable;

  comments: Comm = {
    id: '',
    reporter: '',
    description: ''
  };

  constructor(private story1sService: Story1sService, private ngZone: NgZone) { }

  @Input() bgid;
  ngOnInit() {
    this.story1sService.getBugbyId(this.bgid).subscribe((data) => {
      this.model1 = data;
    });
  }

  commentSubmit(form: NgForm) {
    if (!form.valid) { return; }
    this.model1.comments.push(this.comments);
    this.story1sService.updateBug(this.bgid, this.model1).subscribe();
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

