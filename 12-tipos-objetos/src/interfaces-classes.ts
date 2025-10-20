interface Robot {
  identify: (id: number) => void;
}

class OneSeries implements Robot {
  identify(id: number) {
    console.log('Olá mundo', id);
  }

  answerQuestion() {
    console.log('42!');
  }
}

// Write an interface here
interface Directory {
  addFile: (name: string) => void;
  showPreview: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
