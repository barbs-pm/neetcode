function isValidBST(root) {
    function isValid(node, left, right) {
        if (!node) return true;
        if (!(node.val < right && node.val > left)) {
            return false;
        }
        return isValid(node.left, left, node.val) && isValid(node.right, node.val, right);
    }
    return isValid(root, -Infinity, Infinity);
}