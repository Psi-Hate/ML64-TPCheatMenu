import { ICore, IModLoaderAPI, IPlugin } from 'modloader64_api/IModLoaderAPI';
import { InjectCore } from 'modloader64_api/CoreInjection';
import { onViUpdate } from 'modloader64_api/PluginLifecycle';
import * as TP from './tp/cheatmenu';
import { ITPCore, TPEvents } from 'TwilightPrincess/API/TPAPI';
import { EventHandler } from 'modloader64_api/EventHandler';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { onTick, Init } from 'modloader64_api/PluginLifecycle';

enum SupportedCores {
    TWILIGHT_PRINCESS = "TwilightPrincess",
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
        if (this.ModLoader.isModLoaded(SupportedCores.TWILIGHT_PRINCESS)) {
            this.game = SupportedCores.TWILIGHT_PRINCESS;
        } /* else
        if (this.ModLoader.isModLoaded(SupportedCores.MAJORAS_MASK)) {
            this.game = SupportedCores.MAJORAS_MASK;
        }
        if (this.core.rom_header)
            console.log(`\nMod Loaded: ${this.game}\nGame Loaded: ${this.core.rom_header.name}`) */
    }
    @onTick()
    onTick() {
        switch (this.game) {
            case SupportedCores.TWILIGHT_PRINCESS:
                TP.onTick(this.ModLoader, this.core as ITPCore);
                break;
/*             case SupportedCores.MAJORAS_MASK:
                MM.onTick(this.ModLoader, this.core as IMMCore);
                break; */
        }
    }

    @onViUpdate()
    onViUpdate() {

        switch (this.game) {
            case SupportedCores.TWILIGHT_PRINCESS:
                TP.onViUpdate(this.ModLoader, this.core as ITPCore);
                break;
/*             case SupportedCores.MAJORAS_MASK:
                MM.onViUpdate(this.ModLoader, this.core as IMMCore);
                break; */
        }

    }

}