var number = 19;
var string = 'Hello World';
var isRunning = true;
var groceries = ['Milk', 'Eggs', 'Cheese'];

// This is a comment

// if (number == 10){
//     console.log('Yeah, buddy!')
// } else{
//     console.log('Nope!')
// }
// document.getElementById('box').innerHTML = number + 5;

for (var i = 0; i < 10; i++){
    console.log(i)
}

function listGroceries(){
    for (var i = 0; i < groceries.length; i++) {
        console.log(groceries[i])
    }
}

listGroceries()

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked!')
})