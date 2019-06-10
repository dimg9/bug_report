import { Component, OnInit } from '@angular/core';
import { Story1sService } from '../story1s.service';
import { BugTable } from '../model1.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


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
  page = 0;
  titlesearch = '';
  prioritysearch = null;
  reportersearch = null;
  statussearch = null;
  ListofPriorities = [1, 2, 3];
  ListofReporters = ['QA', 'PO', 'DEV'];
  ListofStatus = ['Ready for test', 'Done', 'Rejected'];

  constructor(private story1sService: Story1sService, private router: Router) { }

  ngOnInit() {

    this.story1sService.getBugs(this.previousSorted, this.sortDirection, this.page, this.titlesearch, this.prioritysearch,
       this.reportersearch, this.statussearch).subscribe((data) => {
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
      if (this.arrow) { this.arrow.innerHTML = ''; }
      this.arrow = document.getElementById(sortBy) as HTMLElement;
      if (this.arrow) { this.arrow.innerHTML = '<i class="material-icons">arrow_drop_down</i>'; }
      this.previousSorted = sortBy;
    }
    this.story1sService.getBugs(sortBy, this.sortDirection, this.page, this.titlesearch, this.prioritysearch,
      this.reportersearch, this.statussearch).subscribe((data) => {
      this.Bugs = data;
    });
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }

  goToEdit(bug: BugTable) {
    this.router.navigate(['forms', { bugid: bug.id }]);
  }

  goToPages(keyarrow: string) {
    if (keyarrow === 'left') {
      this.page = this.page - 1;
      this.story1sService.getBugs(this.previousSorted, this.sortDirection, this.page, this.titlesearch, this.prioritysearch,
        this.reportersearch, this.statussearch).subscribe((data) => {
        this.Bugs = data;
      });
    } else if (keyarrow === 'right') {
      this.page = this.page + 1;
      this.story1sService.getBugs(this.previousSorted, this.sortDirection, this.page, this.titlesearch, this.prioritysearch,
        this.reportersearch, this.statussearch).subscribe((data) => {
        this.Bugs = data;
      });
    }

  }

  goToFirstPage() {
    this.page = 0;
    this.story1sService.getBugs(this.previousSorted, this.sortDirection, this.page, this.titlesearch, this.prioritysearch,
      this.reportersearch, this.statussearch).subscribe((data => {
      this.Bugs = data;
    }));
  }

  resetSearch() {
    this.titlesearch = '';
    this.prioritysearch = null;
    this.reportersearch = null;
    this.statussearch = null;
  }

  AdvancedSearch(form: NgForm) {
    this.previousSorted = '';
    this.page = 0;
    this.story1sService.getBugs(this.previousSorted, this.sortDirection, this.page, this.titlesearch,
       this.prioritysearch, this.reportersearch, this.statussearch).subscribe((data => {
        this.Bugs = data;
      }));
  }

  refresh() {
    this.resetSearch();
    this.arrow = document.getElementById(this.previousSorted) as HTMLElement;
    this.arrow.innerHTML = '';
    this.previousSorted = '';
    this.page = 0;
    this.sortDirection = 'asc';
    this.story1sService.getBugs(this.previousSorted, this.sortDirection, this.page, this.titlesearch,
      this.prioritysearch, this.reportersearch, this.statussearch).subscribe((data => {
       this.Bugs = data;
     }));
  }
}
