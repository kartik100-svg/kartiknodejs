// import EventEmmiter from "events "
const EventEmmiter = require("events")
const event =  new EventEmmiter();
// event.on("sayMyName" , ()=> {
//     console.log("my name is kartik")
// })

// event.emit("sayMyName")

event.on("myStatusCode" , (sc , msg) => {
    console.log(`The status code is ${sc} and server message ${msg}`)
})

event.emit("myStatusCode" , 200 , "OK")