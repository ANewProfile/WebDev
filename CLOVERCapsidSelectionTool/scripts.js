
// IMPORTANT: consult these docs
// lodash: https://lodash.com/docs/4.17.15
// jquery: https://api.jquery.com/
  
$(document).ready(function() {

    function clear_list(which_list) {
        if (which_list !== 5) {
            $("#list"+which_list).empty();
            $("#list"+which_list).append("<option value='-' disabled selected>Choose an option</option>");
        }
        else {
            $("#list"+which_list).empty();
        }
    }

    function set_options_list(which_list, items) {
        clear_list(which_list);
        clear_list(which_list+1);
        clear_list(which_list+2);
        clear_list(which_list+3);
        clear_list(which_list+4);
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
        $("#list"+which_list).empty();
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
        if (typeof items[0] === "string") {
            set_li_list(which_list, items);
        }
        else {
            set_options_list(which_list, items);
        }
    }
  
    $("#clear").on("click", function() {
        $(".item-button1").css("background-color", "white");
        clear_list(1);
        clear_list(2);
        clear_list(3);
        clear_list(4);
        $("#list5").empty();
        set_list_generic(1, capsid_selections)

    });

    set_list_generic(1, capsid_selections);
  
  });
