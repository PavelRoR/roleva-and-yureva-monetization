$(document).ready(function() {
/* Работа формы */
$(function () {
    var check = $('.check', this),
        email = $('.mail', this),
        phone = $('.phone', this),
        message = $('.alert_message', this);
    $(".form_newsletter").on("submit", function () {
        var check = $('.check', this),
            message = $('.alert_message', this),
            reNone = /.+/,
            rePh = /^[+]?\d*\.?\d*$/,
            email = $('.mail', this),
            phone = $('.phone', this),
            button = $('.button_mail', this);
        if (!email.val().match(reNone)) {
            email.css('borderColor', 'red');
            message.text('Введите email').slideDown(500);
            return false;
        }
        if (!phone.val().match(rePh)) {
            email.css('borderColor', 'red');
            message.text('Только цифры').slideDown(500);
            phone.val('');
            return false;
        }

        if (!check.prop("checked")) {
            check.next().css("color", "red");
            check.next().children().css("color", "red");
            message.text('Подтвердите соглашение').slideDown(500);
            return false;
        }
        $(".email-block", this).addClass("hide");
        $(".phone-block", this).removeClass("hide");
        $(".infront", this).addClass("hide");
        $(".infront_submit", this).addClass("hide");
        $(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + email.val() + "<br>Бонус уже у Вас на почте").removeClass("hide");
        $(".phone_title", this).html("Если Вы хотите, чтобы мы напомнили Вам о начале трансляции, <br>введите свой номер телефона").removeClass("hide");
        if (email.val() && phone.val() && check) {
            window.location = 'https://mastervision.su/abramova-metaphysics-cure-key/bonus/';
            $(".phone_title", this).html('Ваш номер ' + phone.val() + ' зарегистрирован!');
            button.text('Отправляем...');
        }
    });
    email.click(function () {
        email.css("borderColor", "#e8e8e8");
        message.slideUp(500);
    });
    phone.click(function () {
        phone.css("borderColor", "#e8e8e8");
        message.slideUp(500);
    });
    check.click(function () {
        check.next().css("color", "#000");
        check.next().children().css("color", "#000");
        message.slideUp(500);
    });
});


/*Конец документа*/
});