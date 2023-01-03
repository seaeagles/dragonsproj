let dragon = document.getElementById('button');
let numberOfClicks = 0;

let dragon2 = document.getElementById('button2');
let numberOfClicks2 = 0;


// mutating a global variable in the listener callback //

dragon.addEventListener('click', function() {
    numberOfClicks += 1,
    document.getElementById('counter').innerHTML = numberOfClicks
});

dragon2.addEventListener('click', function() {
    numberOfClicks2 += 1,
    document.getElementById('counter2').innerHTML = numberOfClicks
});

// dragon.addEventListener('click', function() {
//     numberOfClicks += 1,
//     document.getElementById('counter').innerHTML = numberOfClicks,
//     alert(`You've clicked the dragon ${numberOfClicks} time(s)!`)
//     if (numberOfClicks >= 5) {
//         alert(`Now that's ${numberOfClicks} times, wow!`);
//     }
// });
