function charChecker(str) {
    let arr = new Set(str)
    if(arr.size === str.length) {
        return true
    } else {
        return false
    }
}

console.log(charChecker("monday"))