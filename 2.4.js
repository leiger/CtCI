class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const partition = (pHead, x) => {
    let newHead = pHead;
    let leftHead, leftNode = new ListNode(-1);
    let rightHead, rightNode = new ListNode(-1);

    while(newHead !== null && newHead.next !== null) {
        if(newHead < x) {
            leftNode.next = newHead;
            leftNode = leftNode.next;
        }
        else {
            rightNode.next = newHead;
            rightNode = rightNode.next;
        }
        newHead = newHead.next;
    }

    leftHead.next = rightHead.next;
    return leftHead.next;
};