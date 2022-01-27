const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const ifIsTrue = employees.some((employee) => employee.managers.includes(id));
  return ifIsTrue;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const manegerList = employees.filter((employee) => employee.managers.includes(managerId));
    const theManeger = manegerList.map((menager) => `${menager.firstName} ${menager.lastName}`);
    return theManeger;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
