import { IWWCore } from 'WindWaker/API/WWAPI';
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";

export function pearlMenu(core: IWWCore, ImGui: IImGui) {
/*     if (ImGui.checkbox("Din's Pearl", [core.save.questStatus.dinPearl])) {
        core.save.questStatus.dinPearl = !core.save.questStatus.dinPearl;
    }
    if (ImGui.checkbox("Farore's Pearl", [core.save.questStatus.farorePearl])) {
        core.save.questStatus.farorePearl = !core.save.questStatus.farorePearl;
    }
    if (ImGui.checkbox("Nayru's Pearl", [core.save.questStatus.nayruPearl])) {
        core.save.questStatus.nayruPearl = !core.save.questStatus.nayruPearl;
    } */
}

export function triforceMenu(core: IWWCore, ImGui: IImGui) {
/*     let triforce = core.save.questStatus.triforce.readUInt8(0);
    let temp = core.save.questStatus.triforce;
    let t0: number = triforce << 0;
    let t1: number = triforce << 1;
    let t2: number = triforce << 2;
    let t3: number = triforce << 3;
    let t4: number = triforce << 4;
    let t5: number = triforce << 5;
    let t6: number = triforce << 6;
    let t7: number = triforce << 7;

    if (ImGui.checkbox("Triforce Piece #1", [t0 === 1])) {
        if (t0 === 0) triforce | triforce << 0;
        else if (t0 === 1) triforce & ~(triforce << 0);
        temp.writeUInt8(triforce, 0);
        core.save.questStatus.triforce = temp;
    } */
}