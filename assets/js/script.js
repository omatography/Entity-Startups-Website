
// custom js using jquery haha 
$(document).ready(function(){

  // to exit preloader after loading
  $('#preloader').removeClass('preloader')
  $('#preloader').addClass('preloader-none')
  $('#preloader-element').addClass('none')

  //animate css effect in navbar
  $('#navbar').addClass(' animate__animated animate__fadeInDown')
  $('#mynavbar').addClass(' animate__animated animate__fadeInDown')  

  // navbar animation when scroll bg dark
  $(window).scroll(function(){
    if($(window).scrollTop() > 60){
          
      $('#navbar').addClass("bg-color");
      $('#navbar').removeClass("bg-color-transparent");

      }
    else{
      $('#navbar').addClass("bg-color-transparent");
      $('#navbar').removeClass("bg-color");
      }
  });

  // about part scroll in fade in animation css
  $('.about-part').waypoint(function(direction){
    $('.about-part').addClass('animate__animated animate__fadeIn')

    },{
        offset: '50%'
  });   

  // services part scroll in fade in animation css
  $('.services-part').waypoint(function(direction){
    $('.services-part').addClass('animate__animated animate__fadeIn')

    },{
      offset: '50%'
  })

  // contact part scroll in fade in animation css
  $('.contact-part').waypoint(function(direction){
    $('.contact-part').addClass('animate__animated animate__fadeIn')

    },{
        offset: '50%'
  })

  // home header fade in animation css
  $('.home-container').addClass(' animate__animated animate__fadeIn animate__delay-1s')

  
  // postcard animation css pulse for 1
  $('#pc1').hover(function(){
    $('#pc1').addClass(' animate__animated animate__pulse')
    
  });
  $('#pc1').mouseleave(function(){
    $('#pc1').removeClass(' animate__animated animate__pulse')
      
  });

  // postcard animation css pulse for 2
  $('#pc2').hover(function(){
    $('#pc2').addClass(' animate__animated animate__pulse')
      
  });
  $('#pc2').mouseleave(function(){
    $('#pc2').removeClass(' animate__animated animate__pulse')
        
  });
  
  // postcard animation css pulse for 3
  $('#pc3').hover(function(){
    $('#pc3').addClass(' animate__animated animate__pulse')
        
  });
  $('#pc3').mouseleave(function(){
    $('#pc3').removeClass(' animate__animated animate__pulse')
          
  });  
     
  // postcard animation css pulse for 4
  $('#pc4').hover(function(){
    $('#pc4').addClass(' animate__animated animate__pulse')
      
  });
  $('#pc4').mouseleave(function(){
    $('#pc4').removeClass(' animate__animated animate__pulse')
        
  });

  // postcard animation css pulse for 5
  $('#pc5').hover(function(){
    $('#pc5').addClass(' animate__animated animate__pulse')
        
  });
  $('#pc5').mouseleave(function(){
    $('#pc5').removeClass(' animate__animated animate__pulse')
          
  });


  // servicescard animation css pulse for 1
  $('#s1').hover(function(){
    $('#s1').addClass(' animate__animated animate__pulse')
        
  });
  $('#s1').mouseleave(function(){
    $('#s1').removeClass(' animate__animated animate__pulse')
          
  });

  // servicescard animation css pulse for 2
  $('#s2').hover(function(){
    $('#s2').addClass(' animate__animated animate__pulse')
        
  });
  $('#s2').mouseleave(function(){
    $('#s2').removeClass(' animate__animated animate__pulse')
          
  });

  // servicescard animation css pulse for 3
  $('#s3').hover(function(){
    $('#s3').addClass(' animate__animated animate__pulse')
        
  });
  $('#s3').mouseleave(function(){
    $('#s3').removeClass(' animate__animated animate__pulse')
          
  });

  // servicescard animation css pulse for 4
  $('#s4').hover(function(){
    $('#s4').addClass(' animate__animated animate__pulse')
        
  });
  $('#s4').mouseleave(function(){
    $('#s4').removeClass(' animate__animated animate__pulse')
          
  });
    
  // js for one page nav
  $('#navmenu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing'
  });
        
  

});


  