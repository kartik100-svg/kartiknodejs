const fs = require("fs")

// creating a new file 
// fs.writeFileSync('read.txt' , "welcome to my chacha kitchen")
// overright sync property 
// fs.writeFileSync('read.txt' , " tera mera kitchen , welcome to my chacha kitchen")
// fs.appendFileSync('read.txt' , " your uncle kitchen")
const buf_read = fs.readFileSync("read.txt")
// console.log(buf_read);
// Node.js additionaly include datatype calle buffer 
// not available in browser javascript 
// buffer is mainly used to store binary data
// while reading from a file and receiving packets over a network  

{/* <Buffer 20 74 65 72 61 20 6d 65 72 61 20 6b 69 74 63 68 65 6e 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 63 68 61 20 6b 69 74 63 68 65 6e 20 ... 18 more bytes> */}
// but original data fetches to convert a string 
org_read  = buf_read.toString()
// console.log(org_read);
// to rename the file 
fs.renameSync('read.txt' , 'kyobtau.txt')