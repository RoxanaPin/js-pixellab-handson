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
