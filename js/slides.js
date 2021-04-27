    
    $(function(){
        $('.images').funName(1000); 
        $('p').colors({
            'color':'blue',
            'backgroundColor':'yellow'
        }).hide().fadeIn('fast');

        $('.images').cycle({
            timeout:5000, 
            pause: '1',
            after:onAfter,
            before:onBefore
        });

        function onBefore() {
             $('#slider').slider('value',$('.images img').index(this));
        };
        
        function onAfter() {
             $('#title').html(this.alt );
             let h=($('.images img').height()/2);
             let w=($('.images img').width()/2);
             $('#title').css({
                zIndex: 100,
                color: 'wheat',
                position: 'absolute',
                left: '50%',
                top: '50%'
             });
        };
        
        
        $('<div id="slider"></div>').slider({
           min :0,
           max:$('.images img').length-1
          
        }).appendTo('#controls');
        
    });
    
    

