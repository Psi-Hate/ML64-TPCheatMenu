import { bool_ref, IImGui, number_ref, Cond, MouseButton } from "modloader64_api/Sylvain/ImGui";
import { IOOTCore } from "modloader64_api/OOT/OOTAPI";
import { xy } from "modloader64_api/Sylvain/vec";
import { renderLinkMenu } from './LinkMenu';
import { renderEquipmentMenu } from './items/EquipmentMenu';
import { renderCButtonItemMenu } from './items/CButtonItemMenu';
import * as renderDungeonItems from './items/DungeonItems';
import * as renderQuestItems from './items/QuestItems';
import { renderConsumablesMenu } from './ConsumablesMenu';

interface dungeonMenuWindows {
    dekuTree: bool_ref;
    dodongosCavern: bool_ref;
    jabuJabusBelly: bool_ref;
    forestTemple: bool_ref;
    fireTemple: bool_ref;
    waterTemple: bool_ref;
    shadowTemple: bool_ref;
    spiritTemple: bool_ref;
    bottomOfTheWell: bool_ref;
    iceCavern: bool_ref;
    gerudoFortress: bool_ref;
    gerudoTrainingGrounds: bool_ref;
    ganonsCastle: bool_ref;
}

interface questMenuWindows {
    dungeonTabs: dungeonMenuWindows;
    dungeon: bool_ref;
    songs: bool_ref;
    gems: bool_ref;
    medallions: bool_ref;
    goldSkulltulas: bool_ref;
    misc: bool_ref;
}

interface itemsMenuWindows {
    equipment: bool_ref;
    cbutton: bool_ref;
    questTabs: questMenuWindows;
    quest: bool_ref;
}

interface cheatMenuWindows {
    link: bool_ref;
    itemsTabs: itemsMenuWindows;
    items: bool_ref;
    consumables: bool_ref;
}

interface coordRef {
    lock: bool_ref;
    mod: number_ref;
    lockValue: number | undefined;
}

interface positionRef {
    x: coordRef;
    y: coordRef;
    z: coordRef;
}
    
export const positionMod: positionRef = {
    x: {
        lock: [false],
        mod: [0],
        lockValue: undefined
    },
    y: {
        lock: [false],
        mod: [0],
        lockValue: undefined
    },
    z: {
        lock: [false],
        mod: [0],
        lockValue: undefined
    },
}

export const openModWindow: bool_ref = [false];
export const openPosWindow: bool_ref = [false];
const modWindows: cheatMenuWindows = {
    link: [false],
    items: [false],
    itemsTabs: {
        equipment: [false],
        cbutton: [false],
        quest: [false],
        questTabs: {
            dungeon: [false],
            dungeonTabs: {
                dekuTree: [false],
                dodongosCavern: [false],
                jabuJabusBelly: [false],
                forestTemple: [false],
                fireTemple: [false],
                waterTemple: [false],
                shadowTemple: [false],
                spiritTemple: [false],
                bottomOfTheWell: [false],
                iceCavern: [false],
                gerudoFortress: [false],
                gerudoTrainingGrounds: [false],
                ganonsCastle: [false]
            },
            songs: [false],
            gems: [false],
            medallions: [false],
            goldSkulltulas: [false],
            misc: [false]
        }
    },
    consumables: [false]
}

