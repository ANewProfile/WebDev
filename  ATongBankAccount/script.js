const click_button = document.getElementById('click_button')
const balance = Math.floor(Math.random() * 5000)

function withdraw() {
    console.log('SUCCESS!')
    if (balance >= 5000){
        alert('Withdraw ($5, 000) from Alan L. Tong\'s bank account successful!')
        balance -= 5000
    }
    else if (balance < 5000) {
        if (balance > 0) {
            alert(`Widthdraw (\$${balance}) from Alan L. Tong\'s bank account successful!`)
            balance = 0
        }
    }
    else {
        alert('Withdraw failed. Alan L. Tong does not have enough money! He is broke!')
    }
}

click_button.addEventListener('click', withdraw)

