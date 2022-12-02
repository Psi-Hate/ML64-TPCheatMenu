import { IWWCore, WWEvents } from 'WindWaker/API/WWAPI';
import { IImGui } from 'modloader64_api/Sylvain/ImGui';
import { renderLinkMenu } from './LinkMenu';
import { renderEquipmentMenu } from './items/EquipmentMenu';
import { renderCButtonItemMenu } from './items/CButtonItemMenu';
import * as renderQuestItems from './items/QuestItems';
import { renderConsumablesMenu } from './ConsumablesMenu';
import * as renderDungeonItems from './items/DungeonItems';
export function renderMenuBar(core: IWWCore, ImGui: IImGui){
    
    if(ImGui.beginMainMenuBar()){
        if(ImGui.beginMenu("Mods")){
            if(ImGui.beginMenu("Cheat Menu")){
                if(ImGui.beginMenu("Link")){
                    renderLinkMenu(core, ImGui);
                    ImGui.endMenu();
                }
                if(ImGui.beginMenu("Items")){
                    if(ImGui.beginMenu("Equipment")){
                        renderEquipmentMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if(ImGui.beginMenu("C-Button Items")){
                        renderCButtonItemMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if(ImGui.beginMenu("Quest Items")){
                        if(ImGui.beginMenu("Dungeon Items")){
                            if(ImGui.beginMenu("Forsaken Fortress")){
                                renderDungeonItems.forsakenFortress(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Dragon Roost Cavern")){
                                renderDungeonItems.dragonRoostCavern(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Forbidden Woods")){
                                renderDungeonItems.forbiddenWoods(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Tower of the Gods")){
                                renderDungeonItems.towerOfTheGods(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Earth Temple")){
                                renderDungeonItems.earthTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Wind Temple")){
                                renderDungeonItems.windTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            ImGui.endMenu();
                        }
                        ImGui.endMenu();
                    }
                    ImGui.endMenu();
                }
                if(ImGui.beginMenu("Consumables")){
                    renderConsumablesMenu(core, ImGui);
                    ImGui.endMenu();
                }
                ImGui.endMenu();
            }
            ImGui.endMenu();
        }
        ImGui.endMainMenuBar();
    }
}