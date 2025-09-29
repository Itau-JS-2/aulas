console.log('\n# Matrizes (Arrays Multidimensionais)');

//  Criando uma matriz 3x3
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('\n Acessando elementos específicos:');
console.log('matrix[0][0]:', matrix[0][0]); // 1
console.log('matrix[2][0]:', matrix[2][0]); // 7

// Acessar uma linha completa
console.log('\n Segunda linha completa:', matrix[1]); // [4, 5, 6]

// Iterar por todos os elementos da matriz
console.log('\n Iterando pela matriz:');
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

//Modificar um valor específico da matriz
matrizZeros[1][2] = 7;
console.log('\n Matriz modificada:', matrizZeros);

// Verificando número de linhas e colunas
console.log('\n Número de linhas:', matrizZeros.length);
console.log('Número de colunas:', matrizZeros[0].length);
