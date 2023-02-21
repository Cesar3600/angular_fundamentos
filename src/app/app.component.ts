import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Mikaela';
  age = 1;
  nahomi = 'https://pbs.twimg.com/media/E0OjBEaWEAAxm2e.jpg';
  btnDisabled = true;
  byDefault = 'valor por defecto';
  myage = 1;
  img = 'https://cdn.yostagram.com/2023/02/nahomi-rojas-280.jpg';
  person = {
    name: 'nahomi',
    age: 18,
    avatar:
      'https://i.pinimg.com/564x/4e/83/f5/4e83f57dff749d624e1093b3a6a65669.jpg',
  };
}
