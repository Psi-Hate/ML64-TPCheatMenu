import { ComboFlags, IImGui, number_ref } from 'modloader64_api/Sylvain/ImGui';
import { IMMCore, MMForms } from 'MajorasMask/API/MMAPI';
import * as capacity from './MaxCapacity';
import { max } from '../cheatmenu';

export function renderLinkMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.beginCombo("Heart Containers", "", ComboFlags.NoPreview)) {
        let heart_containers: number_ref = [core.save.heart_containers / 16];
        if (ImGui.sliderInt("##heart_containers", heart_containers, 0, 20)) {
            core.save.heart_containers = heart_containers[0] * 16;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Heart Pieces", "", ComboFlags.NoPreview)) {
        let heart_pieces: number_ref = [core.save.questStatus.heartPieceCount];
        if (ImGui.sliderInt("##heart_pieces", heart_pieces, 0, 3)) {
            core.save.questStatus.heartPieceCount = heart_pieces[0];
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Hearts", "", ComboFlags.NoPreview)) {
        let hearts: number_ref = [core.save.hearts / 4];
        if (ImGui.sliderInt("##hearts", hearts, 0, core.save.heart_containers / 4, (hearts[0] / 4).toFixed(2))) {
            core.save.hearts = hearts[0] * 4;
        }
        ImGui.checkbox("Max", max.hearts);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Magic Meter", "", ComboFlags.NoPreview)) {
        let magic_meter: number_ref = [core.save.magic_meter_size];
        if (ImGui.sliderInt("##magic_meter", magic_meter, 0, 2)) {
            core.save.magic_meter_size = magic_meter[0];
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Magic", "", ComboFlags.NoPreview)) {
        let magic: number_ref = [core.save.magic];
        if (ImGui.sliderInt("##magic", magic, 0, capacity.magic(core.save.magic_meter_size))) {
            core.save.magic = magic[0];
        }
        ImGui.checkbox("Max", max.magic);
        ImGui.endCombo();
    }
    // ImGui.text("Transformation");
    // let transform_ref: number_ref = [core.save.current_transformation];
    // if (ImGui.combo("##transformation", transform_ref, LinkForms)) {
    //     core.save.current_transformation = transform_ref[0];
    // }
    if (ImGui.beginCombo("Transformation", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("Human", core.save.current_transformation === MMForms.HUMAN)) {
            core.save.current_transformation = MMForms.HUMAN;
        }
        if (ImGui.selectable("Deku", core.save.current_transformation === MMForms.DEKU)) {
            core.save.current_transformation = MMForms.DEKU;
        }
        if (ImGui.selectable("Goron", core.save.current_transformation === MMForms.GORON)) {
            core.save.current_transformation = MMForms.GORON;
        }
        if (ImGui.selectable("Zora", core.save.current_transformation === MMForms.ZORA)) {
            core.save.current_transformation = MMForms.ZORA;
        }
        if (ImGui.selectable("Fierce Deity", core.save.current_transformation === MMForms.FD)) {
            core.save.current_transformation = MMForms.FD;
        }
        ImGui.endCombo();
    }
    if (ImGui.checkbox("Double Defense", [core.save.double_defense === 20])) {
        core.save.double_defense = (core.save.double_defense + 20) % 40;
    }
}