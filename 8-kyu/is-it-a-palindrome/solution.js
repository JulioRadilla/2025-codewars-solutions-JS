function isPalindrome(x) {
    let reversed =  x.split('').reverse();
    let normal =  x.split('');
    return reversed.join('').toLowerCase() === x.toLowerCase()
}