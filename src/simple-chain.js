const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(parseInt(position)) ||
      position === '' ||
      this.chain[position] === undefined
    ) {
      this.clearChain();
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  clearChain() {
    this.chain = [];
    return this.chain;
  },
  finishChain() {
    let resultChain = [];
    this.chain.map(item => {
      resultChain.push(`( ${item} )`);
    })
    this.clearChain();
    return resultChain.join('~~');
  },
};

module.exports = chainMaker;
