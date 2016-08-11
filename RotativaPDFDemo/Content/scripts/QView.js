$(document).ready(function () {
    $(document).on('click', '#collapseAuditorReply', function () {
        $("#default").hide();
        $("#collapseReply").hide();
        $("#expandReply").show();
    });
    $(document).on('click', '#expandAuditorReply', function () {
        $("#default").show();
        $("#default1").hide();
        $("#default2").hide();
        $("#default3").hide();
        $("#default4").hide();
        $("#default5").hide();
    });
    $(document).on('click', '#collapseReply1', function () {
        $("#default1").hide();
        $("#collapseReply1").hide();
        $("#expandReply1").show();
    });
    $(document).on('click', '#expandReply1', function () {
        $("#default1").show();
        $("#default").hide();
        $("#default2").hide();
        $("#default3").hide();
        $("#default4").hide();
        $("#default5").hide();
    });
    $(document).on('click', '#collapseReply2', function () {
        $("#default2").hide();
        $("#collapseReply2").hide();
        $("#expandReply2").show();
    });
    $(document).on('click', '#expandReply2', function () {
        $("#default2").show();
        $("#default").hide();
        $("#default1").hide();
        $("#default3").hide();
        $("#default4").hide();
        $("#default5").hide();
    });
    $(document).on('click', '#collapseReply3', function () {
        $("#default3").hide();
        $("#collapseReply3").hide();
        $("#expandReply3").show();
    });
    $(document).on('click', '#expandReply3', function () {
        $("#default3").show();
        $("#default").hide();
        $("#default2").hide();
        $("#default1").hide();
        $("#default4").hide();
        $("#default5").hide();
    });
    $(document).on('click', '#collapseReply4', function () {
        $("#default4").hide();
        $("#collapseReply4").hide();
        $("#expandReply4").show();
    });
    $(document).on('click', '#expandReply4', function () {
        $("#default4").show();
        $("#default").hide();
        $("#default2").hide();
        $("#default3").hide();
        $("#default1").hide();
        $("#default5").hide();
    });
    $(document).on('click', '#collapseReply5', function () {
        $("#default5").hide();
        $("#collapseReply5").hide();
        $("#expandReply5").show();
    });
    $(document).on('click', '#expandReply5', function () {
        $("#default5").show();
        $("#default").hide();
        $("#default2").hide();
        $("#default3").hide();
        $("#default4").hide();
        $("#default1").hide();
    });

    //document.recalc = function (reload) {
    //    if (typeof (IE7) === 'object') {
    //        if (IE7.CSS.screen) {
    //            if (reload) IE7.CSS.reload();
    //            IE7.recalc();
    //        }
    //    }
    //};
  
     function updateSuccess(data) {
        if (data == "True") {
            $('#AnnexureDialog').dialog('close');
        }
        else {
            alert(data);
        }

    }
    $(function () {
        var submitButton = $(".submitNext");
        submitButton.click(function () {
            SubmitInfo();
            GetInfo("Next");
            var crqid = +document.getElementById('QuestionID').value;
            if (crqid) {
                $("#divtree a").removeClass('jstree-clicked');
                $("#divtree a[id=" + "Q"+(crqid + 1) + "] ").addClass('jstree-clicked');
               
            }
        });
    });
    $(function () {
        var submitButton = $(".submitPrevious");
        submitButton.click(function () {
            SubmitInfo();
            GetInfo("Previous");
            var crqid = +document.getElementById('QuestionID').value;
            if (crqid && crqid!==1) {
                $("#divtree a").removeClass('jstree-clicked');
                $("#divtree a[id=" + "Q"+(crqid - 1) + "] ").addClass('jstree-clicked');
            }
        });

    });

    jQuery("a").click(function () {
        SubmitInfo();
        toggle();
    });
    function GetInfo(btyp) {
        var Gform = $("#QuestionView");
        var url2 = Gform.attr("action");
        var curQid = document.getElementById('QuestionID').value;
        var modeldata = Gform.serialize();
        $.ajax({
            cache: false,
            url: url2,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            dataType: 'html',
            data: "&id=" + curQid + "&btype=" + btyp,
            success: function (data1) {
                var contains = (data1.indexOf('Sign In') > -1);
                if (contains) {
                    location.reload();
                   }
                else {
                    $("#QuestionPartial").html(data1);

                }
            },
            complete: function () {
                toggle();
                //document.recalc();
            }
        });
    }

    function toggle() {
        var elme = document.getElementById("spinner");
        if (elme != null) {
            if (elme && elme.style.display == 'block')
                elme.style.display = 'none';
            else
                elme.style.display = 'block';

            if ($('#shadow').hasClass('blocker'))
                $('#shadow').removeClass('blocker');
            else
                $('#shadow').addClass('blocker');
        }
    }

    function SubmitInfo() {
        var Sform = $("#QuestionView");
        var url1 = Sform.attr("action");
        toggle();
        $.ajax({
            cache: false,
            async: false,
            url: url1,
            type: 'post',
            data: Sform.serialize(),
            success: function (data) {
                if (data.IsSuccess) {
                    //alert(data.Message);
                    //// Clear the input tags
                    //formContainer.find("input[type='text']").each(function (i, element) {
                    //    $(this).val('');
                    //});
                }
            },
            complete: function () {
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Save failed -" + errorThrown);
            }
        });
    }
    $(document).on('click', '#divtree a', function (e) {

        e.preventDefault();
        SubmitInfos();
        //load only parent question if child selected
        //var urlVal = $(this).attr("href");
        //if (urlVal.indexOf("/") != -1)
        //    var idVal = urlVal.substring((urlVal.lastIndexOf("/") + 1), urlVal.lastIndexOf("?"));
        //load respective question selected
        var urlVal = $(this).attr("href");
        if (urlVal.indexOf("/") != -1)
            var idVal = urlVal.substring(urlVal.lastIndexOf("quesid") + 7);
        GetInfos(idVal);

    });
});
