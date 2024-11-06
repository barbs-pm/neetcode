function maxDepth(root) {
    if (!root) return 0;
    return 1 + (Math.max(this.maxDepth(root.left), this.maxDepth(root.right)));
}

// max depth using bfs iterative
function maxDepthIterative(root) {
    const q = new Queue();
    if (root !== null) {
        q.push(root);
    }
    let level = 0;
    while (q.size() > 0) {
        const size = q.size();
        for (let i = 0; i < size; i++) {
            const node = q.pop();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        level++;          
    }
    return root;
}