export class GalacticDate extends Date {

  constructor(year, month, day, age, planet) {
    super();
    

    this.setFullYear(year);
    this.setMonth(month);
    this.setDate(day);
    this.age = age;
    this.planet = planet;
    this.planetAge = 0;
    this.remainPlanetYears = 0;
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


  calculateGalacticAge(){
    
    const VenusMax = 54.56;
    const MarsMax = 165.44;
    const JupiterMax = 1043.68;
    
    }else if(this.planet == "Venus"){
      this.planetAge = this.getVenusAge();
      this.remainPlanetYears = Math.ceil( VenusMax - this.planetAge);
      return;
    }else if(this.planet == "Mars"){
      this.planetAge = this.getMarsAge();
      this.remainPlanetYears = Math.ceil( MarsMax - this.planetAge);
      return;
    }else if(this.planet == "Jupiter"){
      this.planetAge = this.getJupiterAge();
      this.remainPlanetYears = Math.ceil( JupiterMax - this.planetAge);
      return;
    }else{
      return;
    }

  }
}

