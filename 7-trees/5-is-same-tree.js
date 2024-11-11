function isSameTree(p, q) {
    if (!p && !q) {
        return true;
    }
    if (p && q && p.val === q.val) {
        const isSame = 
            isSameTree(p.right, q.right) &&
            isSameTree(p.left, q.left);
        return isSame;   
    } else {
        return false;
    }
}