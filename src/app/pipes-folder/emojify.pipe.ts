import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return "";
    }

    return value
      .replace(/tacos?/ig, '🌮')
      .replace(/pizzas?/ig, '🍕')
      .replace(/burgers?/ig, '🍔')
      .replace(/ice cream/ig, '🍦')
      .replace(/falafel/ig, '🥙');
  }
  // tacos? means the "s" is optional
  // (i)gnore case (make it work with "taco" or "TaCo")
  // (g)lobal match (replace ALL the words, not just the first)
}
