let zipString = (str) => {
    let currentChar = '';
    let compressedStr = '';
    let count = '';

    for (let i = 0; i < str.length; i++) {
        if (currentChar !== str[i]) {
            if (count === 1)
                compressedStr = compressedStr + currentChar;
            else 
                compressedStr = compressedStr + currentChar + count;
            currentChar = str[i];
            console.log(compressedStr);
            count = 1;
        } else {
            count += 1;
        }
    }
    compressedStr = compressedStr + currentChar + count;

    return str.length === compressedStr.length ? str : compressedStr;
};

console.log(zipString("aabcccccaaa"));