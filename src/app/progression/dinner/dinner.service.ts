import { Injectable } from '@angular/core';

import { Dinner } from './dinner';
import { DINNERS } from './mock-dinners';

@Injectable({
  providedIn: 'root'
})
export class DinnerService {

  constructor() {}

  getDinners(): Dinner[] {
    return DINNERS;
  }
}
