import {
  CodeLensProvider,
  TextDocument,
  CodeLens,
  Range,
  Command
} from "vscode";

class CustomCodeLensProvider implements CodeLensProvider {
  async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {

    let codeLens = [];
    const lineCount = document.lineCount;
    const commandName = 'unused-file-view.delFile';
    const title = "Delete File";

    for (let i = 0; i < lineCount; i++) {
      const content = document.lineAt(i);
      if (content.text) {
        const rangeOfDocument = new Range(i, 0, i, 0);
        const c: Command = {
          command: commandName ,
          title: title,
          arguments: [content]
        };
        codeLens.push(new CodeLens(rangeOfDocument, c));
      }
    }

    return codeLens;
  }
}

export default CustomCodeLensProvider;