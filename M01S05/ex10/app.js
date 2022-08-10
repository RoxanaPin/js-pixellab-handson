function calculateSurface(width, lenght) {
  if (arguments.length === 2) {
    return width * lenght;
  } else {
    return width ** 2;
    //la puterea 2
  }
}

console.warn(
  `
  Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface() care sa primeasca un singur parametru si sa calculeze suprafata unui patrat.
  `,
);

function calculateSquareSurface(width) {
  return calculateSurface(width);
}

console.warn(
  `
  Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4.
  `,
);
console.log(calculateSquareSurface(4));

console.warn(
  `
  Creeaza un wrapper numit calculateRectangleSurface() pentru calculateSurface() care sa primeasca doi parametrii si sa calculeze suprafata unui dreptunghi.
  `,
);

function calculateRectangleSurface(width, lenght) {
  return calculateSurface(width, lenght);
}

console.warn(
  `
  Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.
  `,
);
console.log(calculateRectangleSurface(8, 9));
