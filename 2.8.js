let slack1 = [];
let slack2 = [];

const push = (val) => {
    stack1.push(val);
}
const pop = () => {
    if(stack2.length === 0) {
        while(stack1.length > 0) {
            stack2.push(stack1.pop());
        }
    }
    if(stack2.length === 0) {
        throw new Error('xx');
    }
    else {
        return stack2.pop();
    }
}