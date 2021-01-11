const a = require('./a.js');

export const foo = a;

const x = 10;
const y = 20;

a.bazz();

export default function() {
  console.log("Hello World");
};

export {x, y};