/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const paginate = (collection, currentPage = 1, perPage = 10) => {
    if (!Array.isArray(collection)) {
        throw new Error('Expect array and got string');
    }
    
    const total = collection.length;
    const totalPages = Math.ceil(total / perPage);

    const pageStart = (currentPage - 1) * perPage;
    const data = collection.slice(pageStart, perPage);

    return {
        currentPage,
        perPage,
        total,
        totalPages,
        data
    }
}

module.exports = paginate