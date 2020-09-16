import {IPlugin, IModLoaderAPI} from 'modloader64_api/IModLoaderAPI';
import {IOOTCore, Ocarina, Hookshot, InventoryItem, AmmoUpgrade, Strength, ISaveContext, ISwords, IShields, IBoots, ITunics, ZoraScale, Magic, Wallet, OotEvents, VANILLA_KEY_INDEXES, Age, Sword} from 'modloader64_api/OOT/OOTAPI';
import {InjectCore} from 'modloader64_api/CoreInjection';
import { onViUpdate } from 'modloader64_api/PluginLifecycle';
import { ComboFlags, number_ref, bool_ref, Cond, string_ref } from 'modloader64_api/Sylvain/ImGui';
import { EventHandler } from 'modloader64_api/EventHandler';
import { xy } from 'modloader64_api/Sylvain/vec';
import { renderMenuBar } from './gui/MenuBar';
import { renderWindowButton, openPosWindow, positionMod, renderPosWindow, openModWindow, renderModWindow } from './gui/ModWindow';

interface lock {
    locked: bool_ref;
    value: number_ref;
}

interface dungeonLockedItems {
    forestTempleKeys: lock;
    fireTempleKeys: lock;
    waterTempleKeys: lock;
    spiritTempleKeys: lock;
    shadowTempleKeys: lock;
    bottomOfTheWellKeys: lock;
    gerudoFortressKeys: lock;
    gerudoTrainingGroundsKeys: lock;
    ganonsCastleKeys: lock;
}

interface lockedItems {
    hearts: lock;
    magic: lock;
    time: lock;
    rupee_count: lock;
    dekuSticks: lock;
    dekuNuts: lock;
    dekuSeeds: lock;
    bombs: lock;
    bombchus: lock;
    magicBeans: lock;
    arrows: lock;
    dungeon: dungeonLockedItems;
}

export const lockedItems: lockedItems = {
    hearts: {
        locked: [false],
        value: [0]
    },
    magic: {
        locked: [false],
        value: [0]
    },
    time: {
        locked: [false],
        value: [0]
    },
    rupee_count: {
        locked: [false],
        value: [0]
    },
    dekuSticks: {
        locked: [false],
        value: [0]
    },
    dekuNuts: {
        locked: [false],
        value: [0]
    },
    dekuSeeds: {
        locked: [false],
        value: [0]
    },
    bombs: {
        locked: [false],
        value: [0]
    },
    bombchus: {
        locked: [false],
        value: [0]
    },
    magicBeans: {
        locked: [false],
        value: [0]
    },
    arrows: {
        locked: [false],
        value: [0]
    },
    dungeon: {
        forestTempleKeys: {
            locked: [false],
            value: [0]
        },
        fireTempleKeys: {
            locked: [false],
            value: [0]
        },
        waterTempleKeys: {
            locked: [false],
            value: [0]
        },
        spiritTempleKeys: {
            locked: [false],
            value: [0]
        },
        shadowTempleKeys: {
            locked: [false],
            value: [0]
        },
        bottomOfTheWellKeys: {
            locked: [false],
            value: [0]
        },
        gerudoFortressKeys: {
            locked: [false],
            value: [0]
        },
        gerudoTrainingGroundsKeys: {
            locked: [false],
            value: [0]
        },
        ganonsCastleKeys: {
            locked: [false],
            value: [0]
        }
    }
}

export const changeAge: bool_ref = [false];
export const currentScene: string_ref = ["0"];

class cheatmenu implements IPlugin{

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;
    @InjectCore()
    core!: IOOTCore;

    preinit(): void {
    }
    init(): void {
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
        if(lockedItems.hearts.locked[0]){
            this.core.save.health = lockedItems.hearts.value[0];
        }
        if(lockedItems.magic.locked[0]){
            this.core.save.magic_current = lockedItems.magic.value[0];
        }
        if(lockedItems.time.locked[0]){
            this.core.save.world_time = lockedItems.time.value[0];
        }
        if(lockedItems.rupee_count.locked[0]){
            this.core.save.rupee_count = lockedItems.rupee_count.value[0];
        }
        if(lockedItems.dekuSticks.locked[0]){
            this.core.save.inventory.dekuSticksCount = lockedItems.dekuSticks.value[0];
        }
        if(lockedItems.dekuNuts.locked[0]){
            this.core.save.inventory.dekuNutsCount = lockedItems.dekuNuts.value[0];
        }
        if(lockedItems.dekuSeeds.locked[0]){
            this.core.save.inventory.dekuSeeds = lockedItems.dekuSeeds.value[0];
        }
        if(lockedItems.bombs.locked[0]){
            this.core.save.inventory.bombsCount = lockedItems.bombs.value[0];
        }
        if(lockedItems.bombchus.locked[0]){
            this.core.save.inventory.bombchuCount = lockedItems.bombchus.value[0];
        }
        if(lockedItems.magicBeans.locked[0]){
            this.core.save.inventory.magicBeansCount = lockedItems.magicBeans.value[0];
        }
        if(lockedItems.arrows.locked[0]){
            this.core.save.inventory.arrows = lockedItems.arrows.value[0];
        }

        if(positionMod.x.lockValue !== undefined){
            if(positionMod.x.mod[0] !== 0){
                positionMod.x.lockValue += positionMod.x.mod[0];
            }
            this.core.link.position.x = positionMod.x.lockValue;
            this.core.link.projected_position.x = positionMod.x.lockValue;
        } else {
            this.core.link.position.x += positionMod.x.mod[0];
        }
        if(positionMod.y.lockValue !== undefined){
            if(positionMod.y.mod[0] !== 0){
                positionMod.y.lockValue += positionMod.y.mod[0];
            }
            this.core.link.position.y = positionMod.y.lockValue;
            this.core.link.projected_position.y = positionMod.y.lockValue;
        } else {
            this.core.link.position.y += positionMod.y.mod[0];
        }
        if(positionMod.z.lockValue !== undefined){
            if(positionMod.z.mod[0] !== 0){
                positionMod.z.lockValue += positionMod.z.mod[0];
            }
            this.core.link.position.z = positionMod.z.lockValue;
            this.core.link.projected_position.z = positionMod.z.lockValue;
        } else {
            this.core.link.position.z += positionMod.z.mod[0];
        }
    }

    @onViUpdate()
    onViUpdate(){
        if(changeAge[0]){
            if(this.ModLoader.emulator.rdramRead32(0x801CA0E4) === 0){
                changeAge[0] = false;
                this.core.save.age = (this.core.save.age + 1) % 2;
            }
        }

        renderMenuBar(this.core, this.ModLoader.ImGui);
        renderModWindow(this.core, this.ModLoader.ImGui);
        renderPosWindow(this.core, this.ModLoader.ImGui);
        renderWindowButton(this.ModLoader.ImGui);
    }
}

module.exports = cheatmenu;