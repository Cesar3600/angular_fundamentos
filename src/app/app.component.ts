import { Component } from '@angular/core';
import { Producto } from './product.model';

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

  names: string[] = ['Nico', 'July', 'Santy'];
  newname = '';

  productos: string[] = ['tv', 'xbox', 'home theater'];

  producto: string = '';

  addprod() {
    this.productos.push(this.producto);
    this.producto = '';
  }
  delprod(index: number) {
    this.productos.splice(index, 1);
  }

  addname() {
    this.names.push(this.newname);
    this.newname = '';
  }

  removename(i: number): string[] {
    return this.names.splice(i, 1);
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }

  decreaseAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  products: Producto[] = [
    {
      name: 'El mejor juguete',
      price: 350,
      image: './assets/images/juguete1.jpg',
      category: 'adult',
    },
    {
      name: 'battlecat - toy action',
      price: 500,
      image: './assets/images/juguete2.jpg',
    },
    {
      name: 'optimus prime',
      price: 900,
      image: './assets/images/juguete3.jpg',
    },
    {
      name: 'guards of galaxy - ship',
      price: 200,
      image: './assets/images/juguete4.jpg',
    },
    {
      name: 'darth vader action figure',
      price: 620,
      image: './assets/images/juguete5.jpg',
    },
  ];

  /*   captureString(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  } */
}
