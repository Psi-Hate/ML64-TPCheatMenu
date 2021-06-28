import { ICore, IModLoaderAPI, IPlugin } from 'modloader64_api/IModLoaderAPI';
import { InjectCore } from 'modloader64_api/CoreInjection';
import { onViUpdate } from 'modloader64_api/PluginLifecycle';
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI';
import { IMMCore, MMEvents } from 'MajorasMask/API/MMAPI';
import * as OOT from './oot/cheatmenu';
import * as MM from './mm/cheatmenu';
import { EventHandler } from 'modloader64_api/EventHandler';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { onTick, Init } from 'modloader64_api/PluginLifecycle';

enum SupportedCores {
    OCARINA_OF_TIME = "OcarinaofTime",
    MAJORAS_MASK = "MajorasMask",
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
        if (this.ModLoader.isModLoaded(SupportedCores.OCARINA_OF_TIME)) {
            this.game = SupportedCores.OCARINA_OF_TIME;
        } else
        if (this.ModLoader.isModLoaded(SupportedCores.MAJORAS_MASK)) {
            this.game = SupportedCores.MAJORAS_MASK;
        }
        // if (this.core.rom_header)
        //     console.log(`\nMod Loaded: ${this.game}\nGame Loaded: ${this.core.rom_header.name}`)
    }
    @onTick()
    onTick() {
        switch (this.game) {
            case SupportedCores.OCARINA_OF_TIME:
                OOT.onTick(this.ModLoader, this.core as IOOTCore);
                break;
            case SupportedCores.MAJORAS_MASK:
                MM.onTick(this.ModLoader, this.core as IMMCore);
                break;
        }
    }

    @onViUpdate()
    onViUpdate() {

        switch (this.game) {
            case SupportedCores.OCARINA_OF_TIME:
                OOT.onViUpdate(this.ModLoader, this.core as IOOTCore);
                break;
            case SupportedCores.MAJORAS_MASK:
                MM.onViUpdate(this.ModLoader, this.core as IMMCore);
                break;
        }

    }

    @EventHandler(MMEvents.ON_SCENE_CHANGE)
    onSceneChange() {
        if (this.game === SupportedCores.OCARINA_OF_TIME) {
            OOT.entranceIndex[0] = (this.core as IOOTCore).save.entrance_index.toString(16);
        } else
        if (this.game === SupportedCores.MAJORAS_MASK) {
            MM.grav.updateGrav = false;
        }
    }

    @EventHandler(MMEvents.ON_AGE_CHANGE)
    onAgeChange() {
        if (this.game === SupportedCores.MAJORAS_MASK) {
            MM.grav.updateGrav = false;
        }
    }

}