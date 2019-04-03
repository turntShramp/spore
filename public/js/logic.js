  // PARTICLES LOGIC
  //---------------------------------------------------------//
  window.onload = function() {
    Particles.init({
      selector: ".background",
      maxParticles: 1000,
      sizeVariations: 1.5,
      speed: .50,
      color: "#838383",
      connectParticles: false,
      responsive: null,
      height: 100
    });
    console.log("particles up");
  };

$(document).ready(function(){
  console.log("divs up");

  // FOOTER LOGIC
  //---------------------------------------------------------//
  // initialize all modals           
  $('.modal').modal();
  // now you can open modal from code
  $('#modal1').modal('open');
  // or by click on trigger
  $('.trigger-modal').modal();


  // LOGIN PAGE LOGIC
  //---------------------------------------------------------//
  // LOGIN FADE
  $("#spor_image").delay(3000).fadeIn(5000, function() {
    $("#spor_noun").fadeIn(5000, function() {
      $("#spor_noun").fadeOut(5000, function() {
        $("#spor_app").fadeIn(3000, function() {
          $("#spor_app").fadeOut(5000, function() {
            $("#login_user_body").fadeIn(2000, function() {
              $("#login_user_btn").on('click', function() {
                // check if user account exists
                // if not, clear inputs and any stored values
                // if yes route to guide.html
              });
              $("#create_user_btn").on('click', function() {
                $("#login_user_body").fadeOut(2000, function() {
                  $("#create_user_body").fadeIn(2000, function() {
                    $("#login_user_btn").on('click', function() {
                      // check if user account exists
                      // if yes, notify name exists, clear inputs and any stored values
                      // if no, create user in db and route to guide.html      
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


  // NAVBAR LOGIC 
  //---------------------------------------------------------//
  $("#basket_btn").on('click', function () {

  });
}); //document.ready































// CAME WITH THE HOMEWORK INSTALL

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
