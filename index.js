let dragon = document.getElementById('button');
let numberOfClicks = 0;

dragon.addEventListener('click', function() {
    numberOfClicks += 1,
    document.getElementById('counter').innerHTML = numberOfClicks,
    alert(`${numberOfClicks}`)
});
