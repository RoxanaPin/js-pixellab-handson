// DOM:
// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

// creez jQuery:
const $p = $('<p>', {
  text: 'Textul care trebuie sa apara in paragraf',
  id: 'myParagraph',
  class: 'clase de css',
});

const $msg = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

// $(document.body).append($p);

const $container = $('.container');
$p.appendTo($container);

// apel mesajelor din container
// in loc de "contianer" era scris "body"=atunci se facea apel la tot body ul din index.html

$container.append($msg);

setTimeout(function () {
  $msg.addClass('error');
}, 5000);

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($msg);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);
// prepend=se duce in fata containerului;

$container.after(
  $('<div>', {
    class: 'navigation',
  }),
);

$('.navigation').append(
  $('<a>', {
    text: 'Primul link',
    href: '/',
    title: 'Test',
    class: 'nav-link',
  }),
);

$('.navigation .nav-link')
  .before(
    $('<h2>', {
      text: 'Navigatie',
    }),
  )
  .prepend($('<sup>', { text: 1 }));

$container.before($('<h1>', { text: 'Invat jQuery' }));

const $docs = $('<p>', { text: 'Documentatia jQuery poate fi gasita ' });
$docs
  .append(
    $('<a>', {
      href: 'https://api.jquery.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
      text: 'aici',
    }),
  )
  .append(
    $('<span>', {
      text: '.',
    }),
  )
  .insertAfter($('.navigation'));
