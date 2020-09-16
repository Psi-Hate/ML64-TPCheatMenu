import { IOOTCore, AmmoUpgrade, Wallet } from "modloader64_api/OOT/OOTAPI";
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { lockedItems } from "@cheatmenu/cheatmenu";

export function renderConsumablesMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Rupees", "", ComboFlags.NoPreview)){
        if(!lockedItems.rupee_count.locked[0]){
            lockedItems.rupee_count.value[0] = core.save.rupee_count;
        }
        const wallet_capacity: number = ((): number => {
            switch(core.save.inventory.wallet){
                case Wallet.CHILD:
                    return 99;
                case Wallet.ADULT:
                    return 200;
                case Wallet.GIANT:
                    return 500;
                default:
                case Wallet.TYCOON:
                    return 999;
            }
        })();
        if(ImGui.sliderInt("##rupee_count", lockedItems.rupee_count.value, 0, wallet_capacity)){
            core.save.rupee_count = lockedItems.rupee_count.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.rupee_count.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Sticks", "", ComboFlags.NoPreview)){
        if(!lockedItems.dekuSticks.locked[0]){
            lockedItems.dekuSticks.value[0] = core.save.inventory.dekuSticksCount;
        }
        const stick_capacity: number = ((): number => {
            switch(core.save.inventory.dekuSticksCapacity){
                default:
                case AmmoUpgrade.NONE:
                    return 0;
                case AmmoUpgrade.BASE:
                    return 10;
                case AmmoUpgrade.UPGRADED:
                    return 20;
                case AmmoUpgrade.MAX:
                    return 30;
            }
        })();
        if(ImGui.sliderInt("##dekuSticksCount", lockedItems.dekuSticks.value, 0, stick_capacity)){
            core.save.inventory.dekuSticksCount = lockedItems.dekuSticks.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.dekuSticks.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Nuts", "", ComboFlags.NoPreview)){
        if(!lockedItems.dekuNuts.locked[0]){
            lockedItems.dekuNuts.value[0] = core.save.inventory.dekuNutsCount;
        }
        const nut_capacity: number = ((): number => {
            switch(core.save.inventory.dekuNutsCapacity){
                default:
                case AmmoUpgrade.NONE:
                    return 0;
                case AmmoUpgrade.BASE:
                    return 20;
                case AmmoUpgrade.UPGRADED:
                    return 30;
                case AmmoUpgrade.MAX:
                    return 40;
            }
        })();
        if(ImGui.sliderInt("##dekuNutsCount", lockedItems.dekuNuts.value, 0, nut_capacity)){
            core.save.inventory.dekuNutsCount = lockedItems.dekuNuts.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.dekuNuts.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Seeds", "", ComboFlags.NoPreview)){
        if(!lockedItems.dekuSeeds.locked[0]){
            lockedItems.dekuSeeds.value[0] = core.save.inventory.dekuSeeds;
        }
        const seed_capacity: number = ((): number => {
            switch(core.save.inventory.bulletBag){
                default:
                case AmmoUpgrade.NONE:
                    return 0;
                case AmmoUpgrade.BASE:
                    return 30;
                case AmmoUpgrade.UPGRADED:
                    return 40;
                case AmmoUpgrade.MAX:
                    return 50;
            }
        })();
        if(ImGui.sliderInt("##dekuSeeds", lockedItems.dekuSeeds.value, 0, seed_capacity)){
            core.save.inventory.dekuSeeds = lockedItems.dekuSeeds.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.dekuSeeds.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombs", "", ComboFlags.NoPreview)){
        if(!lockedItems.bombs.locked[0]){
            lockedItems.bombs.value[0] = core.save.inventory.bombsCount;
        }
        const bomb_capacity: number = ((): number => {
            switch(core.save.inventory.bombBag){
                default:
                case AmmoUpgrade.NONE:
                    return 0;
                case AmmoUpgrade.BASE:
                    return 20;
                case AmmoUpgrade.UPGRADED:
                    return 30;
                case AmmoUpgrade.MAX:
                    return 40;
            }
        })();
        if(ImGui.sliderInt("##bombsCount", lockedItems.bombs.value, 0, bomb_capacity)){
            core.save.inventory.bombsCount = lockedItems.bombs.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.bombs.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombchus", "", ComboFlags.NoPreview)){
        if(!lockedItems.bombchus.locked[0]){
            lockedItems.bombchus.value[0] = core.save.inventory.bombchuCount;
        }
        if(ImGui.sliderInt("##bombchuCount", lockedItems.bombchus.value, 0, 50)){
            core.save.inventory.bombchuCount = lockedItems.bombchus.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.bombchus.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic Beans", "", ComboFlags.NoPreview)){
        if(!lockedItems.magicBeans.locked[0]){
            lockedItems.magicBeans.value[0] = core.save.inventory.magicBeansCount;
        }
        if(ImGui.sliderInt("##magicBeansCount", lockedItems.magicBeans.value, 0, 15)){
            core.save.inventory.magicBeansCount = lockedItems.magicBeans.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.magicBeans.locked);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)){
        if(!lockedItems.arrows.locked[0]){
            lockedItems.arrows.value[0] = core.save.inventory.arrows;
        }
        const arrow_capacity: number = ((): number => {
            switch(core.save.inventory.quiver){
                default:
                case AmmoUpgrade.NONE:
                    return 0;
                case AmmoUpgrade.BASE:
                    return 30;
                case AmmoUpgrade.UPGRADED:
                    return 40;
                case AmmoUpgrade.MAX:
                    return 50;
            }
        })();
        if(ImGui.sliderInt("##arrows", lockedItems.arrows.value, 0, arrow_capacity)){
            core.save.inventory.arrows = lockedItems.arrows.value[0];
        }
        ImGui.checkbox("Locked", lockedItems.arrows.locked);
        ImGui.endCombo();
    }
}