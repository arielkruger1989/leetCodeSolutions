/* 
    Time O(n)
    Space O(n)

    This solutions transforms integer to a string.
*/

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
        
    const xString = x + "";
    const length = xString.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (xString[i] !== xString[length - i - 1]) {
            return false;
        }
    }
    
    return true;
};