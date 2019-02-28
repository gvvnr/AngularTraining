import { Pipe, PipeTransform } from '@angular/core';
import {stringDistance} from "codelyzer/util/utils";

@Pipe({
  name: 'compressData'
})
export class CompressDataPipe implements PipeTransform {
  data : string = null;

  transform(value: string, args?: any): any {
    if(value){
      if(value.length>5)
        return value.slice(0,4)+'...';
      else
        return value;
    }


  }

}
