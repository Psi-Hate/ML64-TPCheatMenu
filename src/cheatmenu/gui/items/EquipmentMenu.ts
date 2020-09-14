import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { IOOTCore, Strength, ZoraScale } from "modloader64_api/OOT/OOTAPI";

export function renderEquipmentMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Swords", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Kokiri Sword", [core.save.swords.kokiriSword])){
            core.save.swords.kokiriSword = !core.save.swords.kokiriSword;
        }
        if(ImGui.checkbox("Master Sword", [core.save.swords.masterSword])){
            core.save.swords.masterSword = !core.save.swords.masterSword;
        }
        if(ImGui.checkbox("Giant's Knife", [core.save.swords.giantKnife])){
            core.save.swords.giantKnife = !core.save.swords.giantKnife;
        }
        if(ImGui.checkbox("Biggoron Sword", [core.save.swords.biggoronSword])){
            core.save.swords.biggoronSword = !core.save.swords.biggoronSword;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Shields", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Deku Shield", [core.save.shields.dekuShield])){
            core.save.shields.dekuShield = !core.save.shields.dekuShield;
        }
        if(ImGui.checkbox("Hylian Shield", [core.save.shields.hylianShield])){
            core.save.shields.hylianShield = !core.save.shields.hylianShield;
        }
        if(ImGui.checkbox("Mirror Shield", [core.save.shields.mirrorShield])){
            core.save.shields.mirrorShield = !core.save.shields.mirrorShield;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Tunics", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Kokiri Tunic", [core.save.tunics.kokiriTunic])){
            core.save.tunics.kokiriTunic = !core.save.tunics.kokiriTunic;
        }
        if(ImGui.checkbox("Goron Tunic", [core.save.tunics.goronTunic])){
            core.save.tunics.goronTunic = !core.save.tunics.goronTunic;
        }
        if(ImGui.checkbox("Zora Tunic", [core.save.tunics.zoraTunic])){
            core.save.tunics.zoraTunic = !core.save.tunics.zoraTunic;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Boots", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Kokiri Boots", [core.save.boots.kokiriBoots])){
            core.save.boots.kokiriBoots = !core.save.boots.kokiriBoots;
        }
        if(ImGui.checkbox("Iron Boots", [core.save.boots.ironBoots])){
            core.save.boots.ironBoots = !core.save.boots.ironBoots;
        }
        if(ImGui.checkbox("Hover Boots", [core.save.boots.hoverBoots])){
            core.save.boots.hoverBoots = !core.save.boots.hoverBoots;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Wallet", "", ComboFlags.NoPreview)){
        let wallet: number_ref = [core.save.inventory.wallet];
        if(ImGui.sliderInt("##wallet", wallet, 0, 3)){
            core.save.inventory.wallet = wallet[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Sticks Capacity", "", ComboFlags.NoPreview)){
        let dekuSticksCapacity: number_ref = [core.save.inventory.dekuSticksCapacity];
        if(ImGui.sliderInt("##dekuSticksCapacity", dekuSticksCapacity, 0, 3)){
            core.save.inventory.dekuSticksCapacity = dekuSticksCapacity[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Nuts Capacity", "", ComboFlags.NoPreview)){
        let dekuNutsCapacity: number_ref = [core.save.inventory.dekuNutsCapacity];
        if(ImGui.sliderInt("##dekuNutsCapacity", dekuNutsCapacity, 0, 3)){
            core.save.inventory.dekuNutsCapacity = dekuNutsCapacity[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bullet Bag", "", ComboFlags.NoPreview)){
        let bulletBag: number_ref = [core.save.inventory.bulletBag];
        if(ImGui.sliderInt("##bulletBag", bulletBag, 0, 3)){
            core.save.inventory.bulletBag = bulletBag[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bomb Bag", "", ComboFlags.NoPreview)){
        let bombBag: number_ref = [core.save.inventory.bombBag];
        if(ImGui.sliderInt("##bombBag", bombBag, 0, 3)){
            core.save.inventory.bombBag = bombBag[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Quiver", "", ComboFlags.NoPreview)){
        let quiver: number_ref = [core.save.inventory.quiver];
        if(ImGui.sliderInt("##quiver", quiver, 0, 3)){
            core.save.inventory.quiver = quiver[0];
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Gauntlet", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.strength === Strength.NONE)){
            core.save.inventory.strength = Strength.NONE;
        }
        if(ImGui.selectable("Goron Bracelet", core.save.inventory.strength === Strength.GORON_BRACELET)){
            core.save.inventory.strength = Strength.GORON_BRACELET;
        }
        if(ImGui.selectable("Silver Gauntlets", core.save.inventory.strength === Strength.SILVER_GAUNTLETS)){
            core.save.inventory.strength = Strength.SILVER_GAUNTLETS;
        }
        if(ImGui.selectable("Golden Gauntlets", core.save.inventory.strength === Strength.GOLDEN_GAUNTLETS)){
            core.save.inventory.strength = Strength.GOLDEN_GAUNTLETS;
        }
        // if(ImGui.selectable("Black Gauntlets", core.save.inventory.strength === Strength.BLACK_GAUNTLETS)){
        //     core.save.inventory.strength = Strength.BLACK_GAUNTLETS;
        // }
        // if(ImGui.selectable("Green Gauntlets", core.save.inventory.strength === Strength.GREEN_GAUNTLETS)){
        //     core.save.inventory.strength = Strength.GREEN_GAUNTLETS;
        // }
        // if(ImGui.selectable("Blue Gauntlets", core.save.inventory.strength === Strength.BLUE_GAUNTLETS)){
        //     core.save.inventory.strength = Strength.BLUE_GAUNTLETS;
        // }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Scale", "", ComboFlags.NoPreview)){
        if(ImGui.selectable("None", core.save.inventory.swimming === ZoraScale.NONE)){
            core.save.inventory.swimming = ZoraScale.NONE;
        }
        if(ImGui.selectable("Silver Scale", core.save.inventory.swimming === ZoraScale.SILVER)){
            core.save.inventory.swimming = ZoraScale.SILVER;
        }
        if(ImGui.selectable("Golden Scale", core.save.inventory.swimming === ZoraScale.GOLDEN)){
            core.save.inventory.swimming = ZoraScale.GOLDEN;
        }
        ImGui.endCombo();
    }
}