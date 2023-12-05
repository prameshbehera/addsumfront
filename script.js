// script.js
let selectedOperation;

function selectOperation(operation) {
    selectedOperation = operation;
    document.getElementById('operationTitle').innerText = `${operation.charAt(0).toUpperCase() + operation.slice(1)} Operation`;
    document.getElementById('operationInput').style.display = 'block';
}

function performOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        fetch(`http://localhost:${selectedOperation === 'add' ? 3001 : 3002}/${selectedOperation}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2 }),
        })
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('operationResult');
            resultElement.innerText = `Result: ${data.result}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter valid numbers.');
    }
}
