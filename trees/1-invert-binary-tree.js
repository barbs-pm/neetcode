function invertTree(root) {
    if (!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

function invertTreeIterative(root) {
    if (!root) return null;
    let queue = [root]; 
    while (queue.length) {
        let node = queue.shift();
        [node.left, node.right] = [node.right, node.left];
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right); 
    }
    return root;
}
