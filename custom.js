var active = null;

$('#myModal').on('hidden.bs.modal', function (e) {
    active = null;
});

function closeModal() {
    $(".close").trigger('click');
}

$('.new-task').click(function () {
    active = 'NewToDo';
});

$('.in-progress-task').click(function () {
    active = 'InProgress';
});

$('.done-task').click(function () {
    active = 'Done';
});

function getActive() {
    return active;
}

function saveTodo() {
    let todoText = $("#message-text").val();

    if (!todoText) {
        closeModal();
        return false;
    }

    let newLi = document.createElement('li');

    setAttributes(newLi, {
        "id": getRandomId(),
        "draggable": "true",
        "ondragstart": "drag(event)"
    });

    let dummyNmae = 'You';
    let dummyTimer = 'Now';

    let taskContent = `
        <p> ${todoText} </p>

        <br>

        <p>
            <span class = "icon user"></i> ${dummyNmae}</span>
            <span class = "icon timer"></i> ${dummyTimer}</span>
        </p>
    `;

    newLi.innerHTML = taskContent;

    document.getElementById("ToDoUl" + active).appendChild(newLi);

    closeModal();

    $("#message-text").val('');
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    e.target.closest('ul').insertBefore(document.getElementById(data), e.target.closest('li'));
}

function getRandomId() {
    let today = new Date();
    let dateTime = today.getDate() + today.getTime();
    let randomeNumber = Math.ceil(Math.random() * 98765);
    return dateTime * randomeNumber;
}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}