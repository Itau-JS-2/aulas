// 1. Diferença entre Parâmetros e Argumentos
function saudacao(nome) {
  // parâmetro: nome
  console.log('Olá, ' + nome);
}

saudacao('Lucas'); // argumento: "Lucas"

// 2. Parâmetros com Valor Padrão
function boasVindas(nome = 'Visitante') {
  console.log('Bem-vindo, ' + nome);
}

boasVindas('Fernanda'); // "Bem-vindo, Fernanda"
boasVindas(); // "Bem-vindo, Visitante"

// 3. Ordem dos Parâmetros
function perfil(nome, idade) {
  console.log(`${nome} tem ${idade} anos`);
}

perfil('Ana', 30); // correto
perfil(30, 'Ana'); // errado, vai dar: "30 tem Ana anos"

// 4. Parâmetros Opcionais com undefined
function mensagem(texto = 'Olá', user = 'Usuário') {
  console.log(`${texto}, ${user}!`);
}

mensagem('Bem-vindo', 'Mateus'); // "Bem-vindo, Mateus!"
mensagem(undefined, 'Lucas'); // "Olá, Lucas!"

// 5. Parâmetros como Objetos
function criarUsuario({ nome = 'Anônimo', email, ativo = false }) {
  console.log(`Usuário: ${nome}, Email: ${email}, Ativo: ${ativo}`);
}

criarUsuario({
  nome: 'Rafaela',
  email: 'rafa@email.com',
  ativo: true,
});

criarUsuario({ email: 'teste@email.com' });
// "Usuário: Anônimo, Email: teste@email.com, Ativo: false"

// 6. Funções com número variável de parâmetros
function soma(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(soma(1, 2, 3, 4)); // 10
