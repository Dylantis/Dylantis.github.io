const form = document.querySelector('input');
const btn = document.querySelector('button')
const card = document.querySelector('#card')
const front = document.querySelector('#front')
const tryAgain = document.querySelector('label')


btn.onclick = function () {
    // make card flip
    card.classList.toggle('flippy')
    document.querySelector('label').innerText = "What Is The Answer?"
    setTimeout(function () {
        card.classList.remove('flippy');
    }, 1900);
    btn.classList.add('disabled')
    // radom single digit generator
    function addition(x, y) {
        x = Math.floor(Math.random() * 9) + 1;
        y = Math.floor(Math.random() * 9) + 1;

        // add enter keypress listener
        form.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {

                // make string into integer
                // check for correct answer
                // add text and color
                if (parseInt(form.value) !== x + y) {
                    document.querySelector('label').innerText = "Try Again"
                    tryAgain.classList.add('text-danger')
                } else {
                    document.querySelector('label').innerText = "Correct!"
                    tryAgain.classList.remove('text-danger')
                    tryAgain.classList.add('text-success')
                    btn.classList.remove('disabled')
                }
            }
        })

        // make random digit generator switch with card flip
        setTimeout(function () {
            document.querySelector('.first').innerHTML = x;
            document.querySelector('.plus').innerHTML = "+";
            document.querySelector('.second').innerHTML = y;
        }, 500)

        // make button appear if answer is correct
        // remove color of text back to black after correct/incorrect answers
        // remove text from submission box 
        document.querySelector('.submit').innerHTML = "Next"
        tryAgain.classList.remove('text-success')
        form.value = ''
    }
    return addition();
}













