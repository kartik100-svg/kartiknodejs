const express = require('express')
const path = require('path')
const app = express()
 
// console.log(__dirname , "../public")

// console.log(path.join(__dirname , "../public"));
const staticPath = path.join(__dirname , "../public") ;
// built in middleware 
app.use(express.static(staticPath))


app.get('/' , (req , res) => {
    res.send("welocme to web page")
})
app.get('/about' , (req , res) => {
    res.send("welocme to about web page")
})
app.get('/contact' , (req , res) => {
    res.send("welocme to contact web page")
})
app.get('/temp' , (req , res) => {
    res.send("welocme to temp web page")
})

app.listen(8000 , () => {
    console.log("All events ports are hosted by 8000")
})