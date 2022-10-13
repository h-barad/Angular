import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string, propName: string): any {
    const resultArray = [];
    if (value) {
    if (value.length === 0 || args === '' ) {
      return value;
    }

    for (const item of value) {
      if (item[propName].toLowerCase().includes(args)) {
        resultArray.push(item);
      } 
    }
    return resultArray;
    }
  }
}

