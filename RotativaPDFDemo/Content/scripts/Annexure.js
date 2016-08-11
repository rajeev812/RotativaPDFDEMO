$(window).scroll(function () {
    $('#header').css({
        'left': $(this).scrollLeft() + 15
    });
});
function DisableButtons() {
    var inputs = document.getElementsByTagName("INPUT");
    for (var i in inputs) {
        if (inputs[i].type == "button" || inputs[i].type == "submit") {
            inputs[i].disabled = true;
        }
    }
}
function EnableButtons() {
    var inputs = document.getElementsByTagName("INPUT");
    for (var i in inputs) {
        if (inputs[i].type == "button" || inputs[i].type == "submit") {
            inputs[i].removeAttribute("disabled");
        }
    }
}
function OnBegin1() {
    $("#divmsg").html("Saving Record...");
}
function OnFailure(data) {
    // alert("hello");
    alert(data);
}
function OnSuccess1(data) {
    if (data.result) {
        $("#divmsg").html("Record saved successfully !");
        setTimeout(function () { location.reload(); }, 500);
    }
    else if (data.hasOwnProperty('result') && data.result === false) {
        var $form1 = $('#form0');
        $form1.data('submitted', false);
        $("#divmsg").html('');
        if (data.hasOwnProperty('allErrors')) {
            var errorhtml = "<ul>";
            $.each(data.allErrors, function (i, val) {
                errorhtml = errorhtml + "<li>" + val.ErrorMessage + "</li>";
            });
            errorhtml = errorhtml + "</ul>";
            $("#servererror").html(errorhtml);
            setTimeout(CheckHeightChange, 150);
        }
        else {
            alert("There is some error in saving. Please try again");
        }
    }

    else {
        var contains = (data.indexOf('Sign In') > -1);
        if (contains) {
            location.reload();
        }
    }
}
function clear_form_elements(div_name) {
    jQuery("#" + div_name).find(':input').each(function () {
        switch (this.type) {
            case 'password':
            case 'text':
            case 'textarea':
            case 'file':
            case 'select-one':
            case 'select-multiple':
                jQuery(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
        $('#CurrentDetails_SlNo').val(0);
    });
    if ($("#fixed-div :input").prop("disabled", true)) {
        $(".Btn").addClass("BtnDisabled");
        $(".Btn").removeClass("Btn");
    }

}
function CheckHeightChange() {
    var heightOfFixedDiv = $("#fixed-div").height();
    var heightChanged = heightOfFixedDiv - 45;
    $("#gridview1").css({
        "width": "100%",
        //"margin-left": "-5px"
    });
    $("html, body").animate({ scrollTop: 0 }, "slow");
};
var inEditMode = false;
var type = '';
var Modeltyp = '';
var IsAudit = "false";
var IsEdit = "false";
var UsrType = 0;
$(document).ready(function () {
    //var heightOfFixedDiv=$("#fixed-div").height();
    //var heightChanged = heightOfFixedDiv - 45;
    //$("#gridview1").css({
    //    "width" :"95%",
    //    "margin-left":"-5px"
    //});

    type = $('#Master_Type').val();
    Modeltyp = $('#ModelType').val();
    IsAudit = (($('#IsAuditing').val() == "True") ? true : false);
    IsEdit = (($('#IsEditable').val() == "True") ? true : false);
    UsrType = $('#UserType').val();
    if ((!IsAudit && !IsEdit) || UsrType == 8) {
        $(".AddNewBtn").addClass("AddNewBtnDisabled");
        $(".AddNewBtn").removeClass("AddNewBtn");

    }
    else if ((!IsAudit && IsEdit) && UsrType == 9) {
        $(".AddNewBtn").addClass("AddNewBtnDisabled");
        $(".AddNewBtn").removeClass("AddNewBtn")


    }

    $('textarea').each(function () {
        $(this).popBox({ width: 500, height: 400, newlineString: '\n' });
    });

    $("body").on("keydown", ".Datepick", function (event) {
        if (event.keyCode == 46) {
            $("#CurrentDetail_DateOfNPA").val("");
        }
        else if (event.keyCode != 9)
            event.preventDefault();
    });
    $(".Datepick").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        yearRange: "-50:+20"
    });// end of date picker
    jQuery.fn.preventDoubleSubmission = function () {
        $(this).on('submit', function (e) {
            var $form = $(this);
            if ($form.data('submitted') === true) {
                return false;
                e.preventDefault();
            } else if ($form.valid()) {
                $form.data('submitted', true);
            }
        });
        return this;
    };
    $('#form0').preventDoubleSubmission();

    clear_form_elements("fixed-div");
    $("#fixed-div :input").prop("disabled", true);
    $("#fixed-div :input[type=text], textarea").css({
        "background-color": "#B8B3B0"
    });// end of document load event
    $(function () {
        $("tbody tr").click(function () {
            var selected = $(this).hasClass("highlight");
            if (!selected && !inEditMode) {
                $("tbody tr").removeClass("highlight");
                $(this).addClass("highlight");
            }

        });
    });
    $(".BackNewBtn").click(function () {
        if (inEditMode) {
            alert("Please Save or Cancel previous record!");
            return false;
        }
    });
    $(".AddNewBtn").click(function () {
        if (!inEditMode) {
            $("#fixed-div :input").prop("disabled", false);
            $("#fixed-div :input[type=text], textarea,select").css({
                "background-color": "#fff",
                "cursor": "auto"
            });
            inEditMode = true;
        }
        else
            alert("Please Save or Cancel previous record!");

        if ($("#fixed-div :input").prop("disabled", false)) {
            $(".BtnDisabled").addClass("Btn");
            $(".BtnDisabled").removeClass("BtnDisabled");
        }
    });

    // save method on ajax call
    $("#btnSave").live("click", function (e) {
        $("#servererror").html('');
        setTimeout(CheckHeightChange, 150);
    });
    $("#btnCancel").live("click", function (e) {
        var x = confirm("Are you sure to cancel ?");
        if (x) {
            $("#divmsg").html('');
            $("#servererror").html('');
            // clear all the  text fields
            clear_form_elements("fixed-div");
            $(this).attr('placeholder');
            //clear validation summary error
            $("#fixed-div").find("[data-valmsg-summary=true]")
       .removeClass("validation-summary-errors")
       .addClass("validation-summary-valid")
       .find("ul").empty();
            $("#fixed-div :input,select").prop("disabled", true);
            $("#fixed-div :input[type=text], textarea").css({
                "background-color": "#B8B3B0",
                "cursor": "not-allowed"
            });
            $(this).attr('placeholder');
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
                        $(this).find('[placeholder]').each(function () {
                            if ($(this).val() == $(this).attr("placeholder")) {
                                $(this).val("");
                            }
                        });
                    });
                }
            });
            $("select").css({
                "background-color": "#ffffff"
            });
            inEditMode = false;
            setTimeout(CheckHeightChange, 150)
        }
        else {
            return false;
        }
    });

});