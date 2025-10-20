// Assinaturas de índice permitem definir tipos para propriedades desconhecidas
// Útil quando não sabemos o nome exato das chaves, mas conhecemos o tipo do valor

// Interface Budget onde cada chave é string e o valor é number
interface Budget {
  [item: string]: number;
}

// Função que retorna um objeto com categorias e valores
function getResult(): Budget {
  return {
    '1.shopping': 150,
    '2.food': 210,
    '3.utilities': 100,
  };
}

// Usando a interface para tipar o resultado
function getBudget() {
  const result: Budget = getResult();
  console.log(result);
}

getBudget();

// Explicações adicionais:
// 1. `[item: string]` indica que qualquer chave do objeto será string.
// 2. O valor associado a cada chave deve respeitar o tipo definido (aqui, number).
// 3. Ajuda a trabalhar com objetos dinâmicos mantendo segurança de tipos.
