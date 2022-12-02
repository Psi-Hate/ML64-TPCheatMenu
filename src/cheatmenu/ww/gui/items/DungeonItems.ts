import { IWWCore } from 'WindWaker/API/WWAPI';
import { IImGui, ComboFlags, number_ref, Dir } from "modloader64_api/Sylvain/ImGui";


export function forsakenFortress(core: IWWCore, ImGui: IImGui) {
    let isCurScene = false;
    if (core.global.current_stage_id === 0x2) isCurScene = true;
    if (ImGui.checkbox("Map", [core.save.stage2_ForsakenFortress.map])) {
        core.save.stage2_ForsakenFortress.map = !core.save.stage2_ForsakenFortress.map;
        if(isCurScene) core.save.stage_Live.map = !core.save.stage_Live;
    }
    if (ImGui.checkbox("Compass", [core.save.stage2_ForsakenFortress.compass])) {
        core.save.stage2_ForsakenFortress.compass = !core.save.stage2_ForsakenFortress.compass;
        if(isCurScene) core.save.stage_Live.compass = !core.save.stage_Live.compass;
    }
    if (ImGui.checkbox("Big Key", [core.save.stage2_ForsakenFortress.bigKey])) {
        core.save.stage2_ForsakenFortress.bigKey = !core.save.stage2_ForsakenFortress.bigKey;
        if(isCurScene) core.save.stage_Live.bigKey = !core.save.stage_Live.bigKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let dragonRoostCovernKeys: number_ref = [core.save.stage2_ForsakenFortress.keys];
        ImGui.text(`${core.save.stage2_ForsakenFortress.keys}`)
        if (ImGui.smallButton("Add")) {
            if (core.save.stage2_ForsakenFortress.keys < 9) core.save.stage2_ForsakenFortress.keys += 1;
            if(isCurScene) core.save.stage_Live.keys += 1;
        }
        if (ImGui.smallButton("Remove")) {
            if (core.save.stage2_ForsakenFortress.keys > 0) core.save.stage2_ForsakenFortress.keys -= 1;
            if(isCurScene) core.save.stage_Live.keys -= 1;
        }
        ImGui.endCombo();
    }
}

export function dragonRoostCavern(core: IWWCore, ImGui: IImGui) {
    let isCurScene = false;
    if (core.global.current_stage_id === 0x3) isCurScene = true;
    if (ImGui.checkbox("Map", [core.save.stage3_DRC.map])) {
        core.save.stage3_DRC.map = !core.save.stage3_DRC.map;
        if(isCurScene) core.save.stage_Live.map = !core.save.stage_Live;
    }
    if (ImGui.checkbox("Compass", [core.save.stage3_DRC.compass])) {
        core.save.stage3_DRC.compass = !core.save.stage3_DRC.compass;
        if(isCurScene) core.save.stage_Live.compass = !core.save.stage_Live.compass;
    }
    if (ImGui.checkbox("Big Key", [core.save.stage3_DRC.bigKey])) {
        core.save.stage3_DRC.bigKey = !core.save.stage3_DRC.bigKey;
        if(isCurScene) core.save.stage_Live.bigKey = !core.save.stage_Live.bigKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let dragonRoostCovernKeys: number_ref = [core.save.stage3_DRC.keys];
        ImGui.text(`${core.save.stage3_DRC.keys}`)
        if (ImGui.smallButton("Add")) {
            if (core.save.stage3_DRC.keys < 9) core.save.stage3_DRC.keys += 1;
            if(isCurScene) core.save.stage_Live.keys += 1;
        }
        if (ImGui.smallButton("Remove")) {
            if (core.save.stage3_DRC.keys > 0) core.save.stage3_DRC.keys -= 1;
            if(isCurScene) core.save.stage_Live.keys -= 1;
        }
        ImGui.endCombo();
    }
}

export function forbiddenWoods(core: IWWCore, ImGui: IImGui) {
    let isCurScene = false;
    if (core.global.current_stage_id === 0x4) isCurScene = true;
    if (ImGui.checkbox("Map", [core.save.stage4_FW.map])) {
        core.save.stage4_FW.map = !core.save.stage4_FW.map;
        if(isCurScene) core.save.stage_Live.map = !core.save.stage_Live;
    }
    if (ImGui.checkbox("Compass", [core.save.stage4_FW.compass])) {
        core.save.stage4_FW.compass = !core.save.stage4_FW.compass;
        if(isCurScene) core.save.stage_Live.compass = !core.save.stage_Live.compass;
    }
    if (ImGui.checkbox("Big Key", [core.save.stage4_FW.bigKey])) {
        core.save.stage4_FW.bigKey = !core.save.stage4_FW.bigKey;
        if(isCurScene) core.save.stage_Live.bigKey = !core.save.stage_Live.bigKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let dragonRoostCovernKeys: number_ref = [core.save.stage4_FW.keys];
        ImGui.text(`${core.save.stage4_FW.keys}`)
        if (ImGui.smallButton("Add")) {
            if (core.save.stage4_FW.keys < 9) core.save.stage4_FW.keys += 1;
            if(isCurScene) core.save.stage_Live.keys += 1;
        }
        if (ImGui.smallButton("Remove")) {
            if (core.save.stage4_FW.keys > 0) core.save.stage4_FW.keys -= 1;
            if(isCurScene) core.save.stage_Live.keys -= 1;
        }
        ImGui.endCombo();
    }
}

