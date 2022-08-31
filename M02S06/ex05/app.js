const { writeFileSync, readFileSync } = require('fs');
// orice e sync este sincron si blocant
// usor similar cu alert/prompt/etc

writeFileSync('./my-file.txt', 'Invat node.js', 'utf-8');

const data = readFileSync('./my-file.txt', 'utf-8');
const date = new Date();

const day = date.getDay();
const month = date.getMonth() + 1;
// folosim const pana avem nevoie de let

// ternary operator pt valorile sub 10
const paddedDay = day < 10 ? `0${day}` : day;
const paddedMonth = month < 10 ? `0${month}` : month;

const payload = `${data} azi ${paddedDay}.${paddedMonth}.${date.getFullYear()}`;
// payload se foloseste cant trimitem ceva pe net.

writeFileSync('./hi.txt', payload, 'utf8');
