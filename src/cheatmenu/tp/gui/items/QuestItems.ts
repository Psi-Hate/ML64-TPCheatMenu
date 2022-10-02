import { ITPCore } from 'TwilightPrincess/API/TPAPI';
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";

export function fusedMenu(core: ITPCore, ImGui: IImGui){
    if(ImGui.checkbox("Mirror Shard #1", [core.save.questStatus.mirrorShard1])){
        core.save.questStatus.mirrorShard1 = !core.save.questStatus.mirrorShard1;
    }
    if(ImGui.checkbox("Mirror Shard #2", [core.save.questStatus.mirrorShard2])){
        core.save.questStatus.mirrorShard2 = !core.save.questStatus.mirrorShard2;
    }
    if(ImGui.checkbox("Mirror Shard #3", [core.save.questStatus.mirrorShard3])){
        core.save.questStatus.mirrorShard3 = !core.save.questStatus.mirrorShard3;
    }
    if(ImGui.checkbox("Mirror Shard #4", [core.save.questStatus.mirrorShard4])){
        core.save.questStatus.mirrorShard4 = !core.save.questStatus.mirrorShard4;
    }
}

export function mirrorMenu(core: ITPCore, ImGui: IImGui){
    if(ImGui.checkbox("Fused Shadow #1", [core.save.questStatus.fusedShadow1])){
        core.save.questStatus.fusedShadow1 = !core.save.questStatus.fusedShadow1;
    }
    if(ImGui.checkbox("Fused Shadow #2", [core.save.questStatus.fusedShadow2])){
        core.save.questStatus.fusedShadow2 = !core.save.questStatus.fusedShadow2;
    }
    if(ImGui.checkbox("Fused Shadow #3", [core.save.questStatus.fusedShadow3])){
        core.save.questStatus.fusedShadow3 = !core.save.questStatus.fusedShadow3;
    }
}