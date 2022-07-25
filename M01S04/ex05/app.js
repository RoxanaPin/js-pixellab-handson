// for (var i = 0; i <= 100; i++) {
//   console.log(i);

//   if (i % 7 !== 0) {
//     continue;
//   }

//   console.log('acest numar este multiplu de 7');
// }

var number = prompt('introdu un numar:');

for (var i = 5; i <= 100; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`acest numar este multiplu de ${number}`);
}
