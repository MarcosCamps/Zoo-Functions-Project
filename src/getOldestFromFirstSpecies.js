const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findSpecie = employees.find((employee) => employee
    .id === id).responsibleFor[0];
  const findOldest = species.find((specie) => specie
    .id === findSpecie).residents;
  let aboutAge = 0;
  findOldest.forEach((ageAnimal) => {
    if (ageAnimal.age > aboutAge) {
      aboutAge = ageAnimal.age;
    }
  });
  const arrayObj = findOldest.find((obj) => obj
    .age === aboutAge);
  return Object.values(arrayObj);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
