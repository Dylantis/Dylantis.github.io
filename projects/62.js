const h1 = document.querySelector('h1')
const input = document.querySelector('input');
input.addEventListener('input', function (e) {

    if (input.value >= 0) {
        h1.innerText = "Enter Your Username"
    } else {
        h1.innerText = `${input.value}`;
    }
})