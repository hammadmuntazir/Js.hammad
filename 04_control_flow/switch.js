// switch (key) {//key vo value jo mujy haar baar check krni hai
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
//const month="jan"
switch(month){
    case 1:
//  case "jan":
        console.log("January");
        break;        

    case 2:
//  case "Feb":
        console.log("Feburary");
        break;        

    case 3:
//  case "March":
        console.log("March");
       break;        
//=>//agr break na ho to match hony waly case ky baad waly sary cases
//ka code execute hota hai *except default* without comparing them with key
    case 4:
// case "April":
        console.log("April");
        break;        
    
    default:
        console.log("default case match");
        break;
    }