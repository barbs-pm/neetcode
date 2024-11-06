// 1 -> 2 -> 3 -> 4 -> 5
// n = 2
// move right 2 posições a frente de left. left = 1, right = 3. A diferença entre os dois é n
// move left e right até o final da lista. left = 3, right = null
// next do left é o nó que será removido

function removeNthFromEnd(head, n) {
    const dummy = { next: head };
    let left = dummy;
    let right = head;

    // acha o nó que está n posições a frente do nó que será removido
    while (n > 0) {
        right = right.next;
        n--;
    }

    // move os dois ponteiros até o final da lista
    while (right !== null) {
        left = left.next;
        right = right.next;
    }

    // remove o nó
    left.next = left.next.next;

    return dummy.next;
}