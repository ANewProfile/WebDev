function movePiece(event){
    console.log(document.getElementById('user-move-start'));
    console.log(document.getElementById('user-move-start').value);

    var startSquare = document.getElementById('user-move-start').value;
    var piece = document.getElementById('user-move-start-piece').value;
    var endSquare = document.getElementById('user-move-end').value;

    console.log(startSquare, piece, endSquare);
    console.log(document.getElementById(startSquare))
    console.log(document.getElementById(endSquare))
    console.log(document.getElementById(startSquare).classList)
    console.log(document.getElementById(endSquare).classList)

    document.getElementById(startSquare).classList.remove(piece)

    if (document.getElementById(endSquare).classList.length == 3){
        document.getElementById(endSquare).classList.remove(document.getElementById(endSquare).classList[2])
    }

    document.getElementById(endSquare).classList.add(piece)
}


document.getElementById('user-move-confirm').addEventListener('click', movePiece)