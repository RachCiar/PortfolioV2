/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 $(document).ready(function(){
     
    $('body').scrollspy({target: ".navbar", offset: 50});

    $("#portfolio").affix({
        offset: { 
            
            top: 195 
        }
       
    });
    

});

$(function () {
    

   /* $.fn.scrollView = function () {
        alert();
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }; */


   /* $('#portfolio').scroll(function (event) {
        event.preventDefault();
        $('.navbar').scrollView();
    }); */

//Carousel next and previous buttons
//    "use strict";
//    $('.next').click(function () {
//        $('.carousel').carousel('next');
 //       return false;
//    });
//    $('.prev').click(function () {
 //       $('.carousel').carousel('prev');
 //       return false;
//    });

    /*------------TOP NAVIGTION BAR ------------------- */

    // When the user scrolls down 116px from the top of the document, resize the navbar's padding and the logo's font size

window.onscroll = function() {scrollFunction()};
//.scrolltop property sets or returns the number of pixels an elemen'ts content is scrolled vertically.
function scrollFunction() {
  if (document.body.scrollTop > 116 || document.documentElement.scrollTop > 116) {
    document.getElementById("mainNav").style.padding = "0px 0px";
    document.getElementById("logo").style.height = "53px";
    document.getElementById("logo").style.width = "306px";
  } else {
    document.getElementById("mainNav").style.padding = "5px 5px";
    document.getElementById("logo").style.height = "106px";
    document.getElementById("logo").style.width = "609px";}
} 

//https://stackoverflow.com/questions/37645566/how-to-make-a-sticky-sidebar-in-bootstrap
//https://api.jquery.com/event.preventdefault/
// $(".parallax").affix({
//     offset: { 
        
//         top: 195 
//     }
   
// });

// Activate scrollspy to add active class to navbar items on scroll
//https://www.bootply.com/5FbSmT4UQQ
$('body').scrollspy({target: ".navbar", offset: 50});


 // Modal popup$(function () {
    $('.portfolio-item').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
      });
      $(document).on('click', '.portfolio-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    
      //Modal print resume
      $('#print').click(function()
      {
          window.print();
      });
 });

