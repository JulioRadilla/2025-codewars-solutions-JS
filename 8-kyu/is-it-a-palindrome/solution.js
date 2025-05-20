function isPalindrome(x) {
    let reversed =  x.split('').reverse();
    return reversed.join('').toLowerCase() === x.toLowerCase()
}