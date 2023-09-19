const click_button = document.getElementById('click_button')

function withdraw() {
    console.log('SUCCESS!')
    alert('Withdraw from Alan L. Tong\'s bank account ($5, 000) successful!')
}

click_button.addEventListener('click', withdraw)

