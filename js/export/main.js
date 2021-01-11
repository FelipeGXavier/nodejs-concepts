import * as all from "./b.js";
import { x } from "./b.js";
import def from "./b.js";

const classes = require("./class");

const {doPrint, done} = require("./m1");

console.log(all.foo.foo());
all.foo.bazz();

console.log(all.x);
console.log(all.y);

console.log(x);

def();


console.log(new classes.Testing().foo());
console.log(new classes.Naming().bar());

console.log(doPrint());