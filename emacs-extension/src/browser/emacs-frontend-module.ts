/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { ContainerModule } from "inversify";
import { CommandContribution } from "@theia/core/lib/common";
import { KeybindingContribution } from '@theia/core/lib/browser';
import { EmacsCommandContribution, EmacsKeybindingContribution } from './emacs-contribution';
import { EmacsKeyBindings } from "./emacs-keybindings";
import { EmacsCommands } from "./emacs-commands";
import { EditorAgent } from "./editor-agent";

export default new ContainerModule(bind => {

    bind(EditorAgent).toSelf().inSingletonScope();
    bind(EmacsCommands).toSelf().inSingletonScope();
    bind(EmacsKeyBindings).toSelf().inSingletonScope();
    bind(CommandContribution).to(EmacsCommandContribution);
    bind(KeybindingContribution).to(EmacsKeybindingContribution);
});
