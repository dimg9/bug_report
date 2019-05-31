import { Component, OnInit } from '@angular/core';
import { Story1sService } from '../story1s.service';
import { BugTable } from '../model1.model';


@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {
  Bugs: BugTable[];
  sortDirection = 'asc';
  previousSorted = '';
  arrow: HTMLElement;
  constructor(private story1sService: Story1sService) { }

  ngOnInit() {
    this.story1sService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });
  }

  sort(sortBy) {
    if (this.previousSorted === sortBy && this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
      this.arrow = document.getElementById(sortBy) as HTMLElement;
      if (this.arrow) { this.arrow.innerHTML = '<i class="material-icons">arrow_drop_up</i>'; }
      this.previousSorted = sortBy;
    } else {
      this.sortDirection = 'asc';
      this.arrow = document.getElementById(this.previousSorted) as HTMLElement;
      if (this.arrow){ this.arrow.innerHTML = ''; }
      this.arrow = document.getElementById(sortBy) as HTMLElement;
      if (this.arrow){ this.arrow.innerHTML = '<i class="material-icons">arrow_drop_down</i>'; }
      this.previousSorted = sortBy;
    }
    this.story1sService.getBugsSorted(sortBy, this.sortDirection).subscribe((data) => {
      this.Bugs = data;
    });
  }
}
