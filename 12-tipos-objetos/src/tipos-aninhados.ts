// Interfaces podem ter propriedades aninhadas de outros tipos
// Isso permite criar objetos complexos com estrutura clara e previsível

// Interface Directory com método addFile e propriedade config aninhada
interface Directory {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

// Classe que implementa Directory
class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

// Instância da classe
const Desktop = new DesktopDirectory();

console.log(Desktop.config);

// Explicações adicionais:
// 1. Propriedades aninhadas permitem estruturar configurações complexas dentro de objetos.
// 2. Interfaces definem contratos que obrigam a classe a ter tanto métodos quanto propriedades esperadas.
// 3. Essa prática mantém o código consistente e evita erros de tipo ao acessar propriedades.
