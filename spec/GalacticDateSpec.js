import { GalacticDate } from './../src/GalacticDate.js';

describe('GalacticDate', function () {
  
  let mars = new GalacticDate(3, "Mars");
  mars.calculateGalacticAge();
  let venus = new GalacticDate(3, "Venus");
  venus.calculateGalacticAge();

  let jupiter = new GalacticDate(3, "Jupiter");
  jupiter.calculateGalacticAge();

  it('should test whether calculate galactic age branches to mars', function () {
    expect(mars.planetAge).toEqual(7.52);
  });
  
  it('should test whether calculate galactic age branches to venus', function () {
    expect(venus.planetAge).toEqual(2.48);
  });
  
});