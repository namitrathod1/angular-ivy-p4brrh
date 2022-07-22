import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'everyone ';

  headers = ['Name', 'Car'];
  details = [
    {
      Name: 'Shyam',
      Car: 'BMW',
    },
    {
      Name: 'Rohan',
      Car: 'mercedes',
    },
    {
      Name: 'Shubham',
      Car: 'Audi',
    },
  ];
}
