export class Contact {
  constructor(public name: string,
              public surname: string,
              public tel: number,
              public birth: string) {
  }
}
export class ContactWithKey extends Contact {
  $key: string;
}
