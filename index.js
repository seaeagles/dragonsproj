let dragon = document.getElementById('button');
let numberOfClicks = 0;

dragon.addEventListener('click', function() {
    numberOfClicks += 1,
    document.getElementById('counter').innerHTML = numberOfClicks,
    alert(`You've clicked the dragon ${numberOfClicks} time(s)!`)
    if (numberOfClicks >= 5) {
        alert(`Now that's ${numberOfClicks} times, wow!`);
    }
});
