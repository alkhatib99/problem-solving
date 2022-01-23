'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78

//  
// ------------------------

const findMax = (arr)=>{
    let max=0;
for (var i = 0; i < arr.length; i++)
{
    if (arr[i] > max){
    max=arr[i];
    }
}
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    let sum=0;

for (var i = 0; i < arr.length; i++)
{
    if(typeof(arr[i]) =='number')
    sum+=arr[i];
}
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
    // write your code here
    let arr2=[];
    for (var i = arr.length-1 ; i >= 0; i--)
{
   arr2.push(arr[i]);
}
return arr2;
}


module.exports = {findMax , sumNums, reverseArray};