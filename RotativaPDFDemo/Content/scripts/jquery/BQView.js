$(document).ready(function () {
    $('#editSignInLink').live('click', function () {
        $("#signInEdit").show();
        $("#signInView").hide();
    });
    $('#cancelSignInLink').live('click', function () {
        $("#signInEdit").hide();
        $("#signInView").show();
    });
    $("#sendInfo").click(function () {
        if ($('#sendInfo:checked').val() !== undefined) {
            $("#subscription").show();
        } else {
            $("#subscription").hide();
        }
    });


    var linkObj;
    $(function () {
        $(".editLink").button();

        $('#updateDialog').dialog({
            autoOpen: false,
            width: 800,
            resizable: false,
            modal: true,
            //close: function (event, ui) { $(this).dialog('destroy') },
            buttons: {
                //"Update": function () {
                //    $("#update-message").html(''); //make sure there is nothing on the message before we continue
                //    $("#updateForm").submit();
                //},
                "Update": function () {
                    var bValid = true;
                    var form = $('#updateForm');
                    $.ajax({
                        cache: false,
                        url: form.attr('action'),
                        type: form.attr('method'),
                        data: form.serialize(),
                        success: function (data) {
                            var contains = (data.indexOf('Sign In') > -1);
                            if (contains) {
                                location.reload();
                                //window.location.href = window.location.protocol + "//" + window.location.host + "/Account/Logon";
                            }
                            else {
                                if (data.indexOf("True") > -1)
                                {
                                    //location.reload(true);
                                    $("#updateDialog").dialog("close");
                                }
                                else
                                    {
                                    alert('Some error occured. Please try again');
                                    $("#updateDialog").dialog("close");
                                }
                            }
                        }
                    });
                },
                "Cancel": function () {
                    $(this).dialog("close");
                }
            }
        });

        $(document).on('click', '.editLink', function () {
            //change the title of the dialgo
            linkObj = $(this);
            var dialogDiv = $('#updateDialog');
            var viewUrl = linkObj.attr('href');
            var qd = document.getElementById("qid").value
            viewUrl = viewUrl + '?qid=' + qd;
            $.get(viewUrl, function (data) {
                var contains = (data.indexOf('Sign In') > -1);
                if (contains) {
                    location.reload();
                    //window.location.href = window.location.protocol + "//" + window.location.host + "/Account/Logon";
                }
                else {
                    dialogDiv.html(data);
                    //validation
                    var $form = $("#updateForm");
                    // Unbind existing validation
                    $form.unbind();
                    $form.data("validator", null);
                    // Check document for changes
                    $.validator.unobtrusive.parse(document);
                    // Re add validation with changes
                    $form.validate($form.data("unobtrusiveValidation").options);
                    //open dialog
                    dialogDiv.dialog('open');
                }
            });
            return false;
        });
    });


    $(function () {
        $('.GoFilter').live('click', function () {
            var qd1 = document.getElementById("qid").value;
            if (qd1 == 0) {
                alert("Select a question from the tree.");
                return false;
            }
            GetFilterInfo();
            return false;
        });
    });
    function GetFilterInfo() {
        var form = $("#FilterForm");
        var st = form.serialize();
        var url1 = form.attr("action");
        $.ajax({
            cache: false,
            url: url1,
            type: 'POST',
            data: form.serialize(),
            success: function (data) {
                var contains = (data.indexOf('Sign In') > -1);
                if (contains) {
                    location.reload();
                    //window.location.href = window.location.protocol + "//" + window.location.host + "/Account/Logon";
                }
                else {
                    $("#FilterResult").html(data);
                }


            }
        });
    }


});
//$(function updateSuccess() {
//    alert("Hi");
//    if ($("#update-message").html() == "True") {
//        //now we can close the dialog
//        $('#updateDialog').dialog('close');
//        //twitter type notification
//        $('#commonMessage').html("Update Complete");
//        $('#commonMessage').delay(400).slideDown(400).delay(3000).slideUp(400);
//    }
//    else {
//        $("#update-message").show();
//    }
//});
function updateSuccess(data) {
    if (data == "True") {
        $('#updateDialog').dialog('close');
    }
    else {
        alert(data);
    }

}
