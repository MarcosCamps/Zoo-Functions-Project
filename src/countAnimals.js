const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objeto = {};
    species.forEach((element) => {
      objeto[element.name] = element.residents.length;
    });
    return objeto;
  }
  const { specie, sex } = animal;
  if (Object.keys(animal).length === 1) {
    const countSpecie = species.find((newSpecie) => newSpecie.name === specie).residents.length;
    return countSpecie;
  }
  if (Object.keys(animal).length === 2) {
    const countGender = species.find((curr) => curr.name === specie).residents.filter((gender) => gender.sex === sex).length;
    return countGender;
  }
}
// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
