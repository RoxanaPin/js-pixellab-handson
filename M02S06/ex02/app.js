// in arayul process.argv vom gasi parametri cu care a fost invoct scriptul
// din node din linia de comanda

console.log(process.argv);

// destructuram acest aray astfel incat sa avem doar parametri

// olschool ar fi: const test = arguments.slice(2);
// test contine acum doar prametri

// const [node, fileName, ...restOfArguments] = arguments;

// in destructurarea moderna, daca nu avem nevoie de primii indecsi din aray,
// punem virgula si atat

// console.log(process.argv);
// console.log(restOfArguments);

const [, , ...restOfArguments] = arguments;
// primul parametru din linia de comanda este acum pe pozitia 0

const side = restOfArguments[0];

console.log(`Suprafata patratului este ${side ** 2}`);
