import { IMMCore, InventoryItem, Ocarina } from "MajorasMask/API/MMAPI";
import { ComboFlags, IImGui } from "modloader64_api/Sylvain/ImGui";

function renderBottleMenu(bottle: InventoryItem, ImGui: IImGui): InventoryItem {
    if (ImGui.selectable("None", bottle === InventoryItem.NONE)) {
        return InventoryItem.NONE;
    }
    if (ImGui.selectable("Empty", bottle === InventoryItem.BOTTLE_EMPTY)) {
        return InventoryItem.BOTTLE_EMPTY;
    }
    if (ImGui.selectable("Red Potion", bottle === InventoryItem.BOTTLE_POTION_RED)) {
        return InventoryItem.BOTTLE_POTION_RED;
    }
    if (ImGui.selectable("Green Potion", bottle === InventoryItem.BOTTLE_POTION_GREEN)) {
        return InventoryItem.BOTTLE_POTION_GREEN;
    }
    if (ImGui.selectable("Blue Potion", bottle === InventoryItem.BOTTLE_POTION_BLUE)) {
        return InventoryItem.BOTTLE_POTION_BLUE;
    }
    if (ImGui.selectable("Fairy", bottle === InventoryItem.BOTTLE_FAIRY)) {
        return InventoryItem.BOTTLE_FAIRY;
    }
    if (ImGui.selectable("Deku Princess", bottle === InventoryItem.BOTTLE_DEKU_PRINCESS)) {
        return InventoryItem.BOTTLE_DEKU_PRINCESS;
    }
    if (ImGui.selectable("Milk (Full)", bottle === InventoryItem.BOTTLE_MILK_FULL)) {
        return InventoryItem.BOTTLE_MILK_FULL;
    }
    if (ImGui.selectable("Milk (Half)", bottle === InventoryItem.BOTTLE_MILK_HALF)) {
        return InventoryItem.BOTTLE_MILK_HALF;
    }
    if (ImGui.selectable("Fish", bottle === InventoryItem.BOTTLE_FISH)) {
        return InventoryItem.BOTTLE_FISH;
    }
    if (ImGui.selectable("Bugs", bottle === InventoryItem.BOTTLE_BUGS)) {
        return InventoryItem.BOTTLE_BUGS;
    }
    if (ImGui.selectable("Poe", bottle === InventoryItem.BOTTLE_POE_SMALL)) {
        return InventoryItem.BOTTLE_POE_SMALL;
    }
    if (ImGui.selectable("Big Poe", bottle === InventoryItem.BOTTLE_POE_BIG)) {
        return InventoryItem.BOTTLE_POE_BIG;
    }
    if (ImGui.selectable("Spring Water", bottle === InventoryItem.BOTTLE_SPRING_WATER_COLD)) {
        return InventoryItem.BOTTLE_SPRING_WATER_COLD;
    }
    if (ImGui.selectable("Hot Spring Water", bottle === InventoryItem.BOTTLE_SPRING_WATER_HOT)) {
        return InventoryItem.BOTTLE_SPRING_WATER_HOT;
    }
    if (ImGui.selectable("Zora Egg", bottle === InventoryItem.BOTTLE_ZORA_EGG)) {
        return InventoryItem.BOTTLE_ZORA_EGG;
    }
    if (ImGui.selectable("Gold Dust", bottle === InventoryItem.BOTTLE_GOLD_DUST)) {
        return InventoryItem.BOTTLE_GOLD_DUST;
    }
    if (ImGui.selectable("Magical Mushroom", bottle === InventoryItem.BOTTLE_MAGICAL_MUSHROOM)) {
        return InventoryItem.BOTTLE_MAGICAL_MUSHROOM;
    }
    if (ImGui.selectable("Sea Horse", bottle === InventoryItem.BOTTLE_SEA_HORSE)) {
        return InventoryItem.BOTTLE_SEA_HORSE;
    }
    if (ImGui.selectable("Chateau Romani", bottle === InventoryItem.BOTTLE_CHATEAU_ROMANI)) {
        return InventoryItem.BOTTLE_CHATEAU_ROMANI;
    }
    return bottle;
}

