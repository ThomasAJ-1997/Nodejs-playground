// Node Code
const fs = require("fs");
// Blocking synchronous way
// const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about avocados: ${textIn}.\nCreated on ${Date.now}`;

// fs.writeFileSync("./1-node-farm/starter/txt/output.txt", textOut);
// console.log("File written");

// non-blocking, asynchronous wat
fs.readFile("./1-node-farm/starter/txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("File not found");

  fs.readFile(
    `./1-node-farm/starter/txt/${data1}.txt`,
    "utf-8",
    (err, data2) => {
      console.log(data2);
      fs.readFile(
        "./1-node-farm/starter/txt/append.txt",
        "utf-8",
        (err, data3) => {
          console.log(data3);

          fs.writeFile(
            "./1-node-farm/starter/txt/final.txt",
            `${data2}\n ${data3}`,
            "utf-8",
            (err) => {
              console.log("File has been written");
            }
          );
        }
      );
    }
  );
});

console.log("Will read file ");

// Even though this code works and does what it is intended to do,
// this is something that needs to be avoided as a developer. This is refered to as callback hell. To deal with this problem, advanced tools such as promises and async/await will be used to avoid callback hell; which was introduced in ES6.
