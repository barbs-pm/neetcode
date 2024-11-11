class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    getKthNode(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }

    reverseKGroup(head, k) {
        // exemplo: 1 -> 2 -> 3 -> 4 -> 5, k = 2;
        let dummy = new ListNode(0, head);
        let groupPrev = dummy;
        // 0 -> 1 -> 2 -> 3 -> 4 -> 5

        while (true) {
            // encontra o ultimo nó do grupo
            const kthNode = this.getKthNode(groupPrev, k); // node 2
            // se nao encontrou significa q acabou
            if (!kthNode) {
                break;
            }

            // salva o next do grupo e o prev do grupo
            let groupNext = kthNode.next ? kthNode.next : null; // node 3
            let curr = groupPrev.next; // node 1
            let prev = groupNext; // node 3
            // reverte o grupo
            while (curr !== groupNext) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            // liga o grupo ao resto da lista
            let temp = groupPrev.next; // node 1
            groupPrev.next = kthNode; // novo head, node 2
            groupPrev = temp; // novo prev, node 1
            // 0 -> 2 -> 1 -> 3 -> 4 -> 5
        }
        return dummy.next;
    }
}
