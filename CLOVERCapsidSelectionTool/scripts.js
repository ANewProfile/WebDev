
// IMPORTANT: consult these docs
// lodash: https://lodash.com/docs/4.17.15
// jquery: https://api.jquery.com/

var some_items = [
    ["brain", [["broad", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["DBA/1J", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["DBA/2J", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["FVB/NJ", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["LP/J", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["MOLF/EiJ", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["129S1/SvlmJ", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
                                    ["BALB/cJ", ["Overall Potency: AAV-PHP.eC"]],
                                    ["CBA/J", ["Overall Potency: AAV-PHP.eC"]],
                                    ["NOD/ShiLtJ", ["Overall Potency: AAV-PHP.eC"]],]],
                          ["Rat", [["Fischer", ["Overall Potency: AAV-PHP.eB"]],
                                  ["Long Evans", ["Overall Potency: AAV-PHP.eB"]],
                                  ["Shaker", ["Overall Potency: AAV-PHP.eB"]],
                                  ["Sprague Dawley", ["Overall Potency: AAV-PHP.eB"]],
                                  ["Wistar", ["Overall Potency: AAV-PHP.eB"]],]],
                          ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: AAV.CAP-B22"]],
                                                      ["Macaque", ["Overall Potency: AAV.MaCPNS1", "Overall Potency Alternative: AAV.MaCPNS2"]],]]
              ]],
               ["Neurons - broad", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["DBA/1J", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["DBA/2J", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["FVB/NJ", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["LP/J", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["MOLF/EiJ", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["129S1/SvlmJ", ["Overall Potency: AAV-CAP.B10", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal", "Capsid Specificity: AAV-CAP.B10", "Capsid Specificity Alternative: AAV-PHP.N"]],
                                              ["BALB/cJ", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],
                                              ["CBA/J", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],
                                              ["NOD/ShiLtJ", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],]],
                                    ["Rat", [["Fischer", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                            ["Long Evans", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                            ["Shaker", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                            ["Sprague Dawley", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                            ["Wistar", ["Overall Potency: AAV-PHP.eB with GRE"]],]],
                                    ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: AAV.CAP-B10"]],
                                                                ["Macaque", ["Overall Potency: AAV.Mac", "Overall Potency Alternative - AAV9-X1.1", "Capsid Specificity: AAV.CAP-Mac", "Capsid Specificity Alternative - AAV9-X1.1"]],]],]],
               ["Neurons - subtype-specific (L5 & Inibitory)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                            ["DBA/1J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                            ["DBA/2J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                            ["FVB/NJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                            ["LP/J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                            ["MOLF/EiJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                            ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.eB with GRE or transgenic animal"]],]],]],
               ["Neurons - subtype-specific (L2/3 & L4)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],
                                                                    ["DBA/1J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],
                                                                    ["DBA/2J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],
                                                                    ["FVB/NJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],
                                                                    ["LP/J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],
                                                                    ["MOLF/EiJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],
                                                                    ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],]],]]
               ["Neurons - subtype-specific (Excitatory)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["DBA/1J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["DBA/2J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["FVB/NJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["LP/J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["MOLF/EiJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],]],]]
               ["Neurons - subtype-specific (Purkinje)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["DBA/1J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["DBA/2J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["FVB/NJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["LP/J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["MOLF/EiJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["129S1/SvlmJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],]],]]
               ["Neurons - subtype-specific (other)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["DBA/1J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["DBA/2J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["FVB/NJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["LP/J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["MOLF/EiJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],]],]]
              ]],
    ["noam", ["puzzles", "swimming"]],
    ["elad", ["pugs", "soccer"]],
  ];
  
$(document).ready(function() {
  
    function set_list1() {
        _.map(some_items, function(item) {

        var list_item = document.createElement("li");
        var button = document.createElement("button");

        $(button).addClass("item-button").html(item[0]).on("click", function() {
            $(".item-button").css("background-color", "white");
            $(this).css("background-color", "#00ff00");
            $("#list2").empty();
            $("#list3").empty();
            $("#list4").empty();
            $("#list5").empty();
            set_list2(item[1]);
        });

        $(list_item).html($(button))
        $("#list1").append(list_item);
        });
    }
  
    function set_list2(items) {
      _.map(items, function(item) {
  
        var list_item = document.createElement("li");
        var button = document.createElement("button");
  
        $(button).addClass("item-button").html(item[0]).on("click", function() {
          $(".item-button").css("background-color", "white");
          $(this).css("background-color", "#00ff00");
          $("#list3").empty();
          $("#list4").empty();
          $("#list5").empty();
          set_list3(item[1]);
        });
  
        $(list_item).html($(button))
        $("#list2").append(list_item);
      });
    }
  
    function set_list3(items) {
      _.map(items, function(item) {
  
        var list_item = document.createElement("li");
        var button = document.createElement("button");
  
        $(button).addClass("item-button").html(item[0]).on("click", function() {
          $(".item-button").css("background-color", "white");
          $(this).css("background-color", "#00ff00");
          $("#list4").empty();
          $("#list5").empty();
          set_list4(item[1]);
        });
  
        $(list_item).html($(button))
        $("#list3").append(list_item);
      });
    }
  
    function set_list4(items) {
      _.map(items, function(item) {
  
        var list_item = document.createElement("li");
        var button = document.createElement("button");
  
        $(button).addClass("item-button").html(item[0]).on("click", function() {
          $(".item-button").css("background-color", "white");
          $(this).css("background-color", "#00ff00");
          $("#list5").empty();
          set_list5(item[1]);
        });
  
        $(list_item).html($(button))
        $("#list4").append(list_item);
      });
    }
  
    function set_list5(items) {
      _.map(items, function(item) {
        $("#list5").append("<li>"+item+"</li>");
      });
    }
  
    $("#clear").on("click", function() {
      $("#list2").empty();
      $("#list3").empty();
      $("#list4").empty();
      $("#list5").empty();
    });

    set_list1();
  
  });