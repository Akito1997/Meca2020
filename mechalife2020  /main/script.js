$(function(){
    
    $('#top').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },'slow')
    });
    
    $('.menu-icon').click(function(){
        $('#header-menu').slideToggle();
    });
    $('.hold').click(function() {
        $('#hold-modal').fadeIn();
      });
    $('.close-modal').click(function() {
        $('#hold-modal').fadeOut();
      });

    
      
    // for(let i=1;i<=13;i++){
    //     $('#video'+i).hover(
    //         function(){
    //             $('#video'+i).animate({
    //                 'font-size':'100px'
    //              },1000);

    //          },
    //         function(){
                

    //         }
    //     );
    // };
})