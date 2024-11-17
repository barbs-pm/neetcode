// time complexity: O(n)

function kthSmallest(root, k) {
    const stack = [];
    let n = 0;
    let curr = root;

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        n++
        if (n === k) {
            return curr.val
        }
        curr = curr.right;
    }
}