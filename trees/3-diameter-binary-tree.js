function diameterOfBinaryTree(root) {
    let res = 0;

    function dfs(node) {
        if (!root) return null;
        const leftNode = dfs(node.left);
        const rightNode = dfs(node.right);
        res = Math.max(res, leftNode + rightNode);
        return 1 + Math.max(leftNode, rightNode);
    }

    dfs(root);
    return res;
}