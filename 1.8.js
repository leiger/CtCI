const ReverseEqual = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }
    let newStr = str1 + str1;
    return newStr.indexOf(str2) === -1 ? false : true;
}

console.log(ReverseEqual("Hello world","worldhello "));
console.log(ReverseEqual("waterbottle","erbottlewat"));