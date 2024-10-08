/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let soutput = "";
  let toutput = "";

  for (let i = 0; i < s.length; i++) {
    soutput= soutput+s.charAt(i);
    if(s.charAt(i)=="#"){
        soutput=soutput.substring(0,soutput.length-2)
    }
  }
  for (let i = 0; i < t.length; i++) {
    toutput= toutput+t.charAt(i);
    if(t.charAt(i)=="#"){
        toutput=toutput.substring(0,toutput.length-2)
    }
  }
  console.log(soutput)
  console.log(toutput);
  return soutput== toutput;
};

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var backspaceCompareBetterSolution = function(s, t) {
   let s1 = [];
   let t1 = [];

   for(let i = 0;i < s.length;i++){
       if(s.charAt(i) == '#'){
           s1.pop();
       }
       else{
           s1.push(s.charAt(i))
       }
   }
   for(let i = 0;i < t.length;i++){
       if(t.charAt(i) == '#'){
           t1.pop();
       }
       else{
           t1.push(t.charAt(i))
       }
   }
   console.log(`s1::`, s1)
   console.log(`t1:`, t1);
   return s1.toString() === t1.toString();
};



console.log(backspaceCompare("a###b", "b"));
