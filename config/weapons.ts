const weapons: Array<Record<`name` | `color`, string> & { guns: string[] }> = [
    {
        name: `9mm`,
        color: `ffae00`,
        guns: [
            `M9`,
            `MP5`,
            `Vector`,
            `G18C`,
            `MAC-10`,
            `UMP9`,
            `M93R`,
            `CZ-3A1`,
            `P30L`,
            `VSS`,
            `Flamethrower`
        ]
    },
    {
        name: `7.62mm`,
        color: `0066ff`,
        guns: [
            `AK-47`,
            `OT-38`,
            `M39 EMR`,
            `DP-28`,
            `Mosin-Nagant`,
            `SCAR-H`,
            `SV-98`,
            `M1 Garand`,
            `PKP Pecheneg`,
            `AN-94`,
            `BAR M1918`,
            `BLR 81`,
            `SVD-63`,
            `M134`,
            `Water Gun`
        ]
    },
    {
        name: `5.56mm`,
        color: `039e00`,
        guns: [
            `FAMAS`,
            `M416`,
            `M249`,
            `QBB-97`,
            `Mk 12 SPR`,
            `M4A1-S`,
            `Scout Elite`,
            `L86A2`
        ]
    },
    {
        name: `12 gauge`,
        color: `ff0000`,
        guns: [
            `M870`,
            `MP220`,
            `Saiga-12`,
            `SPAS-12`,
            `USAS-12`,
            `Super 90`,
            `Lasr Gun`
        ]
    },
    {
        name: `.50 AE`,
        color: `292929`,
        guns: [
            `DEagle 50`
        ]
    },
    {
        name: `.308 Subsonic`,
        color: `465000`,
        guns: [
            `AWM-S`,
            `Mk 20 SSR`
        ]
    },
    {
        name: `Flare`,
        color: `ffa500`,
        guns: [`Flare Gun`]
    },
    {
        name: `.45 ACP`,
        color: ``,
        guns: [
            `Model 94`,
            `Peacemaker`,
            `Vector`,
            `M1911`,
            `M1A1`
        ]
    },
    {
        name: `40mm`,
        color: ``,
        guns: [`M79`]
    },
    {
        name: `Potato Ammo`,
        color: ``,
        guns: [
            `Potato Cannon`,
            `Spud Gun`
        ]
    },
    {
        name: `Heart Ammo`,
        color: ``,
        guns: [`Heart Cannon`]
    },
    {
        name: `Rainbow`,
        color: ``,
        guns: [`Rainbow Blaster`]
    },
    {
        name: `Bugle`,
        color: ``,
        guns: []
    }
];

export default weapons;
