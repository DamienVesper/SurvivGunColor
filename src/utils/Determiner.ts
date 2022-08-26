import config from '../../config/config';

const determine = (name: string | null): number | null => {
    if (name === null) return null;

    let ammoColor: number | null = null;

    for (const ammo of config.weapons) {
        if (ammo.items.includes(name)) {
            ammoColor = ammo.color;
            break;
        }
    }

    return ammoColor;
};

export default determine;
