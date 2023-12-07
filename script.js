// script.js
let selectedOperation;

function selectOperation(operation) {
    document.getElementById('operationTitle').innerText = `${operation.charAt(0).toUpperCase() + operation.slice(1)} Operation`;
    document.getElementById('operationInput').style.display = 'block';
    selectedOperation = operation;
}

function performOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let apiUrl;

        switch (selectedOperation) {
            case 'add':
                apiUrl = `https://staticcontainerpb--ehx4n2n.livelyforest-cdb3d6e1.eastus2.azurecontainerapps.io/add`;
                break;
            case 'subtract':
                apiUrl = `http://localhost:3002/subtract`;
                break;
            case 'divide':
                apiUrl = `http://localhost:3003/divide`;
                break;
            default:
                console.error('Invalid operation');
                return;
        }

        fetch(apiUrl, {
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
