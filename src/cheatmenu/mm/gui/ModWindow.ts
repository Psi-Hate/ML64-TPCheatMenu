import { IMMCore } from "MajorasMask/API/MMAPI";
import { bool_ref, IImGui, MouseButton } from "modloader64_api/Sylvain/ImGui";
import { renderLinkMenu } from './LinkMenu';
import { renderMiscMenu } from './MiscMenu';
import { renderConsumablesMenu } from './ConsumablesMenu';
import * as renderQuestItems from './Items/QuestItemsMenu';
import * as renderDungeonItems from './Items/DungeonItems';
import { renderCButtonItemMenu } from './Items/CButtonItemsMenu';
import { renderMasksMenu } from './Items/MaskMenu';
import IMemory from 'modloader64_api/IMemory';

interface DungeonItemWindows {
    woodfall: bool_ref;
    snowhead: bool_ref;
    great_bay: bool_ref;
    stone_tower: bool_ref;
}

interface QuestItemWindows {
    dungeon_items: bool_ref;
    dungeon_item_tabs: DungeonItemWindows;
    songs: bool_ref;
    boss_masks: bool_ref;
}

interface ItemWindows {
    equipment: bool_ref;
    c_button_items: bool_ref;
    masks: bool_ref;
    quest_items: bool_ref;
    quest_item_tabs: QuestItemWindows;
}

interface CheatMenuWindows {
    link: bool_ref;
    items: bool_ref;
    item_tabs: ItemWindows;
    consumables: bool_ref;
    misc: bool_ref;
}

let mainWindowOpen: bool_ref = [false];
let subWindowsOpen: CheatMenuWindows = {
    link: [false],
    items: [false],
    item_tabs: {
        equipment: [false],
        c_button_items: [false],
        masks: [false],
        quest_items: [false],
        quest_item_tabs: {
            dungeon_items: [false],
            dungeon_item_tabs: {
                woodfall: [false],
                snowhead: [false],
                great_bay: [false],
                stone_tower: [false],
            },
            songs: [false],
            boss_masks: [false],
        }
    },
    consumables: [false],
    misc: [false],
}

