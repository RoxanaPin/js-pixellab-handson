var person = {
  name: 'Rox',
  surname: 'Bla',
  age: 19,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquerry',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested)
  afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
`,
);

var message = '';
for (var i = 0; i < person.friends.length; i++) {
  for (var j = 1; j < person.friends.length; j++) {
    var friend = person.friends[i];
    var frend = person.friends[j];
    var ageDiff = Math.abs(friend.age - frend.age);

    message +=
      'Intre ' +
      friend.name +
      ' si ' +
      frend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani. ';
  }
}

console.log(message.trim());
