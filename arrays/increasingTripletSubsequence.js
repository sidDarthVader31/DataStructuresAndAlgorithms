// link : https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
//
//
//
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(arr) {
const n = arr.length;
    if (n < 3) {
        return false;
    }

    // Arrays to store the left minimum and right maximum values
    const leftMin = new Array(n).fill(Infinity);
    const rightMax = new Array(n).fill(-Infinity);

    // Populate leftMin
    leftMin[0] = arr[0];
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], arr[i]);
    }

    // Populate rightMax
    rightMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    // Check for triplet
    for (let j = 1; j < n - 1; j++) {
        if (leftMin[j - 1] < arr[j] && arr[j] < rightMax[j + 1]) {
            return true;
        }
    }

    return false;
};
