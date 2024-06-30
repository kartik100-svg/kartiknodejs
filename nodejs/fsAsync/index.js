const fs = require("fs")
// fs.writeFile('fsAsync/read.txt' , "Namastey bolo ya fir RADHE RADHE BOLO lekin bolo " , (err)=>{
//     console.log("file is completed")
// })
// fs.appendFile('fsAsync/read.txt' , " JAI SHREE RAM , JAI SHREE KRISHNA " , ()=>{
//     console.log("write file worked in async");
// })

fs.readFile('fsAsync/read.txt' , "UTF-8" , (err , data)=>{
    console.log(data)
})