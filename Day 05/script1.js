//3.Do the below programs in arrow functions

//Print odd numbers in an array
let arr4 = [1,2,3,4];
oddnumber=(arr4)=>{
  for(let i=0; i<arr4.length;i++){
    if(arr4[i]%2!=0){
      console.log(arr4[i]);
    }
  }
}   
oddnumber(arr4);

//Convert all the strings to title caps in a string array
let string = "hi sakthi vikash";
let titlecap= (string)=>{
    return string.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
}
console.log(titlecap(string));

//Sum of all numbers in an array
var arr3 = [1,2,3,4];
let addnum =(arr3)=> {
    return arr3.reduce((a, b) => a + b, 0);
};
console.log(addnum(arr3));

//Return all the prime numbers in an array
var array1 = Array(20);
var ans1=[];
var answer1= (array1)=> {
for (var i=2 ; i<=array1.length-1; i++) {
    if((i%2===0))
    continue;
     ans1.push(i);  
    }
console.log(ans1);
} 
answer1(array1);

//Return all the palindromes in an array
const arr5 = ['vikas', 1344, 12321, 'did', 121];
const isPalindrome1 = (el) => {
   const str2 = String(el);
   let i = 0;
   let j = str2.length - 1;
   while(i < j) {
      if(str2[i] === str2[j]) {
         i++;
         j--;
      } 
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome1 = (arr5)=>{
   return arr5.filter(el => isPalindrome1(el));
};
console.log(findPalindrome1(arr5))
