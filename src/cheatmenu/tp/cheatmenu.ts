import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { ITPCore, TPEvents } from 'TwilightPrincess/API/TPAPI';
import { bool_ref, number_ref, string_ref } from 'modloader64_api/Sylvain/ImGui';
import * as capacity from './gui/MaxCapacity';
import { renderMenuBar } from './gui/MenuBar';
import { positionMod, renderModWindow, renderWindowButton } from './gui/ModWindow';

interface IValueLock {
    locked: bool_ref;
    value: number_ref;
}

interface IMax {
    hearts: bool_ref;
    magic: bool_ref;
    time: IValueLock;
    rupee_count: bool_ref;
    dekuSeeds: bool_ref;
    bombs: bool_ref;
    arrows: bool_ref;
}

export let max: IMax = {
    hearts: [false],
    magic: [false],
    time: {
        locked: [false],
        value: [0]
    },
    rupee_count: [false],
    dekuSeeds: [false],
    bombs: [false],
    arrows: [false]
}

export function onTick(ModLoader: IModLoaderAPI, core: ITPCore) {
    if(max.hearts[0]){
        core.save.questStatus.current_hp = core.save.questStatus.max_hp * 0x10;
    }
    if(max.rupee_count[0]){
        core.save.questStatus.rupees = capacity.wallet(core.save.questStatus.currentWallet);
    }
    if(max.dekuSeeds[0]){
        core.save.inventory.dekuSeeds = 50;
    }
    if(max.bombs[0]){
        core.save.inventory.bombs1 = 30;
    }
    if(max.arrows[0]){
        core.save.inventory.arrows = core.save.inventory.quiver;
    }
}

export function onViUpdate(ModLoader: IModLoaderAPI, core: ITPCore) {

    renderMenuBar(core, ModLoader.ImGui);
    renderModWindow(core, ModLoader.ImGui);
    renderWindowButton(ModLoader.ImGui);
}