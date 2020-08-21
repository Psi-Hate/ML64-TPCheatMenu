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
    "magic": number;
    "magicLocked": boolean;
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
    "beans": number;
    "beansLocked": boolean;
    "arrows": number;
    "arrowsLocked": boolean;
    constructor(){
        this.heartsLocked = false;
        this.magicLocked = false;
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
        this.beansLocked = false;
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
            if(this.config.magicLocked){
                this.core.save.magic_current = this.config.magic;
            }
            if(this.config.rupeesLocked){
                this.core.save.rupee_count = this.config.rupees;
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
            if(this.config.beansLocked){
                this.core.save.inventory.magicBeansCount = this.config.beans;
            }
            if(this.config.arrowsLocked){
                this.core.save.inventory.arrows = this.config.arrows;
            }
            // If "L" is pressed...
            if(this.ModLoader.emulator.rdramRead8(0x1c84b5) === 0x20){
                // ... Set upwards velocity (?)
                this.ModLoader.emulator.rdramWrite16(0x1daa90, 0x40cb);
            }
            
            if(this.config.hearts !== this.core.save.health){
                this.config.hearts = this.core.save.health;
                this.ModLoader.gui.tunnel.send("cheatmenu:HealthUpdate", this.config.hearts);
            }
            if(this.config.magic !== this.core.save.magic_current){
                this.config.magic = this.core.save.magic_current;
                this.ModLoader.gui.tunnel.send("cheatmenu:MagicUpdate", this.config.magic);
            }
            if(this.config.rupees !== this.core.save.rupee_count){
                this.config.rupees = this.core.save.rupee_count;
                this.ModLoader.gui.tunnel.send("cheatmenu:RupeeUpdate", this.config.rupees);
            }
            if(this.config.time !== this.core.save.world_time){
                this.config.time = this.core.save.world_time;
                this.ModLoader.gui.tunnel.send("cheatmenu:TimeUpdate", this.config.time);
            }
            if(this.config.dekuNuts !== this.core.save.inventory.dekuNutsCount){
                this.config.dekuNuts = this.core.save.inventory.dekuNutsCount;
                this.ModLoader.gui.tunnel.send("cheatmenu:DekuNutUpdate", this.config.dekuNuts);
            }
            if(this.config.dekuSticks !== this.core.save.inventory.dekuSticksCount){
                this.config.dekuSticks = this.core.save.inventory.dekuSticksCount;
                this.ModLoader.gui.tunnel.send("cheatmenu:DekuStickUpdate", this.config.dekuSticks);
            }
            if(this.config.seeds !== this.core.save.inventory.dekuSeeds){
                this.config.seeds = this.core.save.inventory.dekuSeeds;
                this.ModLoader.gui.tunnel.send("cheatmenu:SeedUpdate", this.config.seeds);
            }
            if(this.config.bombs !== this.core.save.inventory.bombsCount){
                this.config.bombs = this.core.save.inventory.bombsCount;
                this.ModLoader.gui.tunnel.send("cheatmenu:BombUpdate", this.config.bombs);
            }
            if(this.config.bombchus !== this.core.save.inventory.bombchuCount){
                this.config.bombchus = this.core.save.inventory.bombchuCount;
                this.ModLoader.gui.tunnel.send("cheatmenu:BombchuUpdate", this.config.bombchus);
            }
            if(this.config.beans !== this.core.save.inventory.magicBeansCount){
                this.config.beans = this.core.save.inventory.magicBeansCount;
                this.ModLoader.gui.tunnel.send("cheatmenu:BeanUpdate", this.config.bombchus);
            }
            if(this.config.arrows !== this.core.save.inventory.arrows){
                this.config.arrows = this.core.save.inventory.arrows;
                this.ModLoader.gui.tunnel.send("cheatmenu:ArrowUpdate", this.config.arrows);
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
        this.core.save.magic_current = this.config.magic;
        this.core.save.world_time = this.config.time
        this.core.save.rupee_count = this.config.rupees;
        this.core.save.inventory.dekuNutsCount = this.config.dekuNuts;
        this.core.save.inventory.dekuSticksCount = this.config.dekuSticks;
        this.core.save.inventory.dekuSeeds = this.config.seeds;
        this.core.save.inventory.bombsCount = this.config.bombs;
        this.core.save.inventory.bombchuCount = this.config.bombchus;
        this.core.save.inventory.magicBeansCount = this.config.beans;
        this.core.save.inventory.arrows = this.config.arrows;
    }


    @EventHandler(OotEvents.ON_SAVE_LOADED)
    requestRefresh(){
        this.saveLoaded = true;
        this.ModLoader.gui.tunnel.send("cheatmenu:SaveUpdate", this.config);
    }
}

module.exports = cheatmenu;