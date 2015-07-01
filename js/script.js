/**
 * Created by niamul on 6/18/15.
 */
jQuery( document ).ready(function( $ ) {
    //   Start Push Menu
    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
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
    showRight.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        disableOther( 'showRight' );
    };
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
        if( button !== 'showRight' ) {
           classie.toggle( showRight, 'disabled' );
        }
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
        box: "div.slide-item",
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
    $('.plus-ex').click(function(){
        if($(this).hasClass('plus')){
            $(this).removeClass('plus');
            $(this).addClass('ex');
            $('#circle-navigation-buttons li').addClass('out');
            $('#small-circle-navigation').addClass('circle-hide');
            $('.sponsor-carousel-wrap').addClass('hidden');
            $('.circle-nav').addClass('hide-button');
            $('.news-block').addClass('news-block-show');
            $('#sponsor-carousel-toggle').addClass('hide-toggle');
        } else {
            $(this).removeClass('ex');
            $(this).addClass('plus');
            $('#circle-navigation-buttons li').removeClass('out');
            $('#small-circle-navigation').removeClass('circle-hide');
            $('.sponsor-carousel-wrap').removeClass('hidden');
            $('.circle-nav').removeClass('hide-button');
            $('.news-block').removeClass('news-block-show');
            $('#sponsor-carousel-toggle').removeClass('hide-toggle');
        }
        return false;
    });
});


//toggle navigation
$(function() {
    $('.btn-toggle').click(function(){
        if($('.plus-ex').hasClass('plus')){
            $('.plus-ex').removeClass('plus');
            $('.plus-ex').addClass('ex');
            $('#circle-navigation-buttons li').addClass('out');
            $('#small-circle-navigation').addClass('circle-hide');
            $('.sponsor-carousel-wrap').addClass('hidden');
            $('.circle-nav').addClass('hide-button');
            $('.news-block').addClass('news-block-show');
            $('#sponsor-carousel-toggle').addClass('hide-toggle');
        } else {
            $('.plus-ex').removeClass('ex');
            $('.plus-ex').addClass('plus');
            $('#circle-navigation-buttons li').removeClass('out');
            $('#small-circle-navigation').removeClass('circle-hide');
            $('.sponsor-carousel-wrap').removeClass('hidden');
            $('.circle-nav').removeClass('hide-button');
            $('.news-block').removeClass('news-block-show');
            $('#sponsor-carousel-toggle').removeClass('hide-toggle');
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
        items : 5, //10 items above 1000px browser width
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


//card toggle
jQuery( document ).ready(function( $ ){
    $( ".btn-fav" ).click(function() {
        if($('.card-image').hasClass('full-image')){
            $('.card-image').removeClass('full-image');
            $('.card-image').addClass('half-image');
            $('.card-action').addClass('show-fav');
        } else {
            $('.card-image').removeClass('half-image');
            $('.card-image').addClass('full-image');
            $('.card-action').removeClass('show-fav');
        }
        return false;
    });
});


//top bar more menu
$(function() {
    $('.ya-more-menu-bar').click(function(){
        if($('.top-bar').hasClass('top-bar-hidden')){
            $('.top-bar').removeClass('top-bar-hidden');
            $('.top-bar').addClass('top-bar-visible');
            $('.navbar-default ').addClass('top-bar-space');
        } else {
            $('.top-bar').removeClass('top-bar-visible');
            $('.top-bar').addClass('top-bar-hidden');
            $('.navbar-default ').removeClass('top-bar-space');
        }
        return false;
    });
});




(function() {
    var morphSearch = document.getElementById( 'morphsearch' ),
        input = morphSearch.querySelector( 'input.morphsearch-input' ),
        ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
        isOpen = isAnimating = false,
    // show/hide search area
        toggleSearch = function(evt) {
            // return if open and the input gets focused
            if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

            var offsets = morphsearch.getBoundingClientRect();
            if( isOpen ) {
                classie.remove( morphSearch, 'open' );

                // trick to hide input text once the search overlay closes
                // todo: hardcoded times, should be done after transition ends
                if( input.value !== '' ) {
                    setTimeout(function() {
                        classie.add( morphSearch, 'hideInput' );
                        setTimeout(function() {
                            classie.remove( morphSearch, 'hideInput' );
                            input.value = '';
                        }, 300 );
                    }, 500);
                }

                input.blur();
            }
            else {
                classie.add( morphSearch, 'open' );
            }
            isOpen = !isOpen;
        };

    // events
    document.querySelector('.search-bar-toggle').addEventListener( 'click', toggleSearch );
    ctrlClose.addEventListener( 'click', toggleSearch );
    // esc key closes search overlay
    // keyboard navigation events
    document.addEventListener( 'keydown', function( ev ) {
        var keyCode = ev.keyCode || ev.which;
        if( keyCode === 27 && isOpen ) {
            toggleSearch(ev);
        }
    } );


    /***** for demo purposes only: don't allow to submit the form *****/
    morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
})();



$( ".search-bar-toggle" ).click(function() {
    $( "#morphsearch" ).show( "slow" );
});



