
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeDash' })
export class RemoveDashPipe implements PipeTransform {

  transform(value:string) {
    if(value) {
      const newVal = value.split('-').join(' ')
      return newVal;
    } 
  }
}