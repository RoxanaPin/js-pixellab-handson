var person = {
  firstName: 'Roxana',
  lastName: 'Bla',
  email: 'blablaa',
  birthYear: 1992,
  zipCode: '701010',
  age: 29,
  pets: [
    {
      name: 'Zein',
      species: 'fish',
      age: 1,
    },
    {
      name: 'Jade',
      species: 'cat',
      age: 2,
    },
    {
      name: 'Sanie',
      species: 'dog',
      age: 3,
    },
  ],
};

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.`,
);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

// var li01 = document.getElementById('prop01')
// 16-19  cele 4 li uri

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”`);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    `${person.pets[1].species}` +
    ' si are ' +
    `${person.pets[1].age}` +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);

console.log((2022 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.`,
);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”`,
);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    `${person.pets[0].name}` +
    ' este o diferenta de ' +
    (person.age - person.pets[0].age + 1) +
    ' ani.',
); //sau 2022-birthyear-pets[0].age

var li01 = document.getElementById('prop01');
li01.innerText =
  person.firstName +
  ', ' +
  `${person.pets[0].name}` +
  ', ' +
  `${person.pets[1].name}` +
  ', ' +
  `${person.pets[2].name}` +
  ' locuiesc toti in aceeasi casa';

var li01 = document.getElementById('prop02');
li01.innerText =
  'Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2: ' +
  (person.pets[0].age - person.pets[2].age);

var li01 = document.getElementById('prop03');
li01.innerText =
  `Ma numesc ` +
  person.firstName +
  ' ' +
  person.lastName +
  ', ' +
  ' m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

var li01 = document.getElementById('prop04');
li01.innerText =
  'Animalele mele s-au nascut in ' +
  (2022 - person.pets[0].age) +
  ', ' +
  (2022 - person.pets[1].age) +
  ', respectiv ' +
  (2022 - person.pets[2].age);
