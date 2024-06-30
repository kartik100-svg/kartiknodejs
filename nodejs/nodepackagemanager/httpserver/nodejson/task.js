// 1: // convert js ->  json ==> data 
// 2: add another file 
// 3: read this file 
// 4: conver json - > js 

// const fs = require('fs')
import fs from 'fs'
const bioData = {
    Name : "kartik",
    Class : "B-tech" , 
    Branch : "Information Technology"
}
const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.JSON' , jsonData , (err)=> {
    console.log("done")
})
fs.readFile("json1.JSON" , "UTF-8" , (err , data)=>{
    console.log(data);
    const objData = JSON.parse(data);
    console.log(objData)
})