export function towerOfTheGods(core: IWWCore, ImGui: IImGui) {
    let isCurScene = false;
    if (core.global.current_stage_id === 0x5) isCurScene = true;
    if (ImGui.checkbox("Map", [core.save.stage5_TOTG.map])) {
        core.save.stage5_TOTG.map = !core.save.stage5_TOTG.map;
        if(isCurScene) core.save.stage_Live.map = !core.save.stage_Live;
    }
    if (ImGui.checkbox("Compass", [core.save.stage5_TOTG.compass])) {
        core.save.stage5_TOTG.compass = !core.save.stage5_TOTG.compass;
        if(isCurScene) core.save.stage_Live.compass = !core.save.stage_Live.compass;
    }
    if (ImGui.checkbox("Big Key", [core.save.stage5_TOTG.bigKey])) {
        core.save.stage5_TOTG.bigKey = !core.save.stage5_TOTG.bigKey;
        if(isCurScene) core.save.stage_Live.bigKey = !core.save.stage_Live.bigKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let dragonRoostCovernKeys: number_ref = [core.save.stage5_TOTG.keys];
        ImGui.text(`${core.save.stage5_TOTG.keys}`)
        if (ImGui.smallButton("Add")) {
            if (core.save.stage5_TOTG.keys < 9) core.save.stage5_TOTG.keys += 1;
            if(isCurScene) core.save.stage_Live.keys += 1;
        }
        if (ImGui.smallButton("Remove")) {
            if (core.save.stage5_TOTG.keys > 0) core.save.stage5_TOTG.keys -= 1;
            if(isCurScene) core.save.stage_Live.keys -= 1;
        }
        ImGui.endCombo();
    }
}

export function earthTemple(core: IWWCore, ImGui: IImGui) {
    let isCurScene = false;
    if (core.global.current_stage_id === 0x6) isCurScene = true;
    if (ImGui.checkbox("Map", [core.save.stage6_ET.map])) {
        core.save.stage6_ET.map = !core.save.stage6_ET.map;
        if(isCurScene) core.save.stage_Live.map = !core.save.stage_Live;
    }
    if (ImGui.checkbox("Compass", [core.save.stage6_ET.compass])) {
        core.save.stage6_ET.compass = !core.save.stage6_ET.compass;
        if(isCurScene) core.save.stage_Live.compass = !core.save.stage_Live.compass;
    }
    if (ImGui.checkbox("Big Key", [core.save.stage6_ET.bigKey])) {
        core.save.stage6_ET.bigKey = !core.save.stage6_ET.bigKey;
        if(isCurScene) core.save.stage_Live.bigKey = !core.save.stage_Live.bigKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let dragonRoostCovernKeys: number_ref = [core.save.stage6_ET.keys];
        ImGui.text(`${core.save.stage6_ET.keys}`)
        if (ImGui.smallButton("Add")) {
            if (core.save.stage6_ET.keys < 9) core.save.stage6_ET.keys += 1;
            if(isCurScene) core.save.stage_Live.keys += 1;
        }
        if (ImGui.smallButton("Remove")) {
            if (core.save.stage6_ET.keys > 0) core.save.stage6_ET.keys -= 1;
            if(isCurScene) core.save.stage_Live.keys -= 1;
        }
        ImGui.endCombo();
    }
}

export function windTemple(core: IWWCore, ImGui: IImGui) {
    let isCurScene = false;
    if (core.global.current_stage_id === 0x7) isCurScene = true;
    if (ImGui.checkbox("Map", [core.save.stage7_WT.map])) {
        core.save.stage7_WT.map = !core.save.stage7_WT.map;
        if(isCurScene) core.save.stage_Live.map = !core.save.stage_Live;
    }
    if (ImGui.checkbox("Compass", [core.save.stage7_WT.compass])) {
        core.save.stage7_WT.compass = !core.save.stage7_WT.compass;
        if(isCurScene) core.save.stage_Live.compass = !core.save.stage_Live.compass;
    }
    if (ImGui.checkbox("Big Key", [core.save.stage7_WT.bigKey])) {
        core.save.stage7_WT.bigKey = !core.save.stage7_WT.bigKey;
        if(isCurScene) core.save.stage_Live.bigKey = !core.save.stage_Live.bigKey;
    }
    if (ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)) {
        let dragonRoostCovernKeys: number_ref = [core.save.stage7_WT.keys];
        ImGui.text(`${core.save.stage7_WT.keys}`)
        if (ImGui.smallButton("Add")) {
            if (core.save.stage7_WT.keys < 9) core.save.stage7_WT.keys += 1;
            if(isCurScene) core.save.stage_Live.keys += 1;
        }
        if (ImGui.smallButton("Remove")) {
            if (core.save.stage7_WT.keys > 0) core.save.stage7_WT.keys -= 1;
            if(isCurScene) core.save.stage_Live.keys -= 1;
        }
        ImGui.endCombo();
    }
}