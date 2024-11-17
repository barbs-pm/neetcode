// reverse and merge
// acha o meio da lista, quebra ela no meio, inverte a segunda metade e merge as duas metades
// Time complexity: O(n)

function reorderList(head) {
    let slow = head;
    let fast = head.next;
    
    // achar o meio da lista 
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    } 

    // inverter a segunda metade da lista
    let second = slow.next;
    let prev = null; 
    slow.next = null; // divide a lista na metade
    while (second !== null) {
        const temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }

    // merge as duas
    let first = head;
    second = prev;
    while (second !== null) {
        const temp1 = first.next;
        const temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
} 
