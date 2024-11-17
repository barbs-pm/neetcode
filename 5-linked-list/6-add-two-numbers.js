// time complexity: O(n)

function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let curr = dummy;

    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        curr.next = new ListNode(sum);

        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
}