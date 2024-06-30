// The http.createServer()method includes request and response parameters which is supplied

// the request objects can be used to get information about the current HTTP request
//eg. , url, request header , and data.
// The response objects can be used to send a response for a current HTTP request .

//if the response from the HTTP server is supposed to displaued as HTML ,
//you should include an HTTP header with the correct content type;






import http from 'http';

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    if(req.url = "/"){
        console.log("Hello from the other side kartik")
    }else if (req.url = "/about"){
        console.log("Hello from the about side kartik")
    }
    else if (req.url = "/home"){
        console.log("Hello from the home side kartik")
    }

})
server.listen(8000 , "127.0.0.1" , ()=>{
    console.log("listening to the post")
})

