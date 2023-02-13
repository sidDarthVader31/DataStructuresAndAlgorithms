/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
   //convert to number
   let newArray=digits;
   let pointer= digits.length-1;
   let carry=0;
   while(pointer>=0){
     carry=0;
     if(digits[pointer]<9){
       newArray[pointer]= digits[pointer]+1;
       break;
     }
     else{
       newArray[pointer] = 0;
       carry=1;
       pointer--;
     }
   }
   if(carry==1 && newArray[0]<9){
     newArray.unshift(newArray[0]+1);
   }
   else if(carry==1 && newArray[0]==9){
     newArray.unshift(1);
   }
   return newArray;
}


console.log(plusOne([9]));

