import { IOOTCore, VANILLA_KEY_INDEXES } from "modloader64_api/OOT/OOTAPI";
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { lockedItems } from "@cheatmenu/cheatmenu";

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
        if(!lockedItems.dungeon.forestTempleKeys.locked[0]){
            lockedItems.dungeon.forestTempleKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.FOREST_TEMPLE);
        }
        if(ImGui.sliderInt("##forestTempleKeys", lockedItems.dungeon.forestTempleKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.FOREST_TEMPLE, lockedItems.dungeon.forestTempleKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.forestTempleKeys.locked);
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
        if(!lockedItems.dungeon.fireTempleKeys.locked[0]){
            lockedItems.dungeon.fireTempleKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.FIRE_TEMPLE);
        }
        if(ImGui.sliderInt("##fireTempleKeys", lockedItems.dungeon.fireTempleKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.FIRE_TEMPLE, lockedItems.dungeon.fireTempleKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.fireTempleKeys.locked);
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
        if(!lockedItems.dungeon.waterTempleKeys.locked[0]){
            lockedItems.dungeon.waterTempleKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.WATER_TEMPLE);
        }
        if(ImGui.sliderInt("##waterTempleKeys", lockedItems.dungeon.waterTempleKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.WATER_TEMPLE, lockedItems.dungeon.waterTempleKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.waterTempleKeys.locked);
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
        if(!lockedItems.dungeon.spiritTempleKeys.locked[0]){
            lockedItems.dungeon.spiritTempleKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.SPIRIT_TEMPLE);
        }
        if(ImGui.sliderInt("##spiritTempleKeys", lockedItems.dungeon.spiritTempleKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.SPIRIT_TEMPLE, lockedItems.dungeon.spiritTempleKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.spiritTempleKeys.locked);
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
        if(!lockedItems.dungeon.shadowTempleKeys.locked[0]){
            lockedItems.dungeon.shadowTempleKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.SHADOW_TEMPLE);
        }
        if(ImGui.sliderInt("##shadowTempleKeys", lockedItems.dungeon.shadowTempleKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.SHADOW_TEMPLE, lockedItems.dungeon.shadowTempleKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.shadowTempleKeys.locked);
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
        if(!lockedItems.dungeon.bottomOfTheWellKeys.locked[0]){
            lockedItems.dungeon.bottomOfTheWellKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.BOTTOM_OF_THE_WELL);
        }
        if(ImGui.sliderInt("##bottomOfTheWellKeys", lockedItems.dungeon.bottomOfTheWellKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.BOTTOM_OF_THE_WELL, lockedItems.dungeon.bottomOfTheWellKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.bottomOfTheWellKeys.locked);
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
        if(!lockedItems.dungeon.gerudoFortressKeys.locked[0]){
            lockedItems.dungeon.gerudoFortressKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GERUDO_FORTRESS);
        }
        if(ImGui.sliderInt("##gerudoFortressKeys", lockedItems.dungeon.gerudoFortressKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GERUDO_FORTRESS, lockedItems.dungeon.gerudoFortressKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.gerudoFortressKeys.locked);
        ImGui.endCombo();
    }
}

export function gerudoTrainingGrounds(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        if(!lockedItems.dungeon.gerudoTrainingGroundsKeys.locked[0]){
            lockedItems.dungeon.gerudoTrainingGroundsKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GERUDO_TRAINING_GROUND);
        }
        if(ImGui.sliderInt("##gerudoTrainingGroundsKeys", lockedItems.dungeon.gerudoTrainingGroundsKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GERUDO_TRAINING_GROUND, lockedItems.dungeon.gerudoTrainingGroundsKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.gerudoTrainingGroundsKeys.locked);
        ImGui.endCombo();
    }
}

export function ganonsCastle(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.GANONS_CASTLE.bossKey])){
        core.save.dungeonItemManager.GANONS_CASTLE.bossKey = !core.save.dungeonItemManager.GANONS_CASTLE.bossKey;
    }
    if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
        if(!lockedItems.dungeon.ganonsCastleKeys.locked[0]){
            lockedItems.dungeon.ganonsCastleKeys.value[0] = core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GANONS_CASTLE);
        }
        if(ImGui.sliderInt("##ganonsCastleKeys", lockedItems.dungeon.ganonsCastleKeys.value, 0, 9)){
            core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GANONS_CASTLE, lockedItems.dungeon.ganonsCastleKeys.value[0]);
        }
        ImGui.checkbox("Locked", lockedItems.dungeon.ganonsCastleKeys.locked);
        ImGui.endCombo();
    }
}