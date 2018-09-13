/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { injectable, inject } from "inversify";
import { EditorManager } from "@theia/editor/lib/browser";
import { MonacoEditor } from "@theia/monaco/lib/browser/monaco-editor";

@injectable()
export class EditorAgent {
    @inject(EditorManager) protected readonly editorManager!: EditorManager;

    getActiveEditor(): MonacoEditor | undefined {
        const editorWidget = this.editorManager.activeEditor!;
        const activeEditor = editorWidget.editor;

        return activeEditor instanceof MonacoEditor ? activeEditor as MonacoEditor : undefined;
    }

    isEditorFocused(): boolean {
        const widget = this.editorManager.activeEditor;
        return !!widget && widget.editor.isFocused();
    }

    executeCommand(commandId: string) {
        const editor = this.getActiveEditor()!;
        editor.commandService.executeCommand(commandId);
    }
}
