const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
    // If auxiliado por Victor Amancio Tribo C
  }
  return data.employees.find((employee) => employee
    .firstName === employeeName || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
