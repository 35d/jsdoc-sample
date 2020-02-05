/**
 * 与えられた数値配列の合計値を返す
 * @param {Array<number>} list - 数値リスト
 * @returns {number} - 合計値
 */
const calcTotal = numArray => {
  let total = 0;
  numArray.forEach(num => {
    total += num;
  });
  return total;
};

export { calcTotal };
