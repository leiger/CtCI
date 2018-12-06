let replacement1 = (str) => {
    return str.split(' ').join('%20');
};

console.log(replacement1('Mr John Smith     '));

let replacement2 = (str) => {
    return str.replace(/ /g, '%20');
}
console.log(replacement2('Mr John Smith     '));