import {x} from "./b.js";

class Testing {

  foo() {
    return "Bar";
  }
}

class Naming {

  bar() {
    return "Bazz";
  }
}

/*exports.Testing = Testing;
exports.Naming = Naming;*/

module.exports = {
  Testing,
  Naming
}

console.log(x);

