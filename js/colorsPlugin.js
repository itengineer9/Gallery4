/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {
    jQuery.fn.colors = function (options) {
        var defaults ={
                'color':'white',
                'backgroundColor':'pink'
        };
        // das objekt obj enthält die modifizierten werte
        
        var obj = $.extend(defaults, options);
        
        return this.each(function(){
            $(this).css(obj);
        });
    };
})(jQuery);