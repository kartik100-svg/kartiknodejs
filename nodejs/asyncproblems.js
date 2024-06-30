const fs = require("fs")
// fs.writeFile('index.txt', "Machine learning is one of the difficult jobs in software engineering but it is high payable jobs" , (err) =>{
//     console.log("hello baby")
// })
// fs.appendFile('index.txt' , " machine learning change the whole world" ,(err) =>{
//     console.log(err)
// })
// fs.readFile("index.txt" , "UTF-8" , (err , data)=> {
//     console.log(data)
// })
// fs.rename('bio.txt' , 'hlo.txt' , (err) => {
//     console.log(err);
// })
fs.unlink('hlo.txt' , (err) => {
    console.log(err)
})