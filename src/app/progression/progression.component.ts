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
  public Category = Category;
  availDinners: Dinner[];
  
  dinnerCategoryFilter: Category[];
  selDinners: Dinner[][];
  miscFoods: string[];
  shoppingItems: string[];

  constructor(
    private dinnerService: DinnerService
  ) {
    this.availDinners = [];
    this.dinnerCategoryFilter = [];
    this.selDinners = [ [], [], [], [], [], [], [] ];
    this.miscFoods = [];
    this.shoppingItems = [];
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

  dinnerApplicable(dinner: Dinner) {
    return this.dinnerCategoryFilter.every(cat => dinner.categories.includes(cat));
  }

  toggleCategory(cat: Category, filterElemId: string) {
    if (!this.dinnerCategoryFilter.includes(cat)) {
      this.dinnerCategoryFilter.push(cat);
      (document.querySelector(`#${filterElemId}`) as HTMLElement).style.color = 'blue';
    } else {
      let idx = this.dinnerCategoryFilter.indexOf(cat);
      this.dinnerCategoryFilter.splice(idx, 1);
      (document.querySelector(`#${filterElemId}`) as HTMLElement).style.color = 'grey';
    }
    console.log(this.dinnerCategoryFilter);
  }

  addToMisc($event: any) {
    this.miscFoods.push($event.target.value);
    $event.target.value = "";
  }
  deleteFromMisc(miscFood: string) {
    this.miscFoods = this.miscFoods.filter(x => x !== miscFood);
  }

  assembleBgImageUrl(str: string) {
    return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='100%' width='100%'><text x='20' y='35' fill='grey' font-size='20'> ${str} </text></svg>")`;
  }
}
