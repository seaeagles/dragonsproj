const dragon = document.querySelector('.fire');
let numberOfClicks = 0;

const dragon2 = document.querySelector('.ice');
let numberOfClicks2 = 0;


// mutating a global variable in the listener callback //

dragon.addEventListener('click', function() {
    numberOfClicks += 1,
    document.getElementById('counter').innerHTML = numberOfClicks
});

dragon2.addEventListener('click', function() {
    numberOfClicks2 += 1,
    document.getElementById('counter2').innerHTML = numberOfClicks2
});

// dragon.addEventListener('click', function() {
//     numberOfClicks += 1,
//     document.getElementById('counter').innerHTML = numberOfClicks,
//     alert(`You've clicked the dragon ${numberOfClicks} time(s)!`)
//     if (numberOfClicks >= 5) {
//         alert(`Now that's ${numberOfClicks} times, wow!`);
//     }
// });
