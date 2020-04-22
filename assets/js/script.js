(function ($) {

    $(window).on('scroll', function () {
        $('.header').css({ 'box-shadow': '0 3px 5px 0 rgba(0,0,0,.08)' })
    })

    $('.btn-mcc').on('click', function () {
        let operand = $(this).text()
        let number1 = Number($('.number-1').val())
        let number2 = Number($('.number-2').val())
        let result = 0
        switch (operand) {
            case '+':
                result = number1 + number2
                break;
            case '-':
                result = number1 - number2
                break;
            case '/':
                result = number1 / number2
                break;
            case '*':
                result = number1 * number2
                break;
        }
        $('.result').val(result)
    })

})(jQuery)