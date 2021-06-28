import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI';
import { bool_ref, number_ref, string_ref } from 'modloader64_api/Sylvain/ImGui';
import * as capacity from './gui/MaxCapacity';
import { renderMenuBar } from './gui/MenuBar';
import { positionMod, renderModWindow, renderPosWindow, renderWindowButton } from './gui/ModWindow';

interface IValueLock {
    locked: bool_ref;
    value: number_ref;
}

interface IMax {
    hearts: bool_ref;
    magic: bool_ref;
    time: IValueLock;
    rupee_count: bool_ref;
    dekuSticks: bool_ref;
    dekuNuts: bool_ref;
    dekuSeeds: bool_ref;
    bombs: bool_ref;
    bombchus: bool_ref;
    magicBeans: bool_ref;
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
    dekuSticks: [false],
    dekuNuts: [false],
    dekuSeeds: [false],
    bombs: [false],
    bombchus: [false],
    magicBeans: [false],
    arrows: [false]
}

export const changeAge: bool_ref = [false];
export const entranceIndex: string_ref = ["0"];

export function onTick(ModLoader: IModLoaderAPI, core: IOOTCore) {
    if(max.hearts[0]){
        core.save.health = core.save.heart_containers * 0x10;
    }
    if(max.magic[0]){
        core.save.magic_current = capacity.magic(core.save.magic_meter_size);
    }
    if(max.time.locked[0]){
        core.save.world_time = max.time.value[0];
    }
    if(max.rupee_count[0]){
        core.save.rupee_count = capacity.wallet(core.save.inventory.wallet);
    }
    if(max.dekuSticks[0]){
        core.save.inventory.dekuSticksCount = capacity.dekuSticks(core.save.inventory.dekuSticksCapacity);
    }
    if(max.dekuNuts[0]){
        core.save.inventory.dekuNutsCount = capacity.bombBag(core.save.inventory.dekuNutsCapacity);
    }
    if(max.dekuSeeds[0]){
        core.save.inventory.dekuSeeds = capacity.quiver(core.save.inventory.bulletBag);
    }
    if(max.bombs[0]){
        core.save.inventory.bombsCount = capacity.bombBag(core.save.inventory.bombBag);
    }
    if(max.bombchus[0]){
        core.save.inventory.bombchuCount = 50;
    }
    if(max.magicBeans[0]){
        core.save.inventory.magicBeansCount = 15;
    }
    if(max.arrows[0]){
        core.save.inventory.arrows = capacity.quiver(core.save.inventory.quiver);
    }

    if(positionMod.x.lockValue !== undefined){
        if(positionMod.x.mod[0] !== 0){
            positionMod.x.lockValue += positionMod.x.mod[0];
        }
        core.link.position.x = positionMod.x.lockValue;
        core.link.projected_position.x = positionMod.x.lockValue;
    } else {
        core.link.position.x += positionMod.x.mod[0];
    }
    if(positionMod.y.lockValue !== undefined){
        if(positionMod.y.mod[0] !== 0){
            positionMod.y.lockValue += positionMod.y.mod[0];
        }
        core.link.position.y = positionMod.y.lockValue;
        core.link.projected_position.y = positionMod.y.lockValue;
    } else {
        core.link.position.y += positionMod.y.mod[0];
    }
    if(positionMod.z.lockValue !== undefined){
        if(positionMod.z.mod[0] !== 0){
            positionMod.z.lockValue += positionMod.z.mod[0];
        }
        core.link.position.z = positionMod.z.lockValue;
        core.link.projected_position.z = positionMod.z.lockValue;
    } else {
        core.link.position.z += positionMod.z.mod[0];
    }
}

export function onViUpdate(ModLoader: IModLoaderAPI, core: IOOTCore) {
    if(changeAge[0]){
        if(ModLoader.emulator.rdramRead32(0x801CA0E4) === 0){
            changeAge[0] = false;
            core.save.age = (core.save.age + 1) % 2;
        }
    }

    renderMenuBar(core, ModLoader.ImGui);
    renderModWindow(core, ModLoader.ImGui);
    renderPosWindow(core, ModLoader.ImGui);
    renderWindowButton(ModLoader.ImGui);
}