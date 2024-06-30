const express = require('express')
const app = express();
const port = 8000;
const path = require("path")
// console.log(path.join(__dirname  , "../src"))
const staticPath = path.join(__dirname  , "../src");
const templatepath = path.join(__dirname, "../templates")
app.use(express.static(staticPath))
app.set("view engine" , "hbs")
app.set("views" , templatepath)
app.get("/" ,(req , res) =>{
    res.send("This is a local host of websites")
})
 

app.listen(port , () =>{
    console.log(`This is the port ${port}`)
})
 
