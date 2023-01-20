const view = {
    init() {
        view.render()
    },
    nav: document.querySelector('.dragon-list'),
    display: document.querySelector('.dragon-pen'),
    listTemplate(types) {

        const typesArray = types.map(type => {
            return `<button class="${type}" onclick="controller.spawnDragon('${type}')">${type}</button>`
        })
        
        return typesArray.join('')
    },
    dragonTemplate(dragons)  { 
            const dragonsArray = dragons.map(dragon => {
                return `<div class="dragon-block">
            <h2>${dragon.type} dragon</h2>
            <button type="button" class="dragon ${dragon.type}" onclick="controller.updateDragon(${dragon.timestamp}, 'increment')">${dragon.icon}</button>
            <p>${dragon.clicks}</p>
            </div>
            `
        })
        return dragonsArray.join('')
    },
    render() {
        view.nav.innerHTML = view.listTemplate(controller.getTypes())
        view.display.innerHTML = view.dragonTemplate(controller.getDragons())
    }
}

view.init()