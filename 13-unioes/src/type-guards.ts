// Exemplo de type guards usando typeof
function formatValue(value: string | number) {
  if (typeof value === 'string') {
    // value é tratado como string aqui
    console.log(value.toLowerCase());
  } else if (typeof value === 'number') {
    // value é tratado como number aqui
    console.log(value.toFixed(2));
  }
}

// Testes
formatValue('Hiya');
formatValue(42);
