import { ComboFlags, IImGui, number_ref, string_ref } from 'modloader64_api/Sylvain/ImGui';
import { IMMCore } from 'MajorasMask/API/MMAPI';
import * as capacity from './MaxCapacity';
import { max } from '../cheatmenu';

export function renderConsumablesMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.beginCombo("Rupees", "", ComboFlags.NoPreview)) {
        let rupeeMax: number = capacity.wallet(core.save.inventory.wallet);
        let rupees: number_ref = [core.save.rupees];
        if (ImGui.sliderInt("##rupees", rupees, 0, rupeeMax)) {
            core.save.rupees = rupees[0];
        }
        let rupees_str_ref: string_ref = [core.save.rupees.toString()];
        if (ImGui.inputTextWithHint("##rupees_str_ref", rupees_str_ref[0], rupees_str_ref)) {
            let tmpRupees: number = Number.parseInt(rupees_str_ref[0]);
            if (!isNaN(tmpRupees) && tmpRupees >= 0 && tmpRupees <= rupeeMax) {
                core.save.rupees = tmpRupees;
            }
        }
        ImGui.checkbox("Max", max.rupees);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)) {
        let arrowMax: number = capacity.quiver(core.save.inventory.quiver);
        let arrows: number_ref = [core.save.inventory.arrows];
        if (ImGui.sliderInt("##arrows", arrows, 0, arrowMax)) {
            core.save.inventory.arrows = arrows[0];
        }
        let arrows_str_ref: string_ref = [core.save.inventory.arrows.toString()];
        if (ImGui.inputTextWithHint("##arrows_str_ref", arrows_str_ref[0], arrows_str_ref)) {
            let tmpArrows: number = Number.parseInt(arrows_str_ref[0]);
            if (!isNaN(tmpArrows) && tmpArrows >= 0 && tmpArrows <= arrowMax) {
                core.save.inventory.arrows = tmpArrows;
            }
        }
        ImGui.checkbox("Max", max.arrows);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bombs", "", ComboFlags.NoPreview)) {
        let bombMax: number = capacity.bombBag(core.save.inventory.bombBag);
        let bombs: number_ref = [core.save.inventory.bombsCount];
        if (ImGui.sliderInt("##bombs", bombs, 0, bombMax)) {
            core.save.inventory.bombsCount = bombs[0];
        }
        let bombs_str_ref: string_ref = [core.save.inventory.bombsCount.toString()];
        if (ImGui.inputTextWithHint("##bombs_str_ref", bombs_str_ref[0], bombs_str_ref)) {
            let tmpBombs: number = Number.parseInt(bombs_str_ref[0]);
            if (!isNaN(tmpBombs) && tmpBombs >= 0 && tmpBombs <= bombMax) {
                core.save.inventory.bombsCount = tmpBombs;
            }
        }
        ImGui.checkbox("Max", max.bombs);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bombchus", "", ComboFlags.NoPreview)) {
        let bombchuMax: number = capacity.bombBag(core.save.inventory.bombBag);
        let bombchus: number_ref = [core.save.inventory.bombchuCount];
        if (ImGui.sliderInt("##bombchus", bombchus, 0, bombchuMax)) {
            core.save.inventory.bombchuCount = bombchus[0];
        }
        let bombchus_str_ref: string_ref = [core.save.inventory.bombchuCount.toString()];
        if (ImGui.inputTextWithHint("##bombchus_str_ref", bombchus_str_ref[0], bombchus_str_ref)) {
            let tmpBombchus: number = Number.parseInt(bombchus_str_ref[0]);
            if (!isNaN(tmpBombchus) && tmpBombchus >= 0 && tmpBombchus <= bombchuMax) {
                core.save.inventory.bombchuCount = tmpBombchus;
            }
        }
        ImGui.checkbox("Max", max.bombchus);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Deku Sticks", "", ComboFlags.NoPreview)) {
        let stickMax: number = 10;
        let dekuSticks: number_ref = [core.save.inventory.dekuSticksCount];
        if (ImGui.sliderInt("##dekuSticks", dekuSticks, 0, stickMax)) {
            core.save.inventory.dekuSticksCount = dekuSticks[0];
        }
        let deku_sticks_str_ref: string_ref = [core.save.inventory.dekuSticksCount.toString()];
        if (ImGui.inputTextWithHint("##deku_sticks_str_ref", deku_sticks_str_ref[0], deku_sticks_str_ref)) {
            let tmpDekuSticks: number = Number.parseInt(deku_sticks_str_ref[0]);
            if (!isNaN(tmpDekuSticks) && tmpDekuSticks >= 0 && tmpDekuSticks <= stickMax) {
                core.save.inventory.dekuSticksCount = tmpDekuSticks;
            }
        }
        ImGui.checkbox("Max", max.dekuSticks);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Deku Nuts", "", ComboFlags.NoPreview)) {
        let nutMax: number = 20;
        let dekuNuts: number_ref = [core.save.inventory.dekuNutsCount];
        if (ImGui.sliderInt("##dekuNuts", dekuNuts, 0, nutMax)) {
            core.save.inventory.dekuNutsCount = dekuNuts[0];
        }
        let deku_nuts_str_ref: string_ref = [core.save.inventory.dekuNutsCount.toString()];
        if (ImGui.inputTextWithHint("##deku_nuts_str_ref", deku_nuts_str_ref[0], deku_nuts_str_ref)) {
            let tmpDekuNuts: number = Number.parseInt(deku_nuts_str_ref[0]);
            if (!isNaN(tmpDekuNuts) && tmpDekuNuts >= 0 && tmpDekuNuts <= nutMax) {
                core.save.inventory.dekuNutsCount = tmpDekuNuts;
            }
        }
        ImGui.checkbox("Max", max.dekuNuts);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Magic Beans", "", ComboFlags.NoPreview)) {
        let beanMax: number = 20;
        let magicBeans: number_ref = [core.save.inventory.magicBeansCount];
        if (ImGui.sliderInt("##magicBeans", magicBeans, 0, beanMax)) {
            core.save.inventory.magicBeansCount = magicBeans[0];
        }
        let magic_beans_str_ref: string_ref = [core.save.inventory.magicBeansCount.toString()];
        if (ImGui.inputTextWithHint("##magic_beans_str_ref", magic_beans_str_ref[0], magic_beans_str_ref)) {
            let tmpMagicBeans: number = Number.parseInt(magic_beans_str_ref[0]);
            if (!isNaN(tmpMagicBeans) && tmpMagicBeans >= 0 && tmpMagicBeans <= beanMax) {
                core.save.inventory.magicBeansCount = tmpMagicBeans;
            }
        }
        ImGui.checkbox("Max", max.magicBeans);
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Powder Keg", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Have one?", [core.save.inventory.powderKegCount === 1])) {
            core.save.inventory.powderKegCount = ((core.save.inventory.powderKegCount === 1) ? 0 : 1);
        }
        ImGui.checkbox("Max", max.powderKeg);
        ImGui.endCombo();
    }
}