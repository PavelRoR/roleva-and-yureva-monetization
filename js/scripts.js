$(document).ready(function () {
    $(function () {
        $('.lazy').lazy();
    });
    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.mail', this),
            message = $('.alert_message', this);
        $(".form_newsletter").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                email = $('.mail', this),
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                email.css('borderColor', 'red');
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css("color", "red");
                check.next().children().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                button.text('Отправляем...');
            }
        });
        email.click(function () {
            email.css("borderColor", "#e8e8e8");
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "#000");
            check.next().children().css("color", "#000");
            message.slideUp(500);
        });
    });

    $(function () {
        $('.video_wrapper img').click(function () {
            var i = $(this).parent().attr('data-youtube');
            $(this).parent().html('<iframe src="https://youtube.com/embed/' + i + '?rel=0&autoplay=1" alliwfullscreen></iframe>')
        });
    });
    /* Старые браузеры*/
    var yaBrowserUpdater = new ya.browserUpdater.init({
        "lang": "ru",
        "browsers": {
            "yabrowser": "15.10",
            "chrome": "52",
            "ie": "10",
            "opera": "40",
            "safari": "8",
            "fx": "47",
            "iron": "35",
            "flock": "Infinity",
            "palemoon": "25",
            "camino": "Infinity",
            "maxthon": "4.5",
            "seamonkey": "2.3",
            "theme": "blue"
        }
    });
    /*Конец документа*/
});