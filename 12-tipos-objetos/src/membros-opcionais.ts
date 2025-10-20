// TS permite propriedades opcionais usando `?`
// Isso é útil quando funções recebem objetos que podem ou não ter certos membros

// Interface para tipar as opções do usuário
interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  userName: string;
}

// Função que retorna o nome completo ou o username se nomes faltarem
function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.userName);
}

// Chamadas de teste
getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  userName: 'hotelowner304',
});

getUserName({
  firstName: 'Madeline',
  userName: 'mountainClimber',
});

// Explicações adicionais:
// 1. Propriedades opcionais podem ser undefined, então sempre verifique antes de usar.
// 2. Permite criar APIs mais flexíveis sem perder a segurança de tipos.
// 3. Muito útil em configurações, parâmetros de funções e formulários.
