import { IOOTCore } from 'modloader64_api/OOT/OOTAPI';
import { IImGui } from 'modloader64_api/Sylvain/ImGui';
import { renderLinkMenu } from './LinkMenu';
import { renderEquipmentMenu } from './items/EquipmentMenu';
import { renderCButtonItemMenu } from './items/CButtonItemMenu';
import * as renderDungeonItems from './items/DungeonItems';
import * as renderQuestItems from './items/QuestItems';
import { renderConsumablesMenu } from './ConsumablesMenu';

export function renderMenuBar(core: IOOTCore, ImGui: IImGui){
    
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
                            if(ImGui.beginMenu("Inside the Deku Tree")){
                                renderDungeonItems.dekuTree(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Dodongo's Cavern")){
                                renderDungeonItems.dodongosCavern(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Inside Jabu-Jabu's Belly")){
                                renderDungeonItems.jabuJabusBelly(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Forest Temple")){
                                renderDungeonItems.forestTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Fire Temple")){
                                renderDungeonItems.fireTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Water Temple")){
                                renderDungeonItems.waterTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Shadow Temple")){
                                renderDungeonItems.shadowTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Spirit Temple")){
                                renderDungeonItems.spiritTemple(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Bottom Of The Well")){
                                renderDungeonItems.bottomOfTheWell(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Ice Cavern")){
                                renderDungeonItems.iceCavern(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Gerudo Fortress")){
                                renderDungeonItems.gerudoFortress(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Gerudo Training Grounds")){
                                renderDungeonItems.gerudoTrainingGrounds(core, ImGui);
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Ganon's Castle")){
                                renderDungeonItems.ganonsCastle(core, ImGui);
                                ImGui.endMenu();
                            }
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Songs")){
                            renderQuestItems.songsMenu(core, ImGui);
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Gems")){
                            renderQuestItems.gemsMenu(core, ImGui);
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Medallions")){
                            renderQuestItems.medallionsMenu(core, ImGui);
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Gold Skulltulas")){
                            renderQuestItems.goldSkulltulas(core, ImGui);
                            ImGui.endMenu();
                        }
                        renderQuestItems.stoneOfAgony(core, ImGui);
                        renderQuestItems.gerudoMembershipCard(core, ImGui);
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