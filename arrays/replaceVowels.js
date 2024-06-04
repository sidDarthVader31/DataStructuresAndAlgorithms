/**
 *
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede

link : https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length -1 ;
    const arr = Array.from(s);
    while(left < right){
        if(isVowel(arr[left]) && isVowel(arr[right])){
            let temp = arr[left]
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        else if(isVowel(arr[left]) && !isVowel(arr[right])){
            right--;
        }
        else if(!isVowel(arr[left] && isVowel(arr[right]))){
            left ++;
        }
        else{
            left++;
            right--;
        }
    }
    console.log(`arr:`, arr)
    return arr.join('')
};


function isVowel(char){
    const vowels  = ['a','e','i','o','u','A','E','I','O','U'];
    return vowels.includes(char);
}
