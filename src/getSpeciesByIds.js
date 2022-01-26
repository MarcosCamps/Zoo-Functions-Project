const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arraySpecie = ids.map((element) => species.find((specie) => specie.id === element));
  return arraySpecie;
}
console.log(getSpeciesByIds());
// Requisito concluído com exemplos tratados na mentoria.

module.exports = getSpeciesByIds;
