import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioritypipe'
})
export class PriorityPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value === 1) {
      return 'Minor';
    } else if (value === 2) {
      return 'Major';
    } else if (value === 3) {
      return 'Critical';
    }
  }
}
