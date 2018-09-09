import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'join'
  // pure: false
})

export class JoinPipe implements PipeTransform {
  transform(array: string[], key: string) {
    let result = array.map(el => {
      // if (!key) {
      //   return el;
      // } else {
      //   return el[key];
      // }
      return !key ? el : el[key];
    });
    return result.join('//');
  }
}
