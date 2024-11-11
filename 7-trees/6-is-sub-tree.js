function isSubTree(root, subroot) {
    if (!subroot) return true;
    if (!root) return false;

    if (isSameTree(root, subroot)) return true;
    // pode ser que a subárvore esteja na esquerda ou na direita
    return isSubTree(root.left, subroot) || isSubTree(root.right, subroot);
}

function isSameTree(p, q) {
    if (!q && !p) return true;
    if (q && p && q.val === p.val) {
        return isSameTree(q.left, p.left) && isSameTree(q.right, p.right);
    } else {
        return false;
    }
}