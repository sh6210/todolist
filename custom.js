var active = null;

$('#myModal').on('hidden.bs.modal', function (e) {
    active = null;
    console.log(getActive());
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