
document.querySelector('.emptyArea').innerHTML = '<input type="text" id="display" readonly>';

const display = document.getElementById('display');

let currentNumber = ''; 
let firstNumber = ''; 
let operator = ''; 

display.style.width = '93%';
display.style.height = '85%';
display.style.backgroundColor = 'rgb(31, 26, 26)';
display.style.color = 'white';
display.style.fontSize = '40px';
display.style.textAlign = 'right';
display.style.padding = '10px';
display.style.border = 'none';
display.style.borderRadius = '10px';

document.querySelectorAll('.cell').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.querySelector('p') ? button.querySelector('p').innerText : 'Back';

        if (value >= '0' && value <= '9') { 
            currentNumber = currentNumber + value; 
        } else if (value === '.') { 
            if (!currentNumber.includes('.')) { 
                currentNumber = currentNumber + '.';
            }
        } else if (value === '+' || value === '-' || value === 'x' || value === '/') { 
            if (currentNumber !== '') { 
                firstNumber = currentNumber;
                currentNumber = '';
                operator = value;
            }
        } else if (value === '=') { 
            if (firstNumber !== '' && currentNumber !== '' && operator !== '') {
                calculate();
            }
        } else if (value === 'C') { 
            currentNumber = ''; 
            firstNumber = '';
            operator = '';
        }

        updateDisplay();
    });
});

