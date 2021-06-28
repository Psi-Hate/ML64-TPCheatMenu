import { IOOTCore, VANILLA_KEY_INDEXES } from "modloader64_api/OOT/OOTAPI";
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";

export function dekuTree(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.DEKU_TREE.map])){
        core.save.dungeonItemManager.DEKU_TREE.map = !core.save.dungeonItemManager.DEKU_TREE.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.DEKU_TREE.compass])){
        core.save.dungeonItemManager.DEKU_TREE.compass = !core.save.dungeonItemManager.DEKU_TREE.compass;
    }
}

export function dodongosCavern(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.DODONGOS_CAVERN.map])){
        core.save.dungeonItemManager.DODONGOS_CAVERN.map = !core.save.dungeonItemManager.DODONGOS_CAVERN.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.DODONGOS_CAVERN.compass])){
        core.save.dungeonItemManager.DODONGOS_CAVERN.compass = !core.save.dungeonItemManager.DODONGOS_CAVERN.compass;
    }
}

export function jabuJabusBelly(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.JABJ_JABUS_BELLY.map])){
        core.save.dungeonItemManager.JABJ_JABUS_BELLY.map = !core.save.dungeonItemManager.JABJ_JABUS_BELLY.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.JABJ_JABUS_BELLY.compass])){
        core.save.dungeonItemManager.JABJ_JABUS_BELLY.compass = !core.save.dungeonItemManager.JABJ_JABUS_BELLY.compass;
    }
}

export function forestTemple(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.FOREST_TEMPLE.map])){
        core.save.dungeonItemManager.FOREST_TEMPLE.map = !core.save.dungeonItemManager.FOREST_TEMPLE.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.FOREST_TEMPLE.compass])){
        core.save.dungeonItemManager.FOREST_TEMPLE.compass = !core.save.dungeonItemManager.FOREST_TEMPLE.compass;
    }
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.FOREST_TEMPLE.bossKey])){
        core.save.dungeonItemManager.FOREST_TEMPLE.bossKey = !core.save.dungeonItemManager.FOREST_TEMPLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let forestTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.FOREST_TEMPLE)];
        if(ImGui.sliderInt("##forestTempleKeys", forestTempleKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.FOREST_TEMPLE, forestTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function fireTemple(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.FIRE_TEMPLE.map])){
        core.save.dungeonItemManager.FIRE_TEMPLE.map = !core.save.dungeonItemManager.FIRE_TEMPLE.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.FIRE_TEMPLE.compass])){
        core.save.dungeonItemManager.FIRE_TEMPLE.compass = !core.save.dungeonItemManager.FIRE_TEMPLE.compass;
    }
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.FIRE_TEMPLE.bossKey])){
        core.save.dungeonItemManager.FIRE_TEMPLE.bossKey = !core.save.dungeonItemManager.FIRE_TEMPLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let fireTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.FIRE_TEMPLE)];
        if(ImGui.sliderInt("##fireTempleKeys", fireTempleKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.FIRE_TEMPLE, fireTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function waterTemple(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.WATER_TEMPLE.map])){
        core.save.dungeonItemManager.WATER_TEMPLE.map = !core.save.dungeonItemManager.WATER_TEMPLE.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.WATER_TEMPLE.compass])){
        core.save.dungeonItemManager.WATER_TEMPLE.compass = !core.save.dungeonItemManager.WATER_TEMPLE.compass;
    }
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.WATER_TEMPLE.bossKey])){
        core.save.dungeonItemManager.WATER_TEMPLE.bossKey = !core.save.dungeonItemManager.WATER_TEMPLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let waterTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.WATER_TEMPLE)];
        if(ImGui.sliderInt("##waterTempleKeys", waterTempleKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.WATER_TEMPLE, waterTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function spiritTemple(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.SPIRIT_TEMPLE.map])){
        core.save.dungeonItemManager.SPIRIT_TEMPLE.map = !core.save.dungeonItemManager.SPIRIT_TEMPLE.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.SPIRIT_TEMPLE.compass])){
        core.save.dungeonItemManager.SPIRIT_TEMPLE.compass = !core.save.dungeonItemManager.SPIRIT_TEMPLE.compass;
    }
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.SPIRIT_TEMPLE.bossKey])){
        core.save.dungeonItemManager.SPIRIT_TEMPLE.bossKey = !core.save.dungeonItemManager.SPIRIT_TEMPLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let spiritTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.SPIRIT_TEMPLE)];
        if(ImGui.sliderInt("##spiritTempleKeys", spiritTempleKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.SPIRIT_TEMPLE, spiritTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function shadowTemple(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.SHADOW_TEMPLE.map])){
        core.save.dungeonItemManager.SHADOW_TEMPLE.map = !core.save.dungeonItemManager.SHADOW_TEMPLE.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.SHADOW_TEMPLE.compass])){
        core.save.dungeonItemManager.SHADOW_TEMPLE.compass = !core.save.dungeonItemManager.SHADOW_TEMPLE.compass;
    }
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.SHADOW_TEMPLE.bossKey])){
        core.save.dungeonItemManager.SHADOW_TEMPLE.bossKey = !core.save.dungeonItemManager.SHADOW_TEMPLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let shadowTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.SHADOW_TEMPLE)];
        if(ImGui.sliderInt("##shadowTempleKeys", shadowTempleKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.SHADOW_TEMPLE, shadowTempleKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function bottomOfTheWell(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.map])){
        core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.map = !core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.compass])){
        core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.compass = !core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.compass;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let bottomOfTheWellKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.BOTTOM_OF_THE_WELL)];
        if(ImGui.sliderInt("##bottomOfTheWellKeys", bottomOfTheWellKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.BOTTOM_OF_THE_WELL, bottomOfTheWellKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function iceCavern(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Map", [core.save.dungeonItemManager.ICE_CAVERN.map])){
        core.save.dungeonItemManager.ICE_CAVERN.map = !core.save.dungeonItemManager.ICE_CAVERN.map;
    }
    if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.ICE_CAVERN.compass])){
        core.save.dungeonItemManager.ICE_CAVERN.compass = !core.save.dungeonItemManager.ICE_CAVERN.compass;
    }
}

export function gerudoFortress(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Gerudo Membership Card", [core.save.questStatus.gerudoMembershipCard])){
        core.save.questStatus.gerudoMembershipCard = !core.save.questStatus.gerudoMembershipCard;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let gerudoFortressKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GERUDO_FORTRESS)];
        if(ImGui.sliderInt("##gerudoFortressKeys", gerudoFortressKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GERUDO_FORTRESS, gerudoFortressKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function gerudoTrainingGrounds(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let gerudoTrainingGroundsKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GERUDO_TRAINING_GROUND)];
        if(ImGui.sliderInt("##gerudoTrainingGroundsKeys", gerudoTrainingGroundsKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GERUDO_TRAINING_GROUND, gerudoTrainingGroundsKeys[0]);
        }
        ImGui.endCombo();
    }
}

export function ganonsCastle(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.GANONS_CASTLE.bossKey])){
        core.save.dungeonItemManager.GANONS_CASTLE.bossKey = !core.save.dungeonItemManager.GANONS_CASTLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        let ganonsCastleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GANONS_CASTLE)];
        if(ImGui.sliderInt("##ganonsCastleKeys", ganonsCastleKeys, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GANONS_CASTLE, ganonsCastleKeys[0]);
        }
        ImGui.endCombo();
    }
}