const data = require('../data/zoo_data');

const { employees, species } = data;
// pegar o nome da especie usando o find.
function speciesName(id) {
  return species.find((specie) => specie.id === id).name;
}
// pegar a localização usando o find.
function speciesLocation(id) {
  return species.find((specie) => specie.id === id).location;
}

function noParameter() {
  const arr = [];
  employees.forEach((element) => {
    arr.push({
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: element.responsibleFor.map((responsible) => speciesName(responsible)),
      locations: element.responsibleFor.map((responsible) => speciesLocation(responsible)),
    });
  });
  return arr;
}

function getEmployeesCoverage(obj) {
  if (typeof obj === 'undefined') return noParameter();
  const employee = employees
    .find((employe) => employe.firstName === obj.name || employe
      .lastName === obj.name
      || employe.id === obj.id);
  if (typeof employee === 'undefined') throw new Error('Informações inválidas');
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((responsible) => speciesName(responsible)),
    locations: employee.responsibleFor.map((responsible) => speciesLocation(responsible)),
  };
}
// Projeto finalizado com pesquisas e auxilio de mentoria.
module.exports = getEmployeesCoverage;
