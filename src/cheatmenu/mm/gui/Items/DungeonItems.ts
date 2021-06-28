import { IDungeonItemContainer, MMOffsets } from "MajorasMask/API/Imports";
import { IMMCore, VANILLA_KEY_INDEXES, VANILLA_DUNGEON_ITEM_INDEXES } from "MajorasMask/API/MMAPI";
import IMemory from "modloader64_api/IMemory";
import { bool_ref, ComboFlags, IImGui, number_ref } from "modloader64_api/Sylvain/ImGui";

const offsets: MMOffsets = new MMOffsets();
const keyOffset: number = offsets.save_context + 0xCA;

function dungeon(index: VANILLA_DUNGEON_ITEM_INDEXES, emulator: IMemory, ImGui: IImGui) {
    if (ImGui.checkbox("Map", [emulator.rdramReadBit8(offsets.woodfall_item + index, 5)])) {
        emulator.rdramWriteBit8(offsets.woodfall_item + index, 5, !emulator.rdramReadBit8(offsets.woodfall_item + index, 5));
    }
    if (ImGui.checkbox("Compass", [emulator.rdramReadBit8(offsets.woodfall_item + index, 6)])) {
        emulator.rdramWriteBit8(offsets.woodfall_item + index, 6, !emulator.rdramReadBit8(offsets.woodfall_item + index, 6));
    }
    if (ImGui.checkbox("Boss Key", [emulator.rdramReadBit8(offsets.woodfall_item + index, 7)])) {
        emulator.rdramWriteBit8(offsets.woodfall_item + index, 7, !emulator.rdramReadBit8(offsets.woodfall_item + index, 7));
    }
    if (ImGui.beginCombo("Keys", "", ComboFlags.NoPreview)) {
        let keys: number_ref = [emulator.rdramRead8(keyOffset + index)];
        if (ImGui.sliderInt("##keys", keys, 0, 9)) {
            emulator.rdramWrite8(keyOffset + index, keys[0]);
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Fairies", "", ComboFlags.NoPreview)) {
        let fairies: number_ref = [emulator.rdramRead8(offsets.woodfall_fairies + index)];
        if (ImGui.sliderInt("##fairies", fairies, 0, 15)) {
            emulator.rdramWrite8(offsets.woodfall_fairies + index, fairies[0]);
        }
        ImGui.endCombo();
    }
}

export function woodfall(emulator: IMemory, ImGui: IImGui) {
    dungeon(VANILLA_DUNGEON_ITEM_INDEXES.WOODFALL_TEMPLE, emulator, ImGui);
}

export function snowhead(emulator: IMemory, ImGui: IImGui) {
    dungeon(VANILLA_DUNGEON_ITEM_INDEXES.SNOWHEAD_TEMPLE, emulator, ImGui);
}

export function greatBay(emulator: IMemory, ImGui: IImGui) {
    dungeon(VANILLA_DUNGEON_ITEM_INDEXES.GREAT_BAY_TEMPLE, emulator, ImGui);
}

export function stoneTower(emulator: IMemory, ImGui: IImGui) {
    dungeon(VANILLA_DUNGEON_ITEM_INDEXES.STONE_TOWER_TEMPLE, emulator, ImGui);
}