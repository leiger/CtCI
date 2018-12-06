class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const isPalindrome = (pHead) => {
    let p = pHead;
    let arr1 = [];
    while(p !== null) {
        arr1.push(p.val);
        p = p.next;
    }
    let str1 = arr1.join('');
    let str2 = arr1.reverse().join('');

    return str1 === str2 ? true : false;
};
