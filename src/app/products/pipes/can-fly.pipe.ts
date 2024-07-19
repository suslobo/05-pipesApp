
import { Pipe, PipeTransform } from '@angular/core';

// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'canFly'
})
//se declara el ToggleCasePipe en el products.module.ts
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean ): 'vuela' | 'no vuela' {
    return value ? 'vuela': 'no vuela';
  }
}
