import { IOOTCore } from "modloader64_api/OOT/OOTAPI";
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { max } from "../cheatmenu";
import * as capacity from "./MaxCapacity";

export function renderConsumablesMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Rupees", "", ComboFlags.NoPreview)){
        let rupee_count: number_ref = [core.save.rupee_count];
        if(ImGui.sliderInt("##rupee_count", rupee_count, 0, capacity.wallet(core.save.inventory.wallet))){
            core.save.rupee_count = rupee_count[0];
        }
        ImGui.checkbox("Max", max.rupee_count);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Sticks", "", ComboFlags.NoPreview)){
        let dekuSticksCount: number_ref = [core.save.inventory.dekuSticksCount];
        if(ImGui.sliderInt("##dekuSticksCount", dekuSticksCount, 0, capacity.dekuSticks(core.save.inventory.dekuSticksCapacity))){
            core.save.inventory.dekuSticksCount = dekuSticksCount[0];
        }
        ImGui.checkbox("Max", max.dekuSticks);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Nuts", "", ComboFlags.NoPreview)){
        let dekuNutsCount: number_ref = [core.save.inventory.dekuNutsCount]
        if(ImGui.sliderInt("##dekuNutsCount", dekuNutsCount, 0, capacity.bombBag(core.save.inventory.dekuNutsCapacity))){
            core.save.inventory.dekuNutsCount = dekuNutsCount[0];
        }
        ImGui.checkbox("Max", max.dekuNuts);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Seeds", "", ComboFlags.NoPreview)){
        let dekuSeeds: number_ref = [core.save.inventory.dekuSeeds];
        if(ImGui.sliderInt("##dekuSeeds", dekuSeeds, 0, capacity.quiver(core.save.inventory.bulletBag))){
            core.save.inventory.dekuSeeds = dekuSeeds[0];
        }
        ImGui.checkbox("Max", max.dekuSeeds);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombs", "", ComboFlags.NoPreview)){
        let bombsCount: number_ref = [core.save.inventory.bombsCount]
        if(ImGui.sliderInt("##bombsCount", bombsCount, 0, capacity.bombBag(core.save.inventory.bombBag))){
            core.save.inventory.bombsCount = bombsCount[0];
        }
        ImGui.checkbox("Max", max.bombs);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombchus", "", ComboFlags.NoPreview)){
        let bombchuCount: number_ref = [core.save.inventory.bombchuCount];
        if(ImGui.sliderInt("##bombchuCount", bombchuCount, 0, 50)){
            core.save.inventory.bombchuCount = bombchuCount[0];
        }
        ImGui.checkbox("Max", max.bombchus);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Magic Beans", "", ComboFlags.NoPreview)){
        let magicBeansCount: number_ref = [core.save.inventory.magicBeansCount];
        if(ImGui.sliderInt("##magicBeansCount", magicBeansCount, 0, 15)){
            core.save.inventory.magicBeansCount = magicBeansCount[0];
        }
        ImGui.checkbox("Max", max.magicBeans);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)){
        let arrows: number_ref = [core.save.inventory.arrows]
        if(ImGui.sliderInt("##arrows", arrows, 0, capacity.quiver(core.save.inventory.quiver))){
            core.save.inventory.arrows = arrows[0];
        }
        ImGui.checkbox("Max", max.arrows);
        ImGui.endCombo();
    }
}