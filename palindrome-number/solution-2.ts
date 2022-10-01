/* 
    Time O(n)
    Space O(n)

    This solutions does not transform integer to a string.
*/

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
        
    const digits: number[] = [];
    let subject = x;
    while (subject > 0) {
        const remainder = subject % 10;
        subject = Math.floor(subject / 10);
        digits.push(remainder);
    }
    
    const length = digits.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (digits[i] !== digits[length - i - 1]) {
            return false;
        }
    }
    
    
    return true;
};