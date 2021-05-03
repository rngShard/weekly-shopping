import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { DinnerService } from './dinner/dinner.service';
import { Category, Dinner } from './dinner/dinner';

export enum Weekdays {
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
}

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss']
})
export class ProgressionComponent implements OnInit {
  public Weekdays = Weekdays
  availDinners: Dinner[];
  
  selDinners: Dinner[][];
  miscFoods: string[];

  constructor(
    private dinnerService: DinnerService
  ) {
    // for (const val of enumKeys(Weekdays)) { console.log(Weekdays[val]) }
    this.availDinners = [];
    this.selDinners = [ [], [], [], [], [], [], [] ];
    this.miscFoods = [];
  }

  ngOnInit(): void {
    this.availDinners = this.dinnerService.getDinners();
  }

  drop(event: CdkDragDrop<Dinner[]>) {
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
