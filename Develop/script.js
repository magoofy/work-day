var container = document.querySelector('#container')
var currentDate = document.querySelector('#currentDay')

// variables
var now = moment();
var date = new Date();
var hour = date.getHours();

// displays current date
function displayDate () {
    currentDate.textContent = now
}

// changes task hours classes
for (i = 9; i < 18; i++) {
    var task = document.getElementById(i.toString());
    if (i < hour) {
        task.classList.add('past');
    } else if (i === hour) {
        task.classList.add('present');
    } else {
        task.classList.add('future');
    }
}

// saves task
$('.saveBtn').click(function () {
    var task = document.getElementById('9').value
    localStorage.setItem('task9', task)
    var task = document.getElementById('10').value
    localStorage.setItem('task10', task)
    var task = document.getElementById('11').value
    localStorage.setItem('task11', task)
    var task = document.getElementById('12').value
    localStorage.setItem('task12', task)
    var task = document.getElementById('13').value
    localStorage.setItem('task13', task)
    var task = document.getElementById('14').value
    localStorage.setItem('task14', task)
    var task = document.getElementById('15').value
    localStorage.setItem('task15', task)
    var task = document.getElementById('16').value
    localStorage.setItem('task16', task)
    var task = document.getElementById('17').value
    localStorage.setItem('task17', task)
});

// gets tasks and displays
function getTask() {
    var savedTask = localStorage.getItem('task9')
    document.getElementById('9').value = savedTask;
    var savedTask = localStorage.getItem('task10')
    document.getElementById('10').value = savedTask;
    var savedTask = localStorage.getItem('task11')
    document.getElementById('11').value = savedTask;
    var savedTask = localStorage.getItem('task12')
    document.getElementById('12').value = savedTask;
    var savedTask = localStorage.getItem('task13')
    document.getElementById('13').value = savedTask;
    var savedTask = localStorage.getItem('task14')
    document.getElementById('14').value = savedTask;
    var savedTask = localStorage.getItem('task15')
    document.getElementById('15').value = savedTask;
    var savedTask = localStorage.getItem('task16')
    document.getElementById('16').value = savedTask;
    var savedTask = localStorage.getItem('task17')
    document.getElementById('17').value = savedTask;
}


displayDate();
getTask();
