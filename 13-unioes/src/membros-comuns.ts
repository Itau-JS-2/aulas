// Métodos e propriedades comuns em uniões
// Quando usamos uniões, o TypeScript só permite acessar membros que existem em todos os tipos.
// Isso garante segurança de tipo e evita acessar propriedades inexistentes.

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
