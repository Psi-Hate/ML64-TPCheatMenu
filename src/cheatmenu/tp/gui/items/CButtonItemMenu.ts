import { InventoryItem, ITPCore, TPEvents } from 'TwilightPrincess/API/TPAPI';
import { IImGui, ComboFlags } from "modloader64_api/Sylvain/ImGui";

export function renderCButtonItemMenu(core: ITPCore, ImGui: IImGui){
    if(ImGui.checkbox("Slingshot", [core.save.inventory.slingshot])){
        core.save.inventory.slingshot = !core.save.inventory.slingshot;
/*         if(core.save.inventory.bulletBag === AmmoUpgrade.NONE){
            core.save.inventory.bulletBag = AmmoUpgrade.BASE;
        } */
    }
    if(ImGui.checkbox("Lantern", [core.save.inventory.lantern])){
        core.save.inventory.lantern = !core.save.inventory.lantern;
    }
    if(ImGui.checkbox("Spinner", [core.save.inventory.spinner])){
        core.save.inventory.spinner = !core.save.inventory.spinner;
    }
    if(ImGui.checkbox("Iron Boots", [core.save.inventory.ironBoots])){
        core.save.inventory.ironBoots = !core.save.inventory.ironBoots;
    }
    if(ImGui.checkbox("Hawkeye", [core.save.inventory.hawkeye])){
        core.save.inventory.hawkeye = !core.save.inventory.hawkeye;
    }
    if(ImGui.checkbox("Horse Call", [core.save.inventory.horseCall])){
        core.save.inventory.horseCall = !core.save.inventory.horseCall;
    }
    if(ImGui.beginCombo("Oocoo", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.ooccoo === InventoryItem.NONE)){
            core.save.inventory.ooccoo = InventoryItem.NONE;
        }
        if(ImGui.selectable("Oocoo", core.save.inventory.ooccoo === InventoryItem.ooccoo)){
            core.save.inventory.ooccoo = InventoryItem.ooccoo;
        }
        if(ImGui.selectable("Oocoo Jr", core.save.inventory.ooccoo === InventoryItem.ooccooJr)){
            core.save.inventory.ooccoo = InventoryItem.ooccooJr;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Sky Book", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.skyBook === InventoryItem.NONE)){
            core.save.inventory.skyBook = InventoryItem.NONE;
        }
        if(ImGui.selectable("Empty", core.save.inventory.skyBook === InventoryItem.skyBook)){
            core.save.inventory.skyBook = InventoryItem.skyBook;
        }
        if(ImGui.selectable("Filled", core.save.inventory.skyBook === InventoryItem.skyBookFilled)){
            core.save.inventory.skyBook = InventoryItem.skyBookFilled;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Fishing Rod", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.fishingRod === InventoryItem.NONE)){
            core.save.inventory.fishingRod = InventoryItem.NONE;
        }
        if(ImGui.selectable("Normal", core.save.inventory.fishingRod === InventoryItem.fishingRod)){
            core.save.inventory.fishingRod = InventoryItem.fishingRod;
        }
        if(ImGui.selectable("Earring", core.save.inventory.fishingRod === InventoryItem.fishingRodEaring)){
            core.save.inventory.fishingRod = InventoryItem.fishingRodEaring;
        }
        if(ImGui.selectable("Earring + Worm", core.save.inventory.fishingRod === InventoryItem.fishingRodEaringWorm)){
            core.save.inventory.fishingRod = InventoryItem.fishingRodEaringWorm;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bomg Bag #1", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("Empty", core.save.inventory.bombBag1 === InventoryItem.bombEmpty)){
            core.save.inventory.bombBag1 = InventoryItem.bombEmpty;
        }
        if(ImGui.selectable("Normal", core.save.inventory.bombBag1 === InventoryItem.bombNormal)){
            core.save.inventory.bombBag1 = InventoryItem.bombNormal;
        }
        if(ImGui.selectable("Water", core.save.inventory.bombBag1 === InventoryItem.bombWater)){
            core.save.inventory.bombBag1 = InventoryItem.bombWater;
        }
        if(ImGui.selectable("Bug", core.save.inventory.bombBag1 === InventoryItem.bombBug)){
            core.save.inventory.bombBag1 = InventoryItem.bombBug;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bomg Bag #2", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("Empty", core.save.inventory.bombBag2 === InventoryItem.bombEmpty)){
            core.save.inventory.bombBag2 = InventoryItem.bombEmpty;
        }
        if(ImGui.selectable("Normal", core.save.inventory.bombBag2 === InventoryItem.bombNormal)){
            core.save.inventory.bombBag2 = InventoryItem.bombNormal;
        }
        if(ImGui.selectable("Water", core.save.inventory.bombBag2 === InventoryItem.bombWater)){
            core.save.inventory.bombBag2 = InventoryItem.bombWater;
        }
        if(ImGui.selectable("Bug", core.save.inventory.bombBag2 === InventoryItem.bombBug)){
            core.save.inventory.bombBag2 = InventoryItem.bombBug;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bomg Bag #3", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("Empty", core.save.inventory.bombBag3 === InventoryItem.bombEmpty)){
            core.save.inventory.bombBag3 = InventoryItem.bombEmpty;
        }
        if(ImGui.selectable("Normal", core.save.inventory.bombBag3 === InventoryItem.bombNormal)){
            core.save.inventory.bombBag3 = InventoryItem.bombNormal;
        }
        if(ImGui.selectable("Water", core.save.inventory.bombBag3 === InventoryItem.bombWater)){
            core.save.inventory.bombBag3 = InventoryItem.bombWater;
        }
        if(ImGui.selectable("Bug", core.save.inventory.bombBag3 === InventoryItem.bombBug)){
            core.save.inventory.bombBag3 = InventoryItem.bombBug;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Gale Boomerang", [core.save.inventory.galeBoomerang])){
        core.save.inventory.galeBoomerang = !core.save.inventory.galeBoomerang;
    }
    if(ImGui.beginCombo("Clawshot", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("No Clawshot", core.save.inventory.clawshot === InventoryItem.NONE)){
            core.save.inventory.clawshot = InventoryItem.NONE;
        }
        if(ImGui.selectable("Clawshot", core.save.inventory.clawshot === InventoryItem.clawshot)){
            core.save.inventory.clawshot = InventoryItem.clawshot;
        }
        if(ImGui.selectable("Double Clawshot", core.save.inventory.clawshot === InventoryItem.doubleClawshot)){
            core.save.inventory.clawshot = InventoryItem.doubleClawshot;
        }
        ImGui.endCombo();
    }
    if(ImGui.checkbox("Bow", [core.save.inventory.bow])){
        core.save.inventory.bow = !core.save.inventory.bow;
    }
    if(ImGui.checkbox("Ball and Chain", [core.save.inventory.ballAndChain])){
        core.save.inventory.ballAndChain = !core.save.inventory.ballAndChain;
    }
    if(ImGui.beginCombo("Bottles", "", ComboFlags.NoPreview)){
        if(ImGui.beginCombo("Bottle 1", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle1 === InventoryItem.bottle_empty)){
                core.save.inventory.bottle1 = InventoryItem.bottle_empty;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle1 === InventoryItem.bombEmpty)){
                core.save.inventory.bottle1 = InventoryItem.bombEmpty;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle1 === InventoryItem.RedPotion)){
                core.save.inventory.bottle1 = InventoryItem.RedPotion;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle1 === InventoryItem.BluePotion)){
                core.save.inventory.bottle1 = InventoryItem.BluePotion;
            }
            if(ImGui.selectable("Milk", core.save.inventory.bottle1 === InventoryItem.Milk)){
                core.save.inventory.bottle1 = InventoryItem.Milk;
            }
            if(ImGui.selectable("Milk (Half)", core.save.inventory.bottle1 === InventoryItem.MilkHalf)){
                core.save.inventory.bottle1 = InventoryItem.MilkHalf;
            }
            if(ImGui.selectable("Lantern Oil", core.save.inventory.bottle1 === InventoryItem.LanternOil)){
                core.save.inventory.bottle1 = InventoryItem.LanternOil;
            }
            if(ImGui.selectable("Water", core.save.inventory.bottle1 === InventoryItem.Water)){
                core.save.inventory.bottle1 = InventoryItem.Water;
            }
            if(ImGui.selectable("Hot Spring Water", core.save.inventory.bottle1 === InventoryItem.HotSpringwater)){
                core.save.inventory.bottle1 = InventoryItem.HotSpringwater;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle1 === InventoryItem.Fairy)){
                core.save.inventory.bottle1 = InventoryItem.Fairy;
            }
            if(ImGui.selectable("Bee Larva", core.save.inventory.bottle1 === InventoryItem.BeeLarva)){
                core.save.inventory.bottle1 = InventoryItem.BeeLarva;
            }
            if(ImGui.selectable("Red Chu Jelly", core.save.inventory.bottle1 === InventoryItem.RedChuJelly)){
                core.save.inventory.bottle1 = InventoryItem.RedChuJelly;
            }
            if(ImGui.selectable("Blue Chu Jelly", core.save.inventory.bottle1 === InventoryItem.BlueChuJelly)){
                core.save.inventory.bottle1 = InventoryItem.BlueChuJelly;
            }
            if(ImGui.selectable("Green Chu Jelly", core.save.inventory.bottle1 === InventoryItem.GreenChuJelly)){
                core.save.inventory.bottle1 = InventoryItem.GreenChuJelly;
            }
            if(ImGui.selectable("Yellow Chu Jelly", core.save.inventory.bottle1 === InventoryItem.YellowChuJelly)){
                core.save.inventory.bottle1 = InventoryItem.YellowChuJelly;
            }
            if(ImGui.selectable("Purple Chu Jelly", core.save.inventory.bottle1 === InventoryItem.PurpleChuJelly)){
                core.save.inventory.bottle1 = InventoryItem.PurpleChuJelly;
            }
            if(ImGui.selectable("Rare Chu Jelly", core.save.inventory.bottle1 === InventoryItem.RareChuJelly)){
                core.save.inventory.bottle1 = InventoryItem.RareChuJelly;
            }
            if(ImGui.selectable("Nasty Soup", core.save.inventory.bottle1 === InventoryItem.NastySoup)){
                core.save.inventory.bottle1 = InventoryItem.NastySoup;
            }
            if(ImGui.selectable("Simple Soup", core.save.inventory.bottle1 === InventoryItem.SimpleSoup)){
                core.save.inventory.bottle1 = InventoryItem.SimpleSoup;
            }
            if(ImGui.selectable("Good Soup", core.save.inventory.bottle1 === InventoryItem.GoodSoup)){
                core.save.inventory.bottle1 = InventoryItem.GoodSoup;
            }
            if(ImGui.selectable("Superb Soup", core.save.inventory.bottle1 === InventoryItem.SuperbSoup)){
                core.save.inventory.bottle1 = InventoryItem.SuperbSoup;
            }
            if(ImGui.selectable("Worm", core.save.inventory.bottle1 === InventoryItem.Worm)){
                core.save.inventory.bottle1 = InventoryItem.Worm;
            }
            if(ImGui.selectable("Great Fairy Tears", core.save.inventory.bottle1 === InventoryItem.GreatFairysTears)){
                core.save.inventory.bottle1 = InventoryItem.GreatFairysTears;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 2", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle2 === InventoryItem.NONE)){
                core.save.inventory.bottle2 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle2 === InventoryItem.bombEmpty)){
                core.save.inventory.bottle2 = InventoryItem.bombEmpty;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle2 === InventoryItem.RedPotion)){
                core.save.inventory.bottle2 = InventoryItem.RedPotion;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle2 === InventoryItem.BluePotion)){
                core.save.inventory.bottle2 = InventoryItem.BluePotion;
            }
            if(ImGui.selectable("Milk", core.save.inventory.bottle2 === InventoryItem.Milk)){
                core.save.inventory.bottle2 = InventoryItem.Milk;
            }
            if(ImGui.selectable("Milk (Half)", core.save.inventory.bottle2 === InventoryItem.MilkHalf)){
                core.save.inventory.bottle2 = InventoryItem.MilkHalf;
            }
            if(ImGui.selectable("Lantern Oil", core.save.inventory.bottle2 === InventoryItem.LanternOil)){
                core.save.inventory.bottle2 = InventoryItem.LanternOil;
            }
            if(ImGui.selectable("Water", core.save.inventory.bottle2 === InventoryItem.Water)){
                core.save.inventory.bottle2 = InventoryItem.Water;
            }
            if(ImGui.selectable("Hot Spring Water", core.save.inventory.bottle2 === InventoryItem.HotSpringwater)){
                core.save.inventory.bottle2 = InventoryItem.HotSpringwater;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle2 === InventoryItem.Fairy)){
                core.save.inventory.bottle2 = InventoryItem.Fairy;
            }
            if(ImGui.selectable("Bee Larva", core.save.inventory.bottle2 === InventoryItem.BeeLarva)){
                core.save.inventory.bottle2 = InventoryItem.BeeLarva;
            }
            if(ImGui.selectable("Red Chu Jelly", core.save.inventory.bottle2 === InventoryItem.RedChuJelly)){
                core.save.inventory.bottle2 = InventoryItem.RedChuJelly;
            }
            if(ImGui.selectable("Blue Chu Jelly", core.save.inventory.bottle2 === InventoryItem.BlueChuJelly)){
                core.save.inventory.bottle2 = InventoryItem.BlueChuJelly;
            }
            if(ImGui.selectable("Green Chu Jelly", core.save.inventory.bottle2 === InventoryItem.GreenChuJelly)){
                core.save.inventory.bottle2 = InventoryItem.GreenChuJelly;
            }
            if(ImGui.selectable("Yellow Chu Jelly", core.save.inventory.bottle2 === InventoryItem.YellowChuJelly)){
                core.save.inventory.bottle2 = InventoryItem.YellowChuJelly;
            }
            if(ImGui.selectable("Purple Chu Jelly", core.save.inventory.bottle2 === InventoryItem.PurpleChuJelly)){
                core.save.inventory.bottle2 = InventoryItem.PurpleChuJelly;
            }
            if(ImGui.selectable("Rare Chu Jelly", core.save.inventory.bottle2 === InventoryItem.RareChuJelly)){
                core.save.inventory.bottle2 = InventoryItem.RareChuJelly;
            }
            if(ImGui.selectable("Nasty Soup", core.save.inventory.bottle2 === InventoryItem.NastySoup)){
                core.save.inventory.bottle2 = InventoryItem.NastySoup;
            }
            if(ImGui.selectable("Simple Soup", core.save.inventory.bottle2 === InventoryItem.SimpleSoup)){
                core.save.inventory.bottle2 = InventoryItem.SimpleSoup;
            }
            if(ImGui.selectable("Good Soup", core.save.inventory.bottle2 === InventoryItem.GoodSoup)){
                core.save.inventory.bottle2 = InventoryItem.GoodSoup;
            }
            if(ImGui.selectable("Superb Soup", core.save.inventory.bottle2 === InventoryItem.SuperbSoup)){
                core.save.inventory.bottle2 = InventoryItem.SuperbSoup;
            }
            if(ImGui.selectable("Worm", core.save.inventory.bottle2 === InventoryItem.Worm)){
                core.save.inventory.bottle2 = InventoryItem.Worm;
            }
            if(ImGui.selectable("Great Fairy Tears", core.save.inventory.bottle2 === InventoryItem.GreatFairysTears)){
                core.save.inventory.bottle2 = InventoryItem.GreatFairysTears;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 3", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle3 === InventoryItem.NONE)){
                core.save.inventory.bottle3 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle3 === InventoryItem.bombEmpty)){
                core.save.inventory.bottle3 = InventoryItem.bombEmpty;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle3 === InventoryItem.RedPotion)){
                core.save.inventory.bottle3 = InventoryItem.RedPotion;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle3 === InventoryItem.BluePotion)){
                core.save.inventory.bottle3 = InventoryItem.BluePotion;
            }
            if(ImGui.selectable("Milk", core.save.inventory.bottle3 === InventoryItem.Milk)){
                core.save.inventory.bottle3 = InventoryItem.Milk;
            }
            if(ImGui.selectable("Milk (Half)", core.save.inventory.bottle3 === InventoryItem.MilkHalf)){
                core.save.inventory.bottle3 = InventoryItem.MilkHalf;
            }
            if(ImGui.selectable("Lantern Oil", core.save.inventory.bottle3 === InventoryItem.LanternOil)){
                core.save.inventory.bottle3 = InventoryItem.LanternOil;
            }
            if(ImGui.selectable("Water", core.save.inventory.bottle3 === InventoryItem.Water)){
                core.save.inventory.bottle3 = InventoryItem.Water;
            }
            if(ImGui.selectable("Hot Spring Water", core.save.inventory.bottle3 === InventoryItem.HotSpringwater)){
                core.save.inventory.bottle3 = InventoryItem.HotSpringwater;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle3 === InventoryItem.Fairy)){
                core.save.inventory.bottle3 = InventoryItem.Fairy;
            }
            if(ImGui.selectable("Bee Larva", core.save.inventory.bottle3 === InventoryItem.BeeLarva)){
                core.save.inventory.bottle3 = InventoryItem.BeeLarva;
            }
            if(ImGui.selectable("Red Chu Jelly", core.save.inventory.bottle3 === InventoryItem.RedChuJelly)){
                core.save.inventory.bottle3 = InventoryItem.RedChuJelly;
            }
            if(ImGui.selectable("Blue Chu Jelly", core.save.inventory.bottle3 === InventoryItem.BlueChuJelly)){
                core.save.inventory.bottle3 = InventoryItem.BlueChuJelly;
            }
            if(ImGui.selectable("Green Chu Jelly", core.save.inventory.bottle3 === InventoryItem.GreenChuJelly)){
                core.save.inventory.bottle3 = InventoryItem.GreenChuJelly;
            }
            if(ImGui.selectable("Yellow Chu Jelly", core.save.inventory.bottle3 === InventoryItem.YellowChuJelly)){
                core.save.inventory.bottle3 = InventoryItem.YellowChuJelly;
            }
            if(ImGui.selectable("Purple Chu Jelly", core.save.inventory.bottle3 === InventoryItem.PurpleChuJelly)){
                core.save.inventory.bottle3 = InventoryItem.PurpleChuJelly;
            }
            if(ImGui.selectable("Rare Chu Jelly", core.save.inventory.bottle3 === InventoryItem.RareChuJelly)){
                core.save.inventory.bottle3 = InventoryItem.RareChuJelly;
            }
            if(ImGui.selectable("Nasty Soup", core.save.inventory.bottle3 === InventoryItem.NastySoup)){
                core.save.inventory.bottle3 = InventoryItem.NastySoup;
            }
            if(ImGui.selectable("Simple Soup", core.save.inventory.bottle3 === InventoryItem.SimpleSoup)){
                core.save.inventory.bottle3 = InventoryItem.SimpleSoup;
            }
            if(ImGui.selectable("Good Soup", core.save.inventory.bottle3 === InventoryItem.GoodSoup)){
                core.save.inventory.bottle3 = InventoryItem.GoodSoup;
            }
            if(ImGui.selectable("Superb Soup", core.save.inventory.bottle3 === InventoryItem.SuperbSoup)){
                core.save.inventory.bottle3 = InventoryItem.SuperbSoup;
            }
            if(ImGui.selectable("Worm", core.save.inventory.bottle3 === InventoryItem.Worm)){
                core.save.inventory.bottle3 = InventoryItem.Worm;
            }
            if(ImGui.selectable("Great Fairy Tears", core.save.inventory.bottle3 === InventoryItem.GreatFairysTears)){
                core.save.inventory.bottle3 = InventoryItem.GreatFairysTears;
            }
            ImGui.endCombo();
        }
        if(ImGui.beginCombo("Bottle 4", "", ComboFlags.NoPreview)){
            if(ImGui.selectable("None", core.save.inventory.bottle4 === InventoryItem.NONE)){
                core.save.inventory.bottle4 = InventoryItem.NONE;
            }
            if(ImGui.selectable("Empty Bottle", core.save.inventory.bottle4 === InventoryItem.bombEmpty)){
                core.save.inventory.bottle4 = InventoryItem.bombEmpty;
            }
            if(ImGui.selectable("Red Potion", core.save.inventory.bottle4 === InventoryItem.RedPotion)){
                core.save.inventory.bottle4 = InventoryItem.RedPotion;
            }
            if(ImGui.selectable("Blue Potion", core.save.inventory.bottle4 === InventoryItem.BluePotion)){
                core.save.inventory.bottle4 = InventoryItem.BluePotion;
            }
            if(ImGui.selectable("Milk", core.save.inventory.bottle4 === InventoryItem.Milk)){
                core.save.inventory.bottle4 = InventoryItem.Milk;
            }
            if(ImGui.selectable("Milk (Half)", core.save.inventory.bottle4 === InventoryItem.MilkHalf)){
                core.save.inventory.bottle4 = InventoryItem.MilkHalf;
            }
            if(ImGui.selectable("Lantern Oil", core.save.inventory.bottle4 === InventoryItem.LanternOil)){
                core.save.inventory.bottle4 = InventoryItem.LanternOil;
            }
            if(ImGui.selectable("Water", core.save.inventory.bottle4 === InventoryItem.Water)){
                core.save.inventory.bottle4 = InventoryItem.Water;
            }
            if(ImGui.selectable("Hot Spring Water", core.save.inventory.bottle4 === InventoryItem.HotSpringwater)){
                core.save.inventory.bottle4 = InventoryItem.HotSpringwater;
            }
            if(ImGui.selectable("Fairy", core.save.inventory.bottle4 === InventoryItem.Fairy)){
                core.save.inventory.bottle4 = InventoryItem.Fairy;
            }
            if(ImGui.selectable("Bee Larva", core.save.inventory.bottle4 === InventoryItem.BeeLarva)){
                core.save.inventory.bottle4 = InventoryItem.BeeLarva;
            }
            if(ImGui.selectable("Red Chu Jelly", core.save.inventory.bottle4 === InventoryItem.RedChuJelly)){
                core.save.inventory.bottle4 = InventoryItem.RedChuJelly;
            }
            if(ImGui.selectable("Blue Chu Jelly", core.save.inventory.bottle4 === InventoryItem.BlueChuJelly)){
                core.save.inventory.bottle4 = InventoryItem.BlueChuJelly;
            }
            if(ImGui.selectable("Green Chu Jelly", core.save.inventory.bottle4 === InventoryItem.GreenChuJelly)){
                core.save.inventory.bottle4 = InventoryItem.GreenChuJelly;
            }
            if(ImGui.selectable("Yellow Chu Jelly", core.save.inventory.bottle4 === InventoryItem.YellowChuJelly)){
                core.save.inventory.bottle4 = InventoryItem.YellowChuJelly;
            }
            if(ImGui.selectable("Purple Chu Jelly", core.save.inventory.bottle4 === InventoryItem.PurpleChuJelly)){
                core.save.inventory.bottle4 = InventoryItem.PurpleChuJelly;
            }
            if(ImGui.selectable("Rare Chu Jelly", core.save.inventory.bottle4 === InventoryItem.RareChuJelly)){
                core.save.inventory.bottle4 = InventoryItem.RareChuJelly;
            }
            if(ImGui.selectable("Nasty Soup", core.save.inventory.bottle4 === InventoryItem.NastySoup)){
                core.save.inventory.bottle4 = InventoryItem.NastySoup;
            }
            if(ImGui.selectable("Simple Soup", core.save.inventory.bottle4 === InventoryItem.SimpleSoup)){
                core.save.inventory.bottle4 = InventoryItem.SimpleSoup;
            }
            if(ImGui.selectable("Good Soup", core.save.inventory.bottle4 === InventoryItem.GoodSoup)){
                core.save.inventory.bottle4 = InventoryItem.GoodSoup;
            }
            if(ImGui.selectable("Superb Soup", core.save.inventory.bottle4 === InventoryItem.SuperbSoup)){
                core.save.inventory.bottle4 = InventoryItem.SuperbSoup;
            }
            if(ImGui.selectable("Worm", core.save.inventory.bottle4 === InventoryItem.Worm)){
                core.save.inventory.bottle4 = InventoryItem.Worm;
            }
            if(ImGui.selectable("Great Fairy Tears", core.save.inventory.bottle4 === InventoryItem.GreatFairysTears)){
                core.save.inventory.bottle4 = InventoryItem.GreatFairysTears;
            }
            ImGui.endCombo();
        }
        ImGui.endCombo();
    }
}