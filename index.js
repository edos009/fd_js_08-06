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

//!Example

const getNumFamilyMembers = function () {
  return prompt("Enter the number of family members: ");
};

const checkIsValueNotNumber = function (number) {
  return number === null || number === "" || isNaN(Number(number));
};

const checkIsValueNotString = function (string) {
  return string === null || string === "" || !isNaN(Number(string));
};

const getListFamily = function () {
  const family = {};
  while (true) {
    const numFamilyMembers = getNumFamilyMembers();
    if (checkIsValueNotNumber(numFamilyMembers)) {
      alert("This is not a number");
    } else {
      for (let i = 1; i <= Number(numFamilyMembers); i++) {
        while (true) {
          const nameMemberFamily = prompt("Enter family member's name: ");
          const memberFamily = prompt("Who is he? ");
          if (
            checkIsValueNotString(nameMemberFamily) ||
            checkIsValueNotString(memberFamily)
          ) {
            alert("This is not a string");
          } else {
            family[nameMemberFamily] = memberFamily;
            break;
          }
        }
      }
      break;
    }
  }

  return family;
};

console.log(getListFamily());

//! Example

// const showRange = function (max, min, num) {
//   for (let i = max; i >= min; i--) {
//     if (i % num === 0) {
//       console.log(i);
//     }
//   }
// };

// showRange(30,20,7);
