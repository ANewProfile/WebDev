
// IMPORTANT: consult these docs
// lodash: https://lodash.com/docs/4.17.15
// jquery: https://api.jquery.com/

var capsids = [
    ["Brain", [["Broad", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-PHP.eB", "Expanded cell type coverage: AAV-PHP.AX"]],
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
                                  ["Long-Evans", ["Overall Potency: AAV-PHP.eB"]],
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
                                            ["Long-Evans", ["Overall Potency: AAV-PHP.eB with GRE"]],
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
                                                                    ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV.CAP-B10 with GRE or transgenic animal"]],]],]],
               ["Neurons - subtype-specific (Excitatory)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["DBA/1J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["DBA/2J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["FVB/NJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["LP/J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["MOLF/EiJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],
                                                            ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency Alternative: AAV-PHP.eB with GRE or transgenic animal", "Capsid Specificity: AAV-PHP.N with GRE or transgenic animal"]],]],]],
               ["Neurons - subtype-specific (Purkinje)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["DBA/1J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["DBA/2J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["FVB/NJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["LP/J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["MOLF/EiJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                                                                    ["129S1/SvlmJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],]],]],
               ["Neurons - subtype-specific (other)", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["DBA/1J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["DBA/2J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["FVB/NJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["LP/J", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["MOLF/EiJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],
                                                                ["129S1/SvlmJ", ["Overall Potency: AAV.CAP-B10 with GRE or transgenic animal", "Overall Potency alternative: AAV-PHP.eB with GRE or transgenic animal", "Expanded cell type coverage: AAV-PHP.AX with GRE or transgenic animal"]],]],]],
                ["Neurons - NHP subtype specific", [["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: AAV.CAP-B10", "Capsid Specificity: AAV.CAP-B10 with GRE"]],
                                                                                ["Macaque", ["Overall Potency: AAV.CAP-Mac", "Overall Potency alternative: AAV9-X1.1", "Capsid Specificity: AAV.CAP-Mac with GRE", "Capsid Specificity alternative: AAV9-X1.1 with GRE"]],]],]],
                ["Astrocytes", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["DBA/1J", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["DBA/2J", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["FVB/NJ", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["LP/J", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["MOLF/EiJ", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["129S1/SvlmJ", ["Overall Potency: AAV-PHP.AX with GRE or transgenic animal"]],
                                ["BALB/cJ", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],
                                ["CBA/J", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],
                                ["NOD/ShiLtJ", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],]],
                                ["Rat", [["Fischer", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                ["Long-Evans", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                ["Shaker", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                ["Sprague Dawley", ["Overall Potency: AAV-PHP.eB with GRE"]],
                                ["Wistar", ["Overall Potency: AAV-PHP.eB with GRE"]],]],
                                ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: AAV.CAP-B22 with GRE"]],
                                ["Macaque", ["Overall Potency: AAV.MaCPNS1 with GRE", "Overall Potency: AAV.MaCPNS1 with GRE"]],]],]],
                ["Vascular Cells", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["DBA/1J", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["DBA/2J", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["FVB/NJ", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["LP/J", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["MOLF/EiJ", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["129S1/SvlmJ", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["BALB/cJ", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["CBA/J", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],
                                    ["NOD/ShiLtJ", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1", "If animal has AAV9-neutralizing Abs: AAV1-X1 (Lower potency than AAV9-X1.1)"]],]],
                                    ["Rat", [["Fischer", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1"]],
                                    ["Long-Evans", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1"]],
                                    ["Shaker", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1"]],
                                    ["Sprague Dawley", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1"]],
                                    ["Wistar", ["Overall Potency: AAV9-X1.1", "Capsid Specificity: AAV9-X1.1"]],]],
                                    ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: AAV.CAP-Mac", "Capsid Specificity: AAV.CAP-Mac"]],]],]],
                ["Oligodendrocytes", [["Mouse", [["C57BL/6J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["DBA/1J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["DBA/2J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["FVB/NJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["LP/J", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["MOLF/EiJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["129S1/SvlmJ", ["Overall Potency: AAV-PHP.eB with GRE or transgenic animal"]],
                ["BALB/cJ", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],
                ["CBA/J", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],
                ["NOD/ShiLtJ", ["Overall Potency: AAV-PHP.eC with GRE or transgenic animal"]],]],]],
              ]],
    ["Peripheral Nervous System", [["Broad", [["Mouse", [["Unspecified", ["Overall Potency: MaCPNS2", "Alternative Capsid: PHP.S"]],]],
                                            ["Rat", [["Unspecified", ["Overall Potency: MaCPNS2", "Alternative Capsid: PHP.S"]],]],
                                            ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: MaCPNS2", "Note: CNS is also broadly transduced in this species"]],
                                                                        ["Macaque", ["Overall Potency: MaCPNS2", "Note: CNS is also broadly transduced in this species"]],]],]],
                                    ["Sensory", [["Mouse", [["Unspecified", ["Overall Potency: MaCPNS1", "Capsid Specificity: MaCPNS1"]],]],
                                                ["Rat", [["Unspecified", ["Overall Potency: MaCPNS1 with GRE", "Alternative Capsid: MaCPNS2 with GRE"]],]],
                                                ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: MaCPNS1 with GRE", "Alternative Capsid: MaCPNS2 with GRE", "Note: CNS is also broadly transduced in this species"]],
                                                                            ["Macaque", ["Overall Potency: MaCPNS1 with GRE", "Alternative Capsid: MaCPNS2 with GRE", "Note: CNS is also broadly transduced in this species"]],]],]],
                                    ["Enteric", [["Mouse", [["Unspecified", ["Overall Potency: MaCPNS2 with GRE"]],]],
                                                ["Rat", [["Unspecified", ["Overall Potency: MaCPNS2 with GRE", "Alternative Capsid: MaCPNS1 with GRE"]],]],
                                                ["Non-human primate (NHP)", [["Marmoset", ["Overall Potency: MaCPNS2 with GRE", "Alternative Capsid: MaCPNS1 with GRE", "Note: CNS is also broadly transduced in this species"]],
                                                                            ["Macaque", ["Overall Potency: MaCPNS2 with GRE", "Note: CNS is also broadly transduced in this species"]],]],]],]],
  ];
  
$(document).ready(function() {

    function set_options_list(which_list, items) {
        $("#list"+which_list).empty();
        $("#list"+which_list).append("<option value='-' disabled selected>Choose an option</option>")
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
        $("#list2").empty();
        $("#list2").append("<option value='-' disabled selected>Choose an option</option>")
        $("#list3").empty();
        $("#list3").append("<option value='-' disabled selected>Choose an option</option>")
        $("#list4").empty();
        $("#list4").append("<option value='-' disabled selected>Choose an option</option>")
        $("#list5").empty();

        $("#list1").empty();
        $("#list1").append("<option value='-' disabled selected>Choose an option</option>")
        set_list_generic(1, some_items)

    });

    set_list_generic(1, some_items);
  
  });