import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customDate'
  // pure: false
})

export class CustomDatePipe implements PipeTransform {
  transform(value: Date, locale: string, options: object) {
    const result = value.toLocaleDateString(locale, options);
    return result;
  }
}
