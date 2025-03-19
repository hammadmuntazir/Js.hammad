// Immediately Invoked Function Expressions(IIFE)
        //namedIFFE,ParameterIFFE,2IFFE aik saat ,withoutname IFFE
//()sy function ka aik block bana do
(function chai(){
    //namedIFFE
    console.log(`DB CONNECTED`);36
    
})();
//first parenthesis() jis mein jidr hum function ki defination likhny waly hain
//()2nd wala execution
/*=>Global Scope ky pollution sy problem hoti hai kafi baar
to us global scope ky jo variable ya declaration ko hatanay ky liye 
IIFE ka use krty hain*/

//IFFE invoke to hogaya mgr usy pta nai hai context rokna kidr hai
//usy end krny ky liye ;(semicolon use krna hoga)
( (name)=>{
    //without named IFFE
    console.log(`DB CONNECTED TWO${name}`)
})("hammad")//function ki trah parameter dy do 