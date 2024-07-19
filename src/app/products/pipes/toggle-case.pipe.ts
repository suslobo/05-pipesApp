
import { Pipe, PipeTransform } from '@angular/core';

// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'toggleCase'
})
//se declara el ToggleCasePipe en el products.module.ts
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean= false ): string {
    return ( toUpper )
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}
