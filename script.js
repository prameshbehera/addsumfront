// script.js
function performOperation(operation) {
    const num1 = parseFloat(document.getElementById(`${operation}Num1`).value);
    const num2 = parseFloat(document.getElementById(`${operation}Num2`).value);

    if (!isNaN(num1) && !isNaN(num2)) {
        fetch(`http://localhost:3000/${operation}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1, num2 }),
        })
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById(`${operation}Result`);
            resultElement.innerText = `Result: ${data.result}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter valid numbers.');
    }
}
