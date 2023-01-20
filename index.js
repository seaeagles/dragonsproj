// const dragon = document.querySelector('.fire');
// let numberOfClicks = 0;

// const dragon2 = document.querySelector('.ice');
// let numberOfClicks2 = 0;

// const getElement = string => document.querySelector(`#${type}`)

// const Model = {

//     dragonList: [ 
//         'fire',
//         'ice',
//         'gold',
//         'ghost',
//         'chaos'
//     ],
// }

//    dragonTypes = 
//     [
//         {id: 0, type: 'fire', clicks: 0, img: '🐉'},
//         {id: 1, type: 'ice', clicks: 0, img: '🐉'},
//         {id: 2, type: 'gold', clicks: 0, img: '🐉'},
//         {id: 3, type: 'ghost', clicks: 0, img: '🐉'},
//         {id: 4, type: 'chaos', clicks: 0, img: '🐉'}
//     ]

const nav = document.querySelector('.navbar')
const display = document.querySelector('.dragon-pen')

// const dragonTypes = ['fire', 'ice', 'gold', 'ghost', 'chaos']
// nav.innerHTML = dragonTypes.map(type => {
//     return `<button onclick="spawnDragon('${type}')">${type}</button>`
// }).join('')

const dragons = []

function spawnDragon(type) {
    const dragon = dragonFactory(type)
    dragons.push(dragon)
    display.innerHTML = dragonTemplate(dragons)
}

function increment(timestamp) {
    const target = dragons.find(dragon => dragon.timestamp === timestamp)
    target.clicks += 1
    rerender()
}

function rerender() {
    display.innerHTML = dragonTemplate(dragons)
}

// function dragonFactory(type) {
//     return {
// // we want an id, icon, type, color (class that points to color), number of clicks
//      type: `${type}`,
//      clicks: 0,
//      cssClass: '.${type}',
//      icon: '🐉',
//     //  addClick: function(numberOfClicks) {
//     //         this.clicks += numberOfClicks;
//     //         document.querySelector(this.output).innerText = this.clicks;
//     //     },
//         // view: function() {
//         //     document.querySelector('.dragon-block').innerHTML = "";
//         //     document.querySelector('.dragon-block').innerHTML += 
//         //     `
//         // }
//     }
// }

// let iceDragon = dragonFactory('ice');
// let fireDragon = dragonFactory('fire');
// let goldDragon = dragonFactory('gold');
// let ghostDragon = dragonFactory('ghost');
// let blackDragon = dragonFactory('black');

// function dragonTemplate(dragontypes)  { 
//     return dragons.map(dragon => {
//     return (
//     `<div class="dragon-block">
//     <h2>${dragon.type} dragon</h2>
//     <button type="button" id="${type}" class="dragon ${type}" onclick="increment(${dragon.timestamp})">🐉</button>
//     <p><output>${this.clicks}</output></p>
//     </div>
//     `
//     )
// })};

// function templateData (data) {
//     console.log('new data', data)
//     // loop through that data
//     const list = data.map(story => {
//       return `
//         <li class='item-id' id="${story.id}">
//           <a href="${story.url}">
//             ${story.title}
//           </a> 
//           - <span>${story.by}</span>
//         </li>
//         `
//     }).join('')
//     // create a string of HTML template string literals
//     const ul = `<ul class='ids'>${list}</ul>`
//     return ul
//   }
  
//   function renderIntoDomNode(string, parent) {
//     parent.innerHTML = string
//   }


// mutating a global variable in the listener callback //

// dragon.addEventListener('click', function() {
//     numberOfClicks += 1,
//     document.getElementById('counter').innerHTML = numberOfClicks
// });

// dragon2.addEventListener('click', function() {
//     numberOfClicks2 += 1,
//     document.getElementById('counter2').innerHTML = numberOfClicks2
// });

// dragon.addEventListener('click', function() {
//     numberOfClicks += 1,
//     document.getElementById('counter').innerHTML = numberOfClicks,
//     alert(`You've clicked the dragon ${numberOfClicks} time(s)!`)
//     if (numberOfClicks >= 5) {
//         alert(`Now that's ${numberOfClicks} times, wow!`);
//     }
// });
