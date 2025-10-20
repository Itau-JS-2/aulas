// Conforme os objetos ficam aninhados, podemos quebrar tipos em partes menores
// Isso facilita manutenção e reuso em outros lugares

// Tipos menores para a configuração do diretório
interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
  default: DefaultConfig;
}

// Interface principal Directory usando os tipos menores
interface Directory {
  addFile: (name: string) => void;
  config: Config;
}

// Classe que implementa Directory
class DesktopDirectory implements Directory {
  config: Config = {
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
// 1. Composição de tipos ajuda a reutilizar partes de tipos em diferentes interfaces.
// 2. Facilita manutenção, pois cada parte pode ser atualizada isoladamente.
// 3. Mantém o código limpo e evita duplicação de estruturas complexas.
