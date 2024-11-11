/* 
 * Ele começa na raiz da árvore (no topo) e tenta descer, comparando onde "P" e "Q" estão em relação a esse ponto. 
 * Se P e Q tao mais a direita, a gente move pra direita, mesma coisa pra esqueda. 
 * Se cada um ta de um lado, a gente achou o ponto em comum
 * o(h) onde h é a altura da árvore pois a gente só desce a árvore
*/

var lowestCommonAncestor = function(root, p, q) {
    let curr = root;

    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        } else {
            return curr;
        }
    }
};