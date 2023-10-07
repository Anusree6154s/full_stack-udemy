// /-Manipulating styles with jQuery-/

// //manipulating directly using css method
// //setting a property
// $("h1").css("color", "green");
// $("h1").css("font-size", "5rem");

// //getting a property
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));


// //manipulating indirectly using css elements (preferred way)
// $("h1").addClass("big-red"); //adding a class
// $("h1").addClass("big-red margin-50"); //adding multiple classes
// $("h1").removeClass("margin-50"); //removing a class
// console.log($("h1").hasClass("big-red")); //checking if a class exisits


// /-Manipulating text with jQuery-/;
// $("h1").text("Bye"); //changes hi text
// $("button").text("Bye"); //changes all button text
// $("button").html("Hi"); //in plac eof innerHTML in JS
// $("button").text("<em>Oye</em>"); //doesn't consider html tags
// $("button").html("<em>Oye</em>"); //considers html tags


// /-Manipulating attributes with jQuery-/;
// $("a").attr("href", "www.google.com"); // setting
// console.log($("a").attr("href")); // getting
// console.log($("h1").attr("class")); // setting


// /-Adding Event Listeners using jQuery-/
// // changes color on click of h1
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// }); 

// // changes color on click of any button
// $("button").click(function () {
//     $("h1").css("color", "purple");
// }); 

// // consoles the key entered in textbox
// $("input").keypress(function (event) {
//   console.log(event.key);
// });

// // changes h1 to the key entered in textbox
// $("input").keypress(function (event) {
//     $("h1").text(event.key); 
// });

// // changes h1 to the key entered in website
// $(document).keypress(function (event) {
//     $("h1").text(event.key); 
// });

// // another way to add event listener
// // changes color on mouseover of h1
// $("h1").on("mouseover", function () {
//     $("h1").css("color", "blue");
// }); 


// /-Adding and removing elements using jQuery-/
// $("h1").before("<button>Before</button>");//before <h1>
// $("h1").after("<button>After</button>"); // after <h1>
// $("h1").prepend("<button>Prepend</button>"); // within <h1> before text
// $("h1").append("<button>Append</button>"); // within <h1> after text

// $("button")[6].remove(); //removed button 5
// $("button").remove(); //removed all buttons


/-Adding animations using jQuery-/
// hides h1 on clicking any button
// $("button").on("click", function () {
//     $("h1").hide();
// }); 

// // toogles h1 on clicking any button
// $("button").on("click", function () {
//     $("h1").toggle();
// }); 

// // fades out h1 on clicking any button
// $("button").on("click", function () {
//     $("h1").fadeOut();
// }); 

// // fade toggles h1 on clicking any button
// $("button").on("click", function () {
//     $("h1").fadeToggle();
// }); 

// // slide closes/opens h1 on clicking any button
// $("button").on("click", function () {
//     $("h1").slideUp();
// }); 

// slide togles h1 on clicking any button
$("button").on("click", function () {
    $("h1").slideToggle();
}); 

// custom animation
$("button").on("click", function () {
    $("h1").animate({opacity: 0.5});
}); 
$("button").on("click", function () {
    $("h1").animate({margin: 20});
}); 

// mixing animations
$("button").on("click", function () {
    $("h1").slideToggle().animate({margin: 20});
}); 
