/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { Keybinding, KeyCode, Key, KeyModifier } from "@theia/core/lib/browser";
import { injectable } from "inversify";
import * as EmacsCommands from './emacs-commands';

export const EDITOR_FOCUSED_CONTEXT = 'editorTextFocus';
export const CTRL_X_CHORD_PREFIX = KeyCode.createKeyCode({ first: Key.KEY_X, modifiers: [KeyModifier.CtrlCmd] });

@injectable()
export class EmacsKeyBindings {
    private _keyBindings = [
        /*** Move commands ***/
        {
            command: EmacsCommands.CURSOR_LEFT.id,
            keybinding: "ctrl+b",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_RIGHT.id,
            keybinding: "ctrl+f",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_UP.id,
            keybinding: "ctrl+p",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_DOWN.id,
            keybinding: "alt+n", // ctrl+n - new tab in browser
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_HOME.id,
            keybinding: "ctrl+a",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_END.id,
            keybinding: "ctrl+e",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_WORD_END_RIGHT.id,
            keybinding: "alt+f",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_WORD_START_LEFT.id,
            keybinding: "alt+b",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_BOTTOM.id,
            keybinding: "shift+alt+.",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_TOP.id,
            keybinding: "shift+alt+,",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_PAGE_DOWN.id,
            keybinding: "ctrl+v",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CURSOR_PAGE_UP.id,
            keybinding: "alt+v",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_GO_TO_LINE.id,
            keybinding: "alt+g g",
            context: EDITOR_FOCUSED_CONTEXT
        },

        /*** Search commands ***/
        {
            command: EmacsCommands.EDITOR_SEARCH_FORWARD.id,
            keybinding: "ctrl+s",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_SEARCH_BACKWARD.id,
            keybinding: "ctrl+r",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_SEARCH_SELECT_NEXT.id,
            keybinding: "ctrl+alt+n",
            context: EDITOR_FOCUSED_CONTEXT
        },

        /*** Edit commands ***/
        {
            command: EmacsCommands.EDITOR_DELETE_RIGHT.id,
            keybinding: "ctrl+d",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_DELETE_LEFT.id,
            keybinding: "ctrl+h",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_DELETE_WORD_RIGHT.id,
            keybinding: "alt+d",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_DELETE_ALL_RIGHT.id,
            keybinding: "ctrl+k",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_INSERT_LINE_BELOW.id,
            keybinding: "ctrl+j",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.UNDO.id,
            keybinding: "ctrl+/",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.UNDO.id,
            keybinding: "ctrlcmd+x u",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_SELECT_ALL.id,
            keybinding: "ctrlcmd+x h",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_COMMENT_LINE.id,
            keybinding: "ctrl+;",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.EDITOR_COMMENT_BLOCK.id,
            keybinding: "alt+;",
            context: EDITOR_FOCUSED_CONTEXT
        },

        {
            command: EmacsCommands.CUT.id,
            keybinding: "shift+delete",
            context: EDITOR_FOCUSED_CONTEXT
        },

        /*** Other commands ***/
        {
            command: EmacsCommands.QUICK_COMMAND.id,
            keybinding: "alt+x"
        },

        {
            command: EmacsCommands.SAVE.id,
            keybinding: "ctrlcmd+x ctrlcmd+s"
        },

        {
            command: EmacsCommands.QUICK_FILE.id,
            keybinding: "ctrl+x b"
        }
    ];

    getKeybindingsForCommand(commandId: string): Keybinding[] {
        return this._keyBindings.filter(keybinding => keybinding.command === commandId);
    }

    get keybindings(): Keybinding[] {
        return Array.from(this._keyBindings);
    }
}
