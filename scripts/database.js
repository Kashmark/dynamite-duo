const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ]
}

const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Soldierboy",
            power: "Super Strength"
        },
        {
            id: 2,
            name: "Homelander",
            power: "Superman Stuff"
        }    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
