$(function () {
    $(document).ready(function loadToDos() {
        const todos = {... localStorage};
        if (todos) {
            for (const key in todos) {
                addNewToDo(key, todos[key]);
            }
        }
    });
    
    $('.add-item')
        .click(function () {
            let nameEl = $('#name')[0].value;
            let descriptionEl = $('#description')[0].value;
            if (nameEl.length == 0) {
                return false;     
            }
            addNewToDo(nameEl, descriptionEl);
            $('#name')[0].value = '';
            $('#description')[0].value = '';
            saveToStorage(nameEl, descriptionEl);
            return false;
        });

    $('ul').on('click', '.todo_li-remove', function () {
        const deleteKey = $(this).siblings('.todo_li-text')[0].innerText;
        $(this).closest('.todo_li').remove();
        removeFromStorage(deleteKey);
        if ($('ul li').length == 0) {
            $('ul').append('<p>Список дел пуст...</p>');
        }
    });

    $('ul').on('click', '.todo_li-collapse', function () {
        $(this).toggleClass('collapsed');
        if ($(this).hasClass('collapsed')) {
            $(this).siblings('.todo_li-description').slideToggle('normal');
            $(this).closest('.todo_li').animate({ height: '55px' }, 400);
        } else {
            $(this).closest('.todo_li').animate({ height: '135px' }, 300);
            $(this).siblings('.todo_li-description').show(400);
        }
    });

});

function addNewToDo (name, description) {
    let element = $(
        '<li class="todo_li">' +
        '<span class="todo_li-text">' + name + '</span>' +
        '<span class="todo_li-collapse">&#9660;</span>' +
        '<span class="todo_li-remove">&#10006;</span>' + '</br>' + '<hr>' +
        '<span class="todo_li-description">' + description + '</span>' +
        '</li>');
    $('.todo-list p').remove();
    $('.list').append(element);
};

function saveToStorage (key, value) {
    localStorage.setItem(key, value);
};

function removeFromStorage (key) {
    localStorage.removeItem(key);
};