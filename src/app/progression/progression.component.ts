import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { DinnerService } from './dinner/dinner.service';
import { Category, Dinner } from './dinner/dinner';

enum Weekdays {
  monday = "Montag",
  tuesday = "Dienstag",
  wednesday = "Mittwoch",
  thrusday = "Donnerstag",
  friday = "Freitag",
  saturday = "Samstag",
  sunday = "Sonntag"
}
function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss']
})
export class ProgressionComponent implements OnInit {
  WEEKDAYS = [];
  dinners: Dinner[];
  miscFoods: string[];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(
    private dinnerService: DinnerService
  ) {
    // for (const val of enumKeys(Weekdays)) { console.log(Weekdays[val]) }
    this.dinners = [];
    this.miscFoods = [];
  }

  ngOnInit(): void {
    this.dinners = this.dinnerService.getDinners();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }  

  // toggleCategory(category: Category) {
    
  // }

  addToMisc($event: any) {
    this.miscFoods.push($event.target.value);
    $event.target.value = "";
  }
  deleteFromMisc(miscFood: string) {
    this.miscFoods = this.miscFoods.filter(x => x !== miscFood)
  }

}
