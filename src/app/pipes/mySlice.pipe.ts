import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'myslice'
})

export class MySlicePipe implements PipeTransform {
  transform(value: string, start: number, end: number = value.length - 1) {
    const result = value.slice(start, end);
    return result;
  }
}
