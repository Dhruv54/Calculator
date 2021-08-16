let display = document.getElementById('display');
let screenValue = '';
display.value = 0;

buttons = document.querySelectorAll('button');

for (item of buttons) {


    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "C") {
            screenValue = "0";
            display.value = screenValue;
            screenValue = "";
        } else if (buttonText == "=") {
            display.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            display.value = screenValue;
        }

    })
}




























//