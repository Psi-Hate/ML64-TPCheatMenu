import { ComboFlags, IImGui, number_ref, string_ref } from 'modloader64_api/Sylvain/ImGui';
import { IMMCore } from 'MajorasMask/API/MMAPI';
import IMemory from 'modloader64_api/IMemory';
import { grav } from '../cheatmenu';

function timeParse(time: number): string {
    let hour: number = (Math.floor(time / (0xFFFF / 24)) + 6) % 24;
    let minute: number = Math.floor((time % (0xFFFF / 24)) / (0xFFFF / (60 * 24)));
    let hourParse: string = (((hour + 11) % 12) + 1).toString().padStart(2,"0");
    let minuteParse: string = minute.toString().padStart(2,"0");
    return `${hourParse}:${minuteParse} ${hour < 12 ? "AM" : "PM"}`
}

function gravityParse(gravity: number): string {
    return ((gravity * -1) / 100).toString();
}

function toInt16(value: number): number {
    return ((value + 0x8000) % 0x10000) - 0x8000;
}

const maskOrder: string[] = ["Red", "Blue", "Yellow", "Green"];
const hours: string[] = [
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
];

export function renderMiscMenu(core: IMMCore, emulator: IMemory, ImGui: IImGui) {
    if (ImGui.beginCombo("Time", "", ComboFlags.NoPreview)) {
        ImGui.text("Time");
        let time: number_ref = [(core.save.day_time + Math.floor((24 - 6) * (0xFFFF/24))) % 0xFFFF];
        if (ImGui.sliderInt("##time", time, 0x0, 0xFFFF, timeParse(time[0]))) {
            core.save.day_time = (time[0] + Math.ceil(6 * (0xFFFF/24))) % 0xFFFF;
        }

        let hour: number_ref = [(Math.floor(core.save.day_time / (0xFFFF / 24)) + 24 - 6) % 24];
        if (ImGui.combo("##hour", hour, hours)) {
            core.save.day_time = Math.ceil(((hour[0] + 6) % 24) * (0xFFFF / 24));
        }

        ImGui.text("Time Speed")
        let time_speed: number_ref = [(core.save.time_speed | 0) + 3];
        if (ImGui.sliderInt("##time_speed", time_speed, -9, 9)) {
            core.save.time_speed = time_speed[0] - 3;
        }

        ImGui.text("Day");
        let day: number_ref = [core.save.current_day];
        if (ImGui.sliderInt("##day", day, 0, 4)) {
            core.save.current_day = day[0];
        }

        let daynight: number_ref = [core.save.day_night];
        if (ImGui.sliderInt("##daynight", daynight, 0, 1, daynight[0] === 0 ? "Daytime" : "Nighttime")) {
            core.save.day_night = daynight[0];
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bomber's Code", "", ComboFlags.NoPreview)) {
        let bomber_code: string_ref = [core.save.bomber_code.join("")];
        if (ImGui.inputTextWithHint("##bomber_code", bomber_code[0], bomber_code)) {
            if (/^[1-5]{5}$/.test(bomber_code[0])) {
                core.save.bomber_code = Buffer.from(bomber_code[0].split("").map((x: string) => +x));
            }
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Spider House Mask Order", "", ComboFlags.NoPreview)) {
        let masks: number_ref[] = [
            [core.save.spider_house_mask_order[0]], 
            [core.save.spider_house_mask_order[1]], 
            [core.save.spider_house_mask_order[2]], 
            [core.save.spider_house_mask_order[3]], 
            [core.save.spider_house_mask_order[4]], 
            [core.save.spider_house_mask_order[5]]
        ];
        if (ImGui.combo("##mask_1", masks[0], maskOrder)) {
            core.save.spider_house_mask_order = Buffer.from(masks.map(x => x[0]));
        }
        if (ImGui.combo("##mask_2", masks[1], maskOrder)) {
            core.save.spider_house_mask_order = Buffer.from(masks.map(x => x[0]));
        }
        if (ImGui.combo("##mask_3", masks[2], maskOrder)) {
            core.save.spider_house_mask_order = Buffer.from(masks.map(x => x[0]));
        }
        if (ImGui.combo("##mask_4", masks[3], maskOrder)) {
            core.save.spider_house_mask_order = Buffer.from(masks.map(x => x[0]));
        }
        if (ImGui.combo("##mask_5", masks[4], maskOrder)) {
            core.save.spider_house_mask_order = Buffer.from(masks.map(x => x[0]));
        }
        if (ImGui.combo("##mask_6", masks[5], maskOrder)) {
            core.save.spider_house_mask_order = Buffer.from(masks.map(x => x[0]));
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Lottery", "", ComboFlags.NoPreview)) {
        let lottery_day1: string_ref = [core.save.lottery_numbers_day1.join("")];
        if (ImGui.inputTextWithHint("Day 1", lottery_day1[0], lottery_day1)) {
            if (/^[0-9]{3}$/.test(lottery_day1[0])) {
                core.save.lottery_numbers_day1 = Buffer.from(lottery_day1[0].split("").map((x: string) => +x));
            }
        }
        let lottery_day2: string_ref = [core.save.lottery_numbers_day2.join("")];
        if (ImGui.inputTextWithHint("Day 2", lottery_day2[0], lottery_day2)) {
            if (/^[0-9]{3}$/.test(lottery_day2[0])) {
                core.save.lottery_numbers_day2 = Buffer.from(lottery_day2[0].split("").map((x: string) => +x));
            }
        }
        let lottery_day3: string_ref = [core.save.lottery_numbers_day3.join("")];
        if (ImGui.inputTextWithHint("Day 3", lottery_day3[0], lottery_day3)) {
            if (/^[0-9]{3}$/.test(lottery_day3[0])) {
                core.save.lottery_numbers_day3 = Buffer.from(lottery_day3[0].split("").map((x: string) => +x));
            }
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Bank", "", ComboFlags.NoPreview)) {
        let bank: number_ref = [core.save.bank];
        if (ImGui.sliderInt("##bank", bank, 0, 5499)) {
            core.save.bank = bank[0];
        }
        let bank_str_ref: string_ref = [core.save.bank.toString()];
        if (ImGui.inputTextWithHint("##bank_str_ref", bank_str_ref[0], bank_str_ref)) {
            let tmpBank: number = Number.parseInt(bank_str_ref[0]);
            if (!isNaN(tmpBank) && tmpBank >= 0 && tmpBank <= 5499) {
                core.save.bank = tmpBank;
            }
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Owl Statues", "", ComboFlags.NoPreview)) {
        if (ImGui.checkbox("Clock Town", [core.save.owlStatues.clockTown])) {
            core.save.owlStatues.clockTown = !core.save.owlStatues.clockTown;
        }
        if (ImGui.checkbox("Milk Road", [core.save.owlStatues.milkRoad])) {
            core.save.owlStatues.milkRoad = !core.save.owlStatues.milkRoad;
        }
        if (ImGui.checkbox("Southern Swamp", [core.save.owlStatues.southernSwamp])) {
            core.save.owlStatues.southernSwamp = !core.save.owlStatues.southernSwamp;
        }
        if (ImGui.checkbox("Woodfall", [core.save.owlStatues.woodfall])) {
            core.save.owlStatues.woodfall = !core.save.owlStatues.woodfall;
        }
        if (ImGui.checkbox("Mountain Village", [core.save.owlStatues.mountainVillage])) {
            core.save.owlStatues.mountainVillage = !core.save.owlStatues.mountainVillage;
        }
        if (ImGui.checkbox("Snowhead", [core.save.owlStatues.snowhead])) {
            core.save.owlStatues.snowhead = !core.save.owlStatues.snowhead;
        }
        if (ImGui.checkbox("Great Bay Coast", [core.save.owlStatues.greatBayCoast])) {
            core.save.owlStatues.greatBayCoast = !core.save.owlStatues.greatBayCoast;
        }
        if (ImGui.checkbox("Zora Cape", [core.save.owlStatues.zoraCape])) {
            core.save.owlStatues.zoraCape = !core.save.owlStatues.zoraCape;
        }
        if (ImGui.checkbox("Ikana Canyon", [core.save.owlStatues.ikanaCanyon])) {
            core.save.owlStatues.ikanaCanyon = !core.save.owlStatues.ikanaCanyon;
        }
        if (ImGui.checkbox("Stone Tower", [core.save.owlStatues.stoneTower])) {
            core.save.owlStatues.stoneTower = !core.save.owlStatues.stoneTower;
        }
        if (ImGui.checkbox("Hidden Owl Statue", [core.save.owlStatues.hiddenOwlStatue])) {
            core.save.owlStatues.hiddenOwlStatue = !core.save.owlStatues.hiddenOwlStatue;
        }
        ImGui.endCombo();
    }
    if (ImGui.beginCombo("Gravity", "", ComboFlags.NoPreview)) {
        let gravity: number_ref = [toInt16(emulator.rdramRead16(0x8038256C))];
        if (ImGui.sliderInt("##gravity", gravity, -167, -33, gravityParse(gravity[0]))) {
            emulator.rdramWrite16(0x8038256C, gravity[0]);
            grav.gravity = gravity[0];
        }
        ImGui.endCombo();
    }
}