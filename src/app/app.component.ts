import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World!';
  age: number = 900000;
  isShown: string = "I am being shown";
  isNotShown: string = "I am not being shown";

  person: object = {
    name: "Jordan",
    age: 500000000,
    course: "Angular"
  };

  people: object[] = [
    {
      name: "Jordan",
      age: 500000000,
      course: "Angular"
    },
    {
      name: "Bob",
      age: 12,
      course: "Something"
    },
    {
      name: "Bill",
      age: 1,
      course: "That"
    }
  ];

  colors: string[] = ['red', 'blue', 'green', 'yellow'];

  myFunction(shouldShow: boolean): string {
    return shouldShow ? this.isShown : this.isNotShown;
  }
}
