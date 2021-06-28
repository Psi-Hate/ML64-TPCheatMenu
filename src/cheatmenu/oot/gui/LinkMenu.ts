import { IImGui, number_ref, ComboFlags } from "modloader64_api/Sylvain/ImGui";
import { IOOTCore } from "modloader64_api/OOT/OOTAPI";
import { changeAge, entranceIndex, max } from "../cheatmenu";
import { openPosWindow } from "./ModWindow";
import * as capacity from "./MaxCapacity";

function timeParse(time: number): string {
    let hour: number = (Math.floor(time / (0xFFFF / 24))) % 24;
    let minute: number = Math.floor((time % (0xFFFF / 24)) / (0xFFFF / (60 * 24)));
    let hourParse: string = (((hour + 11) % 12) + 1).toString().padStart(2,"0");
    let minuteParse: string = minute.toString().padStart(2,"0");
    return `${hourParse}:${minuteParse} ${hour < 12 ? "AM" : "PM"}`
}

export function renderLinkMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Heart Containers", "", ComboFlags.NoPreview)){
        let heart_containers: number_ref = [core.save.heart_containers];
        if(ImGui.sliderInt("##heart_containers", heart_containers, 0, 20)){
            core.save.heart_containers = heart_containers[0];
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
        let health: number_ref = [core.save.health / 4]
        if(ImGui.sliderInt("##health", health, 0, core.save.heart_containers * 4, (health[0] / 4).toFixed(2))){
            core.save.health = health[0] * 4;
        }
        ImGui.checkbox("Max", max.hearts);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic Meter Size", "", ComboFlags.NoPreview)){
        let magic_meter_size: number_ref = [core.save.magic_meter_size];
        if(ImGui.sliderInt("##magic_meter_size", magic_meter_size, 0, 2)){
            core.save.magic_meter_size = magic_meter_size[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic", "", ComboFlags.NoPreview)){
        let magic_current: number_ref = [core.save.magic_current]
        if(ImGui.sliderInt("##magic_current", magic_current, 0, capacity.magic(core.save.magic_meter_size))){
            core.save.magic_current = magic_current[0];
        }
        ImGui.checkbox("Max", max.magic);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Time", "", ComboFlags.NoPreview)){
        if(!max.time.locked[0]){
            max.time.value[0] = core.save.world_time;
        }
        if(ImGui.sliderInt("##time", max.time.value, 0, 65535, timeParse(max.time.value[0]))){
            core.save.world_time = max.time.value[0];
        }
        ImGui.checkbox("Locked", max.time.locked);
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