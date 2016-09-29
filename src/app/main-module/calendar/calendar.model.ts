export class CalendarModel {
  public start: string;
  public end: string;
  public title: string;
  public parentKey: string;
}

export class SimplyCalendarModel extends CalendarModel {
  public $key: string;

}


