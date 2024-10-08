/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0 ;
    let map = {};
    let maxFruits = 0;
    for(let right = 0;right < fruits.length;right++){
        let type = fruits[right];
        if(map[type]){
            map[type] = map[type] +1;
        }
        else{
            map[type] = 1;
        }

        //start sliding window 
        while(Object.keys(map).length > 2) {
            let leftType = fruits[left];
            map[leftType] = map[leftType] - 1;
            if(map[leftType] <= 0){
                delete map[leftType]
            }
            left ++;
        }
        maxFruits = Math.max(maxFruits, right - left +1)
    }
    return maxFruits;
};
