/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// das  Plug in steht in einem IIFE ( iffy) Immediale Invoked Function Expression

(function($){
    $.fn.funName = function(speed){
        this.on('click', '.accordion-control', function(e){
            e.preventDefault();
            $(this)
                    .next('.accordion-panel')
                    .not(':animated')
                    .slideToggle(speed);
        });
        return this;
    };
})(jQuery);