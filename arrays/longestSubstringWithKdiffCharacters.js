longestSubstringWithKdistinct = (str, k) => {
  let left = 0;
  let map = {};
  let maxLength = 0;
  for(let end = 0;end< str.length;end++){
    let endChar = str.charAt(end);
    if(!map[endChar]){
      map[endChar] = 1;  
    }
    else{
      map[endChar] = map[endChar] + 1;
    }
    //start sliding windo 
    while(Object.keys(map).length > k) {
      let leftChar = str.charAt(left);
      map[leftChar] = map[leftChar] - 1;
      if(map[leftChar] <= 0){
        delete map[leftChar];
      }
      left ++; 
    }
    maxLength = Math.max(maxLength, (end-left+1));
  }
  return maxLength
}
console.log(longestSubstringWithKdistinct("araaci", 2))//4, The longest substring with no more than '2' distinct characters is "araa".
console.log(longestSubstringWithKdistinct("araaci", 1))//2, The longest substring with no more than '1' distinct characters is "aa".
console.log(longestSubstringWithKdistinct("cbbebi", 3))//5, The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
