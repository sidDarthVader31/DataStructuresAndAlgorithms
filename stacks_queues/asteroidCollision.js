/**
 * We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 *
 *
 * link: https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let output = []
    for (let i = 0; i < asteroids.length ; i++){
        if(output.length == 0){
            output.push(asteroids[i]);
            continue;
        }
        let last = output[output.length-1];
        let current = asteroids[i];

        if(last > 0 && current < 0 ){
            //collision condition
            if(Math.abs(current)- last >0){
                output.pop()
                i--
                //output.push(current)
            }
            else if ( Math.abs(current)-last == 0){
                output.pop()
            }
        }
        else{
            output.push(current)
        }
    }
    return output;     
};
