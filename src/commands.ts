import { TextEditorEdit, TextLine, window } from 'vscode';
import { removeFileSync } from 'remove-file-safe';

async function delFile(context: TextLine) {
  try {
    const isDelete = removeFileSync(context.text);
    if (isDelete) {
      window.activeTextEditor?.edit((edit: TextEditorEdit) => {
        const range = context.range;
        edit.delete(range);
        window.activeTextEditor?.document.save();
        window.showInformationMessage(`Delete Success!`);
      });
    } else {
      window.showErrorMessage('Delete Error!');
    }
  } catch (e) {
    window.showErrorMessage('Delete Error!');
  }
}

export { delFile };
