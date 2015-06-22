/**
 * Created by niamul on 6/18/15.
 */
jQuery( document ).ready(function( $ ) {
    //   Start Push Menu
    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        //menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        //menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        //menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        //showLeft = document.getElementById( 'showLeft' ),
        //showRight = document.getElementById( 'showRight' ),
        //showTop = document.getElementById( 'showTop' ),
        //showBottom = document.getElementById( 'showBottom' ),
        //showLeftPush = document.getElementById( 'showLeftPush' ),
        //showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;

    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };
    //showRight.onclick = function() {
    //    classie.toggle( this, 'active' );
    //    classie.toggle( menuRight, 'cbp-spmenu-open' );
    //    disableOther( 'showRight' );
    //};
    //showTop.onclick = function() {
    //    classie.toggle( this, 'active' );
    //    classie.toggle( menuTop, 'cbp-spmenu-open' );
    //    disableOther( 'showTop' );
    //};
    //showBottom.onclick = function() {
    //    classie.toggle( this, 'active' );
    //    classie.toggle( menuBottom, 'cbp-spmenu-open' );
    //    disableOther( 'showBottom' );
    //};
    //showLeftPush.onclick = function() {
    //    classie.toggle( this, 'active' );
    //    classie.toggle( body, 'cbp-spmenu-push-toright' );
    //    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    //    disableOther( 'showLeftPush' );
    //};
    //showRightPush.onclick = function() {
    //    classie.toggle( this, 'active' );
    //    classie.toggle( body, 'cbp-spmenu-push-toleft' );
    //    classie.toggle( menuRight, 'cbp-spmenu-open' );
    //    disableOther( 'showRightPush' );
    //};

    function disableOther( button ) {
        if( button !== 'showLeft' ) {
            classie.toggle( showLeft, 'disabled' );
        }
        //if( button !== 'showRight' ) {
        //    classie.toggle( showRight, 'disabled' );
        //}
        //if( button !== 'showTop' ) {
        //    classie.toggle( showTop, 'disabled' );
        //}
        //if( button !== 'showBottom' ) {
        //    classie.toggle( showBottom, 'disabled' );
        //}
        //if( button !== 'showLeftPush' ) {
        //    classie.toggle( showLeftPush, 'disabled' );
        //}
        //if( button !== 'showRightPush' ) {
        //    classie.toggle( showRightPush, 'disabled' );
        //}
    }
//    End Push Menu

});

//one page slider
jQuery( document ).ready(function( $ ){
    var onepage = $("#box").onepagescroll({
        box: "div",
        cycle: 0
    }, function (o) {
        $("#contorl .on").removeClass("on");
        $("#contorl span").eq(o.index).addClass("on");
    });
    $("#contorl span").click(function(){
        onepage.change($(this).index());
    });
});


//small navigation
$(function() {
    $('#plus-ex').click(function(){
        if($(this).hasClass('plus')){
            $(this).removeClass('plus')
            $(this).addClass('ex');
            $('#circle-navigation-buttons li').addClass('out');
        } else {
            $(this).removeClass('ex');
            $(this).addClass('plus');
            $('#circle-navigation-buttons li').removeClass('out');
        }
        return false;
    });
});



//

$(document).ready(function() {

    var owl = $("#carousel-row");

    owl.owlCarousel({
        items : 10, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});
