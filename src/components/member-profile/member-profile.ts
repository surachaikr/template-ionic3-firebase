import { Component } from '@angular/core';

@Component({
  selector: 'member-profile',
  templateUrl: 'member-profile.html'
})
export class MemberProfileComponent {

  text: string;

  constructor() {
    console.log('Hello MemberProfileComponent Component');
    this.text = 'Hello World';
  }

}
