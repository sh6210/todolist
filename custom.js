var active = null;

// bootstraps modal hide callback function
$('#myModal').on('hidden.bs.modal', function (e) {
    active = null;
});

// triggered new task btn pressed
$('.new-task').click(function () {
    active = 'NewToDo';
});

// triggered in progress task btn pressed
$('.in-progress-task').click(function () {
    active = 'InProgress';
});

// triggered don task btn pressed
$('.done-task').click(function () {
    active = 'Done';
});

// getting current active status;
function getActive() {
    return active;
}

// triggered when save task submitted to enlist
function saveTodo() {
    let todoText = document.querySelector("#message-text").value;

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

    document.querySelector("#message-text").value = '';
}

// triggered when drag
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

// triggered to see if dropping permitted
function allowDrop(e) {
    e.preventDefault();
}

// triggered when dropped
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    e.target.closest('ul').insertBefore(document.getElementById(data), e.target.closest('li'));
}

// generate and return random ID
function getRandomId() {
    let today = new Date();
    let dateTime = today.getDate() + today.getTime();
    let randomeNumber = Math.ceil(Math.random() * 98765);
    return dateTime * randomeNumber;
}

// set attributes for given element
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// closing the bootstrap modal
function closeModal() {
    $(".close").trigger('click');
}