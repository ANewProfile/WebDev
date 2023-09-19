const click_button = document.getElementById('click_button')

function withdraw() {
    console.log('SUCCESS!')
    alert('Withdraw ($5, 000) from Alan L. Tong\'s bank account successful!')
}

click_button.addEventListener('click', withdraw)

