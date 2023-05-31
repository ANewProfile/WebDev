function searchSubmit(){
    var searched = document.getElementById('search-bar').value;
    if (searched == '' || searched == null){
        alert('Please search something!')
    }
    else{
        alert('You searched: \'' + searched + '\'')
    }
}

// document.getElementById("search-button").addEventListener('submit', searchSubmit())