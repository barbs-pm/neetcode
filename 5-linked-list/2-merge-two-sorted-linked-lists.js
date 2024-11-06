function mergeTwoLists(list1, list2) {
    // cria uma nova lista
    let dummy = { val: 0, next: null }
    let node = dummy;

    while (list1 && list2) {
        // adiciona o menor valor das duas listas na nova lista
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next; 
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }

    // caso tenha sobrado elementos em uma lista, adiciona eles ao fim da nova lista
    node.next = list1 || list2;

    // retorna a nova lista a partir do 1 elemento adicionado
    return dummy.next;
}