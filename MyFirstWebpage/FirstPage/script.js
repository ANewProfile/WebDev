function alertData(){
    var name = document.getElementById('form-1-name').value;
    var age = document.getElementById('form-1-age').value;
    var adress = document.getElementById('form-1-adress').value;
    var social = document.getElementById('form-1-social-security-number').value;

    alert('Name: ' + name + '\nAge: ' + age + '\nAdress: ' + adress + '\nSocial Security Number: ' + social)
    alert('Your private information has been breached!')
}

document.getElementById('submit-button-1').addEventListener('click', alertData)
