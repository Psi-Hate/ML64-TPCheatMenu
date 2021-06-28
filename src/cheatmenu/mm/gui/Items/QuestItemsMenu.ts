import { bool_ref, ComboFlags, IImGui, number_ref } from 'modloader64_api/Sylvain/ImGui';
import { AmmoUpgrade, IMMCore, Shield, Sword, Wallet } from 'MajorasMask/API/MMAPI';

export function equipmentMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.beginCombo("Sword", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("None", core.save.swords.swordLevel === Sword.NONE)) {
            core.save.swords.swordLevel = Sword.NONE;
            core.save.sword_helper.updateSwordonB();
        }
        if (ImGui.selectable("Kokiri", core.save.swords.swordLevel === Sword.KOKIRI)) {
            core.save.swords.swordLevel = Sword.KOKIRI;
            core.save.sword_helper.updateSwordonB();
        }
        if (ImGui.selectable("Razor", core.save.swords.swordLevel === Sword.RAZOR)) {
            core.save.swords.swordLevel = Sword.RAZOR;
            core.save.sword_helper.updateSwordonB();
        }
        if (ImGui.selectable("Gilded", core.save.swords.swordLevel === Sword.GILDED)) {
            core.save.swords.swordLevel = Sword.GILDED;
            core.save.sword_helper.updateSwordonB();
        }
        ImGui.endCombo();
    }
    if (core.save.swords.swordLevel === Sword.RAZOR) {
        if (ImGui.beginCombo("Razor Sword Durability", "", ComboFlags.NoPreview)) {
            let durability: number_ref = [core.save.razor_hits];
            if (ImGui.sliderInt("##razor_hits", durability, 0, 100)) {
                core.save.razor_hits = durability[0];
            }
            ImGui.endCombo();
        }
    }
    if (ImGui.beginCombo("Shield", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("None", core.save.shields.shieldLevel === Shield.NONE)) {
            core.save.shields.shieldLevel = Shield.NONE;
        }
        if (ImGui.selectable("Hero", core.save.shields.shieldLevel === Shield.HERO)) {
            core.save.shields.shieldLevel = Shield.HERO;
        }
        if (ImGui.selectable("Mirror", core.save.shields.shieldLevel === Shield.MIRROR)) {
            core.save.shields.shieldLevel = Shield.MIRROR;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Wallet", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("Child", core.save.inventory.wallet === Wallet.CHILD)) {
            core.save.inventory.wallet = Wallet.CHILD;
        }
        if (ImGui.selectable("Adult", core.save.inventory.wallet === Wallet.ADULT)) {
            core.save.inventory.wallet = Wallet.ADULT;
        }
        if (ImGui.selectable("Giant", core.save.inventory.wallet === Wallet.GIANT)) {
            core.save.inventory.wallet = Wallet.GIANT;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Quiver", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("None", core.save.inventory.quiver === AmmoUpgrade.NONE)) {
            core.save.inventory.quiver = AmmoUpgrade.NONE;
        }
        if (ImGui.selectable("Normal", core.save.inventory.quiver === AmmoUpgrade.BASE)) {
            core.save.inventory.quiver = AmmoUpgrade.BASE;
        }
        if (ImGui.selectable("Large", core.save.inventory.quiver === AmmoUpgrade.UPGRADED)) {
            core.save.inventory.quiver = AmmoUpgrade.UPGRADED;
        }
        if (ImGui.selectable("Largest", core.save.inventory.quiver === AmmoUpgrade.MAX)) {
            core.save.inventory.quiver = AmmoUpgrade.MAX;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bombbag", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("None", core.save.inventory.bombBag === AmmoUpgrade.NONE)) {
            core.save.inventory.bombBag = AmmoUpgrade.NONE;
        }
        if (ImGui.selectable("Normal", core.save.inventory.bombBag === AmmoUpgrade.BASE)) {
            core.save.inventory.bombBag = AmmoUpgrade.BASE;
        }
        if (ImGui.selectable("Big", core.save.inventory.bombBag === AmmoUpgrade.UPGRADED)) {
            core.save.inventory.bombBag = AmmoUpgrade.UPGRADED;
        }
        if (ImGui.selectable("Biggest", core.save.inventory.bombBag === AmmoUpgrade.MAX)) {
            core.save.inventory.bombBag = AmmoUpgrade.MAX;
        }
        ImGui.endCombo();
    }
    if (ImGui.checkbox("Bomber's Notebook", [core.save.questStatus.bombersNotebook])) {
        core.save.questStatus.bombersNotebook = !core.save.questStatus.bombersNotebook;
    }
}

