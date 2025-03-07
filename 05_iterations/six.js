const coding=["js","ruby","java","python","cpp"]

// const values =coding.forEach( (item)=>{
//     console.log(item);
//     return item;//return kuch nai hota
// }   )
// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]
  //filter bi call back hi leta hai apny andar
  //filter value return kr raha hai yh operation for each mein
  //bi hota hai mgr vo value return nai kry ga
//const newNums = myNums.filter((num)=>num>5)
//console.log(newNums);
      //jub bi hum filter use krty hain to humy filter mein aik
      //call back function mily ga jis mein haar value ko each access
      //kia jaye ga usky baad deni hogi condition ,jo jo condition
      //ko satisfy kry gyein aur true hogi condition to vo value
      //return ki jaye gi wrna vo value nai return ki jaye gi


// const newNums = myNums.filter((num)=>{
//      return num>4
//  //agr parenthesis lgye gye to khud ho jaye gi return agr curly braces hoga to return likh kr return krvana hoga
// })
// console.log(newNums);
      
        // //using For Each
        // const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // const newNums1 = [];
        
        // myNums1.forEach((num) => {
        //     if (num > 4) {
        //         newNums1.push(num);
        //     }
        // });
        
        // console.log(newNums1); // Output: [5, 6, 7, 8, 9, 10]
      const books = [
            { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
            { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
            { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
            { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
            { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
            { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
            { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
            { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
            { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
          ];
 userBooks =books.filter((bk)=>bk.genre ==="History")
 userBooks=books.filter((bk)=>{
    return bk.publish >=1995 && bk.genre==="History"
 })
console.log(userBooks);
//database mein bi assy hi krty hain
