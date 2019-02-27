import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compressData'
})
export class CompressDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.toString().length>5)
    return value.toString().slice(0,4)+'...';
    else
      return value.toString();
  }

}
