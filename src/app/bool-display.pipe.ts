import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(bool: boolean, lang: string = "en"): string {
    if(lang === "en") {
      return (bool) ? "Yes" : "No";
    } else {
      return (bool) ? "Oui" : "Non";
    }
  }

}
