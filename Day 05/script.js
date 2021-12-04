//1.Do the below programs in anonymous function & IIFE

//Print odd numbers in an array
let arr = [1,2,3,4];
let oddnum= function (arr){
  for(let i=0; i<arr.length;i++){
    if(arr[i]%2!=0){
      console.log(arr[i]);
    }
  }
}   
oddnum(arr);

//Convert all the strings to title caps in a string array
let str = "hi sakthi vikash";
let title=function (str){
    return str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
}
console.log(title(str));
    
//Sum of all numbers in an array
var arr1 = [1,2,3,4];
let add = function(arr1) {
    return arr1.reduce((a, b) => a + b, 0);
};
console.log(add(arr1));

//Return all the prime numbers in an array
var array = Array(20);
var ans=[];
var answer= function (array){
for (var i=2 ; i<=array.length-1; i++) {
    if((i%2===0))
    continue;
     ans.push(i);  
    }
console.log(ans);
} 
answer(array);

//Return all the palindromes in an array
const arr2 = ['vikas', 1344, 12321, 'did', 121];
const isPalindrome = function (el){
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } 
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = function (arr2){
   return arr2.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr2))

//Return median of two sorted arrays of same size
let arr6= [2,4,3,8,5];
let arr7= [1,6,2,7,9];
let con = arr6.concat(arr7);
 con = con.sort((a,b)=>a-b);
  let len = con.length;
  let median = function (con){
    if(len%2 ===1){
      return con[(len/2) - .5];
    } else{
      return (con[(len/2) - 1] + con[len/2]) /2;
    }
  }
  console.log(median(con));

//Remove duplicates from an array
let arr8= [1,2,4,3,3,3,4,5,3];
let removeDup= function (arr8){
  let result=[];
  for(let i=0;i < arr8.length;i++){
    if(result.length===0){
    result.push(arr8[i]);}
    if(result.indexOf(arr8[i]) ===-1){
     result.push(arr8[i]); 
    }
  } return result;
}
console.log(removeDup(arr8))

//Rotate an array by k times
let nums = [1,2,3,4,5];

const rotateArray1 = function(nums, k) {
  
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop(k));
    // console.log(nums)
  }
  return nums;
}
console.log(rotateArray1(nums,3));

