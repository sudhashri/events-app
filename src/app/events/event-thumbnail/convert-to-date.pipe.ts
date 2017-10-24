import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toDate' })
export class StringToDate implements PipeTransform {
  transform(value: string): Date {
    if (value) {
      return new Date(value);
    }
  }
}
