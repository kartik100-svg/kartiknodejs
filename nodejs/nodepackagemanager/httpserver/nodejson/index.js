const bioData = {
    Name : "kartik",
    Class : "B-tech" , 
    Branch : "Information Technology"
}


// To convert object data to json 
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// {"Name":"kartik","Class":"B-tech","Branch":"Information Technology"}


// To convert json to object data 

const objData = JSON.parse(jsonData)
console.log(objData);