
class linkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let findKthToLast = (k, head) => {
    let pointer1 = head;
    let pointer2 = head;

    for(let i=0; i<k; i++) {
        if(pointer1.next !== null) {
            pointer1 = pointer1.next;
        }
        else {
            return null;
        }
    }

    while(pointer1.next !== null) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer2
};