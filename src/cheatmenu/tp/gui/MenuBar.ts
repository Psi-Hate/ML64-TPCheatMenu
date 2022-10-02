import { ITPCore, TPEvents } from 'TwilightPrincess/API/TPAPI';
import { IImGui } from 'modloader64_api/Sylvain/ImGui';
import { renderLinkMenu } from './LinkMenu';
import { renderEquipmentMenu } from './items/EquipmentMenu';
import { renderCButtonItemMenu } from './items/CButtonItemMenu';
import * as renderQuestItems from './items/QuestItems';
import { renderConsumablesMenu } from './ConsumablesMenu';

export function renderMenuBar(core: ITPCore, ImGui: IImGui){
    
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
                        if(ImGui.beginMenu("Fused Shadows")){
                            renderQuestItems.fusedMenu(core, ImGui);
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Mirror Shards")){
                            renderQuestItems.mirrorMenu(core, ImGui);
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