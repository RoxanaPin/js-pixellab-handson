//mutam butonul Adauga
//skills button nu da submit la form -> inputul e generat;
//butonul Save pet nu da submit la formular ->inputul e in mark up;
//obiect const person
//move button
//submit form -> create person literal;
//write object to DOM;

//jQuerys DOMContentLoaded:
//$(document).ready(function())
//varianta old&deprecated
//use this instead

//data model/data set/applicaion state:
const person = {};
//person e variabila globala;

// arrow functions -> no hoisting
const renderSkillsUl = (skillName) => {
  const className = 'skillsUl';
  let $skillsUl = $('.' + className);

  if ($skillsUl.length <= 0) {
    $skillsUl = $('<ul>', {
      class: className,
    });
  }

  const $skillLi = $('<li>', {
    text: skillName,
  });
  const $skillInput = $('<input>', {
    type: 'text',
    value: skillName,
    name: `skill_${skillName.replaceAll(' ', '')}`,
  });
  $skillLi.append($skillInput);

  $skillsUl.append($skillLi);

  return $skillsUl;
};

$(function () {
  // form submission step
  const $form = $('#personForm').on('submit', function (event) {
    event.preventDefault();
    // this -> pointer to the form
    // this.name -> pointer to the input
    person.name = this.name.value;
    person.surname = this.surname.value;
    person.age = this.age.value;
    person.skills = person.skills || [];

    // loop through optional data
    const formData = new FormData(this);
    for (const entry of formData) {
      // array destructure
      const [inputName, inputValue] = entry;
      // const inputName = entry[0];
      // const inputValue = entry[1];
      if (inputName.startsWith('skill_')) {
        person.skills.push(inputValue);
      }
    }

    this.reset();
    $('.skillsUl').remove();

    // wrap form in jquery
    // render returneaza obiect jq si este plasat in DOM
    $(this).after(render(person));
  });

  // create skills input step
  // form.descendentii-directi.al-doilea-fieldset
  const addSkillText = 'Add skill';
  $form
    .children()
    .eq(1)
    .append(
      $('<input>', {
        type: 'text',
        placeholder: 'Skill',
        name: 'skillInput',
      }),
    )
    .append(
      $('<button>', {
        type: 'button',
        title: addSkillText,
        class: 'addSkillButton',
        text: addSkillText,
      }).on('click', function () {
        // in function functions, this -> button.addSkillButton
        const $button = $(this);
        const $skillInput = $button.prev();
        const skillName = $skillInput.val();

        const $ul = renderSkillsUl(skillName);
        $button.after($ul);

        $skillInput.val('');
      }),
    );

  // hoisting function functions
  function render(person) {
    // all in memory
    const $personDisplay = $('<div>', {
      class: 'personDisplay',
    })
      .append(renderPerson(person))
      .append(renderPersonSkills(person));

    return $personDisplay;
  }

  function renderPerson(person) {
    // destructurare
    const { name, age, surname } = person;
    // const name = person.name;
    // const age = person.age;
    // const surname = person.surname;

    return $('<p>', {
      text: `${name} ${surname}: ${age}`,
    });
  }

  function renderPersonSkills(person) {
    const { skills, ...restOfPerson } = person;
    const { name } = restOfPerson;

    let message = '';
    skills.forEach(function (skill, index, skills) {
      let punctuation = ', ';
      if (index === skills.length - 1) {
        punctuation = '.';
      }

      if (index === skills.length - 2) {
        punctuation = ' and ';
      }

      message += `${skill}${punctuation}`;
    });

    return $('<p>', {
      text: `${name}'s skills are: ${message}`,
    });
  }
});
