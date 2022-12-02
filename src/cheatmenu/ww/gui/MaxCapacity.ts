import {InventoryItem} from "WindWaker/API/WWAPI";

export function wallet(size: number): number {
    switch (size) {
        case 0:
            return 200;
        case 1:
            return 1000;
        case 2:
            return 5000;
        default:
            return 999;
    }
}