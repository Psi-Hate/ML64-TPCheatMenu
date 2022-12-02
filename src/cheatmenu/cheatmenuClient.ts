import { ICore, IModLoaderAPI, IPlugin } from 'modloader64_api/IModLoaderAPI';
import { InjectCore } from 'modloader64_api/CoreInjection';
import { onViUpdate } from 'modloader64_api/PluginLifecycle';
import * as WW from './ww/cheatmenu';
import { IWWCore } from 'WindWaker/API/WWAPI';
import { EventHandler } from 'modloader64_api/EventHandler';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { onTick, Init } from 'modloader64_api/PluginLifecycle';

enum SupportedCores {
    WINDWAKER = "WindWaker",
    UNKNOWN = ""
}

export class CheatmenuClient {

    @ModLoaderAPIInject()
    ModLoader!: IModLoaderAPI;
    @InjectCore()
    core!: ICore;
    game: SupportedCores = SupportedCores.UNKNOWN;

    @Init()
    init() {
        if (this.ModLoader.isModLoaded(SupportedCores.WINDWAKER)) {
            this.game = SupportedCores.WINDWAKER;
        } 
    }
    @onTick()
    onTick() {
        switch (this.game) {

            case SupportedCores.WINDWAKER:
                WW.onTick(this.ModLoader, this.core as IWWCore);
                break;
        }
    }

    @onViUpdate()
    onViUpdate() {

        switch (this.game) {

            case SupportedCores.WINDWAKER:
                WW.onViUpdate(this.ModLoader, this.core as IWWCore);
                break;
        }

    }
}