/* 
    Time O(n)
    Space O(1)

    This solution inverts the number and check if inverted number is the same as given number
*/

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
        
    let rev = 0;
    let subject = x;
    while (subject > 0) {
        const remainder = subject % 10;
        rev = rev * 10 + remainder;
        subject = Math.floor(subject / 10);
    }
    
    return rev === x;
};