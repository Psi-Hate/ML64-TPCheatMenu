import {InventoryItem, Wallet} from "TwilightPrincess/API/TPAPI";

export function wallet(size: Wallet): number {
    switch (size) {
        case Wallet.Small:
            return 300;
        case Wallet.Big:
            return 600;
        case Wallet.Giant:
            return 1000;
        default:
            return 999;
    }
}

export function bombBag(bomb: InventoryItem, isDoubled: boolean): number {
    switch (bomb) {
        case InventoryItem.bombNormal:
            if(isDoubled) return 60;
            else return 30;
        case InventoryItem.bombWater:
            if(isDoubled) return 30;
            return 15;
        case InventoryItem.bombBug:
        default:
            if(isDoubled) return 20;
            return 10;
    }
}