 
//  let arr= [10,20,30,40,50];

//  let ans=arr.reduce((acc, i)=>{
//    return acc+i,0
//  })
//  console.log(ans)

 let arr = [1,2,3,4];
let sum = arr.reduce((acc, val) => {return acc+val}, 0);
console.log(sum); // 10
console.log(arr); // [1,2,3,4]

