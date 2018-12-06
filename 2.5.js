class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const plus = (a, b) => {
    let cHead = new ListNode(-1);
    let c = cHead;
    let temp = 0;

    while(a !== null || b !== null) {
        if(a !== null && b !== null) {
            c.val = a.val + b.val + temp;
            if(c.val > 9) {
                c.val = c.val - 10;
                temp = 1;
            }
            else {
                temp = 0;
            }
            a = a.next;
            b = b.next;
            c = c.next;
        }
        if(a === null) {
            c.val = b.val + temp;
            if(c.val > 9) {
                c.val = c.val - 10;
                temp = 1;
            }
            else {
                temp = 0;
            }
            a = a.next;
            c = c.next;
        }

    }
};