/**
 * Created by DanTsk on 30.09.16.
 */




$(function () {



    var LIST = $('.bl-list');
    var LEFT = $('.bl-left');
    var LEFT_BUYED = $('.bl-buyed');

    var TEMP = $(".bl-row-temp").html();
    var LEFT_TEMP = $(".left-temp").html();
    var LEFT_NOT_TEMP = $(".left-not-temp").html();

    addItem("Помідори");
    addItem("Огірки");
    addItem("Яблука");



    $("#addButton").click(function () {

        var log = $(".add_panel_inputer");
        var val = log.val();
        if(val){

            addItem(val);
        }

    });




    function addItem(val) {
        var node = $(TEMP);
        var lf_node= $(LEFT_TEMP);
        var lf_not_node = $(LEFT_NOT_TEMP);

        var numberL = $(lf_node).find('.number');
        var numberN = $(lf_not_node).find('.number');

        $(lf_node).find('.label').text(val);
        $(lf_not_node).find('.label').text(val);
        numberL.text(1);


        $(node).find('.bl-product').text(val);
        $(node).find('.but_button').click(function () {

            if(node.attr('class')!="bl-row state-bought") {

                $(node).addClass('state-bought');
                $(node).find('.but_button').text("Не куплено");

                var label = $(node).find('.bl-label');
                var number = parseInt(label.text());

                $(lf_not_node).find('.number').text(number);
                lf_node.remove();
                LEFT_BUYED.append(lf_not_node);

            }else{
                $(node).removeClass('state-bought');
                $(node).find('.but_button').text("Куплено");

                 label = $(node).find('.bl-label');
                 number = parseInt(label.text());

                $(lf_node).find('.number').text(number);


                LEFT.append(lf_node);
                lf_not_node.remove();
            }
        });
        $(node).find('.cancel_button').click(function () {
            node.remove();
            lf_node.remove();

        });
        $(node).find('.bl-plus').click(function () {
            var label = $(node).find('.bl-label');
            var number = parseInt(label.text());
            label.text(number+1);
            numberL.text(number+1);


        });
        $(node).find('.bl-minus').click(function () {
            var label = $(node).find('.bl-label');
            var number = parseInt(label.text());

            if(number-1!=0) {
                label.text(number - 1);
                numberL.text(number -1);
            }


        });
        LIST.append(node);
        LEFT.append(lf_node);





    }





});