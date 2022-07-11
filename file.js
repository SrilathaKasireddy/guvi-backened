 const fs=require("fs");
create
fs.writeFile("./awesome.html",quote,(err)=>{
 console.log("completed writing")})


 for(let i=1;i<=10;i++){
  fs.writeFile(`./backup/text-${i}.html`,quote,(err)=>{
   console.log(`completed writing text-${i}.html`)})
  
 }
 const[ , ,noffiles]=process.argv
 for(let i=1;i<=noffiles;i++){
  fs.writeFile(`./backup/text-${i}.html`,quote,(err)=>{
   console.log(`completed writing text-${i}.html`)})
  
 }
//read
 fs.readFile("./cool.txt","utf-8",(err,data)=>{
  if(err){
   console.log(err);

  }
  else{
  console.log(data)}
 })




 const quote="now or never"
update
 fs.appendFile("./nice.txt","\n"+quote,(err)=>{
  console.log("completed writing")
 })
 

delete

 fs.unlink("./delete.css",err=>{
  if(err){console.log(err)
  }else{
  console.log("completed deleting")
 }})










 