export function renderCButtonItemMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Ocarina", [core.save.inventory.FIELD_OCARINA === Ocarina.OCARINA_OF_TIME])) {
        core.save.inventory.FIELD_OCARINA = ((core.save.inventory.FIELD_OCARINA === Ocarina.OCARINA_OF_TIME) ? Ocarina.NONE : Ocarina.OCARINA_OF_TIME);
    }
    if (ImGui.checkbox("Hero's Bow", [core.save.inventory.FIELD_HEROES_BOW])) {
        core.save.inventory.FIELD_HEROES_BOW = !core.save.inventory.FIELD_HEROES_BOW;
    }
    if (ImGui.beginCombo("Elemental Arrows", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Fire Arrows", [core.save.inventory.FIELD_FIRE_ARROW])) {
            core.save.inventory.FIELD_FIRE_ARROW = !core.save.inventory.FIELD_FIRE_ARROW
        }
        if (ImGui.checkbox("Ice Arrows", [core.save.inventory.FIELD_ICE_ARROW])) {
            core.save.inventory.FIELD_ICE_ARROW = !core.save.inventory.FIELD_ICE_ARROW
        }
        if (ImGui.checkbox("Light Arrows", [core.save.inventory.FIELD_LIGHT_ARROW])) {
            core.save.inventory.FIELD_LIGHT_ARROW = !core.save.inventory.FIELD_LIGHT_ARROW
        }
        ImGui.endCombo();
    }
    if (ImGui.checkbox("Bombs", [core.save.inventory.FIELD_BOMB])) {
        core.save.inventory.FIELD_BOMB = !core.save.inventory.FIELD_BOMB;
    }
    if (ImGui.checkbox("Bombchus", [core.save.inventory.FIELD_BOMBCHU])) {
        core.save.inventory.FIELD_BOMBCHU = !core.save.inventory.FIELD_BOMBCHU;
    }
    if (ImGui.checkbox("Deku Sticks", [core.save.inventory.FIELD_DEKU_STICKS])) {
        core.save.inventory.FIELD_DEKU_STICKS = !core.save.inventory.FIELD_DEKU_STICKS;
    }
    if (ImGui.checkbox("Deku Nuts", [core.save.inventory.FIELD_DEKU_NUT])) {
        core.save.inventory.FIELD_DEKU_NUT = !core.save.inventory.FIELD_DEKU_NUT;
    }
    if (ImGui.checkbox("Magic Beans", [core.save.inventory.FIELD_MAGIC_BEAN])) {
        core.save.inventory.FIELD_MAGIC_BEAN = !core.save.inventory.FIELD_MAGIC_BEAN;
    }
    if (ImGui.checkbox("Powder Keg", [core.save.inventory.FIELD_POWDER_KEG])) {
        core.save.inventory.FIELD_POWDER_KEG = !core.save.inventory.FIELD_POWDER_KEG;
    }
    if (ImGui.checkbox("Pictograph Box", [core.save.inventory.FIELD_PICTOGRAPH_BOX])) {
        core.save.inventory.FIELD_PICTOGRAPH_BOX = !core.save.inventory.FIELD_PICTOGRAPH_BOX;
    }
    if (ImGui.checkbox("Lens Of Truth", [core.save.inventory.FIELD_LENS_OF_TRUTH])) {
        core.save.inventory.FIELD_LENS_OF_TRUTH = !core.save.inventory.FIELD_LENS_OF_TRUTH;
    }
    if (ImGui.checkbox("Hookshot", [core.save.inventory.FIELD_HOOKSHOT])) {
        core.save.inventory.FIELD_HOOKSHOT = !core.save.inventory.FIELD_HOOKSHOT;
    }
    if (ImGui.checkbox("Great Fairy's Sword", [core.save.inventory.FIELD_GREAT_FAIRYS_SWORD])) {
        core.save.inventory.FIELD_GREAT_FAIRYS_SWORD = !core.save.inventory.FIELD_GREAT_FAIRYS_SWORD;
    }
    if (ImGui.beginCombo("Trading Items", "", ComboFlags.NoPreview)) {
        if (ImGui.beginCombo("Slot 1", "", ComboFlags.NoPreview)) {
            if (ImGui.selectable("None", core.save.inventory.FIELD_QUEST_ITEM_1 === InventoryItem.NONE)) {
                core.save.inventory.FIELD_QUEST_ITEM_1 = InventoryItem.NONE
            }
            if (ImGui.selectable("Moon's Tear", core.save.inventory.FIELD_QUEST_ITEM_1 === InventoryItem.QSLOT1_MOONS_TEAR)) {
                core.save.inventory.FIELD_QUEST_ITEM_1 = InventoryItem.QSLOT1_MOONS_TEAR
            }
            if (ImGui.selectable("Land Title Deed", core.save.inventory.FIELD_QUEST_ITEM_1 === InventoryItem.QSLOT1_TITLE_DEED_LAND)) {
                core.save.inventory.FIELD_QUEST_ITEM_1 = InventoryItem.QSLOT1_TITLE_DEED_LAND
            }
            if (ImGui.selectable("Swamp Title Deed", core.save.inventory.FIELD_QUEST_ITEM_1 === InventoryItem.QSLOT1_TITLE_DEED_SWAMP)) {
                core.save.inventory.FIELD_QUEST_ITEM_1 = InventoryItem.QSLOT1_TITLE_DEED_SWAMP
            }
            if (ImGui.selectable("Mountain Title Deed", core.save.inventory.FIELD_QUEST_ITEM_1 === InventoryItem.QSLOT1_TITLE_DEED_MOUNTAIN)) {
                core.save.inventory.FIELD_QUEST_ITEM_1 = InventoryItem.QSLOT1_TITLE_DEED_MOUNTAIN
            }
            if (ImGui.selectable("Ocean Title Deed", core.save.inventory.FIELD_QUEST_ITEM_1 === InventoryItem.QSLOT1_TITLE_DEED_OCEAN)) {
                core.save.inventory.FIELD_QUEST_ITEM_1 = InventoryItem.QSLOT1_TITLE_DEED_OCEAN
            }
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Slot 2", "", ComboFlags.NoPreview)) {
            if (ImGui.selectable("None", core.save.inventory.FIELD_QUEST_ITEM_2 === InventoryItem.NONE)) {
                core.save.inventory.FIELD_QUEST_ITEM_2 = InventoryItem.NONE
            }
            if (ImGui.selectable("Room Key", core.save.inventory.FIELD_QUEST_ITEM_2 === InventoryItem.QSLOT2_ROOM_KEY)) {
                core.save.inventory.FIELD_QUEST_ITEM_2 = InventoryItem.QSLOT2_ROOM_KEY
            }
            if (ImGui.selectable("Special Delivery To Mama", core.save.inventory.FIELD_QUEST_ITEM_2 === InventoryItem.QSLOT2_SPECIAL_DELIVERY_TO_MAMA)) {
                core.save.inventory.FIELD_QUEST_ITEM_2 = InventoryItem.QSLOT2_SPECIAL_DELIVERY_TO_MAMA
            }
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Slot 3", "", ComboFlags.NoPreview)) {
            if (ImGui.selectable("None", core.save.inventory.FIELD_QUEST_ITEM_3 === InventoryItem.NONE)) {
                core.save.inventory.FIELD_QUEST_ITEM_3 = InventoryItem.NONE
            }
            if (ImGui.selectable("Letter to Kafei", core.save.inventory.FIELD_QUEST_ITEM_3 === InventoryItem.QSLOT3_LETTER_TO_KAFEI)) {
                core.save.inventory.FIELD_QUEST_ITEM_3 = InventoryItem.QSLOT3_LETTER_TO_KAFEI
            }
            if (ImGui.selectable("Pendant Of Memories", core.save.inventory.FIELD_QUEST_ITEM_3 === InventoryItem.QSLOT3_PENDANT_OF_MEMORIES)) {
                core.save.inventory.FIELD_QUEST_ITEM_3 = InventoryItem.QSLOT3_PENDANT_OF_MEMORIES
            }
            ImGui.endCombo();
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bottles", "", ComboFlags.NoPreview)) {
        if (ImGui.beginCombo("Bottle 1", "", ComboFlags.NoPreview)) {
            core.save.inventory.FIELD_BOTTLE1 = renderBottleMenu(core.save.inventory.FIELD_BOTTLE1, ImGui);
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Bottle 2", "", ComboFlags.NoPreview)) {
            core.save.inventory.FIELD_BOTTLE2 = renderBottleMenu(core.save.inventory.FIELD_BOTTLE2, ImGui);
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Bottle 3", "", ComboFlags.NoPreview)) {
            core.save.inventory.FIELD_BOTTLE3 = renderBottleMenu(core.save.inventory.FIELD_BOTTLE3, ImGui);
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Bottle 4", "", ComboFlags.NoPreview)) {
            core.save.inventory.FIELD_BOTTLE4 = renderBottleMenu(core.save.inventory.FIELD_BOTTLE4, ImGui);
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Bottle 5", "", ComboFlags.NoPreview)) {
            core.save.inventory.FIELD_BOTTLE5 = renderBottleMenu(core.save.inventory.FIELD_BOTTLE5, ImGui);
            ImGui.endCombo();
        }
        if (ImGui.beginCombo("Bottle 6", "", ComboFlags.NoPreview)) {
            core.save.inventory.FIELD_BOTTLE6 = renderBottleMenu(core.save.inventory.FIELD_BOTTLE6, ImGui);
            ImGui.endCombo();
        }
        ImGui.endCombo();
    }
}