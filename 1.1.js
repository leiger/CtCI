let allUniqueChars1 = (str) => {
    let arr1 = str.split('');
    let set1 = new Set(arr1);

    let arr2 = [...set1];

    return arr1.join() === arr2.join();
};

console.log(allUniqueChars1('abcnadjfajflajf'));
console.log(allUniqueChars1('adbjgle'));

let allUniqueChars2 = (str) => {
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
            if(str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(allUniqueChars2('abcnadjfajflajf'));
console.log(allUniqueChars2('adbjgle'));