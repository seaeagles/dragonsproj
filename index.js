let dragon = document.getElementById('button');
let numberOfClicks = 0;

dragon.addEventListener('click', function() {
    numberOfClicks += 1
    console.log(numberOfClicks)
});

