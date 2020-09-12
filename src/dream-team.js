module.exports = function createDreamTeam(members) {
  return !Array.isArray(members) ?
    false :
    members.filter(el => typeof (el) === "string").map(item => item.trim().slice(0, 1).toUpperCase()).sort().join('');
};
