import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityNumber'
})
export class PriorityNumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (value === 1) {
      return 'Minor';
    } else if (value === 2) {
      return 'Major';
    } else if (value === 3) {
      return 'Critical';
    }
  }

}
