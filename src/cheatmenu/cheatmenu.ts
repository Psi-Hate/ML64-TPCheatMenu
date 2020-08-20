import {IPlugin, IModLoaderAPI, ModLoaderEvents} from 'modloader64_api/IModLoaderAPI';
import {IOOTCore, OotEvents} from 'modloader64_api/OOT/OOTAPI';
import {InjectCore} from 'modloader64_api/CoreInjection';
import path from 'path';
import {TunnelMessageHandler} from 'modloader64_api/GUITunnel';
import {EventHandler} from 'modloader64_api/EventHandler';
import Vector3 from 'modloader64_api/math/Vector3';

class cheatmenu_config{
    "hearts": number;
    "heartsLocked": boolean;
    "rupees": number;
    "rupeesLocked": boolean;
    "time": number;
    "timeLocked": boolean;
    "position": Vector3;
    "positionLocked": any;
    "rotation": Vector3;
    "rotationLocked": any;
    "dekuNuts": number;
    "dekuNutsLocked": boolean;
    "dekuSticks": number;
    "dekuSticksLocked": boolean;
    "seeds": number;
    "seedsLocked": boolean;
    "bombs": number;
    "bombsLocked": boolean;
    "bombchus": number;
    "bombchusLocked": boolean;
    "arrows": number;
    "arrowsLocked": boolean;
    [key: string]: any;
    constructor(){
        this.heartsLocked = false;
        this.rupeesLocked = false;
        this.timeLocked = false;
        this.position = new Vector3(0, 0, 0);
        this.positionLocked = {x: false, y: false, z: false};
        this.rotation = new Vector3(0, 0, 0);
        this.rotationLocked = {x: false, y: false, z: false};
        this.dekuNutsLocked = false;
        this.dekuSticksLocked = false;
        this.seedsLocked = false;
        this.bombsLocked = false;
        this.bombchusLocked = false;
        this.arrowsLocked = false;
    }
}

class cheatmenu implements IPlugin{

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;
    @InjectCore()
    core!: IOOTCore;
    config: cheatmenu_config = new cheatmenu_config();

    saveLoaded: boolean = false;

    preinit(): void {
    }
    init(): void {
    }
    postinit(): void {
        this.ModLoader.gui.openWindow(400, 600, path.resolve(__dirname, 'gui', 'index.html'));
    }
    onTick(frame?: number | undefined): void {
        if(this.saveLoaded){
            if(this.config.heartsLocked){
                this.core.save.health = this.config.hearts;
            }
            if(this.config.rupeesLocked){
                this.ModLoader.emulator.rdramWrite16(0x11A604, this.config.rupees);
            }
            if(this.config.timeLocked){
                this.core.save.world_time = this.config.time;
            }
            if(this.config.dekuNutsLocked){
                this.core.save.inventory.dekuNutsCount = this.config.dekuNuts;
            }
            if(this.config.dekuSticksLocked){
                this.core.save.inventory.dekuSticksCount = this.config.dekuSticks;
            }
            if(this.config.seedsLocked){
                this.core.save.inventory.dekuSeeds = this.config.seeds;
            }
            if(this.config.bombsLocked){
                this.core.save.inventory.bombsCount = this.config.bombs;
            }
            if(this.config.bombchusLocked){
                this.core.save.inventory.bombchuCount = this.config.bombchus;
            }
            if(this.config.arrowsLocked){
                this.core.save.inventory.arrows = this.config.arrows;
            }
            // If "L" is pressed...
            if(this.ModLoader.emulator.rdramRead8(0x1c84b5) === 0x20){
                // ... Set upwards velocity (?)
                this.ModLoader.emulator.rdramWrite16(0x1daa90, 0x40cb);
            }
            if(this.config.position.x !== this.core.link.position.getRawPos().readFloatBE(0) || this.config.position.y !== this.core.link.position.getRawPos().readFloatBE(4) || this.config.position.z !== this.core.link.position.getRawPos().readFloatBE(8)){
                this.config.position.x = this.core.link.position.getRawPos().readFloatBE(0);
                this.config.position.y = this.core.link.position.getRawPos().readFloatBE(4);
                this.config.position.z = this.core.link.position.getRawPos().readFloatBE(8);
                this.ModLoader.gui.tunnel.send("cheatmenu:PositionUpdate", this.config.position);
            }
            // if(this.config.rotation.x !== this.core.link.rotation.getRawRot().readFloatBE(0) || this.config.rotation.y !== this.core.link.rotation.getRawRot().readFloatBE(1) || this.config.rotation.z !== this.core.link.rotation.getRawRot().readFloatBE(2)){
            //     this.config.rotation.x = this.core.link.rotation.getRawRot().readFloatBE(0);
            //     this.config.rotation.y = this.core.link.rotation.getRawRot().readFloatBE(1);
            //     this.config.rotation.z = this.core.link.rotation.getRawRot().readFloatBE(2);
            //     this.ModLoader.gui.tunnel.send("cheatmenu:RotationUpdate", this.config.rotation);
            // }
        }
    }

    @TunnelMessageHandler("cheatmenu:DataUpdate")
    onUpdate(packet: any){
        this.ModLoader.logger.debug(`Received packet`);
        this.config = packet.data;
        this.update();
    }

    update(){
        this.core.save.health = this.config.hearts;
        this.core.save.world_time = this.config.time
        this.ModLoader.emulator.rdramWrite16(0x11A604, this.config.rupees);
        this.core.save.inventory.dekuNutsCount = this.config.dekuNuts;
        this.core.save.inventory.dekuSticksCount = this.config.dekuSticks;
        this.core.save.inventory.dekuSeeds = this.config.seeds;
        this.core.save.inventory.bombsCount = this.config.bombs;
        this.core.save.inventory.bombchuCount = this.config.bombchus;
        this.core.save.inventory.arrows = this.config.arrows;
    }

    requestRefresh(){
        this.config.hearts = this.core.save.health;
        this.config.time = this.core.save.world_time;
        this.config.rupees = this.ModLoader.emulator.rdramRead16(0x11A604);
        this.config.dekuNuts = this.core.save.inventory.dekuNutsCount;
        this.config.dekuSticks = this.core.save.inventory.dekuSticksCount;
        this.config.seeds = this.core.save.inventory.dekuSeeds;
        this.config.bombs = this.core.save.inventory.bombsCount;
        this.config.bombchus = this.core.save.inventory.bombchuCount;
        this.config.arrows = this.core.save.inventory.arrows;
        this.ModLoader.gui.tunnel.send("cheatmenu:CheatUpdate", this.config);
    }

    @EventHandler(OotEvents.ON_SAVE_LOADED)
    onSaveLoaded(){
        this.saveLoaded = true;
        this.requestRefresh();
    }

    @TunnelMessageHandler("cheatmenu:RequestRefresh")
    onRequestRefresh(){
        this.requestRefresh();
    }
}

module.exports = cheatmenu;