import { AbstractControl } from '@angular/forms';

// return true if the word is found in the string that is passed in
export function avoidWord(
  control: AbstractControl
  // square brackets used to allows typing on the key of the object returned
): { [errorName: string]: boolean } | null {
  // when word hack is found, return avoidWord: true
  if (control.value && control.value.includes('hack')) {
    return { avoidWord: true };
  }
  // when word hack is not found, return null
  return null;
}
