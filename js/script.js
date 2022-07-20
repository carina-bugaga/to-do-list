$(function () {
    $('.add-item')
        .click(function () {
            let nameEl = $('#name')[0].value;
            let descriptionEl = $('#description')[0].value;

            let newElement = $(
                '<li class="todo_li">' +
                '<span class="todo_li-text">' + nameEl + '</span>' +
                '<span class="todo_li-collapse">&#11167;</span>' +
                '<span class="todo_li-remove">&#10006;</span>' + '</br>' + '<hr>' +
                '<span class="todo_li-description">' + descriptionEl + '</span>' +
                '</li>');
            $('.todo-list p').remove();
            $('.list').append(newElement);
            $('#name')[0].value = '';
            $('#description')[0].value = '';
            return false;
        });

    $('ul').on('click', '.todo_li-remove', function () {
        $(this).closest('.todo_li').remove();
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