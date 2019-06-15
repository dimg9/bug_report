import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'reporterUppercase'
})
export class ReporterUppercasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
