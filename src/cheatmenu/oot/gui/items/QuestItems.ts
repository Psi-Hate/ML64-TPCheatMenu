import { IOOTCore } from "modloader64_api/OOT/OOTAPI";
import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";

export function songsMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.beginCombo("Regular Songs", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Zelda's Lullaby", [core.save.questStatus.zeldasLullaby])){
            core.save.questStatus.zeldasLullaby = !core.save.questStatus.zeldasLullaby;
        }
        if(ImGui.checkbox("Epona's Song", [core.save.questStatus.eponasSong])){
            core.save.questStatus.eponasSong = !core.save.questStatus.eponasSong;
        }
        if(ImGui.checkbox("Saria's Song", [core.save.questStatus.sariasSong])){
            core.save.questStatus.sariasSong = !core.save.questStatus.sariasSong;
        }
        if(ImGui.checkbox("Sun's Song", [core.save.questStatus.sunsSong])){
            core.save.questStatus.sunsSong = !core.save.questStatus.sunsSong;
        }
        if(ImGui.checkbox("Song of Time", [core.save.questStatus.songOfTime])){
            core.save.questStatus.songOfTime = !core.save.questStatus.songOfTime;
        }
        if(ImGui.checkbox("Song of Storms", [core.save.questStatus.songOfStorms])){
            core.save.questStatus.songOfStorms = !core.save.questStatus.songOfStorms;
        }
        ImGui.endCombo();
    }
    if(ImGui.beginCombo("Warp Songs", "", ComboFlags.NoPreview)){
        if(ImGui.checkbox("Minuet of Forest", [core.save.questStatus.minuetOfForest])){
            core.save.questStatus.minuetOfForest = !core.save.questStatus.minuetOfForest;
        }
        if(ImGui.checkbox("Bolero of Fire", [core.save.questStatus.boleroOfFire])){
            core.save.questStatus.boleroOfFire = !core.save.questStatus.boleroOfFire;
        }
        if(ImGui.checkbox("Serende of Water", [core.save.questStatus.serenadeOfWater])){
            core.save.questStatus.serenadeOfWater = !core.save.questStatus.serenadeOfWater;
        }
        if(ImGui.checkbox("Requiem of Spirit", [core.save.questStatus.requiemOfSpirit])){
            core.save.questStatus.requiemOfSpirit = !core.save.questStatus.requiemOfSpirit;
        }
        if(ImGui.checkbox("Nocturne of Shadow", [core.save.questStatus.nocturneOfShadow])){
            core.save.questStatus.nocturneOfShadow = !core.save.questStatus.nocturneOfShadow;
        }
        if(ImGui.checkbox("Prelude of Light", [core.save.questStatus.preludeOfLight])){
            core.save.questStatus.preludeOfLight = !core.save.questStatus.preludeOfLight;
        }
        ImGui.endCombo();
    }
}

export function gemsMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Kokiri Emerald", [core.save.questStatus.kokiriEmerald])){
        core.save.questStatus.kokiriEmerald = !core.save.questStatus.kokiriEmerald;
    }
    if(ImGui.checkbox("Goron Ruby", [core.save.questStatus.goronRuby])){
        core.save.questStatus.goronRuby = !core.save.questStatus.goronRuby;
    }
    if(ImGui.checkbox("Zora Sapphire", [core.save.questStatus.zoraSapphire])){
        core.save.questStatus.zoraSapphire = !core.save.questStatus.zoraSapphire;
    }
}

export function medallionsMenu(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Forest Medallion", [core.save.questStatus.forestMedallion])){
        core.save.questStatus.forestMedallion = !core.save.questStatus.forestMedallion;
    }
    if(ImGui.checkbox("Fire Medallion", [core.save.questStatus.fireMedallion])){
        core.save.questStatus.fireMedallion = !core.save.questStatus.fireMedallion;
    }
    if(ImGui.checkbox("Water Medallion", [core.save.questStatus.waterMedallion])){
        core.save.questStatus.waterMedallion = !core.save.questStatus.waterMedallion;
    }
    if(ImGui.checkbox("Spirit Medallion", [core.save.questStatus.spiritMedallion])){
        core.save.questStatus.spiritMedallion = !core.save.questStatus.spiritMedallion;
    }
    if(ImGui.checkbox("Shadow Medallion", [core.save.questStatus.shadowMedallion])){
        core.save.questStatus.shadowMedallion = !core.save.questStatus.shadowMedallion;
    }
    if(ImGui.checkbox("Light Medallion", [core.save.questStatus.lightMedallion])){
        core.save.questStatus.lightMedallion = !core.save.questStatus.lightMedallion;
    }
}

export function goldSkulltulas(core: IOOTCore, ImGui: IImGui){
    let goldSkulltulas: number_ref = [core.save.questStatus.goldSkulltulas];
    if(ImGui.sliderInt("##goldSkulltulas", goldSkulltulas, 0, 100)){
        core.save.questStatus.goldSkulltulas = goldSkulltulas[0];
        core.save.questStatus.displayGoldSkulltulas = (core.save.questStatus.goldSkulltulas !== 0);
    }
}

export function stoneOfAgony(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Stone of Agony", [core.save.questStatus.stoneOfAgony])){
        core.save.questStatus.stoneOfAgony = !core.save.questStatus.stoneOfAgony;
    }
}

export function gerudoMembershipCard(core: IOOTCore, ImGui: IImGui){
    if(ImGui.checkbox("Gerudo Membership Card", [core.save.questStatus.gerudoMembershipCard])){
        core.save.questStatus.gerudoMembershipCard = !core.save.questStatus.gerudoMembershipCard;
    }
}