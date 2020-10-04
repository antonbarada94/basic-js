module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, result = []) {
    result.push(depth);

    arr.map(item => {
      if (Array.isArray(item)) {
        this.calculateDepth(item, depth + 1, result);
      }
    })

    return Math.max(...result);
  }
};