function goodNodes(root) {
    function dfs(node, maxVal) {
        let res;
        if (!node) return 0;

        if (node.val >= maxVal) {
            res = 1;
        } else {
            res = 0;
        }

        maxVal = Math.max(maxVal, node.val);
        res += dfs(node.left, maxVal);
        res += dfs(node.right, maxVal);
        return res;
    }

    return dfs(root, root.val);
}