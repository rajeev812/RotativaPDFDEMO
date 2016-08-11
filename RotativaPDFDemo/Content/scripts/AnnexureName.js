$(document).ready(function () {
    var ID = GetParameterValues('AnnexureID');
    //alert("YourID " + ID);
 
    if (ID == undefined) {
        $(".AnnexureRow_1 td").css({
            "background-color": "#529FDB",
           
        });
        $('.AnnexureRow_1 td > a > .insideCol1').css({
            "color": "#fff"
        });
    }
    if (ID == "1") {
        $('#Annxname').text("Point 16 - Amounts not credited to the profit and loss account");
        $('.AnnexureRow_1 td > a > .insideCol1').css({
            "color": "#fff"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#529FDB",
            "color": "#fff"
        });
    }
   else if (ID == "2") {
       $('#Annxname').text("Point 21 (A) - Amounts debited to the profit and loss account");
       $('.AnnexureRow_2 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_2 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
            "color": "#2137FF"
        });
              
    }
   else if (ID == "3") {
       $('#Annxname').text("Point 21 (D) - Disallowance/deemed income under section 40A(3)");
       $('.AnnexureRow_3 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_3 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
            "color": "#2137FF"
        });
       
    }
   else if (ID == "4") {
       $('#Annxname').text("Point 26 (i) - In respect of any sum referred to in clauses (a) to (f) of section 43B");
       $('.AnnexureRow_4 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_4 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
        });
       
    }
   else if (ID == "5") {
       $('#Annxname').text("Point 26 (ii) - Taxes passed through Profit and Loss account");
       $('.AnnexureRow_5 td > a > .insideCol1').css({
           "color": "#fff"
       });
       $(".AnnexureRow_5 td").css({
           "background-color": "#529FDB"
       });
       $(".AnnexureRow_1 td").css({
           "background-color": "#fff",
       });
      
    }
   else if (ID == "6") {
       $('#Annxname').text("Point 31 - Repayment of Loan/Deposit");
       $('.AnnexureRow_6 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_6 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
        });
       
    }
   else if (ID == "7") {
       $('#Annxname').text("Annexure XV (Point 27B) - Prior period Income/Expenditure");
       $('.AnnexureRow_7 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_7 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
        });
       
    }
   else if (ID == "8") {
       $('#Annxname').text("Annexure on TDS - XXIIIB (Point 34)");
       $('.AnnexureRow_8 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_8 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
        });
       
    }
   else if (ID == "9") {
       $('#Annxname').text("Annexure on TDS - XXIIIC (Point 21B)");
       $('.AnnexureRow_9 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_9 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
        });
       
    }
   else if (ID == "10") {
       $('#Annxname').text("Form 3CA - Qualification/ Observation");
       $('.AnnexureRow_10 td > a > .insideCol1').css({
           "color": "#fff"
       });
        $(".AnnexureRow_10 td").css({
            "background-color": "#529FDB"
        });
        $(".AnnexureRow_1 td").css({
            "background-color": "#fff",
        });
       
   }
   else if (ID == "50") {
       $('#Annxname').text("Annual Report");
       $('.AnnexureRow_50 td > a > .insideCol1').css({
           "color": "#fff"
       });
       $(".AnnexureRow_50 td").css({
           "background-color": "#529FDB"
       });
       $(".AnnexureRow_1 td").css({
           "background-color": "#fff",
       });
      
   }
    
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
});