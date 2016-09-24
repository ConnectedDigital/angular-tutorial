export class CalendarModel {
  public start: string;
  public end: string;
  public id: string;
  public title: string;
}

export class SimplyCalendarModel extends CalendarModel {
  public $key: string;

}


