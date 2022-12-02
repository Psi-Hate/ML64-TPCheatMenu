import { InventoryItem, IWWCore } from 'WindWaker/API/WWAPI';
import { IImGui, ComboFlags } from "modloader64_api/Sylvain/ImGui";

export function renderCButtonItemMenu(core: IWWCore, ImGui: IImGui){
    if(ImGui.checkbox("Sail", [core.save.inventory.FIELD_SAIL])){
        core.save.inventory.FIELD_SAIL = !core.save.inventory.FIELD_SAIL;
    }
    if(ImGui.checkbox("Bombs", [core.save.inventory.FIELD_BOMBS])){
        core.save.inventory.FIELD_BOMBS = !core.save.inventory.FIELD_BOMBS;
    }
    if(ImGui.checkbox("Wind Waker", [core.save.inventory.FIELD_WIND_WAKER])){
        core.save.inventory.FIELD_WIND_WAKER = !core.save.inventory.FIELD_WIND_WAKER;
    }
    if(ImGui.checkbox("Grappling Hook", [core.save.inventory.FIELD_GRAPPLING_HOOK])){
        core.save.inventory.FIELD_GRAPPLING_HOOK = !core.save.inventory.FIELD_GRAPPLING_HOOK;
    }
    if(ImGui.checkbox("Spoils Bag", [core.save.inventory.FIELD_SPOILS_BAG])){
        core.save.inventory.FIELD_SPOILS_BAG = !core.save.inventory.FIELD_SPOILS_BAG;
    }
    if(ImGui.checkbox("Bait Bag", [core.save.inventory.FIELD_BAIT_BAG])){
        core.save.inventory.FIELD_BAIT_BAG = !core.save.inventory.FIELD_BAIT_BAG;
    }
    if(ImGui.checkbox("Delivery Bag", [core.save.inventory.FIELD_DELIVERY_BAG])){
        core.save.inventory.FIELD_DELIVERY_BAG = !core.save.inventory.FIELD_DELIVERY_BAG;
    }
    if(ImGui.checkbox("Tingle Tuner", [core.save.inventory.FIELD_TINGLE_TUNER])){
        core.save.inventory.FIELD_TINGLE_TUNER = !core.save.inventory.FIELD_TINGLE_TUNER;
    }
    if(ImGui.beginCombo("Picto Box", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.FIELD_PICTO_BOX === InventoryItem.NONE)){
            core.save.inventory.FIELD_PICTO_BOX = InventoryItem.NONE;
        }
        if(ImGui.selectable("Normal", core.save.inventory.FIELD_PICTO_BOX === InventoryItem.PICTO_BOX)){
            core.save.inventory.FIELD_PICTO_BOX = InventoryItem.PICTO_BOX;
        }
        if(ImGui.selectable("Deluxe", core.save.inventory.FIELD_PICTO_BOX === InventoryItem.DELUXE_PICTO_BOX)){
            core.save.inventory.FIELD_PICTO_BOX = InventoryItem.DELUXE_PICTO_BOX;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Magic Armor", [core.save.inventory.FIELD_MAGIC_ARMOR])){
        core.save.inventory.FIELD_MAGIC_ARMOR = !core.save.inventory.FIELD_MAGIC_ARMOR;
    }
    if(ImGui.checkbox("Telescope", [core.save.inventory.FIELD_TELESCOPE])){
        core.save.inventory.FIELD_TELESCOPE = !core.save.inventory.FIELD_TELESCOPE;
    }
    if(ImGui.checkbox("Tingle Tuner", [core.save.inventory.FIELD_TINGLE_TUNER])){
        core.save.inventory.FIELD_TINGLE_TUNER = !core.save.inventory.FIELD_TINGLE_TUNER;
    }
    if(ImGui.checkbox("Iron Boots", [core.save.inventory.FIELD_IRON_BOOTS])){
        core.save.inventory.FIELD_IRON_BOOTS = !core.save.inventory.FIELD_IRON_BOOTS;
    }
    if(ImGui.checkbox("Hookshot", [core.save.inventory.FIELD_HOOKSHOT])){
        core.save.inventory.FIELD_HOOKSHOT = !core.save.inventory.FIELD_HOOKSHOT;
    }
    if(ImGui.checkbox("Skull Hammer", [core.save.inventory.FIELD_SKULL_HAMMER])){
        core.save.inventory.FIELD_SKULL_HAMMER = !core.save.inventory.FIELD_SKULL_HAMMER;
    }
    if(ImGui.checkbox("Boomerang", [core.save.inventory.FIELD_BOOMERANG])){
        core.save.inventory.FIELD_BOOMERANG = !core.save.inventory.FIELD_BOOMERANG;
    }
    if(ImGui.beginCombo("Bow", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.FIELD_BOW === InventoryItem.NONE)){
            core.save.inventory.FIELD_BOW = InventoryItem.NONE;
        }
        if(ImGui.selectable("Normal", core.save.inventory.FIELD_BOW === InventoryItem.BOW)){
            core.save.inventory.FIELD_BOW = InventoryItem.BOW;
        }
        if(ImGui.selectable("Fire/Ice", core.save.inventory.FIELD_BOW === InventoryItem.FI_BOW)){
            core.save.inventory.FIELD_BOW = InventoryItem.FI_BOW;
        }
        if(ImGui.selectable("Light", core.save.inventory.FIELD_BOW === InventoryItem.LIGHT_BOW)){
            core.save.inventory.FIELD_BOW = InventoryItem.LIGHT_BOW;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Deku Leaf", [core.save.inventory.FIELD_DEKU_LEAF])){
        core.save.inventory.FIELD_DEKU_LEAF = !core.save.inventory.FIELD_DEKU_LEAF;
    }
    if(ImGui.beginCombo("Bottles", "", ComboFlags.NoPreview)){
        if(ImGui.beginCombo("Bottle 1", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.NONE)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_EMPTY)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_EMPTY;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_POTION_RED)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_POTION_RED;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_POTION_BLUE)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_POTION_BLUE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_POTION_GREEN)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_POTION_GREEN;
            }
            if(ImGui.selectable("Grandma's Soup", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_ELIXER_FULL)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_ELIXER_FULL;
            }
            if(ImGui.selectable("Grandma's Soup (Half)", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_ELIXER_HALF)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_ELIXER_HALF;
            }
            if(ImGui.selectable("Forest Water", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_FOREST_WATER)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_FOREST_WATER;
            }
            if(ImGui.selectable("Water", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_WATER)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_WATER;
            }
            if(ImGui.selectable("Firefly", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_FIREFLY)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_FIREFLY;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.FIELD_BOTTLE1 === InventoryItem.BOTTLE_FAIRY)){
                core.save.inventory.FIELD_BOTTLE1 = InventoryItem.BOTTLE_FAIRY;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 2", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.NONE)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_EMPTY)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_EMPTY;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_POTION_RED)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_POTION_RED;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_POTION_BLUE)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_POTION_BLUE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_POTION_GREEN)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_POTION_GREEN;
            }
            if(ImGui.selectable("Grandma's Soup", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_ELIXER_FULL)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_ELIXER_FULL;
            }
            if(ImGui.selectable("Grandma's Soup (Half)", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_ELIXER_HALF)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_ELIXER_HALF;
            }
            if(ImGui.selectable("Forest Water", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_FOREST_WATER)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_FOREST_WATER;
            }
            if(ImGui.selectable("Water", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_WATER)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_WATER;
            }
            if(ImGui.selectable("Firefly", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_FIREFLY)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_FIREFLY;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.FIELD_BOTTLE2 === InventoryItem.BOTTLE_FAIRY)){
                core.save.inventory.FIELD_BOTTLE2 = InventoryItem.BOTTLE_FAIRY;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 3", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.NONE)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_EMPTY)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_EMPTY;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_POTION_RED)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_POTION_RED;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_POTION_BLUE)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_POTION_BLUE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_POTION_GREEN)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_POTION_GREEN;
            }
            if(ImGui.selectable("Grandma's Soup", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_ELIXER_FULL)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_ELIXER_FULL;
            }
            if(ImGui.selectable("Grandma's Soup (Half)", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_ELIXER_HALF)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_ELIXER_HALF;
            }
            if(ImGui.selectable("Forest Water", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_FOREST_WATER)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_FOREST_WATER;
            }
            if(ImGui.selectable("Water", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_WATER)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_WATER;
            }
            if(ImGui.selectable("Firefly", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_FIREFLY)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_FIREFLY;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.FIELD_BOTTLE3 === InventoryItem.BOTTLE_FAIRY)){
                core.save.inventory.FIELD_BOTTLE3 = InventoryItem.BOTTLE_FAIRY;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 4", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.NONE)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_EMPTY)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_EMPTY;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_POTION_RED)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_POTION_RED;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_POTION_BLUE)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_POTION_BLUE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_POTION_GREEN)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_POTION_GREEN;
            }
            if(ImGui.selectable("Grandma's Soup", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_ELIXER_FULL)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_ELIXER_FULL;
            }
            if(ImGui.selectable("Grandma's Soup (Half)", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_ELIXER_HALF)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_ELIXER_HALF;
            }
            if(ImGui.selectable("Forest Water", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_FOREST_WATER)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_FOREST_WATER;
            }
            if(ImGui.selectable("Water", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_WATER)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_WATER;
            }
            if(ImGui.selectable("Firefly", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_FIREFLY)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_FIREFLY;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.FIELD_BOTTLE4 === InventoryItem.BOTTLE_FAIRY)){
                core.save.inventory.FIELD_BOTTLE4 = InventoryItem.BOTTLE_FAIRY;
            }
            ImGui.endCombo();
        }
        ImGui.endCombo();
    }
}