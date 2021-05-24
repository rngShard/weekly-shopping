import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { DinnerService } from './dinner/dinner.service';
import { Category, Dinner } from './dinner/dinner';
import { VEvent, VCalendar } from './ical-event';

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

  downloadICal() {
    let vCal = new VCalendar();

    let nxtMonday = getNextDayOfWeek(1);
    for (let {idx, selDinners} of this.selDinners.map((selDinners, idx) => ({idx, selDinners }))) {
      if (selDinners.length > 0) {
        let selDinner: Dinner = selDinners[0];
        let event = new VEvent(
          setTo19H(getNextDayOfWeek(idx+1, nxtMonday)),
          setTo19H(getNextDayOfWeek(idx+1, nxtMonday), 30),
          `Abendessen (${selDinner?.name})`,
          `Zutaten: ${selDinner.ingrediences}`);
        vCal.addVEvent(event);
      }
    }

    download("Abendessen.ical", vCal.assembleICalCalendar());
  }
}

function getNextDayOfWeek(dayOfWeek: number, specificDate?: Date): Date {
  let date = specificDate ? specificDate : new Date();
  var resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
  return resultDate;
}
function setTo19H(date: Date, min?: number): Date {
  date.setHours(19);
  date.setMinutes(min ? min : 0);
  date.setSeconds(0);
  return date;
}
function download(filename: any, text: any) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.setAttribute('target', '_blank');
  element.style.display = 'none';
  element.click();
}