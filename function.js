function addIt(event) {
    event.preventDefault();
    const table = document.getElementById('table');

    let enteredTask = document.getElementById('task').value;
    let enteredPriority = document.getElementById('priority').value;
    
    let newRow = table.insertRow();
    let newtask = newRow.insertCell(0);
    let newpriority = newRow.insertCell(1);

    newtask.textContent = enteredTask;
    newpriority.textContent = enteredPriority;
}