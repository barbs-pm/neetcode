// sava num map o prerequisites de cada curso
// roda dfs pra cada curso
// se tiver ciclo, retorna false
// time complexity: O(V + E) -> V = numCourses, E = prerequisites.length pois é um grafo direcionado

function canFinish(numCourses, prerequisites) {
    const preMap = new Map();
    const visited = new Set();

    function dfs(course) {
        if (visited.has(course)) return false; // se já visitou, tem ciclo
        if (!preMap.has(course)) return true; // se não tem pre-requisitos, retorna true

        visited.add(course);
        for (let pre of preMap.get(course)) {
            // se achar 1 ciclo, ja retorna false
            if (!dfs(pre)) return false;
        }
        // se não achou ciclo, remove do visited e retorna true
        visited.delete(course);
        return true;
    }

    // salva os pre-requisitos de cada curso
    for (let [course, pre] of prerequisites) {
        if (!preMap.has(course)) {
            preMap.set(course, []);
        }
        preMap.get(course).push(pre);
    }

    // roda dfs pra cada curso, pra garantir que cursos nao ligados nao tenham ciclo
    for (let course of preMap.keys()) {
        if (!dfs(course)) return false;
    }
    return true;
}