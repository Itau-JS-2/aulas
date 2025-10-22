// Literais como tipos
// Literais permitem especificar exatamente quais valores uma variável ou parâmetro pode ter.
// Isso dá maior segurança de tipo e evita valores inesperados.

type Color = 'green' | 'yellow' | 'red';

function changeLight(color: Color) {
  if (color === 'green') console.log('Go!');
  if (color === 'yellow') console.log('Caution!');
  if (color === 'red') console.log('Stop!');
}

changeLight('green');
changeLight('yellow');
changeLight('red');

// Exercício com downloadStatus
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if (status === 'idle') console.log('Download');
  if (status === 'downloading') console.log('Downloading...');
  if (status === 'complete') console.log('Download completo!');
}

downloadStatus('idle');
downloadStatus('downloading');
downloadStatus('complete');
