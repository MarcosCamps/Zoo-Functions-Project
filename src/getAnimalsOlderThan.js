const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minimumAge) {
  const getAnimal = data.species.find((element) => element.name === animal).residents;
  const ageAnimal = getAnimal.every((element1) => element1.age >= minimumAge);
  return ageAnimal;
}
// Projeto finalizado com auxílio de Guga Santos Tribo B
module.exports = getAnimalsOlderThan;
