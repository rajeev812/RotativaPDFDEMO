
$(document).ready(function () {

    $('.auditorDiv').hide();
    $('#makerdiv').hide();
    var roletypedropdown = document.getElementById("RoleTypeID");
    var selValue = roletypedropdown.options[roletypedropdown.selectedIndex].value;
    if (selValue == 2 || selValue == 10 || selValue == 11)
        {
        $('.auditorDiv').show()
        $('#IsAuditor').val("True");
        }
    else {
        $('#auditorDetails').hide();
        $('#IsAuditor').val("False");
    }
    $('#RoleTypeID').click(function () {
        var ts = this.value;
        $('.auditorDiv').hide()
        if (ts == 2 || ts == 10 || ts == 11)
        {
            $('#auditorDetails').show();
            $('#IsAuditor').val("True");
        }
        else {
            $('#auditorDetails').hide();
            $('#IsAuditor').val("False");
        }
    });
    $('#Maker').change(function () {
        if (document.getElementById('Maker').unchecked)
        $('#makerdiv').hide()
        if (document.getElementById('Maker').checked)
            $('#makerdiv').show();
        else
            $('#makerdiv').hide();
    });
});
