     (function ($) {
         $.support.placeholder = ('placeholder' in document.createElement('input'));
     })(jQuery);


//fix for IE7 and IE8
$(function () {
    if (!$.support.placeholder) {
        $("[placeholder]").focus(function () {
            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function () {
            if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function () {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
    }
});

var value;
function ConvertStringToFloat(value) {
    value = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    return value;
}

var Section;
function GetNatureOfPaymentFromSection(Section)
{
    var split = Section.split('-');

    var NatureOfPayment = split[split.length - 1].substring(1);
    if (split[0] == "194E ") {
        NatureOfPayment = split[1].substring(1) + "-" + split[2];
    }
    return NatureOfPayment;
}
