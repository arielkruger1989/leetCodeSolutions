/* 
    Time O(n log n)
    Space O(n)
*/
function sortCopy(arr) { 
    return arr.slice(0).sort((a, b) => a - b);
}

function twoSum(nums: number[], target: number): number[] {
    const sortedNums = sortCopy(nums);
    let i = 0, j = nums.length - 1, x, y;
    while(i < j) {
        const sum = sortedNums[i] + sortedNums[j];
        if (sum === target) {
            x = sortedNums[i];
            y = sortedNums[j];
            break;
        } else if (sum > target) {
            j -= 1;
        } else {
            i += 1;
        }
    }
    for (let k = 0; k < nums.length - 1; k++) {
        if (nums[k] === x) {
            i = k;
        } else if (nums[k] === y) {
            j = k;
        }
    }
    
    return [i,j];
};