function renderDungeonItemsMenuTabs(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginTabBar("Dungeon")){
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.dekuTree[0]){
            if(ImGui.beginTabItem("Inside the Deku Tree")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.dekuTree[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.dekuTree[0];
                }
                renderDungeonItems.dekuTree(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.dodongosCavern[0]){
            if(ImGui.beginTabItem("Dodongo's Cavern")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.dodongosCavern[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.dodongosCavern[0];
                }
                renderDungeonItems.dodongosCavern(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.jabuJabusBelly[0]){
            if(ImGui.beginTabItem("Inside Jabu-Jabu's Belly")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.jabuJabusBelly[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.jabuJabusBelly[0];
                }
                renderDungeonItems.jabuJabusBelly(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.forestTemple[0]){
            if(ImGui.beginTabItem("Forest Temple")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.forestTemple[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.forestTemple[0];
                }
                renderDungeonItems.forestTemple(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.fireTemple[0]){
            if(ImGui.beginTabItem("Fire Temple")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.fireTemple[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.fireTemple[0];
                }
                renderDungeonItems.fireTemple(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.waterTemple[0]){
            if(ImGui.beginTabItem("Water Temple")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.waterTemple[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.waterTemple[0];
                }
                renderDungeonItems.waterTemple(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.shadowTemple[0]){
            if(ImGui.beginTabItem("Shadow Temple")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.shadowTemple[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.shadowTemple[0];
                }
                renderDungeonItems.shadowTemple(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.spiritTemple[0]){
            if(ImGui.beginTabItem("Spirit Temple")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.spiritTemple[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.spiritTemple[0];
                }
                renderDungeonItems.spiritTemple(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.bottomOfTheWell[0]){
            if(ImGui.beginTabItem("Bottom Of The Well")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.bottomOfTheWell[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.bottomOfTheWell[0];
                }
                renderDungeonItems.bottomOfTheWell(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.iceCavern[0]){
            if(ImGui.beginTabItem("Ice Cavern")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.iceCavern[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.iceCavern[0];
                }
                renderDungeonItems.iceCavern(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.gerudoFortress[0]){
            if(ImGui.beginTabItem("Gerudo Fortress")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.gerudoFortress[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.gerudoFortress[0];
                }
                renderDungeonItems.gerudoFortress(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.gerudoTrainingGrounds[0]){
            if(ImGui.beginTabItem("Gerudo Training Grounds")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.gerudoTrainingGrounds[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.gerudoTrainingGrounds[0];
                }
                renderDungeonItems.gerudoTrainingGrounds(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.dungeonTabs.ganonsCastle[0]){
            if(ImGui.beginTabItem("Ganon's Castle")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeonTabs.ganonsCastle[0] = !modWindows.itemsTabs.questTabs.dungeonTabs.ganonsCastle[0];
                }
                renderDungeonItems.ganonsCastle(core, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

function renderQuestItemsMenuTabs(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginTabBar("Quest")){
        if(!modWindows.itemsTabs.questTabs.dungeon[0]){
            if(ImGui.beginTabItem("Dungeon")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.dungeon[0] = !modWindows.itemsTabs.questTabs.dungeon[0];
                }
                renderDungeonItemsMenuTabs(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.songs[0]){
            if(ImGui.beginTabItem("Songs")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.songs[0] = !modWindows.itemsTabs.questTabs.songs[0];
                }
                renderQuestItems.songsMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.gems[0]){
            if(ImGui.beginTabItem("Gems")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.gems[0] = !modWindows.itemsTabs.questTabs.gems[0];
                }
                renderQuestItems.gemsMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.medallions[0]){
            if(ImGui.beginTabItem("Medallions")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.medallions[0] = !modWindows.itemsTabs.questTabs.medallions[0];
                }
                renderQuestItems.medallionsMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.goldSkulltulas[0]){
            if(ImGui.beginTabItem("Gold Skulltulas")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.goldSkulltulas[0] = !modWindows.itemsTabs.questTabs.goldSkulltulas[0];
                }
                renderQuestItems.goldSkulltulas(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.questTabs.misc[0]){
            if(ImGui.beginTabItem("Misc")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.questTabs.misc[0] = !modWindows.itemsTabs.questTabs.misc[0];
                }
                renderQuestItems.stoneOfAgony(core, ImGui);
                renderQuestItems.gerudoMembershipCard(core, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

function renderItemsMenuTabs(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginTabBar("Items")){
        if(!modWindows.itemsTabs.equipment[0]){
            if(ImGui.beginTabItem("Equipment")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.equipment[0] = !modWindows.itemsTabs.equipment[0];
                }
                renderEquipmentMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.cbutton[0]){
            if(ImGui.beginTabItem("C-Button Items")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.cbutton[0] = !modWindows.itemsTabs.cbutton[0];
                }
                renderCButtonItemMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.itemsTabs.quest[0]){
            if(ImGui.beginTabItem("Quest Items")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.itemsTabs.quest[0] = !modWindows.itemsTabs.quest[0];
                }
                renderQuestItemsMenuTabs(core, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

function renderCheatMenuTabs(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginTabBar("##cheatMenuTabs")){
        if(!modWindows.link[0]){
            if(ImGui.beginTabItem("Link")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.link[0] = !modWindows.link[0];
                }
                renderLinkMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        if(!modWindows.items[0]){
            if(ImGui.beginTabItem("Items")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.items[0] = !modWindows.items[0];
                }
                renderItemsMenuTabs(core, ImGui)
                ImGui.endTabItem();
            }
        }
        if(!modWindows.consumables[0]){
            if(ImGui.beginTabItem("Consumables")){
                if(ImGui.isItemClicked(MouseButton.Right)){
                    modWindows.consumables[0] = !modWindows.consumables[0];
                }
                renderConsumablesMenu(core, ImGui);
                ImGui.endTabItem();
            }
        }
        ImGui.endTabBar();
    }
}

export function renderModWindow(core: IOOTCore, ImGui: IImGui){
    if(modWindows.link[0]){
        if(ImGui.begin("Link", modWindows.link)){
            renderLinkMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.items[0]){
        if(ImGui.begin("Items", modWindows.items)){
            renderItemsMenuTabs(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.consumables[0]){
        if(ImGui.begin("Consumables", modWindows.consumables)){
            renderConsumablesMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.equipment[0]){
        if(ImGui.begin("Equipment", modWindows.itemsTabs.equipment)){
            renderEquipmentMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.cbutton[0]){
        if(ImGui.begin("C-Button Items", modWindows.itemsTabs.cbutton)){
            renderCButtonItemMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.quest[0]){
        if(ImGui.begin("Quest", modWindows.itemsTabs.quest)){
            renderQuestItemsMenuTabs(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeon[0]){
        if(ImGui.begin("Dungeon", modWindows.itemsTabs.questTabs.dungeon)){
            renderDungeonItemsMenuTabs(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.songs[0]){
        if(ImGui.begin("Songs", modWindows.itemsTabs.questTabs.songs)){
            renderQuestItems.gemsMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.gems[0]){
        if(ImGui.begin("Gems", modWindows.itemsTabs.questTabs.gems)){
            renderQuestItems.gemsMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.medallions[0]){
        if(ImGui.begin("Medallions", modWindows.itemsTabs.questTabs.medallions)){
            renderQuestItems.medallionsMenu(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.goldSkulltulas[0]){
        if(ImGui.begin("Gold Skulltulas", modWindows.itemsTabs.questTabs.goldSkulltulas)){
            renderQuestItems.goldSkulltulas(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.misc[0]){
        if(ImGui.begin("Misc", modWindows.itemsTabs.questTabs.misc)){
            renderQuestItems.stoneOfAgony(core, ImGui);
            renderQuestItems.gerudoMembershipCard(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.dekuTree[0]){
        if(ImGui.begin("Inside the Deku Tree", modWindows.itemsTabs.questTabs.dungeonTabs.dekuTree)){
            renderDungeonItems.dekuTree(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.dodongosCavern[0]){
        if(ImGui.begin("Dodongo's Cavern", modWindows.itemsTabs.questTabs.dungeonTabs.dodongosCavern)){
            renderDungeonItems.dodongosCavern(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.jabuJabusBelly[0]){
        if(ImGui.begin("Inside Jabu-Jabu's Belly", modWindows.itemsTabs.questTabs.dungeonTabs.jabuJabusBelly)){
            renderDungeonItems.jabuJabusBelly(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.forestTemple[0]){
        if(ImGui.begin("Forest Temple", modWindows.itemsTabs.questTabs.dungeonTabs.forestTemple)){
            renderDungeonItems.forestTemple(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.fireTemple[0]){
        if(ImGui.begin("Fire Temple", modWindows.itemsTabs.questTabs.dungeonTabs.fireTemple)){
            renderDungeonItems.fireTemple(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.waterTemple[0]){
        if(ImGui.begin("Water Temple", modWindows.itemsTabs.questTabs.dungeonTabs.waterTemple)){
            renderDungeonItems.waterTemple(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.shadowTemple[0]){
        if(ImGui.begin("Shadow Temple", modWindows.itemsTabs.questTabs.dungeonTabs.shadowTemple)){
            renderDungeonItems.shadowTemple(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.spiritTemple[0]){
        if(ImGui.begin("Spirit Temple", modWindows.itemsTabs.questTabs.dungeonTabs.spiritTemple)){
            renderDungeonItems.spiritTemple(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.bottomOfTheWell[0]){
        if(ImGui.begin("Bottom Of The Well", modWindows.itemsTabs.questTabs.dungeonTabs.bottomOfTheWell)){
            renderDungeonItems.bottomOfTheWell(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.iceCavern[0]){
        if(ImGui.begin("Ice Cavern", modWindows.itemsTabs.questTabs.dungeonTabs.iceCavern)){
            renderDungeonItems.iceCavern(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.gerudoFortress[0]){
        if(ImGui.begin("Gerudo Fortress", modWindows.itemsTabs.questTabs.dungeonTabs.gerudoFortress)){
            renderDungeonItems.gerudoFortress(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.gerudoTrainingGrounds[0]){
        if(ImGui.begin("Gerudo Training Grounds", modWindows.itemsTabs.questTabs.dungeonTabs.gerudoTrainingGrounds)){
            renderDungeonItems.gerudoTrainingGrounds(core, ImGui);
            ImGui.end();
        }
    }
    if(modWindows.itemsTabs.questTabs.dungeonTabs.ganonsCastle[0]){
        if(ImGui.begin("Ganon's Castle", modWindows.itemsTabs.questTabs.dungeonTabs.ganonsCastle)){
            renderDungeonItems.ganonsCastle(core, ImGui);
            ImGui.end();
        }
    }

    if(openModWindow[0]){
        if(ImGui.begin("Cheat Menu", openModWindow)){
            ImGui.setWindowSize(xy(300, 500), Cond.FirstUseEver);
            ImGui.text("Right-click on a tab to pop it out");
            renderCheatMenuTabs(core, ImGui);
            ImGui.end();
        }
    }
}

export function renderWindowButton(ImGui: IImGui){
    if(ImGui.beginMainMenuBar()){
        if(ImGui.beginMenu("Mods")){
            if(ImGui.beginMenu("Cheat Menu")){
                ImGui.selectable("Open Window", openModWindow);
                ImGui.endMenu();
            }
            ImGui.endMenu();
        }
        ImGui.endMainMenuBar();
    }
}

export function renderPosWindow(core: IOOTCore, ImGui: IImGui){
    if(openPosWindow[0]){
        if(ImGui.begin("Position", openPosWindow)){
            ImGui.setWindowSize(xy(300, 200), Cond.FirstUseEver);
            positionMod.x.mod = [0];
            positionMod.y.mod = [0];
            positionMod.z.mod = [0];
            ImGui.text(`X: ${core.link.position.x} + `);
            ImGui.sliderFloat("##x", positionMod.x.mod, -32, 32)
            ImGui.sameLine();
            if(ImGui.checkbox("##xLock", positionMod.x.lock)){
                if(positionMod.x.lock[0]){
                    positionMod.x.lockValue = core.link.position.x;
                } else {
                    positionMod.x.lockValue = undefined;
                }
            }
            
            ImGui.text(`Y: ${core.link.position.y} + `);
            ImGui.sliderFloat("##y", positionMod.y.mod, -32, 32)
            ImGui.sameLine();
            if(ImGui.checkbox("##yLock", positionMod.y.lock)){
                if(positionMod.y.lock[0]){
                    positionMod.y.lockValue = core.link.position.y;
                } else {
                    positionMod.y.lockValue = undefined;
                }
            }
            
            ImGui.text(`Z: ${core.link.position.z} + `);
            ImGui.sliderFloat("##z", positionMod.z.mod, -32, 32)
            ImGui.sameLine();
            if(ImGui.checkbox("##zLock", positionMod.z.lock)){
                if(positionMod.z.lock[0]){
                    positionMod.z.lockValue = core.link.position.z;
                } else {
                    positionMod.z.lockValue = undefined;
                }
            }
            ImGui.end();
        }
    }
}