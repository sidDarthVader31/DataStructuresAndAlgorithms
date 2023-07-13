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

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowelsOptimized = function(s) {
  const vowel ={
    'a':true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'A':true,
    'E': true,
    'I': true,
    'O': true,
    'U': true
  }

  let left = 0;
  let right = s.length-1;
  let stringArray = s.split('');
  while(left < right){
    if(!vowel[stringArray[left]] && !vowel[stringArray[right]]){
      left ++;
      right--;
    }
    else if(!vowel[stringArray[left]] && vowel[stringArray[right]]){
      left++;
    }

    else if (vowel[stringArray[left]] && !vowel[stringArray[right]]){
      right --;
    }
    else{
      let leftvowel = stringArray[left];
      stringArray[left]= stringArray[right];
      stringArray[right]= leftvowel;
      left++;
      right--;
    }
  }
  const initialValue = ''
  return stringArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
};

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
