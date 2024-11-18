// time: O(n + e), space: O(n + e)
// basic idea: create a graph using the edges, then do a DFS for each node
// if we visit a node, we increment the result because it is a new connected component

function countComponents(n, edges) {
    const visit = new Set();
    const adj = new Map();
    let res = 0;

    // cria o grafo
    for (let [n1, n2] of edges) {
        if (!adj.has(n1)) adj.set(n1, []);
        if (!adj.has(n2)) adj.set(n2, []);
        adj.get(n1).push(n2);
        adj.get(n2).push(n1);
    }

    // faz dfs em todos os nós
    for (let i = 0; i < n; i++) {
        if (!visit.has(i)) { // se não visitou, faz dfs e incrementa o resultado
            dfs(i);
            res++;
        }
    }

    function dfs(node) {
        if (visit.has(node)) return; // se já visitou, retorna
        visit.add(node);
        const neighbors = adj.get(node) || [];
        for (let neighbor of neighbors) {
            dfs(neighbor);
        }
    }

    return res;
}

console.log(countComponents(6, [[0,1], [1,2], [2,3], [4,5]])); // 2
console.log(countComponents(3, [[0,1], [0,2]])); // 1