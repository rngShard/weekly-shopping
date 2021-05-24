/**
 * Example working iCal Termin.ics file
 * 
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Access-A-Ride Pickup
DTSTART:20210515T103400
DTEND:20210515T110400
LOCATION:1000 Broadway Ave.\, Brooklyn
DESCRIPTION: Access-A-Ride trip to 900 Jay St.\, Brooklyn
END:VEVENT
END:VCALENDAR
 */

export class VEvent {
  start: Date;
  end: Date;
  summary: string;
  location?: string;
  description?: string;

  constructor(start: Date, end: Date, summary: string, description?: string, location?: string) {
    this.start = start;
    this.end = end;
    this.summary = summary;
    if (location) { this.location = location }
    if (description) { this.description = description }
  }

  assembleICalEvent(): string {
    let vEventStr = `BEGIN:VEVENT
SUMMARY:${this.summary}
DTSTART:${this.parseDate(this.start)}
DTEND:${this.parseDate(this.end)}`;
    if (this.location) { vEventStr += `\nLOCATION:${this.location}` }
    if (this.description) { vEventStr += `\nDESCRIPTION:${this.description}` }
    vEventStr += "\nEND:VEVENT";
    return vEventStr;
  }

  private parseDate(date: Date): string {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${year}${month}${day}T${hour}${minutes}${seconds}`;
  }
}

export class VCalendar {
  vEvents: VEvent[];

  constructor() {
    this.vEvents = [];
  }

  addVEvent(vEvent: VEvent) {
    this.vEvents.push(vEvent);
  }

  assembleICalCalendar(): string {
    let vCalendarStr = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN`;
    for (let vEvent of this.vEvents) {
      vCalendarStr += `\n${vEvent.assembleICalEvent()}`
    }
    vCalendarStr += "\nEND:VCALENDAR";
    return vCalendarStr;
  }
}
