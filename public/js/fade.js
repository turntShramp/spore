  $("#spor_image").fadeIn(3000, function() {
    $("#spor_noun").fadeIn(3000, function() {
      $("#spor_noun").fadeOut(3000, function() {
        $("#spor_app").fadeIn(3000, function() {
          $("#spor_app").fadeOut(3000, function() {
            $("#login_user_body").fadeIn(3000, function() {
              $("#login_user_btn").on('click', function() {
                //on btn click, route to guide.html
              });
              $("#create_user_btn").on('click', function() {
                $("#login_user_body").fadeOut(5000, function() {
                  $("#create_user_body").fadeIn(5000, function() {
                    $("#login_user_btn").on('click', function() {
                      //on btn click, route to guide.html
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });