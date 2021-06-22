class StringMathOperations {
  calculate(str) {
    if (typeof str !== 'string') {
      throw new Error(`Should be a string, but passed in the ${typeof str}`);
    }
    let result = '';
    const add = (item) => {
      item = item.substring(1);
      result += item;
      return item;
    };
    const multiply = (item, index, array) => {
      let tempItem = array[index - 1];
      if (tempItem.length > 1 && tempItem[0] === '+') {
        tempItem = tempItem.substring(1);
      }
      const multiplier = +item.substring(1);
      const endItem = tempItem.repeat(multiplier - 1);
      result += endItem;
      return item;
    };
    const getResult = (item, index, array) => {
      if (item.includes('+')) {
        return add(item);
      }
      if (item.includes('*')) {
        return multiply(item, index, array);
      }
      result += item;
    };
    if (str.includes('(')) {
      const openingParanthese = str.indexOf('(') + 1;
      const closingParanthese = str.indexOf(')');
      const first = str.slice(openingParanthese, closingParanthese);
      const chunks = first.match(/[*+]?[a-z0-9]*/g);
      chunks.map((item, index, array) => getResult(item, index, array));
    }
    const chunks = str.match(/[*+]?[a-z0-9]*/g);
    chunks.map((item, index, array) => getResult(item, index, array));
    return result;
  }
}
