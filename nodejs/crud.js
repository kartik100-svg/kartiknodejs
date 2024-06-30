const ks = require("fs");
ks.writeFileSync('bio.txt' , "Hello my name is kartik gaud i am a first year student of btech it and i am a passioned about programming i want to tell you software engineering is one of the main goal of our indian future so software engineering make rich a man this is a future");
ks.appendFileSync('bio.txt' , " Ai can replace the software engineering NO this in not true beacause AI is a machine model it can replace the human AI model can not replace the human feelings ")
 const reading = ks.readFileSync('bio.txt');
 heavyReading = reading.toString();
// console.log(heavyReading)
ks.renameSync('bio.txt' , 'AIBIO.txt')
ks.unlinkSync('AIBIO.txt')

