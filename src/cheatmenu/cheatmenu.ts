import { IModLoaderAPI, IPlugin } from 'modloader64_api/IModLoaderAPI';
import { SidedProxy, ProxySide } from 'modloader64_api/SidedProxy/SidedProxy';
import { CheatmenuClient } from './cheatmenuClient';

class wwcheatmenu implements IPlugin {

    ModLoader!: IModLoaderAPI;
    @SidedProxy(ProxySide.CLIENT, CheatmenuClient)
    client!: CheatmenuClient;

    preinit() {}
    init() {}
    postinit() {}
    onTick() {}

}

module.exports = wwcheatmenu;