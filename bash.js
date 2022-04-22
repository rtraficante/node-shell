const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

process.stdout.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.includes("cat")) {
    let cmd1 = cmd.split(" ");
    cat(cmd1[1]);
    // process.stdout.write(cmd);
  }
});
