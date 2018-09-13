/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { injectable } from "inversify";
import { Command } from "@theia/core";

export type EmacsCommand = Command & { delegate?: string };

export const CURSOR_LEFT = {
    id: 'emacs.cursor.left',
    label: 'Move backward',
    delegate: 'cursorLeft'
};

export const CURSOR_RIGHT = {
    id: 'emacs.cursor.right',
    label: 'Move forward',
    delegate: 'cursorRight'
};

export const CURSOR_UP = {
    id: 'emacs.cursor.up',
    label: 'Move to the previous line',
    delegate: 'cursorUp'
};

export const CURSOR_DOWN = {
    id: 'emacs.cursor.down',
    label: 'Move to the next line',
    delegate: 'cursorDown'
};

export const CURSOR_HOME = {
    id: 'emacs.cursor.home',
    label: 'Move to the beginning of line',
    delegate: 'cursorHome'
};

export const CURSOR_END = {
    id: 'emacs.cursor.end',
    label: 'Move to the end of line',
    delegate: 'cursorEnd'
};

export const CURSOR_WORD_START_LEFT = {
    id: 'emacs.cursor.word.start.left',
    label: 'Move backward by one word unit',
    delegate: 'cursorWordStartLeft'
};

export const CURSOR_WORD_END_RIGHT = {
    id: 'emacs.cursor.word.end.right',
    label: 'Move forward by one word unit',
    delegate: 'cursorWordEndRight'
};

export const CURSOR_BOTTOM = {
    id: 'emacs.cursor.bottom',
    label: 'Move to the end of buffer',
    delegate: 'cursorBottom'
};

export const CURSOR_TOP = {
    id: 'emacs.cursor.top',
    label: 'Move to the beginning of buffer',
    delegate: 'cursorTop'
};

export const CURSOR_PAGE_DOWN = {
    id: 'emacs.cursor.page.down',
    label: 'Scroll down by one screen unit',
    delegate: 'cursorPageDown'
};

export const CURSOR_PAGE_UP = {
    id: 'emacs.cursor.page.up',
    label: 'Scroll up by one screen unit',
    delegate: 'cursorPageUp'
};

export const EDITOR_GO_TO_LINE = {
    id: 'emacs.editor.go.to.line',
    label: 'Jump to line',
    delegate: 'editor.action.gotoLine'
};

export const EDITOR_SEARCH_FORWARD = {
    id: 'emacs.editor.search.forward',
    label: 'Search forward',
    delegate: 'editor.action.nextMatchFindAction'
};

export const EDITOR_SEARCH_BACKWARD = {
    id: 'emacs.editor.search.backward',
    label: 'Search backward',
    delegate: 'editor.action.previousMatchFindAction'
};

export const EDITOR_SEARCH_SELECT_NEXT = {
    id: 'emacs.editor.search.select.next',
    label: 'Add selection to next find match',
    delegate: 'editor.action.addSelectionToNextFindMatch'
};

export const EDITOR_DELETE_RIGHT = {
    id: 'emacs.editor.delete.right',
    label: 'Delete right (DEL)',
    delegate: 'deleteRight'
};

export const EDITOR_DELETE_LEFT = {
    id: 'emacs.editor.delete.left',
    label: 'Delete left (BACKSPACE)',
    delegate: 'deleteLeft'
};

export const EDITOR_DELETE_WORD_RIGHT = {
    id: 'emacs.editor.delete.word.right',
    label: 'Delete word',
    delegate: 'deleteWordRight'
};

export const EDITOR_DELETE_ALL_RIGHT = {
    id: 'emacs.editor.delete.all.right',
    label: 'Kill to line end',
    delegate: 'deleteAllRight'
};

export const EDITOR_INSERT_LINE_BELOW = {
    id: 'emacs.editor.insert.line.after',
    label: 'Insert Line Below',
    delegate: 'editor.action.insertLineAfter'
};

export const EDITOR_SELECT_ALL = {
    id: 'emacs.editor.select.all',
    label: 'Select All',
    delegate: 'editor.action.selectAll'
};

export const EDITOR_COMMENT_LINE = {
    id: 'emacs.editor.comment.line',
    label: 'Toggle line comment in and out',
    delegate: 'editor.action.commentLine'
};

export const EDITOR_COMMENT_BLOCK = {
    id: 'emacs.editor.comment.block',
    label: 'Toggle region comment in and out',
    delegate: 'editor.action.blockComment'
};

export const QUICK_COMMAND = {
    id: 'emacs.quick.command',
    label: 'Open command palette',
    delegate: 'quickCommand'
};

export const QUICK_FILE = {
    id: 'emacs.quick.file',
    label: 'Open a file',
    delegate: 'file-search.openFile'
};

export const UNDO = {
    id: 'emacs.undo',
    label: 'Undo',
    delegate: 'undo'
};

export const SAVE = {
    id: 'emacs.save',
    label: 'Save',
    delegate: 'core.save'
};

export const CUT = {
    id: 'emacs.cut',
    label: 'Cut to clipboard',
    delegate: 'core.cut'
};

@injectable()
export class EmacsCommands {
    private _commands: EmacsCommand[] = [
        CURSOR_LEFT,
        CURSOR_RIGHT,
        CURSOR_UP,
        CURSOR_DOWN,
        CURSOR_HOME,
        CURSOR_END,
        CURSOR_WORD_START_LEFT,
        CURSOR_WORD_END_RIGHT,
        CURSOR_BOTTOM,
        CURSOR_TOP,
        CURSOR_PAGE_DOWN,
        CURSOR_PAGE_UP,
        EDITOR_GO_TO_LINE,
        EDITOR_SEARCH_FORWARD,
        EDITOR_SEARCH_BACKWARD,
        EDITOR_SEARCH_SELECT_NEXT,
        EDITOR_DELETE_RIGHT,
        EDITOR_DELETE_LEFT,
        EDITOR_DELETE_WORD_RIGHT,
        EDITOR_DELETE_ALL_RIGHT,
        EDITOR_INSERT_LINE_BELOW,
        EDITOR_SELECT_ALL,
        EDITOR_COMMENT_LINE,
        EDITOR_COMMENT_BLOCK,
        QUICK_COMMAND,
        QUICK_FILE,
        UNDO,
        SAVE,
        CUT
    ];

    get commands(): EmacsCommand[] {
        return Array.from(this._commands);
    }

    getCommandById(commandId: string): EmacsCommand | undefined {
        return this.commands.filter(command => command.id === commandId).pop();
    }

    getCommandByDelegate(delegateId: string): EmacsCommand | undefined {
        return this.commands.filter(command => command.delegate === delegateId).pop();
    }
}
