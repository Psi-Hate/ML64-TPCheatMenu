import { IImGui, number_ref, ComboFlags } from "modloader64_api/Sylvain/ImGui";
import { IWWCore } from 'WindWaker/API/WWAPI';
import { openPosWindow } from "./ModWindow";
import * as capacity from "./MaxCapacity";
import { max } from "../cheatmenu";

function timeParse(time: number): string {
    let hour: number = time % 24;
    return `${hour} ${hour < 12 ? "AM" : "PM"}`
} 

export function renderLinkMenu(core: IWWCore, ImGui: IImGui){
/*     if(ImGui.beginCombo("Heart Containers", "", ComboFlags.NoPreview)){
        let heart_containers: number_ref = [core.save.questStatus.max_hp];
        if(ImGui.sliderInt("##heart_containers", heart_containers, 0, 20)){
            core.save.questStatus.max_hp = heart_containers[0] * 5;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Heart Pieces", "", ComboFlags.NoPreview)){
        let heart_pieces: number_ref = [core.save.questStatus.max_hp % 5]
        if(ImGui.sliderInt("##heart_containers", heart_pieces, 0, 5)){
            core.save.questStatus.max_hp = core.save.questStatus.max_hp + heart_pieces[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Hearts", "", ComboFlags.NoPreview)){
        let health: number_ref = [core.save.questStatus.current_hp / 5]
        if(ImGui.sliderInt("##health", health, 0, core.save.questStatus.max_hp * 5, (health[0] / 5).toFixed(2))){
            core.save.questStatus.current_hp = health[0] * 5;
        }
        ImGui.checkbox("Max", max.hearts);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Time", "", ComboFlags.NoPreview)){
        if(!max.time.locked[0]){
            max.time.value[0] = core.global.time;
        }
        if(ImGui.sliderInt("##time", max.time.value, 0, 360, timeParse(max.time.value[0]))){
            core.global.time = max.time.value[0];
        }
        ImGui.checkbox("Locked", max.time.locked);
        ImGui.endCombo();
    } */
}
