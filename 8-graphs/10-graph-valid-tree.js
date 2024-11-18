// uma arvore valida é um grafo conectado sem ciclos, e todos os nós tem q ter um pai
// usar dfs, pra cada no vams visitar todos os vizinhos
// e checar no final se o final se a qnt de visitados é igual a qnt de nós
// time complexity: O(V + E) pois é um grafo não direcionado, q significa q tem q visitar todos os nós e arestas

function validTree(n, edges) {
    if (!n) return true; // se não tem nós, é uma arvore valida
    if (edges.length !== n - 1) return false; // se não tem n - 1 arestas, não é uma arvore valida
    
    const adj = new Map();
    for (let [n1, n2] of edges) {
        if (!adj.has(n1)) adj.set(n1, []);
        if (!adj.has(n2)) adj.set(n2, []);
        adj.get(n1).push(n2);
        adj.get(n2).push(n1);
    }

    // parent to prevent false cycle
    const visit = new Set();
    function dfs(node, parent) {
        if (visit.has(node)) return false; // se já visitou, tem ciclo
        visit.add(node);
        const neighbors = adj.get(node) || [];
        for (let neighbor of neighbors) {
            if (neighbor === parent) continue; // se o vizinho é o pai, ignora
            if (!dfs(neighbor, node)) return false; // se achar ciclo, retorna false
        }
        return true;
    }

    // retorna true se não tem ciclo e todos os nós foram visitados
    return dfs(0, -1) && visit.size === n;
}