const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");

process.stdout.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.includes("cat")) {
    let cmd1 = cmd.split(" ");
    cat(cmd1[1], done);
  } else if (cmd.includes("curl")) {
    const cmdArr = cmd.split(" ");
    curl(cmdArr[1], done);
  }
});
