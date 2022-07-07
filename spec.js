const os= require("os");// import inbuilt package
//total ram & free ram 
console.log("Free memory=>", os.freemem()/1024/1024/1024);
//1 kb=1024 bytes
console.log("Total memory=>", os.totalmem()/1024/1024/1024);
console.log("Version=>", os.version());
console.log("Cpus=>", os.cpus());



