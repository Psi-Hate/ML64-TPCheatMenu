import { IImGui, number_ref, ComboFlags } from "modloader64_api/Sylvain/ImGui";
import { IOOTCore } from "modloader64_api/OOT/OOTAPI";
import { changeAge, entranceIndex, lockedItems } from "@cheatmenu/cheatmenu";
import { openPosWindow } from "./ModWindow";

export function renderLinkMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Heart Containers", "", ComboFlags.NoPreview)){
        let heart_containers: number_ref = [core.save.heart_containers];
        if(ImGui.sliderInt("##heart_containers", heart_containers, 0, 20)){
            core.save.heart_containers = heart_containers[0];
            if(core.save.health > core.save.heart_containers * 16){
                core.save.health = core.save.heart_containers * 16;
            }
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Heart Pieces", "", ComboFlags.NoPreview)){
        let heart_pieces: number_ref = [core.save.questStatus.heartPieces]
        if(ImGui.sliderInt("##heart_containers", heart_pieces, 0, 3)){
            core.save.questStatus.heartPieces = heart_pieces[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Hearts", "", ComboFlags.NoPreview)){
        if(!lockedItems.hearts.locked[0]){
            lockedItems.hearts.value[0] = core.save.health / 16;
        }
        if(ImGui.sliderFloat("##health", lockedItems.hearts.value, 0, core.save.heart_containers)){
            core.save.health = Math.round(lockedItems.hearts.value[0] * 4) * 4;
        }
        ImGui.checkbox("Locked", lockedItems.hearts.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic Meter Size", "", ComboFlags.NoPreview)){
        let magic_meter_size: number_ref = [core.save.magic_meter_size];
        if(ImGui.sliderInt("##magic_meter_size", magic_meter_size, 0, 2)){
            core.save.magic_meter_size = magic_meter_size[0];
            if(core.save.magic_current > core.save.magic_meter_size * 48){
                core.save.magic_current = core.save.magic_meter_size * 48;
            }
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic", "", ComboFlags.NoPreview)){
        if(!lockedItems.magic.locked[0]){
            lockedItems.magic.value[0] = core.save.magic_current / 2;
        }
        if(ImGui.sliderInt("##magic_current", lockedItems.magic.value, 0, core.save.magic_meter_size * 24)){
            core.save.magic_current = lockedItems.magic.value[0] * 2;
        }
        ImGui.checkbox("Locked", lockedItems.magic.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Time", "", ComboFlags.NoPreview)){
        if(!lockedItems.time.locked[0]){
            lockedItems.time.value[0] = core.save.world_time;
        }
        const hour: string = Math.floor(lockedItems.time.value[0] / (65535 / 24)) < 10 ? "0"+Math.floor(lockedItems.time.value[0] / (65535 / 24)).toString() : Math.floor(lockedItems.time.value[0] / (65535 / 24)).toString();
        const minute: string = Math.floor((lockedItems.time.value[0] % (65535 / 24)) / (65535 / (24 * 60))) < 10 ? "0"+Math.floor((lockedItems.time.value[0] % (65535 / 24)) / (65535 / (24 * 60))).toString() : Math.floor((lockedItems.time.value[0] % (65535 / 24)) / (65535 / (24 * 60))).toString();
        if(ImGui.sliderInt("##time", lockedItems.time.value, 0, 65535, `${hour}:${minute}`)){
            core.save.world_time = lockedItems.time.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.time.locked);
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Double Defense", [core.save.double_defense !== 0])){
        core.save.double_defense = (core.save.double_defense + 20) % 40;
    }
    ImGui.checkbox("Position", openPosWindow);
    if(ImGui.beginCombo("Teleport to Area", "", ComboFlags.NoPreview)){
        ImGui.inputTextWithHint("##changeScene", "Scene Number", entranceIndex);
        if (ImGui.button("Warp")){
            core.commandBuffer.runWarp(parseInt(entranceIndex[0], 16), 0, ()=>{});
        }
        ImGui.endCombo();
    }
    ImGui.checkbox("Change Age", changeAge);
}