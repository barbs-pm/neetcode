// time complexity: O(v+e) because we visit every node once, same as space complexity
// space complexity: O(v+e) because we store the nodes in a map

function cloneGraph(node) {
    if (!node) return null;
    const oldToNew = new Map();

    function dfs(node) {
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }

        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }

    return dfs(node);
}