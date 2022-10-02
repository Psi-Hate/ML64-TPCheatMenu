import { IImGui, ComboFlags, number_ref } from "modloader64_api/Sylvain/ImGui";
import { ITPCore } from 'TwilightPrincess/API/TPAPI';

export function renderEquipmentMenu(core: ITPCore, ImGui: IImGui) {
    if (ImGui.beginCombo("Swords", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Ordon Sword", [core.save.questStatus.ordonSword])) {
            core.save.questStatus.ordonSword = !core.save.questStatus.ordonSword;
        }
        if (ImGui.checkbox("Master Sword", [core.save.questStatus.masterSword])) {
            core.save.questStatus.masterSword = !core.save.questStatus.masterSword;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Shields", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Ordon Shield", [core.save.questStatus.ordonShield])) {
            core.save.questStatus.ordonShield = !core.save.questStatus.ordonShield;
        }
        if (ImGui.checkbox("Wooden Shield", [core.save.questStatus.woodenShield])) {
            core.save.questStatus.woodenShield = !core.save.questStatus.woodenShield;
        }
        if (ImGui.checkbox("Hylian Shield", [core.save.questStatus.hylianShield])) {
            core.save.questStatus.hylianShield = !core.save.questStatus.hylianShield;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Armor", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Hero Tunic", [core.save.questStatus.heroArmor])) {
            core.save.questStatus.heroArmor = !core.save.questStatus.heroArmor;
        }
        if (ImGui.checkbox("Zora Tunic", [core.save.questStatus.zoraArmor])) {
            core.save.questStatus.zoraArmor = !core.save.questStatus.zoraArmor;
        }
        if (ImGui.checkbox("Magic Armor", [core.save.questStatus.magicArmor])) {
            core.save.questStatus.magicArmor = !core.save.questStatus.magicArmor;
        }
        ImGui.endCombo();
    }
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