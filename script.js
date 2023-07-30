const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')


function addTask(){
    if (inputBox.value === ''){
        alert('You havent write smht')
    }
    else {
        let newTask = inputBox.value;
        let li = document.createElement('li')
        li.innerHTML = newTask;
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}


function executeTask(e) {
    if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
    else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
}

listContainer.addEventListener("click", executeTask, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask();