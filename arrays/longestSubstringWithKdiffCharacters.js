longestSubstringWithKdistinct = (str, k) => {
  let left = 0;
  let map = {};
  let longestSubstring = -Infinity;
  for(let right = 0 ;right< str.length;right++){
    let char = str.charAt(right);
    if(map[char]){
      map[char] = map[char] +1 ;
    }
    else{
      map[char] = 1 
    }
    while(Object.keys(map).length > k ){
    map[str.charAt(left)] = map[str.charAt(left)] - 1;
    if(map[str.charAt(left)] == 0){
    delete map[str.charAt(left)]
    }
    longestSubstring = Math.max(longestSubstring, right-left +1); 
      left ++;
    }
  }
  return longestSubstring == -Infinity ? 0 : longestSubstring
}

console.log(longestSubstringWithKdistinct("araaci", 2))//4, The longest substring with no more than '2' distinct characters is "araa".
console.log(longestSubstringWithKdistinct("araaci", 1))//2, The longest substring with no more than '1' distinct characters is "aa".
console.log(longestSubstringWithKdistinct("cbbebi", 3))//5, The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
