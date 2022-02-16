// sync read and write file 

const { readFile , writeFile ,appendFile } = require('fs');



// convert to promises async awaits
function readasync(readthis) {
    
    return new Promise((resolve,reject)=>{

        readFile(readthis,'utf-8',(err,result)=>{

            if (err) reject(err) 
        
            resolve( result)
            

        })

    })

}

// readasync('./text101/readmetxt.txt',"").then(res=>{

//     return readasync('./text101/readmetxtv2.txt',res);
// }).then(ress=>{
    
//     writeFile('./text101/textsyncpromises.txt',`sync write : ${ress} `,(err,result)=>{
//         if (err) throw console.log(err);

//             console.log(result);
            
//         })

// }).catch(err=>{
//     console.log(err);
// })

//awaits 
async function writefile() {
    try{
        const ffunc = await readasync('./text101/readmetxt.txt');
        const ffunc2 = await readasync('./text101/readmetxtv2.txt');
        
        console.log(ffunc , ffunc2);
    
        appendFile('./text101/textsyncawaits.txt',`sync write awaits : ${ffunc + ffunc2} `,(err,result)=>{
                    if (err) throw console.log(err);
            
                        console.log(result);
                        
                    })
    }catch(err){
        console.log("there is an error!! ",err);
    }
   

}   
writefile();







//callback hell
// readFile('./text101/readmetxt.txt','utf-8',(err,result)=>{

//     if (err) throw console.log(err);

//     const first = result;
//     console.log(first , 'this is first');

//     readFile('./text101/readmetxtv2.txt','utf-8',(err,result1)=>{

//         if (err) throw console.log(err);
    
//         const sec = result1;

//         writeFile('./text101/textsync.txt',`sync write : ${first + sec} `,(err,result)=>{
//         if (err) throw console.log(err);

//             console.log(result);
            
//         })
        
    
//     })


// })




