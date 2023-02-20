const username: string = 'nicobytes';

const suma = (a: number, b: number): number => {
  return a + b;
};

suma(2, 5);

class Persona {
  constructor(private age: number, public lastname: string) {}
}

const nico = new Persona(33, 'Nazaret');
