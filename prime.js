let num = 13;
let count_factors = 0;

for(let i=1;i<=num;i++){
  if(num%i == 0){
      count_factors++;
 }
}

if(count_factors == 2){
   console.log("Prime number");
}
  else{
     console.log("Not a Prime number");
}