function renderDungeonItemTabs(emulator: IMemory, ImGui: IImGui) {
    if (ImGui.beginTabBar("Dungeon Items")) {
        if (!subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.woodfall[0]) {
            if (ImGui.beginTabItem("Woodfall")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.woodfall[0] = !subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.woodfall[0];
                }
                renderDungeonItems.woodfall(emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.snowhead[0]) {
            if (ImGui.beginTabItem("Snowhead")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.snowhead[0] = !subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.snowhead[0];
                }
                renderDungeonItems.snowhead(emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.great_bay[0]) {
            if (ImGui.beginTabItem("Great Bay")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.great_bay[0] = !subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.great_bay[0];
                }
                renderDungeonItems.greatBay(emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.stone_tower[0]) {
            if (ImGui.beginTabItem("Stone Tower")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.stone_tower[0] = !subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.stone_tower[0];
                }
                renderDungeonItems.stoneTower(emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

function renderQuestItemTabs(core: IMMCore, emulator: IMemory, ImGui: IImGui) {
    if (ImGui.beginTabBar("Quest Items")) {
        if (!subWindowsOpen.item_tabs.quest_item_tabs.dungeon_items[0]) {
            if (ImGui.beginTabItem("Dungeon Items")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.dungeon_items[0] = !subWindowsOpen.item_tabs.quest_item_tabs.dungeon_items[0];
                }
                renderDungeonItemTabs(emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.quest_item_tabs.songs[0]) {
            if (ImGui.beginTabItem("Songs")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.songs[0] = !subWindowsOpen.item_tabs.quest_item_tabs.songs[0];
                }
                renderQuestItems.songsMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.quest_item_tabs.boss_masks[0]) {
            if (ImGui.beginTabItem("Boss Masks")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_item_tabs.boss_masks[0] = !subWindowsOpen.item_tabs.quest_item_tabs.boss_masks[0];
                }
                renderQuestItems.bossMasksMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

function renderItemTabs(core: IMMCore, emulator: IMemory, ImGui: IImGui) {
    if (ImGui.beginTabBar("Items")) {
        if (!subWindowsOpen.item_tabs.equipment[0]) {
            if (ImGui.beginTabItem("Equipment")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.equipment[0] = !subWindowsOpen.item_tabs.equipment[0];
                }
                renderQuestItems.equipmentMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.c_button_items[0]) {
            if (ImGui.beginTabItem("C-Button Items")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.c_button_items[0] = !subWindowsOpen.item_tabs.c_button_items[0];
                }
                renderCButtonItemMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.masks[0]) {
            if (ImGui.beginTabItem("Masks")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.masks[0] = !subWindowsOpen.item_tabs.masks[0];
                }
                renderMasksMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.item_tabs.quest_items[0]) {
            if (ImGui.beginTabItem("Quest Items")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.item_tabs.quest_items[0] = !subWindowsOpen.item_tabs.quest_items[0];
                }
                renderQuestItemTabs(core, emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

function renderCheatMenuTabs(core: IMMCore, emulator: IMemory, ImGui: IImGui) {
    if (ImGui.beginTabBar("##cheat_menu")) {
        if (!subWindowsOpen.link[0]) {
            if (ImGui.beginTabItem("Link")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.link[0] = !subWindowsOpen.link[0];
                }
                renderLinkMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.items[0]) {
            if (ImGui.beginTabItem("Items")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.items[0] = !subWindowsOpen.items[0];
                }
                renderItemTabs(core, emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.consumables[0]) {
            if (ImGui.beginTabItem("Consumables")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.consumables[0] = !subWindowsOpen.consumables[0];
                }
                renderConsumablesMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if (!subWindowsOpen.misc[0]) {
            if (ImGui.beginTabItem("Misc")) {
                if (ImGui.isItemClicked(MouseButton.Right)) {
                    subWindowsOpen.misc[0] = !subWindowsOpen.misc[0];
                }
                renderMiscMenu(core, emulator, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

export function renderModWindow(core: IMMCore, emulator: IMemory, ImGui: IImGui) {
    if (subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.woodfall[0]) {
        if (ImGui.begin("Woodfall", subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.woodfall)) {
            renderDungeonItems.woodfall(emulator, ImGui);
            ImGui.end();
        }
    }    
    if (subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.snowhead[0]) {
        if (ImGui.begin("Snowhead", subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.snowhead)) {
            renderDungeonItems.snowhead(emulator, ImGui);
            ImGui.end();
        }
    }
    if (subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.great_bay[0]) {
        if (ImGui.begin("Great Bay", subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.great_bay)) {
            renderDungeonItems.greatBay(emulator, ImGui);
            ImGui.end();
        }
    }
    if (subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.stone_tower[0]) {
        if (ImGui.begin("Stone Tower", subWindowsOpen.item_tabs.quest_item_tabs.dungeon_item_tabs.stone_tower)) {
            renderDungeonItems.stoneTower(emulator, ImGui);
            ImGui.end();
        }
    }

    if (subWindowsOpen.item_tabs.quest_item_tabs.dungeon_items[0]) {
        if (ImGui.begin("Dungeon Items", subWindowsOpen.item_tabs.quest_item_tabs.dungeon_items)) {
            renderDungeonItemTabs(emulator, ImGui);
            ImGui.end();
        }
    }
    if (subWindowsOpen.item_tabs.quest_item_tabs.songs[0]) {
        if (ImGui.begin("Songs", subWindowsOpen.item_tabs.quest_item_tabs.songs)) {
            renderQuestItems.songsMenu(core, ImGui);
            ImGui.end();
        }
    }
    if (subWindowsOpen.item_tabs.quest_item_tabs.boss_masks[0]) {
        if (ImGui.begin("Boss Masks", subWindowsOpen.item_tabs.quest_item_tabs.boss_masks)) {
            renderQuestItems.bossMasksMenu(core, ImGui);
            ImGui.end();
        }
    }
    
    if (subWindowsOpen.item_tabs.equipment[0]) {
        if (ImGui.begin("Equipment", subWindowsOpen.item_tabs.equipment)) {
            renderQuestItems.equipmentMenu(core, ImGui);
            ImGui.end();
        }
    }
    if (subWindowsOpen.item_tabs.c_button_items[0]) {
        if (ImGui.begin("C-Button Items", subWindowsOpen.item_tabs.c_button_items)) {
            renderCButtonItemMenu(core, ImGui);
            ImGui.end();
        }
    }    
    if (subWindowsOpen.item_tabs.masks[0]) {
        if (ImGui.begin("Masks", subWindowsOpen.item_tabs.masks)) {
            renderMasksMenu(core, ImGui)
            ImGui.end();
        }
    }
    if (subWindowsOpen.item_tabs.quest_items[0]) {
        if (ImGui.begin("Quest Items", subWindowsOpen.item_tabs.quest_items)) {
            renderQuestItemTabs(core, emulator, ImGui);
            ImGui.end();
        }
    }
    
    if (subWindowsOpen.link[0]) {
        if (ImGui.begin("Link", subWindowsOpen.link)) {
            renderLinkMenu(core, ImGui);
            ImGui.end();
        }
    }
    if (subWindowsOpen.items[0]) {
        if (ImGui.begin("Items", subWindowsOpen.items)) {
            renderItemTabs(core, emulator, ImGui);
            ImGui.end()
        }
    }
    if (subWindowsOpen.consumables[0]) {
        if (ImGui.begin("Consumables", subWindowsOpen.consumables)) {
            renderConsumablesMenu(core, ImGui);
            ImGui.end()
        }
    }
    if (subWindowsOpen.misc[0]) {
        if (ImGui.begin("Misc", subWindowsOpen.misc)) {
            renderMiscMenu(core, emulator, ImGui);
            ImGui.end()
        }
    }

    if (mainWindowOpen[0]) {
        if (ImGui.begin("Cheat Menu", mainWindowOpen)) {
            ImGui.text("Right-click on a tab to pop it out");
            renderCheatMenuTabs(core, emulator, ImGui);
            ImGui.end();
        }
    }
}

export function renderWindowButton(ImGui: IImGui) {
    if (ImGui.beginMainMenuBar()) {
        if (ImGui.beginMenu("Mods")) {
            if (ImGui.beginMenu("CheatMenu")) {
                if (ImGui.selectable("Open Mod Window", mainWindowOpen[0])) {
                    mainWindowOpen[0] = !mainWindowOpen[0];
                }
                ImGui.endMenu()
            }
            ImGui.endMenu()
        }
        ImGui.endMainMenuBar()
    }
}