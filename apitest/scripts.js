// IMPORTANT: consult these docs
// lodash: https://lodash.com/docs/4.17.15
// jquery: https://api.jquery.com/
  
$(document).ready(function() {
    // $("#main").append("hello world");
    $.ajax({
        url: "https://hp-api.onrender.com/api/characters",
        context: document.body
      }).done(function(data) {
        // $( this ).addClass( "done" );
        data.forEach(function(character) {
            var character_elm = document.createElement("div");

            var display_name_elm = document.createElement("h3");
            var display_name = character["name"] + " | " + character["gender"];
            $(display_name_elm).html(display_name);

            var details_elm = document.createElement("p");
            var actor = "Actor: " + character["actor"];
            var species = "Species: " + character["species"];
            if (character["wand"]["wood"] !== "") {
                var wood = character["wand"]["wood"];
                if (character["wand"]["core"] === "") {
                    var core = "unknown";
                } else {
                    var core = character["wand"]["core"];
                }
                var wand = "Wand: " + wood + ", " + core + ", " + character["wand"]["length"] + " inches";
                var details = [actor, species, wand];
            } else {
                var details = [actor, species]
            }
            details.forEach(function (detail) {
                $(details_elm).append(detail);
                $(details_elm).append("<br>");
            });

            $(character_elm).append(display_name_elm);
            $(character_elm).append(details_elm);
            $("#main").append(character_elm);
        });
    });
  });
