const Round = (value, decimals) => {
  const num = Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  return DotInBetween(num);
};

const DotInBetween = (num) => {
  let myFunc = (num) => Number(num);
  const intArr = Array.from(String(num), myFunc);
  let arr = [];
  intArr.forEach((elm, i) => {
    console.log(i);
    if (i % 3 === 0 && i != 0 && i != intArr.length) arr.push(".", elm);
    else arr.push(elm);
  });
  return arr.join("");
};

export default Round;
