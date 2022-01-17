jQuery(function($){
    'use strict';

    $(document).ready(function(){
        $('.menu').click(function(){
            $('ul').toggleClass('active');
        })
    });
});