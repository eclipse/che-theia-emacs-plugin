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
import { KeybindingContribution, KeybindingRegistry, KeybindingScope } from '@theia/core/lib/browser';
import { CommandContribution, CommandRegistry, CommandHandler } from "@theia/core/lib/common";
import { EmacsKeyBindings, CTRL_X_CHORD_PREFIX } from "./emacs-keybindings";
import { EmacsCommands, EmacsCommand } from "./emacs-commands";
import { EditorAgent } from "./editor-agent";

@injectable()
export class EmacsCommandContribution implements CommandContribution {

    constructor(@inject(EmacsCommands) protected readonly emacsCommands: EmacsCommands,
        @inject(EditorAgent) protected readonly editorAgent: EditorAgent) {
    }

    registerCommands(registry: CommandRegistry): void {
        this.emacsCommands.commands.forEach(command => {
            registry.registerCommand(command, this.newCommandHandler(command));
        });
    }

    private newCommandHandler(command: EmacsCommand): CommandHandler {
        const delegate = command.delegate;
        return {
            execute: () => this.editorAgent.executeCommand(delegate ? delegate : command.id),
            isEnabled: () => this.editorAgent.isEditorFocused()
        };
    }
}

@injectable()
export class EmacsKeybindingContribution implements KeybindingContribution {

    constructor(@inject(EmacsKeyBindings) protected readonly emacsKeyBindings: EmacsKeyBindings,
        @inject(EmacsCommands) protected readonly emacsCommands: EmacsCommands) {
    }

    registerKeybindings(registry: KeybindingRegistry): void {
        this.resolveChordKeyBindings(registry);

        registry.setKeymap(KeybindingScope.USER, this.emacsKeyBindings.keybindings);
    }

    private resolveChordKeyBindings(registry: KeybindingRegistry) {
        const bindings = registry.getKeybindingsForKeySequence([CTRL_X_CHORD_PREFIX]).full;
        if (bindings.length === 0) {
            return;
        }

        for (const binding of bindings) {
            const commandId = binding.command;
            const emacsCommand = this.emacsCommands.getCommandByDelegate(commandId);
            if (!emacsCommand) {
                continue;
            }

            const emacsKeybinding = this.emacsKeyBindings.getKeybindingsForCommand(emacsCommand.id).pop();
            if (emacsKeybinding) {
                binding.keybinding = emacsKeybinding.keybinding;
            }
        }
    }
}
