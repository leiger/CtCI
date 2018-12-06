let same = (str1, str2) => {
    if(str1.length !==str2.length) {
        return false;
    }
    let newStr1 = str1.split('').sort().join('');
    let newStr2 = str2.split('').sort().join('');

    return newStr1 === newStr2;
}