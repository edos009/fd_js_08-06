//! Example

// const number1 = 2;
// const number2 = 5;
// const symbol = "+";

// const getSum = function (n1, n2) {
//   return n1 + n2;
// };

// const strResult = `${number1} ${symbol} ${number2} = ${getSum(number1, number2)}`;
// console.log(strResult);

//! Example
/*
const getFullPath = function(path){
return `${PROTOCOL}${LOCAL_SERVER_IP}:${LOCAL_SERVER_PORT}/${path}`;
}

console.log(getFullPath('index.html'));
*/

//! Example
/*
const user = {
  name: "Tom",
  age: 12,
  getUserInfoString: function (n) {
    return `Through ${n} year, ${this.name} will be ${this.age + n}.`;
  },
};

console.log(user.getUserInfoString(14));
*/

//! Example
/*
const multipleTable = function () {
  const table = {};

  for (let i = 1; i <= 10; i++) {
    table[`${i}`] = {};
    for (let j = 1; j <= 10; j++) {
      table[`${i}`][`${i} * ${j} = `] = i * j;
    }
  }

  return table;
};

const multTable = multipleTable();
console.log(multTable);
*/

// const getValueMultiple = function(table, str){
// return table[str];
// }

// console.log(getValueMultiple(multTable, '5 * 5 = '));


