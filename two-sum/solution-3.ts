/* 
    Time O(n)
    Space O(n)
*/

function twoSum(nums: number[], target: number): number[] {
    const myMapNums = {};
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (myMapNums[remainder] !== undefined) {
            return [i, myMapNums[remainder]];
        }
        
        myMapNums[nums[i]] = i;
    }
}