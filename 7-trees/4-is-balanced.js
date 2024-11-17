// time complexity: O(n)
// space complexity: O(n)

function isBalanced(root) {
    if (root === null) return true;

    return checkHeight(root) !== -1; 
}

function checkHeight(node) {
    if (node === null) return 0;

    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1;
    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1;

    // check if diff is greater than 1
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // A altura de cada nó é determinada pelo caminho mais longo até uma folha
    return 1 + Math.max(leftHeight, rightHeight);
}