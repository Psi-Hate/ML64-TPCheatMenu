import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IMMCore, LinkState } from 'MajorasMask/API/MMAPI';
import { bool_ref } from 'modloader64_api/Sylvain/ImGui';
import { renderMenuBar } from './gui/MenuBar';
import * as capacity from './gui/MaxCapacity';
import { renderModWindow, renderWindowButton } from './gui/ModWindow';

interface IMax {
    hearts: bool_ref;
    magic: bool_ref;
    rupees: bool_ref;
    arrows: bool_ref;
    bombs: bool_ref;
    bombchus: bool_ref;
    dekuSticks: bool_ref;
    dekuNuts: bool_ref;
    magicBeans: bool_ref;
    powderKeg: bool_ref;
}

export let max: IMax = {
    hearts: [false],
    magic: [false],
    rupees: [false],
    arrows: [false],
    bombs: [false],
    bombchus: [false],
    dekuSticks: [false],
    dekuNuts: [false],
    magicBeans: [false],
    powderKeg: [false]
}

interface IGravity {
    updateGrav: boolean;
    gravity: number;
}

export let grav: IGravity = {
    updateGrav: false,
    gravity: -100
}

export function onTick(ModLoader: IModLoaderAPI, core: IMMCore) {
    if (grav.updateGrav && core.link.state === LinkState.STANDING) {
        grav.updateGrav = false;
        ModLoader.emulator.rdramWrite16(0x8038256C, grav.gravity);
    }
    if (max.hearts[0]) {
        core.save.hearts = core.save.heart_containers;
    }
    if (max.magic[0]) {
        core.save.magic = capacity.magic(core.save.magic_meter_size);
    }
    if (max.rupees[0]) {
        core.save.rupees = capacity.wallet(core.save.inventory.wallet);
    }
    if (max.arrows[0]) {
        core.save.inventory.arrows = capacity.quiver(core.save.inventory.quiver);
    }
    if (max.bombs[0]) {
        core.save.inventory.bombsCount = capacity.bombBag(core.save.inventory.bombBag);
    }
    if (max.bombchus[0]) {
        core.save.inventory.bombchuCount = capacity.bombBag(core.save.inventory.bombBag);
    }
    if (max.dekuSticks[0]) {
        core.save.inventory.dekuSticksCount = 10;
    }
    if (max.dekuNuts[0]) {
        core.save.inventory.dekuNutsCount = 20;
    }
    if (max.magicBeans[0]) {
        core.save.inventory.magicBeansCount = 20;
    }
    if (max.powderKeg[0]) {
        core.save.inventory.powderKegCount = 1;
    }
}

export function onViUpdate(ModLoader: IModLoaderAPI, core: IMMCore) {
    renderMenuBar(core, ModLoader.emulator, ModLoader.ImGui);
    renderModWindow(core, ModLoader.emulator, ModLoader.ImGui);
    renderWindowButton(ModLoader.ImGui);
}