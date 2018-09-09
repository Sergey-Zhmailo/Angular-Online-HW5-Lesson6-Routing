import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customSum',
  pure: false
})

export class CustomSumPipe implements PipeTransform {
  transform(array: number[]) {
    let result = 0;
    array.forEach((el) => {
      result = result + el;
    });
    return result;
  }
}
