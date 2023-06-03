const possible = [
    'Stellar',
    'Artistic',
    'Playful',
    'Funny',
    'Trendy',
    'Curious',
    'Hungry',
    'Doodley'
]
var button = document.getElementById('under-search-feeling');
button.onmouseover = toRandom;
button.onmouseout = toLucky;

function toRandom(){
    let choice = randomFromList(possible);
    button.innerHTML = `I'm Feeling ${choice}`;
}

function toLucky(){
    if (button.innerHTML != 'I\'m Feeling Lucky'){
        button.innerHTML = 'I\'m Feeling Lucky';
    } else {
        // pass
    }
}

function randomFromList(list){
    let i = Math.ceil(Math.random() * (list.length - 1));
    console.log(i)
    return list[i];
}