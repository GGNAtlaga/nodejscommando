const aa = require('./node1')
const ma = require('path')
const fs = require('fs')
const http = require('http')
const ld = require('lodash')
console.log(ld.size("ABC"));





// const server = http.createServer( function (req, res) {
//     res.write('<h1>zeus page!!</h1>')

//     if (req.url === "/") {
//         console.log(
//             "welcome to home page!!"
//         );
//         res.end('welcome to home page!!')
//     }
//     if (req.url === "/error") {

//     console.log("Something went wrong!!");
//     res.end(`<h1>Something went wrong!!!!</h1>
//     <a href="/">GO back to home pages!</a>
//     `)

//     }

//   });

// server.listen(777 , err=>{
// if (err) return console.log(err);

// console.log("server is walking...");
// })

// const object1 = {
//     name:"cj",
//     age:20
// }
// console.log(JSON.stringify(object1));

// {"name":"cj","age":20}


// const Am = new aa(11);
// Am.haha();
// const classs = aa.locate;
// const Am = new classs(11);
// Am.haha();
// const age = aa.age;
// console.log(`My is ${age}`);
// const users = aa.person;

// users.forEach(e=>{
//     console.log(e.lastname);
// }

// fs.writeFile(ma.join(__dirname,"builtin-mod.js"),"",err=>{
//     if (err) return console.log(err);

//     console.log("new file created");
//     console.log(__dirname);
        
    
// });
// console.log(aa.person);

