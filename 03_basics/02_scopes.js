//curly braces hi scope hain function ka scope 
let a=40;
if(true){
    let a=10
    const b=20
    var c=30    
//console.log("inner a:",a)
}
//console.log("outer a :",a);
//console.log(b);
//console.log(c);
//var has global scope mostly we donot use it
//without curly bracket global scope hota hai
//node ky throuh global scope  and node global scope different hai<interview question>

  /*----------------------------------------------------*/
//global scope mn jo bi hai vo mn function ky andar access krskta hu mgr jo scope new bana us sy koi cheez bahir nai askti
function one(){
    const username="Hammad"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    //console.log(website)
 
     two()
}
//agr two ()ko call nai kry gye to kuch bi print nai hoga

//one()
//iski value sirf isi mn rahye gi
    
    //console.log(website)//line by line execution hoti hai

//two jo chota bacha hai vo one sy value mang skta hai 
//mgr bara bacha one two sy nai mang skta
//nested function mn child function parent ky variable ko access krskty hain

////////////******************/
if(true){
    const username="Ali"
    if(username === "Ali"){
        const website="Facebook"
    //  console.log(username + website )
    }
    //console.log(website);//scope ky bahir access nai hoga


}
//console.log(username)//iska scope idr nai hai

// +++++++++++++++++++++++++++interesting ++++++++++++++++//

//addone ko function ky decalaration sy pahly likhny pr bi function ko koi problem nai hui
console.log(addone(5)) 

function addone(num){
        return num +1//jo bi value ly rahye us mn add one kr rahye hain
}
//addone(5)



//isy 2nd function ko kbhi kabar expression bola jata hai
//addTwo(5)  //agr isy upar ly kr aye gye to error aye ga isy function bnany ky baad variable mn hold bi krdia ha
const addTwo =function(num){
    return num+2
}
addTwo(5)
//hoisting =>function kesy declare kesy hoty hain
//agr variable mn function ko hold kia hua hai to
// to declaration sy pahly use nai krskty