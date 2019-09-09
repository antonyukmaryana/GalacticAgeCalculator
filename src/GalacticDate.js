export class GalacticDate extends Date {

  constructor(age, planet) {
    super();

    this.age = age;
    this.planet = planet;
    this.planetAge = 0;

  }

  getVenusAge() {
    return this.age * .62;
  }


  getMarsAge() {
    return this.age * 1.88;
  }


  getJupiterAge() {
    return this.age * 11.86;
  }

  calculateGalacticAge() {
    if (this.planet == "Venus") {
      this.planetAge = this.getVenusAge();
    } else if (this.planet == "Mars") {
      this.planetAge = this.getMarsAge();
    } else if (this.planet == "Jupiter") {
      this.planetAge = this.getJupiterAge();

    }
  }
}

