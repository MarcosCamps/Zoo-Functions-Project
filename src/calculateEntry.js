const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const children = entrants.filter((entrant) => entrant.age < 18).length;
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniors = entrants.filter((entrant) => entrant.age >= 50).length;
  const objeto = {
    child: children,
    adult: adults,
    senior: seniors,
  };
  return objeto;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrencePeople = countEntrants(entrants);
  let entryValue = 0;

  entryValue += entrencePeople.child * prices.child;
  entryValue += entrencePeople.adult * prices.adult;
  entryValue += entrencePeople.senior * prices.senior;
  return entryValue;
}

module.exports = { calculateEntry, countEntrants };
