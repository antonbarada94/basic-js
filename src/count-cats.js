module.exports = function countCats(backyard) {
  let count = 0;
  backyard.map(item => item.map(el => el == "^^" ? count++ : count))
  return count;
};
