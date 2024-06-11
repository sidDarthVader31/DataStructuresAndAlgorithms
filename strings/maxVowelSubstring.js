/**
 *Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 *
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxVowels = 0;
    let vowelCount = 0;
    for(let i =0;i< k ;i++){
        if(isVowel(s.charAt(i))){
            maxVowels++;
        }
    }
    vowelCount = maxVowels

    //slide window 
    for(let i =k;i< s.length;i++){
        if(isVowel(s.charAt(i-k))){
            vowelCount--;
        }
        if(isVowel(s.charAt(i))){
            vowelCount++;
        }
        maxVowels = Math.max(maxVowels, vowelCount);
    }
    return maxVowels;
};

const isVowel = (ch)=>{
    return ch == 'a' || ch =='e' || ch== 'i' || ch=='o' || ch=='u'
}
