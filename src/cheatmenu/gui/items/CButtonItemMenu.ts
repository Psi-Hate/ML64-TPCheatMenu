import { IOOTCore, InventoryItem, AmmoUpgrade, Hookshot, Ocarina } from "modloader64_api/OOT/OOTAPI";
import { IImGui, ComboFlags } from "modloader64_api/Sylvain/ImGui";

export function renderCButtonItemMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Deku Stick", [core.save.inventory.dekuSticks])){
        core.save.inventory.dekuSticks = !core.save.inventory.dekuSticks;
        if(core.save.inventory.dekuSticksCapacity === AmmoUpgrade.NONE){
            core.save.inventory.dekuSticksCapacity = AmmoUpgrade.BASE;
        }
    }
    if(ImGui.checkbox("Deku Nuts", [core.save.inventory.dekuNuts])){
        core.save.inventory.dekuNuts = !core.save.inventory.dekuNuts;
        if(core.save.inventory.dekuNutsCapacity === AmmoUpgrade.NONE){
            core.save.inventory.dekuNutsCapacity = AmmoUpgrade.BASE;
        }
    }
    if(ImGui.checkbox("Fairy Slingshot", [core.save.inventory.fairySlingshot])){
        core.save.inventory.fairySlingshot = !core.save.inventory.fairySlingshot;
        if(core.save.inventory.bulletBag === AmmoUpgrade.NONE){
            core.save.inventory.bulletBag = AmmoUpgrade.BASE;
        }
    }
    if(ImGui.beginCombo("Ocarina", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("No Ocarina", core.save.inventory.ocarina === Ocarina.NONE)){
            core.save.inventory.ocarina = Ocarina.NONE;
        }
        if(ImGui.selectable("Fairy Ocarina", core.save.inventory.ocarina === Ocarina.FAIRY_OCARINA)){
            core.save.inventory.ocarina = Ocarina.FAIRY_OCARINA;
        }
        if(ImGui.selectable("Ocarina of Time", core.save.inventory.ocarina === Ocarina.OCARINA_OF_TIME)){
            core.save.inventory.ocarina = Ocarina.OCARINA_OF_TIME;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Bombs", [core.save.inventory.bombs])){
        core.save.inventory.bombs = !core.save.inventory.bombs;
        if(core.save.inventory.bombBag === AmmoUpgrade.NONE){
            core.save.inventory.bombBag = AmmoUpgrade.BASE;
        }
    }
    if(ImGui.checkbox("Bombchus", [core.save.inventory.bombchus])){
        core.save.inventory.bombchus = !core.save.inventory.bombchus;
    }
    if(ImGui.checkbox("Boomerang", [core.save.inventory.boomerang])){
        core.save.inventory.boomerang = !core.save.inventory.boomerang;
    }
    if(ImGui.checkbox("Lens of Truth", [core.save.inventory.lensOfTruth])){
        core.save.inventory.lensOfTruth = !core.save.inventory.lensOfTruth;
    }
    if(ImGui.checkbox("Magic Beans", [core.save.inventory.magicBeans])){
        core.save.inventory.magicBeans = !core.save.inventory.magicBeans;
    }
    if(ImGui.beginCombo("Hookshot", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("No Hookshot", core.save.inventory.hookshot === Hookshot.NONE)){
            core.save.inventory.hookshot = Hookshot.NONE;
        }
        if(ImGui.selectable("Hookshot", core.save.inventory.hookshot === Hookshot.HOOKSHOT)){
            core.save.inventory.hookshot = Hookshot.HOOKSHOT;
        }
        if(ImGui.selectable("Longshot", core.save.inventory.hookshot === Hookshot.LONGSHOT)){
            core.save.inventory.hookshot = Hookshot.LONGSHOT;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Fairy Bow", [core.save.inventory.fairyBow])){
        core.save.inventory.fairyBow = !core.save.inventory.fairyBow;
        if(core.save.inventory.quiver === AmmoUpgrade.NONE){
            core.save.inventory.quiver = AmmoUpgrade.BASE;
        }
    }
    if(ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Fire", [core.save.inventory.fireArrows])){
            core.save.inventory.fireArrows = !core.save.inventory.fireArrows;
        }
        if(ImGui.checkbox("Ice", [core.save.inventory.iceArrows])){
            core.save.inventory.iceArrows = !core.save.inventory.iceArrows;
        }
        if(ImGui.checkbox("Light", [core.save.inventory.lightArrows])){
            core.save.inventory.lightArrows = !core.save.inventory.lightArrows;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Megaton Hammer", [core.save.inventory.megatonHammer])){
        core.save.inventory.megatonHammer = !core.save.inventory.megatonHammer;
    }
    if(ImGui.beginCombo("Fairy Blessings", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Din's Fire", [core.save.inventory.dinsFire])){
            core.save.inventory.dinsFire = !core.save.inventory.dinsFire;
        }
        if(ImGui.checkbox("Farore's Wind", [core.save.inventory.faroresWind])){
            core.save.inventory.faroresWind = !core.save.inventory.faroresWind;
        }
        if(ImGui.checkbox("Nayru's Love", [core.save.inventory.nayrusLove])){
            core.save.inventory.nayrusLove = !core.save.inventory.nayrusLove;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bottles", "", ComboFlags.NoPreview)){
        if(ImGui.beginCombo("Bottle 1", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_1 === InventoryItem.NONE)){
                core.save.inventory.bottle_1 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_1 === InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_1 = InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_1 === InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_1 = InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_1 === InventoryItem.RED_POTION)){
                core.save.inventory.bottle_1 = InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_1 === InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_1 = InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_1 === InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_1 = InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_1 === InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_1 = InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_1 === InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_1 = InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_1 === InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_1 = InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_1 === InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_1 = InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_1 === InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_1 = InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_1 === InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_1 = InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_1 === InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_1 = InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_1 === InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_1 = InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 2", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_2 === InventoryItem.NONE)){
                core.save.inventory.bottle_2 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_2 === InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_2 = InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_2 === InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_2 = InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_2 === InventoryItem.RED_POTION)){
                core.save.inventory.bottle_2 = InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_2 === InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_2 = InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_2 === InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_2 = InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_2 === InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_2 = InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_2 === InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_2 = InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_2 === InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_2 = InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_2 === InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_2 = InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_2 === InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_2 = InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_2 === InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_2 = InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_2 === InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_2 = InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_2 === InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_2 = InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 3", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_3 === InventoryItem.NONE)){
                core.save.inventory.bottle_3 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_3 === InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_3 = InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_3 === InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_3 = InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_3 === InventoryItem.RED_POTION)){
                core.save.inventory.bottle_3 = InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_3 === InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_3 = InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_3 === InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_3 = InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_3 === InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_3 = InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_3 === InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_3 = InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_3 === InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_3 = InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_3 === InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_3 = InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_3 === InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_3 = InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_3 === InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_3 = InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_3 === InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_3 = InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_3 === InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_3 = InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 4", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle_4 === InventoryItem.NONE)){
                core.save.inventory.bottle_4 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle_4 === InventoryItem.EMPTY_BOTTLE)){
                core.save.inventory.bottle_4 = InventoryItem.EMPTY_BOTTLE;
            }
            if(ImGui.selectable("Green Potion", core.save.inventory.bottle_4 === InventoryItem.GREEN_POTION)){
                core.save.inventory.bottle_4 = InventoryItem.GREEN_POTION;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle_4 === InventoryItem.RED_POTION)){
                core.save.inventory.bottle_4 = InventoryItem.RED_POTION;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle_4 === InventoryItem.BLUE_POTION)){
                core.save.inventory.bottle_4 = InventoryItem.BLUE_POTION;
            }
            if(ImGui.selectable("Lon Lon Milk", core.save.inventory.bottle_4 === InventoryItem.LON_LON_MILK)){
                core.save.inventory.bottle_4 = InventoryItem.LON_LON_MILK;
            }
            if(ImGui.selectable("Lon Lon Milk (Half)", core.save.inventory.bottle_4 === InventoryItem.LON_LON_MILK_HALF)){
                core.save.inventory.bottle_4 = InventoryItem.LON_LON_MILK_HALF;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle_4 === InventoryItem.BOTTLED_FAIRY)){
                core.save.inventory.bottle_4 = InventoryItem.BOTTLED_FAIRY;
            }
            if(ImGui.selectable("Bugs", core.save.inventory.bottle_4 === InventoryItem.BOTTLED_BUGS)){
                core.save.inventory.bottle_4 = InventoryItem.BOTTLED_BUGS;
            }
            if(ImGui.selectable("Fish", core.save.inventory.bottle_4 === InventoryItem.BOTTLED_FISH)){
                core.save.inventory.bottle_4 = InventoryItem.BOTTLED_FISH;
            }
            if(ImGui.selectable("Poe Spirit", core.save.inventory.bottle_4 === InventoryItem.BOTTLED_POE)){
                core.save.inventory.bottle_4 = InventoryItem.BOTTLED_POE;
            }
            if(ImGui.selectable("Big Poe Spirit", core.save.inventory.bottle_4 === InventoryItem.BOTTLED_BIG_POE)){
                core.save.inventory.bottle_4 = InventoryItem.BOTTLED_BIG_POE;
            }
            if(ImGui.selectable("Blue Fire", core.save.inventory.bottle_4 === InventoryItem.BLUE_FIRE)){
                core.save.inventory.bottle_4 = InventoryItem.BLUE_FIRE;
            }
            if(ImGui.selectable("Ruto's Letter", core.save.inventory.bottle_4 === InventoryItem.RUTOS_LETTER)){
                core.save.inventory.bottle_4 = InventoryItem.RUTOS_LETTER;
            }
            ImGui.endCombo();
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Child Trading Item", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.childTradeItem === InventoryItem.NONE)){
            core.save.inventory.childTradeItem = InventoryItem.NONE;
        }
        if(ImGui.selectable("Weird Egg", core.save.inventory.childTradeItem === InventoryItem.POCKET_EGG)){
            core.save.inventory.childTradeItem = InventoryItem.WEIRD_EGG;
        }
        if(ImGui.selectable("Chicken", core.save.inventory.childTradeItem === InventoryItem.CHILD_CUCCO)){
            core.save.inventory.childTradeItem = InventoryItem.CHILD_CUCCO;
        }
        if(ImGui.selectable("Zelda's Letter", core.save.inventory.childTradeItem === InventoryItem.ZELDAS_LETTER)){
            core.save.inventory.childTradeItem = InventoryItem.ZELDAS_LETTER;
        }
        if(ImGui.selectable("\"SOLD OUT\"", core.save.inventory.childTradeItem === InventoryItem.SOLD_OUT)){
            core.save.inventory.childTradeItem = InventoryItem.SOLD_OUT;
        }
        if(ImGui.selectable("Keaton Mask", core.save.inventory.childTradeItem === InventoryItem.KEATON_MASK)){
            core.save.inventory.childTradeItem = InventoryItem.KEATON_MASK;
        }
        if(ImGui.selectable("Skull Mask", core.save.inventory.childTradeItem === InventoryItem.SKULL_MASK)){
            core.save.inventory.childTradeItem = InventoryItem.SKULL_MASK;
        }
        if(ImGui.selectable("Spooky Mask", core.save.inventory.childTradeItem === InventoryItem.SPOOKY_MASK)){
            core.save.inventory.childTradeItem = InventoryItem.SPOOKY_MASK;
        }
        if(ImGui.selectable("Bunny Hood", core.save.inventory.childTradeItem === InventoryItem.BUNNY_HOOD)){
            core.save.inventory.childTradeItem = InventoryItem.BUNNY_HOOD;
        }
        if(ImGui.selectable("Mask of Truth", (core.save.inventory.childTradeItem === InventoryItem.MASK_OF_TRUTH))){
            core.save.inventory.childTradeItem = InventoryItem.MASK_OF_TRUTH;
        }
        if(ImGui.selectable("Gerudo Mask", core.save.inventory.childTradeItem === InventoryItem.GERUDO_MASK)){
            core.save.inventory.childTradeItem = InventoryItem.GERUDO_MASK;
        }
        if(ImGui.selectable("Goron Mask", core.save.inventory.childTradeItem === InventoryItem.GORON_MASK)){
            core.save.inventory.childTradeItem = InventoryItem.GORON_MASK;
        }
        if(ImGui.selectable("Zora Mask", core.save.inventory.childTradeItem === InventoryItem.ZORA_MASK)){
            core.save.inventory.childTradeItem = InventoryItem.ZORA_MASK;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Adult Trade Item", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.adultTradeItem === InventoryItem.NONE)){
            core.save.inventory.adultTradeItem = InventoryItem.NONE;
        }
        if(ImGui.selectable("Pocket Egg", core.save.inventory.adultTradeItem === InventoryItem.POCKET_EGG)){
            core.save.inventory.adultTradeItem = InventoryItem.POCKET_EGG;
        }
        if(ImGui.selectable("Pocket Cucco", core.save.inventory.adultTradeItem === InventoryItem.POCKET_CUCCO)){
            core.save.inventory.adultTradeItem = InventoryItem.POCKET_CUCCO;
        }
        if(ImGui.selectable("Cojiro", core.save.inventory.adultTradeItem === InventoryItem.COJIRO)){
            core.save.inventory.adultTradeItem = InventoryItem.COJIRO;
        }
        if(ImGui.selectable("Odd Mushroom", core.save.inventory.adultTradeItem === InventoryItem.ODD_MUSHROOM)){
            core.save.inventory.adultTradeItem = InventoryItem.ODD_MUSHROOM;
        }
        if(ImGui.selectable("Odd Potion", core.save.inventory.adultTradeItem === InventoryItem.ODD_POTION)){
            core.save.inventory.adultTradeItem = InventoryItem.ODD_POTION;
        }
        if(ImGui.selectable("Poacher's Saw", core.save.inventory.adultTradeItem === InventoryItem.POACHERS_SAW)){
            core.save.inventory.adultTradeItem = InventoryItem.POACHERS_SAW;
        }
        if(ImGui.selectable("Broken Goron's Sword", core.save.inventory.adultTradeItem === InventoryItem.BROKEN_GORON_SWORD)){
            core.save.inventory.adultTradeItem = InventoryItem.BROKEN_GORON_SWORD;
        }
        if(ImGui.selectable("Prescription", core.save.inventory.adultTradeItem === InventoryItem.PRESCRIPTION)){
            core.save.inventory.adultTradeItem = InventoryItem.PRESCRIPTION;
        }
        if(ImGui.selectable("Eyeball Frog", core.save.inventory.adultTradeItem === InventoryItem.EYEBALL_FROG)){
            core.save.inventory.adultTradeItem = InventoryItem.EYEBALL_FROG;
        }
        if(ImGui.selectable("World's Finest Eyedrops", core.save.inventory.adultTradeItem === InventoryItem.EYE_DROPS)){
            core.save.inventory.adultTradeItem = InventoryItem.EYE_DROPS;
        }
        if(ImGui.selectable("Claim Check", core.save.inventory.adultTradeItem === InventoryItem.CLAIM_CHECK)){
            core.save.inventory.adultTradeItem = InventoryItem.CLAIM_CHECK;
        }
        ImGui.endCombo();
    }
}