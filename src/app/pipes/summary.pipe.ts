import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
      if(value.indexOf(' ')!=-1){
        let fop:string;
        let arr=value.split(' ');
        if(limit<arr.length){
            let testarr=[];
            for(var i=0;i<limit;i++){
                testarr[i]=arr[i];
            }
            fop=testarr.join(' ');
            return fop+" ...";
          }
      }
      return value;
  }
}
