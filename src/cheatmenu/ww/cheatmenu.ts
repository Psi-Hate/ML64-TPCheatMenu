import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IWWCore, WWEvents } from 'WindWaker/API/WWAPI';
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
    bombs: [false],
    arrows: [false]
}

export function onTick(ModLoader: IModLoaderAPI, core: IWWCore) {
    if(max.hearts[0]){
        core.save.questStatus.current_hp = core.save.questStatus.max_hp * 0x10;
    }
    if(max.rupee_count[0]){
        core.save.inventory.rupeeCount = capacity.wallet(core.save.inventory.rupeeCap);
    }
    if(max.bombs[0]){
        core.save.inventory.bombCount = core.save.inventory.bombCap;
    }
    if(max.arrows[0]){
        core.save.inventory.arrowCount = core.save.inventory.arrowCap;
    }
}

export function onViUpdate(ModLoader: IModLoaderAPI, core: IWWCore) {

    renderMenuBar(core, ModLoader.ImGui);
    renderModWindow(core, ModLoader.ImGui);
    renderWindowButton(ModLoader.ImGui);
}