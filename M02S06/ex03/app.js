// citim in acest file

// old common JS modules
//node trece la ES6

const { readFileSync } = require('fs');

// flosim ES6 dar pe node a ramas in REQUIRE

const data = readFileSync('file.txt', 'utf-8');

console.log(`${data}
This is our node script`);
