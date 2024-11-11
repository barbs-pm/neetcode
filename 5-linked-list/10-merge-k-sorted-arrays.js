function mergeKLists(lists) {
    if (!lists || lists.length === 0) {
        return null;
    }
    return divide(lists, 0, lists.length - 1);
}

function divide(lists, l, r ) {
    if (l > r) {
        return null;
    }
    if (l === r) {
        return lists[l]
    }
    const mid = Math.floor(l + (r - l) / 2);
    const left = divide(lists, l, mid);
    const right = divide(lists, mid + 1, r);
    return conquer(left, right);
}

function conquer(l, r) {
    const dummy = new ListNode(0);
    let curr = dummy;
    while (l && r) {
        if (l.val <= r.val) {
            curr.next = l;
            l = l.next;
        } else {
            curr.next = r;
            r = r.next;
        }
        curr = curr.next;
    }
    curr.next = l ? l : r;
    return dummy.next;
}