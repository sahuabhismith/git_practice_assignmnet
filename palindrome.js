let str = "madam";
let rev_str = "";
for(i=str.length-1;i>=0;i--){
  rev_str = rev_str + str[i];
}
if(str == rev_str){
console.log("Palindrome");
}
else{
console.log("Not a Palindrome");
}
