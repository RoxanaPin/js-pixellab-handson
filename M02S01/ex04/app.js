class Car {
  // e = document.createElement;
  // e este un element, ca sa nu repet 'document.createElement' de fiecare data=pointer;
  // nu a functionat aceasta varianta, facem din e functie

  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;
    // px=pixeli

    // this.car = document.createElement('div');
    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);
    //leg this.frame de this.car;

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = this.color;

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);
    this.carBody.style.backgroundColor = this.color;

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
  }

  render() {
    document.body.append(this.frame);

    return this;
    // this=pointer catre locatia in memorie catre fiecare browser in parte
  }

  turnLightOn() {
    //manipuleaza elementul de DOm si pune clasa;
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
    // returneaza instantza;
  }

  e(elementName) {
    //wrapper in action
    return document.createElement(elementName);
  }
  // e este o functie care inlocuieste 'document.createElement';
}
//functia render introduce frame.ul in DOM

const car01 = new Car(350, 16, 'red');
car01.render();
const car02 = new Car(16, 350, 'blue');
car02.render();

const car03 = new Car(16, 16, 'teal').render().turnLightOn();
// car03.render();
// car03.turnLightOn();

// scriu in consola 'car03.turnLightOff()' si imi inchide farul la masina teal, deci merge
