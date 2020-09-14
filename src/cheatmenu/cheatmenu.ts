import {IPlugin, IModLoaderAPI} from 'modloader64_api/IModLoaderAPI';
import {IOOTCore, Ocarina, Hookshot, InventoryItem, AmmoUpgrade, Strength, ISaveContext, ISwords, IShields, IBoots, ITunics, ZoraScale, Magic, Wallet, OotEvents, VANILLA_KEY_INDEXES, Age, Sword} from 'modloader64_api/OOT/OOTAPI';
import {InjectCore} from 'modloader64_api/CoreInjection';
import { onViUpdate } from 'modloader64_api/PluginLifecycle';
import { ComboFlags, number_ref, bool_ref, Cond } from 'modloader64_api/Sylvain/ImGui';
import { EventHandler } from 'modloader64_api/EventHandler';
import { xy } from 'modloader64_api/Sylvain/vec';
import { renderMenuBar } from './gui/MenuBar';
import { openPosWindow } from './gui/ModWindow';

interface coordRef {
    lock: bool_ref;
    mod: number_ref;
    lockValue: number | undefined;
}

interface lock {
    locked: bool_ref;
    value: number_ref;
}

interface positionRef {
    x: coordRef;
    y: coordRef;
    z: coordRef;
}

interface lockedItems {
    hearts: lock;
    magic: lock;
    time: lock;
    dekuSticks: lock;
    dekuNuts: lock;
    dekuSeeds: lock;
    bombs: lock;
    bombchus: lock;
    magicBeans: lock;
    arrows: lock;
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
        if(this.positionMod.x.lockValue !== undefined){
            if(this.positionMod.x.mod[0] !== 0){
                this.positionMod.x.lockValue += this.positionMod.x.mod[0];
            }
            this.core.link.position.x = this.positionMod.x.lockValue;
        } else {
            this.core.link.position.x += this.positionMod.x.mod[0];
        }
        if(this.positionMod.y.lockValue !== undefined){
            if(this.positionMod.y.mod[0] !== 0){
                this.positionMod.y.lockValue += this.positionMod.y.mod[0];
            }
            this.core.link.position.y = this.positionMod.y.lockValue;
        } else {
            this.core.link.position.y += this.positionMod.y.mod[0];
        }
        if(this.positionMod.z.lockValue !== undefined){
            if(this.positionMod.z.mod[0] !== 0){
                this.positionMod.z.lockValue += this.positionMod.z.mod[0];
            }
            this.core.link.position.z = this.positionMod.z.lockValue;
        } else {
            this.core.link.position.z += this.positionMod.z.mod[0];
        }
    }
    
    positionMod: positionRef = {
        x: {
            lock: [false],
            mod: [0],
            lockValue: undefined
        },
        y: {
            lock: [false],
            mod: [0],
            lockValue: undefined
        },
        z: {
            lock: [false],
            mod: [0],
            lockValue: undefined
        },
    }

    // @EventHandler(OotEvents.ON_SAVE_LOADED)
    // onSaveLoaded(){
    // }

    @onViUpdate()
    onViUpdate(){
        renderMenuBar(this.core, this.ModLoader.ImGui);
        
        if(openPosWindow[0]){
            if(this.ModLoader.ImGui.begin("Position", openPosWindow)){
                this.ModLoader.ImGui.setWindowSize(xy(300, 200), Cond.FirstUseEver);
                this.positionMod.x.mod = [0];
                this.positionMod.y.mod = [0];
                this.positionMod.z.mod = [0];
                this.ModLoader.ImGui.text(`X: ${this.core.link.position.x} + `);
                this.ModLoader.ImGui.sliderFloat("##x", this.positionMod.x.mod, -32, 32)
                this.ModLoader.ImGui.sameLine();
                if(this.ModLoader.ImGui.checkbox("##xLock", this.positionMod.x.lock)){
                    if(this.positionMod.x.lock[0]){
                        this.positionMod.x.lockValue = this.core.link.position.x;
                    } else {
                        this.positionMod.x.lockValue = undefined;
                    }
                }
                
                this.ModLoader.ImGui.text(`Y: ${this.core.link.position.y} + `);
                this.ModLoader.ImGui.sliderFloat("##y", this.positionMod.y.mod, -32, 32)
                this.ModLoader.ImGui.sameLine();
                if(this.ModLoader.ImGui.checkbox("##yLock", this.positionMod.y.lock)){
                    if(this.positionMod.y.lock[0]){
                        this.positionMod.y.lockValue = this.core.link.position.y;
                    } else {
                        this.positionMod.y.lockValue = undefined;
                    }
                }
                
                this.ModLoader.ImGui.text(`Z: ${this.core.link.position.z} + `);
                this.ModLoader.ImGui.sliderFloat("##z", this.positionMod.z.mod, -32, 32)
                this.ModLoader.ImGui.sameLine();
                if(this.ModLoader.ImGui.checkbox("##zLock", this.positionMod.z.lock)){
                    if(this.positionMod.z.lock[0]){
                        this.positionMod.z.lockValue = this.core.link.position.z;
                    } else {
                        this.positionMod.z.lockValue = undefined;
                    }
                }
                this.ModLoader.ImGui.end();
            }
        }
    }
}

module.exports = cheatmenu;