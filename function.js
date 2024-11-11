const minusButton = document.createElement('button');
function addIt(event) {
    event.preventDefault();
    const table = document.getElementById('table');

    let enteredTask = document.getElementById('task').value;
    let enteredPriority = document.getElementById('priority').value;
    
    let newRow = table.insertRow();
    let newtask = newRow.insertCell(0);
    let newpriority = newRow.insertCell(1);
    let buttonPlace = newRow.insertCell(2);
    const minusButton = document.createElement('button');
    minusButton.type = 'button';
    minusButton.textContent = '-';
    minusButton.id = 'minus';

    newRow.appendChild(minusButton);

    newtask.textContent = enteredTask;
    newpriority.textContent = enteredPriority;
    
}

minusButton.addEventListener('click', function() {
    
})
