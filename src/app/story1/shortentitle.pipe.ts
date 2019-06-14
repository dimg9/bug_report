import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortentitle'
})
export class ShortentitlePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length > 30) {
      return value.substring(0, 30) + '...';
    } else {
      return value;
    }
  }

}
