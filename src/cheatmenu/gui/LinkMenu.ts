import { IImGui, number_ref, ComboFlags } from "modloader64_api/Sylvain/ImGui";
import { IOOTCore } from "modloader64_api/OOT/OOTAPI";

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
        let health: number_ref = [core.save.health / 16];
        if(ImGui.sliderFloat("##health", health, 0, core.save.heart_containers)){
            core.save.health = Math.round(health[0] * 4) * 4;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic Meter Size", "", ComboFlags.NoPreview)){
        let magic_meter_size: number_ref = [core.save.magic_meter_size];
        let magic_current: number_ref = [core.save.magic_current / 2];
        if(ImGui.sliderInt("##magic_meter_size", magic_meter_size, 0, 2)){
            core.save.magic_meter_size = magic_meter_size[0];
            if(core.save.magic_current > core.save.magic_meter_size * 48){
                core.save.magic_current = core.save.magic_meter_size * 48;
            }
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic", "", ComboFlags.NoPreview)){
        let magic_current: number_ref = [core.save.magic_current / 2];
        if(ImGui.sliderInt("##magic_current", magic_current, 0, core.save.magic_meter_size * 24)){
            core.save.magic_current = magic_current[0] * 2;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Double Defense", [core.save.double_defense !== 0])){
        core.save.double_defense = (core.save.double_defense + 20) % 40;
    }
}