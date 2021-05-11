jQuery(window).ready(function($) { 

  //Input focus
$("input").focus(function() {
  if ($(window).width() < 980){
    $("#shiftnav-toggle-main").addClass("input_active_header");
    $("#footermenu").addClass("input_active");
    $("body").addClass("input_active");
  }
}).blur(function(){
  if ($(window).width() < 980){
    $("#shiftnav-toggle-main").removeClass("input_active_header");
    $("#footermenu").removeClass("input_active");
    $("body").removeClass("input_active");
  }    
});

//textarea's focus
$("textarea").focus(function() {
  if ($(window).width() < 980){
      $("#shiftnav-toggle-main").addClass("input_active_header");
      $("#footermenu").addClass("input_active");
      $("body").addClass("input_active");
  }
}).blur(function(){
  if ($(window).width() < 980){
    $("#shiftnav-toggle-main").removeClass("input_active_header");
    $("#footermenu").removeClass("input_active");
    $("body").removeClass("input_active");
  }
});



//fix builder paragraphs
$('p').each(function()
{
  var pempty = $(this).html();

  //console.log('p: ' + pempty);

  pempty = pempty.replace(/\n/g, '');
  pempty = pempty.replace(/\ /g, '');

    if( pempty == "" || pempty == null )
    {
      $(this).css('background-color', 'green');

      //console.log('p delete: ' + pempty);

      $(this).remove();
    }
});
//fix builder paragraphs
  


//add html top footer:
//<span class="mk_scrolltop"></span>
function mk_scrolltop()
{

  var mk_scrolltop_Top = $(window).scrollTop();

  var mk_scrolltop_docHeight = $(document).height();

  var mk_scrolltop_windowHeight = $(window).height();

  if ( !$('.mk_scrolltop').hasClass('active') && mk_scrolltop_Top >  ( mk_scrolltop_docHeight - mk_scrolltop_windowHeight ) / 2  ) 
  { 
    $('.mk_scrolltop').addClass('active');
  }
  else if( $('.mk_scrolltop').hasClass('active') && mk_scrolltop_Top <=  ( mk_scrolltop_docHeight - mk_scrolltop_windowHeight ) / 2  )
  {
    $('.mk_scrolltop').removeClass('active');
  }

}
mk_scrolltop();


$('.mk_scrolltop').click(function() {

  $('html, body').animate({ scrollTop: $("html").offset().top }, 1000);

});
//END mk_scrolltop


$(window).scroll(function() {

  mk_scrolltop();
  
});


}); //End windows ready



//$( '.divclass' ).mk_zelfdehoogte({ divClass: '.element' });
//Eigen functions
(function ( $ ) {

    //Function divs zelfde hoogtes!
    $.fn.mk_zelfdehoogte = function( options ) {

      if( $(this).length == 0 ) { return; }  //Check of class of id bestaat.
 
      // This is the easiest way to have default options.
      var settings = $.extend({
          // These are the defaults.
          divClass: "",

          loopRij: false,

          resize: true,

          break: 479,

          addClass: "",

          selector: $(this),

      }, options );

      
      mk_zelfdehoogte_loop( settings ); //the loop

      if( !settings.resize ) { return; }

      $( window ).resize( function() { 

        mk_zelfdehoogte_loop( settings ); //the loop resize

      });

      return;
    };
    //END Function divs zelfde hoogtes!


  function mk_zelfdehoogte_loop( set )
  {
    $(set.selector).find(set.divClass).css('height', 'auto'); //reset height

    if( set.addClass != "" ) { $(set.selector).find(set.divClass).removeClass( set.addClass ); } //reset class

    if( $( window ).width() <= set.break ) { return; }

    var elementHeight = 0;

    if(set.loopRij)
    {
      $(set.selector).each(function() { 

        elementHeight = 0; //reset voor elke rij

        $(this).find(set.divClass).each(function() {

          if( $(this).outerHeight() > elementHeight )
          {
            elementHeight = $(this).outerHeight();
          }

        });

        $(this).find(set.divClass).css({ height: elementHeight });

      });
    }
    else
    {
      $(set.selector).find(set.divClass).each(function() {

        if( $(this).outerHeight() > elementHeight )
        {
          elementHeight = $(this).outerHeight();
        }

      });

      $(set.selector).find(set.divClass).css({ height: elementHeight });
    }

    if( set.addClass != "" ) { $(set.selector).find(set.divClass).addClass( set.addClass ); } //add class

  }


}( jQuery ));