export function bossMasksMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Odolwa", [core.save.questStatus.odolwaRemains])) {
        core.save.questStatus.odolwaRemains = !core.save.questStatus.odolwaRemains;
    }
    if (ImGui.checkbox("Goht", [core.save.questStatus.gohtRemains])) {
        core.save.questStatus.gohtRemains = !core.save.questStatus.gohtRemains;
    }
    if (ImGui.checkbox("Gyorg", [core.save.questStatus.gyorgRemains])) {
        core.save.questStatus.gyorgRemains = !core.save.questStatus.gyorgRemains;
    }
    if (ImGui.checkbox("Twinmold", [core.save.questStatus.twinmoldRemains])) {
        core.save.questStatus.twinmoldRemains = !core.save.questStatus.twinmoldRemains;
    }
}

export function songsMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Song of Time", [core.save.questStatus.songOfTime])) {
        core.save.questStatus.songOfTime = !core.save.questStatus.songOfTime;
    }
    if (ImGui.checkbox("Song of Healing", [core.save.questStatus.songOfHealing])) {
        core.save.questStatus.songOfHealing = !core.save.questStatus.songOfHealing;
    }
    if (ImGui.checkbox("Epona's Song", [core.save.questStatus.eponaSong])) {
        core.save.questStatus.eponaSong = !core.save.questStatus.eponaSong;
    }
    if (ImGui.checkbox("Song of Soaring", [core.save.questStatus.songOfSoaring])) {
        core.save.questStatus.songOfSoaring = !core.save.questStatus.songOfSoaring;
    }
    if (ImGui.checkbox("Song of Storms", [core.save.questStatus.songOfStorms])) {
        core.save.questStatus.songOfStorms = !core.save.questStatus.songOfStorms;
    }
    if (ImGui.checkbox("Sonata of Awakening", [core.save.questStatus.sonataOfAwakening])) {
        core.save.questStatus.sonataOfAwakening = !core.save.questStatus.sonataOfAwakening;
    }
    if (ImGui.beginCombo("Goron Lullaby", "", ComboFlags.NoPreview)) {
        if (ImGui.selectable("None", !core.save.questStatus.lullabyIntro && !core.save.questStatus.goronLullaby)) {
            core.save.questStatus.lullabyIntro = false;
            core.save.questStatus.goronLullaby = false;
        }
        if (ImGui.selectable("Lullaby Intro", core.save.questStatus.lullabyIntro && !core.save.questStatus.goronLullaby)) {
            core.save.questStatus.lullabyIntro = true;
            core.save.questStatus.goronLullaby = false;
        }
        if (ImGui.selectable("Goron Lullaby", core.save.questStatus.goronLullaby)) {
            core.save.questStatus.lullabyIntro = true;
            core.save.questStatus.goronLullaby = true;
        }
        ImGui.endCombo();
    }
    if (ImGui.checkbox("New Wave Bossa Nova", [core.save.questStatus.newWaveBossaNova])) {
        core.save.questStatus.newWaveBossaNova = !core.save.questStatus.newWaveBossaNova;
    }
    if (ImGui.checkbox("Elegy of Emptiness", [core.save.questStatus.elegyOfEmptiness])) {
        core.save.questStatus.elegyOfEmptiness = !core.save.questStatus.elegyOfEmptiness;
    }
    if (ImGui.checkbox("Oath to Order", [core.save.questStatus.oathToOrder])) {
        core.save.questStatus.oathToOrder = !core.save.questStatus.oathToOrder;
    }
}