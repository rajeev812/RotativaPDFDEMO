﻿/*
* jQuery popBox
* Copyright (c) 2011 Simon Hibbard
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE. 
*/

/*
* Version: V1.3.0
* Release: 26-01-2011
* Based on jQuery 1.5.0
* Additional features provided with thanks to Alex Lareau
*/

(function ($) {
    var temp;
    $.fn.popBox = function (options) {
        var defaults = {
            height: 100,
            width: 300,
            newlineString: "<br/>"
        };
        var options = $.extend(defaults, options);


        return this.each(function () {
            obj = $(this);
            var inputName = 'popBoxInput' + obj.attr("Id");
            var labelValue = $("label[for=" + obj.attr('id') + "]").text();

            obj.after('<div class="popBox-holder"></div><div class="popBox-container"><label style="display: none;" for="' + inputName + '">' + labelValue + '</label> <textarea id="' + inputName + '" name="' + inputName + '" class="popBox-input" maxlength="2000"/><div class="done-button"><input type="button" value="Done" class="button blue small"/></div></div>');
            obj.focus(function () {
                $(this).next(".popBox-holder").show();
                //$(this).removeAttr('placeholder');
                var popBoxContainer = $(this).next().next(".popBox-container");
                var change = true;
                popBoxContainer.children('.popBox-input').css({ height: options.height, width: options.width });

                if ($(this).val() == "Reply of Branch") {
                    $(this).val(' ');
                } 
                else if ($(this).val() == "Remarks") {
                    $(this).val(' ');
                }
                else if ($(this).val() == "Auditor Remarks") {
                    $(this).val(' ');
                }
                else if ($(this).val() == "CSA Comments") {
                    $(this).val(' ');
                }
                else if ($(this).val() == "Address of the Deductee with PIN Code") {
                    $(this).val(' ');
                }
                else if ($(this).val() == "Reason For Not Deducting TDS") {
                    $(this).val(' ');
                }
                $(".popBox-input").attr("maxlength", 2000);
                popBoxContainer.show();
                var winH = $(window).height();
                var winW = $(window).width();
                var objH = popBoxContainer.height();
                var objW = popBoxContainer.width();
                var left = (winW / 2) - (objW / 2);
                var top = (winH / 2) - (objH / 2);

                popBoxContainer.css({ position: 'fixed', margin: 0, top: (top > 0 ? top : 0) + 'px', left: (left > 0 ? left : 0) + 'px' });

                popBoxContainer.children('.popBox-input').val($(this).val().replace(RegExp(options.newlineString, "g"), "\n"));
                popBoxContainer.children('.popBox-input').focus();

                popBoxContainer.children().keydown(function (e) {
                    if (e == null) { // ie
                        keycode = event.keyCode;
                    } else { // mozilla
                        keycode = e.which;
                    }

                    if (keycode == 27) { // close
                        $(this).parent().hide();
                        $(this).parent().prev().hide();
                        change = false;
                    }
                });

                popBoxContainer.children().blur(function () {

                    if (change) {
                        var len = $(this).val().length;
                        if (len > 2000)
                        {
                            alert("Maximum Characters allowed is 2000. Data loss will occur.");
                            $(this).val($(this).val().substring(0, 1800));
                        }
                        $(this).parent().hide();
                        $(this).parent().prev().hide();
                        $(this).parent().prev().prev().val($(this).val().replace(/\n/g, options.newlineString));

                    }
                });

            });

        });

    };

})(jQuery);