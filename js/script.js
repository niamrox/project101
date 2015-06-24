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
            $(this).removeClass('plus');
            $(this).addClass('ex');
            $('#circle-navigation-buttons li').addClass('out');
            $('#small-circle-navigation').addClass('circle-hide');
            $('.sponsor-carousel-wrap').addClass('hidden');
        } else {
            $(this).removeClass('ex');
            $(this).addClass('plus');
            $('#circle-navigation-buttons li').removeClass('out');
            $('#small-circle-navigation').removeClass('circle-hide');
            $('.sponsor-carousel-wrap').removeClass('hidden');
        }
        return false;
    });
});



//

$(document).ready(function() {

    var owl = $("#carousel-row");

    owl.owlCarousel({
        pagination:false,
        autoPlay:true,
        items : 10, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

    });

});



$(document).ready(function() {

    var owl = $("#sponsor-carousel");

    owl.owlCarousel({
        pagination:false,
        autoPlay:true,
        items : 5, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

    });

});


$(document).ready(function() {

    //Sort random function
    function random(owlSelector){
        owlSelector.children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).each(function(){
            $(this).appendTo(owlSelector);
        });
    }

    $("#sponsor-carousel-navigation").owlCarousel({
        navigation: true,
        navigationText: [
            "<i class='icon-chevron-left icon-white'></i>",
            "<i class='icon-chevron-right icon-white'></i>"
        ],
        beforeInit : function(elem){
            //Parameter elem pointing to $("#owl-demo")
            random(elem);
        }

    });

});

