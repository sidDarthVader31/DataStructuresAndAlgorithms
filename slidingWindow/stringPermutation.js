/**
 * link : https://leetcode.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * a brute force solution
 */
var checkInclusion = function(s1, s2) {
    let map = getMap(s1);
    let n = s1.length;
    for(let right = 0;right < s2.length;right++){
        let rightChar = s2.charAt(right);
        //
        if(!map[rightChar]){
            continue;
        }
        else {
            let substr = s2.substring(right, right+n);
            let map2 = getMap(substr);
            if(validateMap(map, map2)){
                return true;
            }
        }
    }
    return false;
};
const getMap = (s1) =>{
    let map = {};
        //get a map of all the elements of s1
    for(let i = 0;i< s1.length;i++){
        map[s1.charAt(i)] = (map[s1.charAt(i)] || 0) + 1;
    }
    return map;
}
const validateMap = (map1, map2) =>{
    if (Object.keys(map1).length != Object.keys(map2).length){
        return false;
    }
    for (const key of Object.keys(map1)){
        if(map1[key] != map2[key]){
            return false;
        }
    }
    return true;
}
