const str = "Banana";
console.log(str);

console.log("Lower: " + str.toLocaleLowerCase() + ", Upper: " + str.toUpperCase());

const indexOf = str.indexOf("a", 2);
console.log("Index of: " + indexOf);

const lastIndexOf = str.lastIndexOf("a");
console.log("Last index of: " + lastIndexOf);

console.log("Starts with: " + str.startsWith("Ban"));
console.log("Ends with: " + str.endsWith("na"));

const parts = str.split("n");
console.log("Split: " + parts);

console.log("Includes: " + str.includes("Ban"));

console.log("Replace (Only first occurence): " + str.replace("a", "b"));

const substr = str.substr(str.indexOf("n"));

console.log("Substr: " + substr);

console.log("Slice: " + str.slice(-2));



