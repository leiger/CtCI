const setOfStacks = (ope, size) => {
    let stacks = [];
    let stack = [];
    let num = 0;

    for(let i of ope) {
        if(ope[0] === 1) {
            if(stack.length >= size) {
                stacks.push(stack);
                stack = [];
            }
            else {
                stack.push(ope[1]);
            }
        }
        else {
            stack.pop();
        }
    }
};