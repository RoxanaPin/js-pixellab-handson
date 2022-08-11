//folosim const cat de mult se poate, pana la refuz, abia apoi folosim let
//const=protectie de a nu strica singuri codul

// const paragraphElement = document.createElement('p');
// const userAgentString = navigator.userAgent;
// let message = 'Nu stim ce browser folosesti.';

// if (userAgentString.includes('Chrome')) {
//   message = 'Navighezi folosind Chrome';
// }

// paragraphElement.innerText = message;

// document.body.append(paragraphElement);

//subpunct 2: numele e Firefox

const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';

if (userAgentString.includes('Firefox')) {
  message = 'Navighezi folosind Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

const myTimeout = setTimeout(prompt, 3000);
function setTimeout() {
  prompt(`Firefox vrea sa stie cum te cheama`);
}

message = `Salut ${prompt}`;
