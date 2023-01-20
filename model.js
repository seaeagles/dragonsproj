const model = {
    dragons: [],
    dragonTypes: 
        ['fire', 'ice', 'gold', 'ghost', 'chaos'],
        //     {id: 0, type: 'fire', clicks: 0, img: '🐉'},
        //     {id: 1, type: 'ice', clicks: 0, img: '🐉'},
        //     {id: 2, type: 'gold', clicks: 0, img: '🐉'},
        //     {id: 3, type: 'ghost', clicks: 0, img: '🐉'},
        //     {id: 4, type: 'chaos', clicks: 0, img: '🐉'}
        // ],
    dragonFactory(type) {
        return {
    // an id, icon, type, color (class that points to color), number of clicks
         type: type,
         clicks: 0,
         cssClass: `.${type}`,
         icon: '🐉',
         timestamp: Date.now()
      }
    },
    addDragon(type) {
        console.log(type)
        model.dragons.push(model.dragonFactory(type))
    },
    increment(timestamp) {
        const target = model.dragons.find(dragon => dragon.timestamp === timestamp)
        target.clicks += 1
    }
}
