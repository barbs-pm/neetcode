function rightSideView(root) {
    const res = [];
    const queue = [root];

    while (queue.length) {
        const len = queue.length;
        let rightSide = null;

        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            rightSide = node.val;
            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }

        // o ultimo elemento do nivel é o que aparece na direita
        if (rightSide !== null) res.push(rightSide);
    }

    return res;
}