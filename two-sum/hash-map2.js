const twoSum = (nums, target) => {
    const numsMap = {};

    for (let i = 0; i < nums.length; ++i) {
        if (numsMap[ nums[ i ] ] !== undefined) {
            return [ numsMap[ nums[ i ] ], i ];
        } 

        const num2find = target - nums[i];
        numsMap[num2find] = i;
    }

    return null;
}


console.log(twoSum([ 2, 7, 11, 15 ], 9)); // [0, 1]
console.log(twoSum([ 3, 2, 4 ], 6)); // [1, 2]
console.log(twoSum([ 3, 3 ], 6)); // [0, 1]
console.log(twoSum([3], 6)); // null
console.log(twoSum([], 6)); // null