/**
* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let left = 0;
  let right = s.length -1;
  const vowel = ['a','e','i','o','u','A','E','I','O','U'];
  let leftVowel='';
  let rightVowel='';
  while(left < right){
    if(!vowel.includes(s.charAt(left)) && !vowel.includes(s.charAt(right))){
      left++;
      right--;
    }
    else if(vowel.includes(s.charAt(left)) && !vowel.includes(s.charAt(right))){
    right--;
    }
    else if (!vowel.includes(s.charAt(left)) && vowel.includes(s.charAt(right))){
      left++;
    }
    else{
      //replace it 
    //  console.log(`left:`, left);
   //   console.log(`right:`, right);
      let leftVowel = s.charAt(left);
      s= setCharAt(s,left, s.charAt(right));
   //   console.log(`s first:`,s);
      s= setCharAt(s, right, leftVowel);
    //  console.log(`s now:`, s);
      left++;
      right--;
    }
  }  
  return s;
};

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
