import { IMMCore } from "MajorasMask/API/MMAPI";
import { IImGui } from "modloader64_api/Sylvain/ImGui";

export function renderMasksMenu(core: IMMCore, ImGui: IImGui) {
    if (ImGui.checkbox("Deku Mask", [core.save.inventory.FIELD_MASK_DEKU])) {
        core.save.inventory.FIELD_MASK_DEKU = !core.save.inventory.FIELD_MASK_DEKU;
    }
    if (ImGui.checkbox("Goron Mask", [core.save.inventory.FIELD_MASK_GORON])) {
        core.save.inventory.FIELD_MASK_GORON = !core.save.inventory.FIELD_MASK_GORON;
    }
    if (ImGui.checkbox("Zora Mask", [core.save.inventory.FIELD_MASK_ZORA])) {
        core.save.inventory.FIELD_MASK_ZORA = !core.save.inventory.FIELD_MASK_ZORA;
    }
    if (ImGui.checkbox("Fierce Deity's Mask", [core.save.inventory.FIELD_MASK_FIERCE_DEITY])) {
        core.save.inventory.FIELD_MASK_FIERCE_DEITY = !core.save.inventory.FIELD_MASK_FIERCE_DEITY;
    }
    if (ImGui.checkbox("Postman's Hat", [core.save.inventory.FIELD_MASK_POSTMAN])) {
        core.save.inventory.FIELD_MASK_POSTMAN = !core.save.inventory.FIELD_MASK_POSTMAN;
    }
    if (ImGui.checkbox("All-Night Mask", [core.save.inventory.FIELD_MASK_ALL_NIGHT])) {
        core.save.inventory.FIELD_MASK_ALL_NIGHT = !core.save.inventory.FIELD_MASK_ALL_NIGHT;
    }
    if (ImGui.checkbox("Blast Mask", [core.save.inventory.FIELD_MASK_BLAST])) {
        core.save.inventory.FIELD_MASK_BLAST = !core.save.inventory.FIELD_MASK_BLAST;
    }
    if (ImGui.checkbox("Stone Mask", [core.save.inventory.FIELD_MASK_STONE])) {
        core.save.inventory.FIELD_MASK_STONE = !core.save.inventory.FIELD_MASK_STONE;
    }
    if (ImGui.checkbox("Great Fairy's Mask", [core.save.inventory.FIELD_MASK_GREAT_FAIRY])) {
        core.save.inventory.FIELD_MASK_GREAT_FAIRY = !core.save.inventory.FIELD_MASK_GREAT_FAIRY;
    }
    if (ImGui.checkbox("Keaton Mask", [core.save.inventory.FIELD_MASK_KEATON])) {
        core.save.inventory.FIELD_MASK_KEATON = !core.save.inventory.FIELD_MASK_KEATON;
    }
    if (ImGui.checkbox("Bremen Mask", [core.save.inventory.FIELD_MASK_BREMEN])) {
        core.save.inventory.FIELD_MASK_BREMEN = !core.save.inventory.FIELD_MASK_BREMEN;
    }
    if (ImGui.checkbox("Bunny Hood", [core.save.inventory.FIELD_MASK_BUNNY_HOOD])) {
        core.save.inventory.FIELD_MASK_BUNNY_HOOD = !core.save.inventory.FIELD_MASK_BUNNY_HOOD;
    }
    if (ImGui.checkbox("Don Gero's Mask", [core.save.inventory.FIELD_MASK_DON_GERO])) {
        core.save.inventory.FIELD_MASK_DON_GERO = !core.save.inventory.FIELD_MASK_DON_GERO;
    }
    if (ImGui.checkbox("Mask of Scents", [core.save.inventory.FIELD_MASK_OF_SCENTS])) {
        core.save.inventory.FIELD_MASK_OF_SCENTS = !core.save.inventory.FIELD_MASK_OF_SCENTS;
    }
    if (ImGui.checkbox("Romani's Mask", [core.save.inventory.FIELD_MASK_ROMANI])) {
        core.save.inventory.FIELD_MASK_ROMANI = !core.save.inventory.FIELD_MASK_ROMANI;
    }
    if (ImGui.checkbox("Circus Leader's Mask", [core.save.inventory.FIELD_MASK_CIRCUS_LEADER])) {
        core.save.inventory.FIELD_MASK_CIRCUS_LEADER = !core.save.inventory.FIELD_MASK_CIRCUS_LEADER;
    }
    if (ImGui.checkbox("Kafei's Mask", [core.save.inventory.FIELD_MASK_KAFEI])) {
        core.save.inventory.FIELD_MASK_KAFEI = !core.save.inventory.FIELD_MASK_KAFEI;
    }
    if (ImGui.checkbox("Couple's Mask", [core.save.inventory.FIELD_MASK_COUPLES])) {
        core.save.inventory.FIELD_MASK_COUPLES = !core.save.inventory.FIELD_MASK_COUPLES;
    }
    if (ImGui.checkbox("Mask of Truth", [core.save.inventory.FIELD_MASK_OF_TRUTH])) {
        core.save.inventory.FIELD_MASK_OF_TRUTH = !core.save.inventory.FIELD_MASK_OF_TRUTH;
    }
    if (ImGui.checkbox("Kamaro's Mask", [core.save.inventory.FIELD_MASK_KAMERO])) {
        core.save.inventory.FIELD_MASK_KAMERO = !core.save.inventory.FIELD_MASK_KAMERO;
    }
    if (ImGui.checkbox("Gibdo Mask", [core.save.inventory.FIELD_MASK_GIBDO])) {
        core.save.inventory.FIELD_MASK_GIBDO = !core.save.inventory.FIELD_MASK_GIBDO;
    }
    if (ImGui.checkbox("Garo's Mask", [core.save.inventory.FIELD_MASK_GARO])) {
        core.save.inventory.FIELD_MASK_GARO = !core.save.inventory.FIELD_MASK_GARO;
    }
    if (ImGui.checkbox("Captain's Hat", [core.save.inventory.FIELD_MASK_CAPTAIN])) {
        core.save.inventory.FIELD_MASK_CAPTAIN = !core.save.inventory.FIELD_MASK_CAPTAIN;
    }
    if (ImGui.checkbox("Giant's Mask", [core.save.inventory.FIELD_MASK_GIANT])) {
        core.save.inventory.FIELD_MASK_GIANT = !core.save.inventory.FIELD_MASK_GIANT;
    }
}