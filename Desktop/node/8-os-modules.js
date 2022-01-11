const os = require("os");
const { uptime } = require("process");

// current user
const user = os.userInfo();
// console.log(user);

// system uptime
// console.log(`system uptime: ${os.uptime()} secs`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
