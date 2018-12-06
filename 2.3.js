class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const removeNode = (pNode) => {
    if(pNode === null || pNode.next === null) {
        return false;
    }
    let nextNode = pNode.next;
    pNode.val = nextNode.val;
    pNode.next = nextNode.next;

    return true;
};