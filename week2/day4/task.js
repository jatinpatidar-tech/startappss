


let s="abbbcccc";

 let count=1;
 let ans=0;

 console.log(s);
for(let i=0; i <s.length; i++){
   if(s[i]!=s[i+1]){
       if(count>ans){
    ans=count;
   }
   count=0;

   }{
    count++;
   }
   
}
console.log(ans)