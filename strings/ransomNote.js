/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */






/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mapMagazine = {};
  mapMagazine["a"] =  0;
  mapMagazine["b"] =  0;
  mapMagazine["c"] =  0;
  mapMagazine["d"] =  0;
  mapMagazine["e"] =  0;
  mapMagazine["f"] =  0;
  mapMagazine["g"] =  0;
  mapMagazine["h"] =  0;
  mapMagazine["i"] =  0;
  mapMagazine["j"] =  0;
  mapMagazine["k"] =  0;
  mapMagazine["l"] =  0;
  mapMagazine["m"] =  0;
  mapMagazine["n"] =  0;
  mapMagazine["o"] =  0;
  mapMagazine["p"] =  0;
  mapMagazine["q"] =  0;
  mapMagazine["r"] =  0;
  mapMagazine["s"] =  0;
  mapMagazine["t"] =  0;
  mapMagazine["u"] =  0;
  mapMagazine["v"] =  0;
  mapMagazine["w"] =  0;
  mapMagazine["x"] =  0;
  mapMagazine["y"] =  0;
  mapMagazine["z"] =  0;

  let mapRansom = {};
  mapRansom["a"] = 0
  mapRansom["b"] = 0
  mapRansom["c"] = 0
  mapRansom["d"] = 0
  mapRansom["e"] = 0
  mapRansom["f"] = 0
  mapRansom["g"] = 0
  mapRansom["h"] = 0
  mapRansom["i"] = 0
  mapRansom["j"] = 0
  mapRansom["k"] = 0
  mapRansom["l"] = 0
  mapRansom["m"] = 0
  mapRansom["n"] = 0
  mapRansom["o"] = 0
  mapRansom["p"] = 0
  mapRansom["q"] = 0
  mapRansom["r"] = 0
  mapRansom["s"] = 0
  mapRansom["t"] = 0
  mapRansom["u"] = 0
  mapRansom["v"] = 0
  mapRansom["w"] = 0
  mapRansom["x"] = 0
  mapRansom["y"] = 0
  mapRansom["z"] = 0
  //get all characters count for ransom word
  const canContructFlag =true;
  for(let i=0;i<ransomNote.length;i++){
    let ch = ransomNote.charAt(i);
   mapRansom[`${ch}`]=  mapRansom[`${ch}`]+1;
  }
  for(let i=0;i<magazine.length;i++){
    let ch = magazine.charAt(i);
    mapMagazine[`${ch}`]= mapMagazine[`${ch}`]+1;
  }

  for (const key of Object.keys(mapRansom)) {
    if (mapRansom[key] > mapMagazine[key]) {
        canContructFlag=false;
      break;
    }
  }
  return canContructFlag;
};

console.log(canConstruct("abc","absdfcx"))


