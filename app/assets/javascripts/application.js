// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

// $(document).ready(function () {

//     // $("#tabs .card").hide();

//     // $(".card ul").each(function (i) {
//     //     $(this).attr('class', "card"+i);
//     //  });

//     // $('.card0').css('color', 'blue');
//     // $('.card1').css('color', 'red');
//     // $('.card2').css('color', 'yellow');
    

//     // $("#category_title li").each(function (i) {
//     //     $(this).attr('class', "title"+i);
//     // });
//     // $('.title0').css('color', 'blue');
//     // $('.title1').css('color', 'red');
//     // $('.title2').css('color', 'yellow');
 
//     $(".category_title").click(function () {
//         $('#tabs .card').hide();
//         $(this).next().toggle();
//         });




//     // $("#category_title").click(function () {
//     //     $("#tabs .card").show();
//     // });

//     // $("#category_title").each(function(i){
//     //     $(".title"+i).click(function (n) {
//     //     $(".card"+n).show();
//     //     });
//     // });

// });

$(document).ready(function () {

    $(".category_title").click(function () {
        $('.category_titles .card').hide();
        $(this).next().toggle();
    });

    // $(".dropdown").hover(function () {
    //     $(".child").show(200);
    // }, function () {
    //     $(".child").hide(400);
    // }); 


    var boolean = true;
    if(boolean==true){
        $(".rounded-circle").click(function() {
            $(".child").show();  
            boolean = false;
            console.log(boolean);           
        });      
    }
    
    if(boolean==false){
    $(".rounded-circle").click(function() {
            $(".child").hide(); 
            boolean = true;
        }); 
    }

    
    $("#carou").prepend('<div class="controls"> <span class="prev"> <img src="http://image.noelshack.com/fichiers/2018/47/2/1542721235-arrow-left.gif"> </span></div>'),
    $("#carou").append('<div class="controls"> <span class="next"> <img src="http://image.noelshack.com/fichiers/2018/47/2/1542721238-arrow-right.gif"> </span> </div>');

    $(".robots").each(function (i) {
        $(this).attr('class', "bot" + i),
        $(".bot"+i).hide();
    });
    var $carrousel = $('.row img.rounded-circle');
        $carrousel = $carrousel.length;
        c          = 0;

    $(".bot"+c).show();

    $(".next").click(function () {
        $(".bot"+c).animate({right: "300px"});
        $(".bot"+c).hide(200);
        $("#dot"+c).children('img').attr('src',$black);
        c++;
        if( c == $carrousel){
            c = 0;
        };
        $(".bot"+c).animate({left: "300px"});
        $(".bot"+c).show(200);
        $("#dot"+c).children('img').attr('src',$yellow);
        clearInterval(timer);
        timer = setInterval(moveItem, 5000);
    });

    $(".prev").click(function () {
        $(".bot"+c).animate({left: "300px"});
        $(".bot"+c).hide(200);
        $("#dot"+c).children('img').attr('src',$black);
        c--;
        if( c == -1){
            c = $carrousel-1;
        };
        $(".bot"+c).animate({right: "300px"});
        $(".bot"+c).show(200);
        $("#dot"+c).children('img').attr('src',$yellow);
        clearInterval(timer);
        timer = setInterval(moveItem, 5000);
    });

    function moveItem() {
        $(".bot"+c).animate({right: "300px"});
        $(".bot"+c).hide(200);
        $("#dot"+c).children('img').attr('src',$black);
        c++;
        if( c == $carrousel){
            c = 0;
        };
        $(".bot"+c).animate({left: "300px"});
        $(".bot"+c).show(200);
        $("#dot"+c).children('img').attr('src',$yellow);
    };

    var timer = setInterval(moveItem, 5000);
    
    // function timer () {
    
    //     setInterval(moveItem, 5000);

    // }

    $("#gcar").append('<div class="dots"> </div>');
    var i;
        $yellow = "https://upload.wikimedia.org/wikipedia/commons/5/59/Location_dot_yellow.svg"
        $black  = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Location_dot_black.svg"
    for (i = 0; i < $carrousel; i++) {
        if( i == c){
            $(".dots").append('<div class="dot"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Location_dot_yellow.svg"></img></div>');
        } else {
            $(".dots").append('<div class="dot"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Location_dot_black.svg"></img></div>');
        };
    };

    $(".dot").each(function (i) {
        $(this).attr('id', "dot" + i),
        $(this).click(function () {
            $(".bot"+c).animate({left: "300px"});
            $(".bot"+c).hide(500);
            $("#dot"+c).children('img').attr('src',$black);
            c = i;
            $(".bot"+c).animate({right: "300px"});
            $(".bot"+c).show(500);
            $("#dot"+c).children('img').attr('src',$yellow);
            clearInterval(timer);
            timer = setInterval(moveItem, 5000);
        });                
    });
           

    // Ouverture et fermeture des popups d'inscription

    $(".modal_signup").click(function () {
        $(".modal2").addClass("visible");
      });
      
      $(".close2").click(function(){
        $(".modal2").removeClass("visible");
      });
      
      // Fermeture des popups quand click ailleurs
      $(document).click(function(event) {
        if (!$(event.target).closest(".modal2,.modal_signup").length) {
          $("body").find(".modal2").removeClass("visible");
        }
    });
      
          // Ouverture et fermeture des popups de login

          $(".modal_login").click(function () {
              $(".modal1").addClass("visible");
          });

          $(".close1").click(function () {
              $(".modal1").removeClass("visible");
          });

          // Fermeture des popups quand click ailleurs
          $(document).click(function (event) {
              if (!$(event.target).closest(".modal1,.modal_login").length) {
                  $("body").find(".modal1").removeClass("visible");
              }
          });



          (function ($) {

              // DOM ready
              $(function () {

                  // Append the mobile icon nav
                  $('nav').append($('<div class="nav-mobile"></div>'));

                  // Add a <span> to every .nav-item that has a <ul> inside
                  $('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');

                  // Click to reveal the nav
                  $('.nav-mobile').click(function () {
                      $('.nav-list').toggle();
                  });

                  // Dynamic binding to on 'click'
                  $('.nav-list').on('click', '.nav-click', function () {

                      // Toggle the nested nav
                      $(this).siblings('.nav-submenu').toggle();

                      // Toggle the arrow using CSS3 transforms
                      $(this).children('.nav-arrow').toggleClass('nav-rotate');

                  });

              });

          })(jQuery);



});
