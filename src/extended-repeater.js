module.exports = function repeater(str, options) {
  // checking and setting by task condition
  if (typeof str !== "string") {
    str += '';
  }
  
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = '+';
  }

  if (options.hasOwnProperty("addition")) {
    if (typeof options.addition !== "string") {
      options.addition += '';
    }
    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1;
    }
    if (!options.additionSeparator) {
      options.additionSeparator = "|";
    }
  } else {
    options.addition = "";
  }

  //main algorithm
  let result = [];
  let additionValue = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    let newStr = "";
    newStr += options.addition;
    additionValue.push(newStr);
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str + additionValue.join(options.additionSeparator))
  }
  return result.join(options.separator);
};
