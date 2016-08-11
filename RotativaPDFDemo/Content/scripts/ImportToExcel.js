$(document).ready(function () {
    $('#UploadExcel').click(function () {
        $('#grid').css({ 'opacity': 0.3 });
        $('.Row2').css({ 'opacity': 0.3 });
        $('.Row1').css({ 'opacity': 0.3 });
        $("#FileInput").removeAttr('disabled');
        $("#btnCancelExl").removeAttr('disabled');
        $("#btnSubmitExl").removeAttr('disabled');  
        var id = '#dialog';
        var FileUpload = $('#cllg').val();
        $("#clg").val(FileUpload);
        var maskHeight = $(document).height();
        var maskWidth = $(document).width();
        $('#mask').css({ 'width': maskWidth, 'height': maskHeight })
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.8);
        var winH = $(window).height();
        var winW = $(window).width();
        $(id).css('top', winH / 2 - $(id).height() / 2);
        $(id).css('left', winW / 2 - $(id).width() / 2);
        $(id).fadeIn(2000);
        $('.window .close').click(function (e) {
            $('#grid').css({ 'opacity': 1 });
            $('.Row2').css({ 'opacity': 1 });
            $('.Row1').css({ 'opacity': 1 });
            e.preventDefault();
            $('#mask').hide();
            $('.window').hide();
        });
    });
});