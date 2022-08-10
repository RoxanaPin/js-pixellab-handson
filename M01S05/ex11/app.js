// Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
// Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
// Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
// Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
// Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”

const pet = {
  getName: function () {
    return 'Eduardo';
  },
  getSpecies: function () {
    return 'lama';
  },
  getAge: function () {
    return 5;
  },
};

console.warn(
  `
  Folosind metodele obiectului pet afiseaza propozitia:
  “nnnn este ssss si are aaaa ani.” `,
);
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

console.warn(
  `
  Folosind metoda getAge calculeaza si salveaza intr-o variabila numita
  petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
 `,
);
console.log(`Animalul meu are ${pet.getAge()} ani.`);

console.warn(
  `
  Creeaza o functie numita calculateCircleArea()
  si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
  `,
);

const MathPI = '3.141592653589793';
const calculateCircleArea = (radius) => {
  return MathPI * radius * radius;
};

const circle1 = calculateCircleArea(2);

console.log(`${circle1}`);

const circle2 = calculateCircleArea(20);

console.log(`${circle2}`);

const circle3 = calculateCircleArea(16);

console.log(`${circle3}`);

console.warn(
  `
  Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
  Daca primeste un parametru, sa calculeze suprafata unui patrat.
  Daca primeste doi, a unui dreptunghi. Daca primeste trei,
  sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
  `,
);

const calculateSurface = (width, height) => {
  return width * height;
};

const squ = calculateSurface(2, 2);
console.log(`${squ}`);

const rectangle = width * height;
switch (rectangle) {
  case 'square':
    console.log(width ** 2);
    break;
  case 'paralelipiped':
    console.log(width * height * length);
    break;
  default:
    console.log(`${calculateSurface}`);
}
