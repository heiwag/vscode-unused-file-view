import * as vscode from 'vscode';
import { delFile } from './commands';
import CustomCodeLensProvider from './customCodeLensProvider';

export function activate(context: vscode.ExtensionContext) {
	let commandDisposable = vscode.commands.registerCommand(
		'unused-file-view.delFile',
		delFile
	);

	let docSelector = {
		pattern: '**/unused-files.txt'
	};

	let codeLensProviderDisposable = vscode.languages.registerCodeLensProvider(
		docSelector,
		new CustomCodeLensProvider()
	);

	context.subscriptions.push(commandDisposable);
	context.subscriptions.push(codeLensProviderDisposable);
}

export function deactivate() {}
