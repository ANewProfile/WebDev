
// IMPORTANT: consult these docs
// lodash: https://lodash.com/docs/4.17.15
// jquery: https://api.jquery.com/
  
$(document).ready(function() {

    function clear_list(which_list, add_option) {
        if (add_option === true) {
            $("#list"+which_list).empty();
            $("#list"+which_list).append("<option value='-' disabled selected>Choose an option</option>");
        }
        else {
            $("#list"+which_list).empty();
        }
    }

    function clear_lists(start_list) {
        console.log("start_list: "+start_list);
        var next_list = start_list+1;
        console.log("next_list: "+next_list);
        console.log($("#list"+next_list));
        // if ($("#list"+next_list) !== undefined) {
        //     console.log("clearing #list"+start_list);
        //     clear_list(start_list, true);
        //     console.log("cleared list "+start_list+" and added option");
        //     console.log("next list: "+next_list);
        //     clear_lists(next_list);
        // } else {
        //     clear_list("#list"+start_list, false);
        //     console.log("cleared list "+start_list+" and didn't add option");
        // }
    }

    function set_options_list(which_list, items) {
        // clear_lists(which_list);
        _.map(items, function(item) {
  
            // var list_item = document.createElement("li");
            var option = document.createElement("option");
            $(option).addClass("item-button"+which_list).html(item[0]);
            $(option).data("items", item[1]);
            
            $("#list"+which_list).on("change", function() {
                var selectedOption = $("option:selected", this);
                set_list_generic(which_list+1, $(selectedOption).data("items"));
        });
  
        // $(list_item).html($(button))
        $("#list"+which_list).append(option);
      });
    }

    function set_li_list(which_list, items) {
        // $("#list"+which_list).empty();
        _.map(items, function (item) {
            element = document.createElement("li");
            $(element).html(item);
            $("#list"+which_list).append(element);
        });
    }

    function set_list_generic(which_list, items) {
        if (items.length === 0) {
            return;
        }
        clear_lists(which_list);
        if (Array.isArray(items[0])) {
            set_li_list(which_list, items);
        }
        else {
            set_options_list(which_list, items);
        }
    }
  
    $("#clear").on("click", function() {
        $(".item-button1").css("background-color", "white");
        var first_list = 1;
        clear_lists(first_list);
        set_list_generic(first_list, capsid_selections)

    });

    set_list_generic(1, capsid_selections);
  
  });
