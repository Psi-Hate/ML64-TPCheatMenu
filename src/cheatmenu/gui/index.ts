import {MessageLayer} from 'modloader64_api/MessageLayer';
import {TunnelMessageHandler, GUITunnelPacket} from 'modloader64_api/GUITunnel';
import Vector3 from 'modloader64_api/math/Vector3';

const electron = require('electron');
const ipc = electron.ipcRenderer;

const hooks = {};

let config: any;

class MapMessageHandlers {
    tunnel!: MessageLayer;

    constructor(){
        this.tunnel = new MessageLayer('cheatmenu', ipc, ipc);
        this.tunnel.setupMessageProcessor(this);
    }

    @TunnelMessageHandler("cheatmenu:CheatUpdate")
    onUpdate(evt: any){
        config = evt;
        applyBtn.disabled = false;
        hearts.valueAsNumber = Math.floor(evt.hearts / 16) as number;
        qhearts.valueAsNumber = Math.floor((evt.hearts / 4) % 4) as number;
        rupees.valueAsNumber = evt.rupees as number;
        hour.valueAsNumber = Math.floor(evt.time / (65535 / 24)) as number;
        minute.valueAsNumber = Math.floor((evt.time % (65535 / 24)) / (65535 / (24 * 60))) as number;
        dekuNuts.valueAsNumber = evt.dekuNuts as number;
        dekuSticks.valueAsNumber = evt.dekuSticks as number;
        seeds.valueAsNumber = evt.seeds as number;
        bombs.valueAsNumber = evt.bombs as number;
        bombchus.valueAsNumber = evt.bombchus as number;
        arrows.valueAsNumber = evt.arrows as number;
    }

    @TunnelMessageHandler("cheatmenu:PositionUpdate")
    onPosUpdate(evt: Vector3){
        posX.value = evt.x.toFixed(2);
        posY.value = evt.y.toFixed(2);
        posZ.value = evt.z.toFixed(2);
    }

    // @TunnelMessageHandler("cheatmenu:RotationUpdate")
    // onRotUpdate(evt: Vector3){
    //     rotX.value = evt.x.toFixed(2);
    //     rotY.value = evt.y.toFixed(2);
    //     rotZ.value = evt.z.toFixed(2);
    // }
}

const handlers = new MapMessageHandlers();

let hearts = document.getElementById("hearts") as HTMLInputElement;
let qhearts = document.getElementById("qhearts") as HTMLInputElement;
let heartsLocked = document.getElementById("heartsLocked") as HTMLInputElement;
let rupees = document.getElementById("rupees") as HTMLInputElement;
let rupeesLocked = document.getElementById("rupeesLocked") as HTMLInputElement;
let hour = document.getElementById("hour") as HTMLInputElement;
let minute = document.getElementById("minute") as HTMLInputElement;
let timeLocked = document.getElementById("timeLocked") as HTMLInputElement;
let posX = document.getElementById("posX") as HTMLInputElement;
let posXLocked = document.getElementById("posXLocked") as HTMLInputElement;
let posY = document.getElementById("posY") as HTMLInputElement;
let posYLocked = document.getElementById("posYLocked") as HTMLInputElement;
let posZ = document.getElementById("posZ") as HTMLInputElement;
let posZLocked = document.getElementById("posZLocked") as HTMLInputElement;
// let rotX = document.getElementById("rotX") as HTMLInputElement;
// let rotXLocked = document.getElementById("rotXLocked") as HTMLInputElement;
// let rotY = document.getElementById("rotY") as HTMLInputElement;
// let rotYLocked = document.getElementById("rotYLocked") as HTMLInputElement;
// let rotZ = document.getElementById("rotZ") as HTMLInputElement;
// let rotZLocked = document.getElementById("rotZLocked") as HTMLInputElement;
let dekuNuts = document.getElementById("dekuNuts") as HTMLInputElement;
let dekuNutsLocked = document.getElementById("dekuNutsLocked") as HTMLInputElement;
let dekuSticks = document.getElementById("dekuSticks") as HTMLInputElement;
let dekuSticksLocked = document.getElementById("dekuSticksLocked") as HTMLInputElement;
let seeds = document.getElementById("seeds") as HTMLInputElement;
let seedsLocked = document.getElementById("seedsLocked") as HTMLInputElement;
let bombs = document.getElementById("bombs") as HTMLInputElement;
let bombsLocked = document.getElementById("bombsLocked") as HTMLInputElement;
let bombchus = document.getElementById("bombchus") as HTMLInputElement;
let bombchusLocked = document.getElementById("bombchusLocked") as HTMLInputElement;
let arrows = document.getElementById("arrows") as HTMLInputElement;
let arrowsLocked = document.getElementById("arrowsLocked") as HTMLInputElement;
let applyBtn = document.getElementById("apply") as HTMLButtonElement;

applyBtn.addEventListener("click", () => {
    if(!applyBtn.disabled){
        config.hearts = (hearts.valueAsNumber * 16) + (qhearts.valueAsNumber * 4);
        config.heartsLocked = heartsLocked.checked;
        config.rupees = rupees.valueAsNumber;
        config.rupeesLocked = rupeesLocked.checked;
        config.time = Math.ceil((hour.valueAsNumber * (65535 / 24)) + (minute.valueAsNumber * (65535 / (24 * 60))));
        config.timeLocked = timeLocked.checked;
        config.positionLocked = {x: posXLocked.checked, y: posYLocked.checked, z: posZLocked.checked};
        // config.rotationLocked = {x: rotXLocked.checked, y: rotYLocked.checked, z: rotZLocked.checked};
        config.dekuNuts = dekuNuts.valueAsNumber;
        config.dekuNutsLocked = dekuNutsLocked.checked;
        config.dekuSticks = dekuSticks.valueAsNumber;
        config.dekuSticksLocked = dekuSticksLocked.checked;
        config.seeds = seeds.valueAsNumber;
        config.seedsLocked = seedsLocked.checked;
        config.bombs = bombs.valueAsNumber;
        config.bombsLocked = bombsLocked.checked;
        config.bombchus = bombchus.valueAsNumber;
        config.bombchusLocked = bombchusLocked.checked;
        config.arrows = arrows.valueAsNumber;
        config.arrowsLocked = arrowsLocked.checked;
        handlers.tunnel.send("forwardToML", {id: "cheatmenu:DataUpdate", data: config});
    }
});

window.addEventListener('focus', () => {
    handlers.tunnel.send("forwardToML", {id: "cheatmenu:RequestRefresh"});
});

module.exports = hooks;