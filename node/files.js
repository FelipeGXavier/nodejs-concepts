const fs = require("fs");

const fsPromises = fs.promises;

fs.writeFile("../bin/file.txt", JSON.stringify({customer: 1}), err => {
  console.log(err);
  return;
});

fs.readFile("../bin/file.txt", (err, data) => {
  console.log(data.toString("utf-8"));
});

console.log(__dirname);

fsPromises.readFile("../bin/file.txt").then(data => {
  console.log(data.toString("utf-8"));
}).catch(err => {
  console.error(err);
})

const read = async () => {
  const data = await fsPromises.readFile("../bin/file.txt");
  console.log(data.toString("utf-8"));
}

read();



