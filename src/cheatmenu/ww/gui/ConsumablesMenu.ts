import { IWWCore } from "WindWaker/API/WWAPI"; 
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { max } from "../cheatmenu";
import * as capacity from "./MaxCapacity";

export function renderConsumablesMenu(core: IWWCore, ImGui: IImGui){
    /* if(ImGui.beginCombo("Rupees", "", ComboFlags.NoPreview)){
        let rupee_count: number_ref = [core.save.questStatus.rupees];
        if(ImGui.sliderInt("##rupee_count", rupee_count, 0, capacity.wallet(core.save.questStatus.currentWallet))){
            core.save.questStatus.rupees = rupee_count[0];
        }
        ImGui.checkbox("Max", max.rupee_count);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Deku Seeds", "", ComboFlags.NoPreview)){
        let dekuSeeds: number_ref = [core.save.inventory.dekuSeeds];
        if(ImGui.sliderInt("##dekuSeeds", dekuSeeds, 0, 50)){
            core.save.inventory.dekuSeeds = dekuSeeds[0];
        }
        ImGui.checkbox("Max", max.dekuSeeds);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombs #1", "", ComboFlags.NoPreview)){
        let bombsCount: number_ref = [core.save.inventory.bombs1]
        if(ImGui.sliderInt("##bombsCount", bombsCount, 0, capacity.bombBag(core.save.inventory.bombBag1, core.save.inventory.bombCapacity))){
            core.save.inventory.bombs1 = bombsCount[0];
        }
        ImGui.checkbox("Max", max.bombs);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombs #2", "", ComboFlags.NoPreview)){
        let bombsCount: number_ref = [core.save.inventory.bombs2]
        if(ImGui.sliderInt("##bombsCount", bombsCount, 0, capacity.bombBag(core.save.inventory.bombBag1, core.save.inventory.bombCapacity))){
            core.save.inventory.bombs2 = bombsCount[0];
        }
        ImGui.checkbox("Max", max.bombs);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Bombs #3", "", ComboFlags.NoPreview)){
        let bombsCount: number_ref = [core.save.inventory.bombs3]
        if(ImGui.sliderInt("##bombsCount", bombsCount, 0, capacity.bombBag(core.save.inventory.bombBag1, core.save.inventory.bombCapacity))){
            core.save.inventory.bombs3 = bombsCount[0];
        }
        ImGui.checkbox("Max", max.bombs);
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)){
        let arrows: number_ref = [core.save.inventory.arrows]
        if(ImGui.sliderInt("##arrows", arrows, 0, core.save.inventory.quiver)){
            core.save.inventory.arrows = arrows[0];
        }
        ImGui.checkbox("Max", max.arrows);
        ImGui.endCombo();
    } */
}