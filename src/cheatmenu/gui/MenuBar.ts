import { IOOTCore, Ocarina, Hookshot, InventoryItem, AmmoUpgrade, Strength, VANILLA_KEY_INDEXES, ZoraScale, Wallet} from 'modloader64_api/OOT/OOTAPI';
import { ComboFlags, number_ref, IImGui } from 'modloader64_api/Sylvain/ImGui';
import { lockedItems } from '@cheatmenu/cheatmenu';
import { renderLinkMenu } from './LinkMenu';
import { renderEquipmentMenu } from './items/EquipmentMenu';
import { renderCButtonItemMenu } from './items/CButtonItemMenu';

export function renderMenuBar(core: IOOTCore, ImGui: IImGui){
    
    if(ImGui.beginMainMenuBar()){
        if(ImGui.beginMenu("Mods")){
            if(ImGui.beginMenu("Cheat Menu")){
                if(ImGui.beginMenu("Link")){
                    renderLinkMenu(core, ImGui);
                    ImGui.endMenu();
                }
                if(ImGui.beginMenu("Items")){
                    if(ImGui.beginMenu("Equipment")){
                        renderEquipmentMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if(ImGui.beginMenu("C-Button Items")){
                        renderCButtonItemMenu(core, ImGui);
                        ImGui.endMenu();
                    }
                    if(ImGui.beginMenu("Quest Items")){
                        if(ImGui.beginMenu("Dungeon Items")){
                            if(ImGui.beginMenu("Inside the Deku Tree")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.DEKU_TREE.map])){
                                    core.save.dungeonItemManager.DEKU_TREE.map = !core.save.dungeonItemManager.DEKU_TREE.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.DEKU_TREE.compass])){
                                    core.save.dungeonItemManager.DEKU_TREE.compass = !core.save.dungeonItemManager.DEKU_TREE.compass;
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Dodongo's Cavern")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.DODONGOS_CAVERN.map])){
                                    core.save.dungeonItemManager.DODONGOS_CAVERN.map = !core.save.dungeonItemManager.DODONGOS_CAVERN.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.DODONGOS_CAVERN.compass])){
                                    core.save.dungeonItemManager.DODONGOS_CAVERN.compass = !core.save.dungeonItemManager.DODONGOS_CAVERN.compass;
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Inside Jabu-Jabu's Belly")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.JABJ_JABUS_BELLY.map])){
                                    core.save.dungeonItemManager.JABJ_JABUS_BELLY.map = !core.save.dungeonItemManager.JABJ_JABUS_BELLY.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.JABJ_JABUS_BELLY.compass])){
                                    core.save.dungeonItemManager.JABJ_JABUS_BELLY.compass = !core.save.dungeonItemManager.JABJ_JABUS_BELLY.compass;
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Forest Temple")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.FOREST_TEMPLE.map])){
                                    core.save.dungeonItemManager.FOREST_TEMPLE.map = !core.save.dungeonItemManager.FOREST_TEMPLE.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.FOREST_TEMPLE.compass])){
                                    core.save.dungeonItemManager.FOREST_TEMPLE.compass = !core.save.dungeonItemManager.FOREST_TEMPLE.compass;
                                }
                                if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.FOREST_TEMPLE.bossKey])){
                                    core.save.dungeonItemManager.FOREST_TEMPLE.bossKey = !core.save.dungeonItemManager.FOREST_TEMPLE.bossKey;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let forestTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.FOREST_TEMPLE)];
                                    if(ImGui.sliderInt("##forestTempleKeys", forestTempleKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.FOREST_TEMPLE, forestTempleKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Fire Temple")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.FIRE_TEMPLE.map])){
                                    core.save.dungeonItemManager.FIRE_TEMPLE.map = !core.save.dungeonItemManager.FIRE_TEMPLE.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.FIRE_TEMPLE.compass])){
                                    core.save.dungeonItemManager.FIRE_TEMPLE.compass = !core.save.dungeonItemManager.FIRE_TEMPLE.compass;
                                }
                                if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.FIRE_TEMPLE.bossKey])){
                                    core.save.dungeonItemManager.FIRE_TEMPLE.bossKey = !core.save.dungeonItemManager.FIRE_TEMPLE.bossKey;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let fireTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.FIRE_TEMPLE)];
                                    if(ImGui.sliderInt("##fireTempleKeys", lockedItems.fireTempleKeys.value, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.FIRE_TEMPLE, fireTempleKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Water Temple")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.WATER_TEMPLE.map])){
                                    core.save.dungeonItemManager.WATER_TEMPLE.map = !core.save.dungeonItemManager.WATER_TEMPLE.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.WATER_TEMPLE.compass])){
                                    core.save.dungeonItemManager.WATER_TEMPLE.compass = !core.save.dungeonItemManager.WATER_TEMPLE.compass;
                                }
                                if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.WATER_TEMPLE.bossKey])){
                                    core.save.dungeonItemManager.WATER_TEMPLE.bossKey = !core.save.dungeonItemManager.WATER_TEMPLE.bossKey;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let waterTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.WATER_TEMPLE)];
                                    if(ImGui.sliderInt("##waterTempleKeys", waterTempleKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.WATER_TEMPLE, waterTempleKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Shadow Temple")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.SHADOW_TEMPLE.map])){
                                    core.save.dungeonItemManager.SHADOW_TEMPLE.map = !core.save.dungeonItemManager.SHADOW_TEMPLE.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.SHADOW_TEMPLE.compass])){
                                    core.save.dungeonItemManager.SHADOW_TEMPLE.compass = !core.save.dungeonItemManager.SHADOW_TEMPLE.compass;
                                }
                                if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.SHADOW_TEMPLE.bossKey])){
                                    core.save.dungeonItemManager.SHADOW_TEMPLE.bossKey = !core.save.dungeonItemManager.SHADOW_TEMPLE.bossKey;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let shadowTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.SHADOW_TEMPLE)];
                                    if(ImGui.sliderInt("##shadowTempleKeys", shadowTempleKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.SHADOW_TEMPLE, shadowTempleKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Spirit Temple")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.SPIRIT_TEMPLE.map])){
                                    core.save.dungeonItemManager.SPIRIT_TEMPLE.map = !core.save.dungeonItemManager.SPIRIT_TEMPLE.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.SPIRIT_TEMPLE.compass])){
                                    core.save.dungeonItemManager.SPIRIT_TEMPLE.compass = !core.save.dungeonItemManager.SPIRIT_TEMPLE.compass;
                                }
                                if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.SPIRIT_TEMPLE.bossKey])){
                                    core.save.dungeonItemManager.SPIRIT_TEMPLE.bossKey = !core.save.dungeonItemManager.SPIRIT_TEMPLE.bossKey;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let spiritTempleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.SPIRIT_TEMPLE)];
                                    if(ImGui.sliderInt("##spiritTempleKeys", spiritTempleKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.SPIRIT_TEMPLE, spiritTempleKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Bottom Of The Well")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.map])){
                                    core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.map = !core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.compass])){
                                    core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.compass = !core.save.dungeonItemManager.BOTTOM_OF_THE_WELL.compass;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let bottomOfTheWellKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.BOTTOM_OF_THE_WELL)];
                                    if(ImGui.sliderInt("##bottomOfTheWellKeys", bottomOfTheWellKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.BOTTOM_OF_THE_WELL, bottomOfTheWellKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Ice Cavern")){
                                if(ImGui.checkbox("Map", [core.save.dungeonItemManager.ICE_CAVERN.map])){
                                    core.save.dungeonItemManager.ICE_CAVERN.map = !core.save.dungeonItemManager.ICE_CAVERN.map;
                                }
                                if(ImGui.checkbox("Compass", [core.save.dungeonItemManager.ICE_CAVERN.compass])){
                                    core.save.dungeonItemManager.ICE_CAVERN.compass = !core.save.dungeonItemManager.ICE_CAVERN.compass;
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Gerudo Fortress")){
                                if(ImGui.checkbox("Gerudo Membership Card", [core.save.questStatus.gerudoMembershipCard])){
                                    core.save.questStatus.gerudoMembershipCard = !core.save.questStatus.gerudoMembershipCard;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let gerudoFortressKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GERUDO_FORTRESS)];
                                    if(ImGui.sliderInt("##gerudoFortressKeys", gerudoFortressKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GERUDO_FORTRESS, gerudoFortressKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Gerudo Training Grounds")){
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let gerudoTrainingGroundsKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GERUDO_TRAINING_GROUND)];
                                    if(ImGui.sliderInt("##gerudoTrainingGroundsKeys", gerudoTrainingGroundsKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GERUDO_TRAINING_GROUND, gerudoTrainingGroundsKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            if(ImGui.beginMenu("Ganon's Castle")){
                                if(ImGui.checkbox("Boss Key", [core.save.dungeonItemManager.GANONS_CASTLE.bossKey])){
                                    core.save.dungeonItemManager.GANONS_CASTLE.bossKey = !core.save.dungeonItemManager.GANONS_CASTLE.bossKey;
                                }
                                if(ImGui.beginCombo("Small Keys", "", ComboFlags.NoPreview)){
                                    let ganonsCastleKeys: number_ref = [core.save.keyManager.getKeyCountForIndex(VANILLA_KEY_INDEXES.GANONS_CASTLE)];
                                    if(ImGui.sliderInt("##ganonsCastleKeys", ganonsCastleKeys, 0, 9)){
                                        core.save.keyManager.setKeyCountByIndex(VANILLA_KEY_INDEXES.GANONS_CASTLE, ganonsCastleKeys[0]);
                                    }
                                    ImGui.endCombo();
                                }
                                ImGui.endMenu();
                            }
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Songs")){
                            if(ImGui.beginCombo("Regular Songs", "", ComboFlags.NoPreview)){
                                if(ImGui.checkbox("Zelda's Lullaby", [core.save.questStatus.zeldasLullaby])){
                                    core.save.questStatus.zeldasLullaby = !core.save.questStatus.zeldasLullaby;
                                }
                                if(ImGui.checkbox("Epona's Song", [core.save.questStatus.eponasSong])){
                                    core.save.questStatus.eponasSong = !core.save.questStatus.eponasSong;
                                }
                                if(ImGui.checkbox("Saria's Song", [core.save.questStatus.sariasSong])){
                                    core.save.questStatus.sariasSong = !core.save.questStatus.sariasSong;
                                }
                                if(ImGui.checkbox("Sun's Song", [core.save.questStatus.sunsSong])){
                                    core.save.questStatus.sunsSong = !core.save.questStatus.sunsSong;
                                }
                                if(ImGui.checkbox("Song of Time", [core.save.questStatus.songOfTime])){
                                    core.save.questStatus.songOfTime = !core.save.questStatus.songOfTime;
                                }
                                if(ImGui.checkbox("Song of Storms", [core.save.questStatus.songOfStorms])){
                                    core.save.questStatus.songOfStorms = !core.save.questStatus.songOfStorms;
                                }
                                ImGui.endCombo();
                            }
                            if(ImGui.beginCombo("Warp Songs", "", ComboFlags.NoPreview)){
                                if(ImGui.checkbox("Minuet of Forest", [core.save.questStatus.minuetOfForest])){
                                    core.save.questStatus.minuetOfForest = !core.save.questStatus.minuetOfForest;
                                }
                                if(ImGui.checkbox("Bolero of Fire", [core.save.questStatus.boleroOfFire])){
                                    core.save.questStatus.boleroOfFire = !core.save.questStatus.boleroOfFire;
                                }
                                if(ImGui.checkbox("Serende of Water", [core.save.questStatus.serenadeOfWater])){
                                    core.save.questStatus.serenadeOfWater = !core.save.questStatus.serenadeOfWater;
                                }
                                if(ImGui.checkbox("Requiem of Spirit", [core.save.questStatus.requiemOfSpirit])){
                                    core.save.questStatus.requiemOfSpirit = !core.save.questStatus.requiemOfSpirit;
                                }
                                if(ImGui.checkbox("Nocturne of Shadow", [core.save.questStatus.nocturneOfShadow])){
                                    core.save.questStatus.nocturneOfShadow = !core.save.questStatus.nocturneOfShadow;
                                }
                                if(ImGui.checkbox("Prelude of Light", [core.save.questStatus.preludeOfLight])){
                                    core.save.questStatus.preludeOfLight = !core.save.questStatus.preludeOfLight;
                                }
                                ImGui.endCombo();
                            }
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Gems")){
                            if(ImGui.checkbox("Kokiri Emerald", [core.save.questStatus.kokiriEmerald])){
                                core.save.questStatus.kokiriEmerald = !core.save.questStatus.kokiriEmerald;
                            }
                            if(ImGui.checkbox("Goron Ruby", [core.save.questStatus.goronRuby])){
                                core.save.questStatus.goronRuby = !core.save.questStatus.goronRuby;
                            }
                            if(ImGui.checkbox("Zora Sapphire", [core.save.questStatus.zoraSapphire])){
                                core.save.questStatus.zoraSapphire = !core.save.questStatus.zoraSapphire;
                            }
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Medallions")){
                            if(ImGui.checkbox("Forest Medallion", [core.save.questStatus.forestMedallion])){
                                core.save.questStatus.forestMedallion = !core.save.questStatus.forestMedallion;
                            }
                            if(ImGui.checkbox("Fire Medallion", [core.save.questStatus.fireMedallion])){
                                core.save.questStatus.fireMedallion = !core.save.questStatus.fireMedallion;
                            }
                            if(ImGui.checkbox("Water Medallion", [core.save.questStatus.waterMedallion])){
                                core.save.questStatus.waterMedallion = !core.save.questStatus.waterMedallion;
                            }
                            if(ImGui.checkbox("Spirit Medallion", [core.save.questStatus.spiritMedallion])){
                                core.save.questStatus.spiritMedallion = !core.save.questStatus.spiritMedallion;
                            }
                            if(ImGui.checkbox("Shadow Medallion", [core.save.questStatus.shadowMedallion])){
                                core.save.questStatus.shadowMedallion = !core.save.questStatus.shadowMedallion;
                            }
                            if(ImGui.checkbox("Light Medallion", [core.save.questStatus.lightMedallion])){
                                core.save.questStatus.lightMedallion = !core.save.questStatus.lightMedallion;
                            }
                            ImGui.endMenu();
                        }
                        if(ImGui.beginMenu("Gold Skulltulas")){
                            let goldSkulltulas: number_ref = [core.save.questStatus.goldSkulltulas];
                            if(ImGui.sliderInt("##goldSkulltulas", goldSkulltulas, 0, 100)){
                                core.save.questStatus.goldSkulltulas = goldSkulltulas[0];
                                core.save.questStatus.displayGoldSkulltulas = (core.save.questStatus.goldSkulltulas !== 0);
                            }
                            ImGui.endMenu();
                        }
                        if(ImGui.checkbox("Stone of Agony", [core.save.questStatus.stoneOfAgony])){
                            core.save.questStatus.stoneOfAgony = !core.save.questStatus.stoneOfAgony;
                        }
                        if(ImGui.checkbox("Gerudo Membership Card", [core.save.questStatus.gerudoMembershipCard])){
                            core.save.questStatus.gerudoMembershipCard = !core.save.questStatus.gerudoMembershipCard;
                        }
                        ImGui.endMenu();
                    }
                    ImGui.endMenu();
                }
                if(ImGui.beginMenu("Consumables")){
                    if(ImGui.beginCombo("Rupees", "", ComboFlags.NoPreview)){
                        let rupee_count: number_ref = [core.save.rupee_count];
                        const wallet_capacity: number = ((): number => {
                            switch(core.save.inventory.wallet){
                                case Wallet.CHILD:
                                    return 99;
                                case Wallet.ADULT:
                                    return 200;
                                case Wallet.GIANT:
                                    return 500;
                                default:
                                case Wallet.TYCOON:
                                    return 999;
                            }
                        })();
                        if(ImGui.sliderInt("##rupee_count", rupee_count, 0, wallet_capacity)){
                            core.save.rupee_count = rupee_count[0];
                        }
                        ImGui.endCombo();
                    }
                    if(ImGui.beginCombo("Deku Sticks", "", ComboFlags.NoPreview)){
                        let dekuSticksCount: number_ref = [core.save.inventory.dekuSticksCount];
                        const stick_capacity: number = ((): number => {
                            switch(core.save.inventory.dekuSticksCapacity){
                                default:
                                case AmmoUpgrade.NONE:
                                    return 0;
                                case AmmoUpgrade.BASE:
                                    return 10;
                                case AmmoUpgrade.UPGRADED:
                                    return 20;
                                case AmmoUpgrade.MAX:
                                    return 30;
                            }
                        })();
                        if(ImGui.sliderInt("##dekuSticksCount", dekuSticksCount, 0, stick_capacity)){
                            core.save.inventory.dekuSticksCount = dekuSticksCount[0];
                        }
                        ImGui.endCombo();
                    }
                    if(ImGui.beginCombo("Deku Nuts", "", ComboFlags.NoPreview)){
                        let dekuNutsCount: number_ref = [core.save.inventory.dekuNutsCount];
                        const nut_capacity: number = ((): number => {
                            switch(core.save.inventory.dekuNutsCapacity){
                                default:
                                case AmmoUpgrade.NONE:
                                    return 0;
                                case AmmoUpgrade.BASE:
                                    return 20;
                                case AmmoUpgrade.UPGRADED:
                                    return 30;
                                case AmmoUpgrade.MAX:
                                    return 40;
                            }
                        })();
                        if(ImGui.sliderInt("##dekuNutsCount", dekuNutsCount, 0, nut_capacity)){
                            core.save.inventory.dekuNutsCount = dekuNutsCount[0];
                        }
                        ImGui.endCombo();
                    }
                    if(ImGui.beginCombo("Deku Seeds", "", ComboFlags.NoPreview)){
                        let dekuSeeds: number_ref = [core.save.inventory.dekuSeeds];
                        const seed_capacity: number = ((): number => {
                            switch(core.save.inventory.bulletBag){
                                default:
                                case AmmoUpgrade.NONE:
                                    return 0;
                                case AmmoUpgrade.BASE:
                                    return 30;
                                case AmmoUpgrade.UPGRADED:
                                    return 40;
                                case AmmoUpgrade.MAX:
                                    return 50;
                            }
                        })();
                        if(ImGui.sliderInt("##dekuSeeds", dekuSeeds, 0, seed_capacity)){
                            core.save.inventory.dekuSeeds = dekuSeeds[0];
                        }
                        ImGui.endCombo();
                    }
                    if(ImGui.beginCombo("Bombs", "", ComboFlags.NoPreview)){
                        let bombsCount: number_ref = [core.save.inventory.bombsCount];
                        const bomb_capacity: number = ((): number => {
                            switch(core.save.inventory.bombBag){
                                default:
                                case AmmoUpgrade.NONE:
                                    return 0;
                                case AmmoUpgrade.BASE:
                                    return 20;
                                case AmmoUpgrade.UPGRADED:
                                    return 30;
                                case AmmoUpgrade.MAX:
                                    return 40;
                            }
                        })();
                        if(ImGui.sliderInt("##bombsCount", bombsCount, 0, bomb_capacity)){
                            core.save.inventory.bombsCount = bombsCount[0];
                        }
                        ImGui.endCombo();
                    }
                    if(ImGui.beginCombo("Bombchus", "", ComboFlags.NoPreview)){
                        let bombchuCount: number_ref = [core.save.inventory.bombchuCount];
                        if(ImGui.sliderInt("##bombchuCount", bombchuCount, 0, 50)){
                            core.save.inventory.bombchuCount = bombchuCount[0];
                        }
                        ImGui.endCombo();
                    }
                    if(ImGui.beginCombo("Arrows", "", ComboFlags.NoPreview)){
                        let arrows: number_ref = [core.save.inventory.arrows];
                        const arrow_capacity: number = ((): number => {
                            switch(core.save.inventory.quiver){
                                default:
                                case AmmoUpgrade.NONE:
                                    return 0;
                                case AmmoUpgrade.BASE:
                                    return 30;
                                case AmmoUpgrade.UPGRADED:
                                    return 40;
                                case AmmoUpgrade.MAX:
                                    return 50;
                            }
                        })();
                        if(ImGui.sliderInt("##arrows", arrows, 0, arrow_capacity)){
                            core.save.inventory.arrows = arrows[0];
                        }
                        ImGui.endCombo();
                    }
                    ImGui.endMenu();
                }
                ImGui.endMenu();
            }
            ImGui.endMenu();
        }
        ImGui.endMainMenuBar();
    }
}