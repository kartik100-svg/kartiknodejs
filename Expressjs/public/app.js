const express = require("express")
const app = express()

app.get("/" , (req , res) => {
    res.send("welcome to expressjs")
})
app.get("/about" , (req , res) => {
    res.send("welcome to expressjs to about page")
})

app.listen(8000 , () => {
    console.log("listening port is also available")
})