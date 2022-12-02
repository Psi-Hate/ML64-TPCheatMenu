import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { IWWCore, Shield, Sword } from 'WindWaker/API/WWAPI';

export function renderEquipmentMenu(core: IWWCore, ImGui: IImGui) {
    if (ImGui.beginCombo("Swords", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Hero Sword", [core.save.swords.swordLevel === Sword.Hero])) {
            if (core.save.swords.swordLevel == Sword.Hero) core.save.swords.swordLevel = Sword.NONE;
            else core.save.swords.swordLevel = Sword.Hero;
        }
        if (ImGui.checkbox("Master Sword Lvl 0", [core.save.swords.swordLevel === Sword.Master])) {
            if (core.save.swords.swordLevel == Sword.Master) core.save.swords.swordLevel = Sword.NONE;
            else core.save.swords.swordLevel = Sword.Master;
        }
        if (ImGui.checkbox("Master Sword Lvl 1", [core.save.swords.swordLevel === Sword.MasterHalf])) {
            if (core.save.swords.swordLevel == Sword.MasterHalf) core.save.swords.swordLevel = Sword.NONE;
            else core.save.swords.swordLevel = Sword.MasterHalf;
        }
        if (ImGui.checkbox("Master Sword Lvl 2", [core.save.swords.swordLevel === Sword.MasterFull])) {
            if (core.save.swords.swordLevel == Sword.MasterFull) core.save.swords.swordLevel = Sword.NONE;
            else core.save.swords.swordLevel = Sword.MasterFull;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Shields", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Hero Shield", [core.save.shields.shieldLevel === Shield.HERO])) {
            if (core.save.shields.shieldLevel == Shield.HERO) core.save.shields.shieldLevel = Shield.NONE;
            else core.save.shields.shieldLevel = Shield.HERO;
        }
        if (ImGui.checkbox("Mirror Shield", [core.save.shields.shieldLevel === Shield.MIRROR])) {
            if (core.save.shields.shieldLevel == Shield.MIRROR) core.save.shields.shieldLevel = Shield.NONE;
            else core.save.shields.shieldLevel = Shield.MIRROR;
        }
        ImGui.endCombo();
    }
    if (ImGui.checkbox("Power Bracelets", [core.save.questStatus.bracelet !== 0])) {
        if (core.save.questStatus.bracelet !== 0) core.save.questStatus.bracelet = 0;
        else if (core.save.questStatus.bracelet === 0) core.save.questStatus.bracelet = 1;
    }
/*     if (ImGui.checkbox("Pirate Charm", [(core.save.questStatus.pirate_charm & (1 << 0)) != 0])) {
        let val = core.save.questStatus.pirate_charm;
        if ((val & (1 << 0)) != 0) val |= 1 << 0;
        else val &= ~(1 << 0);
        core.save.questStatus.pirate_charm = val;
    } */

    /* if (ImGui.beginCombo("Wallet", "", ComboFlags.NoPreview)) {
        let wallet: number_ref = [core.save.questStatus.currentWallet];
        if (ImGui.sliderInt("##wallet", wallet, 0, 2)) {
            core.save.questStatus.currentWallet = wallet[0];
        }
        ImGui.endCombo();
    } */
    /* if (ImGui.beginCombo("Bullet Bag", "", ComboFlags.NoPreview)) {
        let bulletBag: number_ref = [core.save.inventory.bulletBag];
        if (ImGui.sliderInt("##bulletBag", bulletBag, 0, 3)) {
            core.save.inventory.bulletBag = bulletBag[0];
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bomb Bag", "", ComboFlags.NoPreview)) {
        let bombBag: number_ref = [core.save.inventory.bombBag];
        if (ImGui.sliderInt("##bombBag", bombBag, 0, 3)) {
            core.save.inventory.bombBag = bombBag[0];
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Quiver", "", ComboFlags.NoPreview)) {
        let quiver: number_ref = [core.save.inventory.quiver];
        if (ImGui.sliderInt("##quiver", quiver, 0, 3)) {
            core.save.inventory.quiver = quiver[0];
        }
        ImGui.endCombo();
    } */
}