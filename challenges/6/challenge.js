/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
 * entre valores do conjunto que resultem na soma do número alvo.
 * 
 * Observações:
 * 
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *  
 *  combinate([2, 3, 5], 8) retornando
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]  
 *       [3,5]
 *       [5,3]
 *   ]
 * 
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 * 
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 * 
 * 
 * Seguem mais alguns exemplos do retorno esperado:
 * 
 *  combinate([2, 3, 5], 8) deve retornar
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
*
*    outro exemplo: 
*
*    combinate([2, 3, 6, 7], 7) retorna
*
*    [
*       [2, 2, 3],
*       [7]
*    ]
 */

const combinate = (set, target) => {
  if (!Array.isArray(set) || !set.length) {
    return [];
  }

  return getCombinations(set, target);
}

function getCombinations(set, target) {
  const combinations = [];
  const temp = [];

  set.sort();
  findValues(set, target, 0, temp, combinations);

  return combinations;
}

function findValues(set, target, index, temp, combinations) {
  if (target === 0) {
    combinations.push([...temp]);
    return;
  }

  for (let i = index; i < set.length; i++) {
    if (set[i] > target) {
      return;
    }

    const newTemp = [...temp, set[i]];
    const newTarget = target - set[i];

    findValues(set, newTarget, i, newTemp, combinations);
  }
}

module.exports = combinate
