import { AmmoUpgrade, Magic, MagicQuantities, Wallet } from 'MajorasMask/API/MMAPI';

export function wallet(size: Wallet): number {
    switch (size) {
        case Wallet.CHILD: {
            return 99
        }
        case Wallet.ADULT: {
            return 200;
        }
        case Wallet.GIANT:
        default: {
            return 500;
        }
    }
}

export function quiver(size: AmmoUpgrade): number {
    switch (size) {
        case AmmoUpgrade.NONE: {
            return 0;
        }
        case AmmoUpgrade.BASE: {
            return 30;
        }
        case AmmoUpgrade.UPGRADED: {
            return 40;
        }
        case AmmoUpgrade.MAX:
        default: {
            return 50;
        }
    }
}

export function bombBag(size: AmmoUpgrade): number {
    switch (size) {
        case AmmoUpgrade.NONE: {
            return 0;
        }
        case AmmoUpgrade.BASE: {
            return 20;
        }
        case AmmoUpgrade.UPGRADED: {
            return 30;
        }
        case AmmoUpgrade.MAX:
        default: {
            return 40;
        }
    }
}

export function magic(size: Magic): MagicQuantities {
    switch (size) {
        case Magic.NONE: {
            return MagicQuantities.NONE;
        }
        case Magic.NORMAL: {
            return MagicQuantities.NORMAL;
        }
        default:
        case Magic.EXTENDED: {
            return MagicQuantities.EXTENDED;
        }
    }
}