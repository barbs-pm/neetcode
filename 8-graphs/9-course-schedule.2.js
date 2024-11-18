// basic idea: salvar os prerequisitos num map
// rodar dfs pra cada curso, se achar ciclo, retorna false
// add o curso a medida q sao finalizados no backtracking
// o curso pode ter 3 estados: 0 = nao visitado, 1 = visitando, 2 = visitado 
// time complexity: O(V + E) -> V = numCourses, E = prerequisites.length pois é um grafo direcionado

function findOrder(numCourses, prerequisites) {
    const preMap = new Map();
    const visited = new Set();
    const cycle = new Set();
    const result = [];

    function dfs(course) {
        if (cycle.has(course)) return false;
        if (visited.has(course)) return true;

        // adicionar antes de rodar dfs pq se tiver ciclo, vai retornar false
        cycle.add(course);
        for (let pre of preMap.get(course) || []) {
            if (!dfs(pre)) return false; // se achar ciclo, retorna false
        }
        // como nao achou cycle, pode remover 
        cycle.delete(course);
        visited.add(course);
        result.push(course);
        return true;
    }

    // salva os pre-requisitos de cada curso
    for (let [course, prereq] of prerequisites) {
        if (!preMap.has(course)) {
            preMap.set(course, []);
        }
        preMap.get(course).push(prereq);
    }

    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) return [];
    }

    return result;
}