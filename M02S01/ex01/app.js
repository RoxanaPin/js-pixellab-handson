class Car {
  //var1
  topSpeed = 160;
  isTrunkOpen = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    //var2
    this.topReverseSpeed = -50;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
      //return = break pt bucle.
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }
    this.speed = speed;
  }

  //tema:
  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    if (turnLightsOn === true) {
      this.areLightsOn = true;
    } else {
      this.areLightsOn = false;
    }
  }
}

const audi = new Car('Audi', 'black', 4, 50);

console.warn(`
Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3). O poti salva intr-o variabila numita opel.
`);

const opel = new Car('Opel', 'red', 4, 3);

//Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])
//Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
//“Masina era marca make si se deplasa cu speed km/h.”
//In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h.”
