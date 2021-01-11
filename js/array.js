const data = [1, 2, 3, 4, 7, 6, 5, 8, 9, 10];
console.log(data);

const double = data.map((item) => {
  return item * 2;
});
console.log('Double: ' + double);

const some = data.some((item) => {
  return item % 2 == 0;
});
console.log('Some: ' + some);

const every = data.every((item) => {
  return item % 2 == 0;
});
console.log('Every: ' + every);

const filter = data.filter((item) => {
  return item % 2 == 0;
});
console.log('Filter: ' + filter);

const join = data.join("");
console.log("Join: " + join);

const sort = data.sort((a, b) => b - a);
console.log("Sort desc: " + sort);

const sortAsc = data.sort((a, b) => a - b);
console.log("Sort asc: " + sortAsc);

const reverse = data.reverse().join(" ");
console.log("Reverse: " + reverse);

console.log("Foreach")
data.forEach(item => {
  console.log(item);
});

data.shift();
console.log("Shift (Remove element from beggining): " + data);

data.unshift(4, 5);
console.log("Unshift (Add the element to the beginning): " + data)

data.pop();
console.log("Pop: " + data);

const str = "abcde";
const splittedStr = str.split("").join(", ");
console.log("Split: " + splittedStr);

console.log("Includes: " + data.includes(0));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log("Spread: " + newArr);

const reduce = data.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log("Reduce: " + reduce);

const find = data.find(item => {
  return item > 4;
});

console.log("Find (first occurence that satisfy the condition): " + find);

const entries = data.entries();

console.log("Entries: " + entries.next().value);



