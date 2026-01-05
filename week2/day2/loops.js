// let arr= [1,2,3,"hy",5];
// for ( let i of arr){
//     console.log(i);
// }
// for ( let i in arr){
//     console.log(i);
// }
// let s= "hello";
// for ( let i in s){
//     console.log(i," ", s[i]);
// }



let map= new Map();
map.set("name","John");
map.set("age",30);
for ( let [key,value] in map){
    console.log(key," ",value);
}


