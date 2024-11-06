function copyRandomList(head) {
    if (!head) return null;

    // 1. copy nodes
    let curr = head;
    while (curr) {
        const copy = new Node(curr.val);
        const next = curr.next;
        curr.next = copy;
        copy.next = next;
        curr = next;
    }

    // 2. copy random pointers
    curr = head;
    while (curr) {
        const copy = curr.next;
        copy.random = curr.random ? curr.random.next : null;
        curr = copy.next;
    }

    // 3. separate lists
    curr = head;
    const copyHead = head.next;
    while (curr) {
        const copy = curr.next;
        curr.next = copy.next;
        curr = copy.next;
        if (curr) {
            copy.next = curr.next;
        }
    }

    return copyHead;
}