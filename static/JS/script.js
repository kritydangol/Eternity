$(document).ready(function(){
    //See more-Gallery
        $("#row1").hide();
        $("#row2").hide();
        $("#row3").hide();

        $(".see2").hide();
        $(".see3").hide();
        $(".see4").hide();

        //See more #1
            //show the first hidden row, hide the current button and, show the next button
                $(".see1").click(function(){
                    $(this).hide();
                    $("#row1").slideDown();
                    $(".see2").show();
                });
        //See more #2
            //show the second hidden row, hide the current button and, show the next button
                $(".see2").click(function(){
                    $(this).hide();
                    $("#row2").slideDown();
                    $(".see3").show();
                });
        //See more #3
            //show the third hidden row, hide the current button and, show the next button
                $(".see3").click(function(){
                    $(this).hide();
                    $("#row3").slideDown();
                    $(".see4").show();
                });
        //See more #4
            //hide all the rows, the crrent button and show the frist button
                $(".see4").click(function(){
                    $(this).hide();
                    $("#row1").slideUp();
                    $("#row2").slideUp();
                    $("#row3").slideUp();
                    $(".see1").show();
                });

        jQuery('[data-toggle="tooltip"]').tooltip();  
         
    //to change white icon to black icon on hover and vice versa 

        // //email
        // $(".email").mouseover(function(){
        //     $(".email-img").attr("src","static/images/emailhover.png");
        //     $(".email a").css("color","black").css("text-decoration","none");
        // }).mouseout(function(){
        //     $(".email-img").attr("src","static/images/email.png");
        //     $(".email a").css("color","white");
        // });

        // //contact
        // $(".contact").mouseover(function(){
        //     $(".contact-img").attr("src","static/images/contacthover.png");
        // }).mouseout(function(){
        //     $(".contact-img").attr("src","static/images/contact.png");
        // });
        
        // //direction
        // $(".direction").mouseover(function(){
        //     $(".direction-img").attr("src","static/images/directionhover.png");
        //     $(".direction a").css("color","black").css("text-decoration","none");
        // }).mouseout(function(){
        //     $(".direction-img").attr("src","static/images/direction.png");
        //     $(".direction a").css("color","white");
        // });

        // $(".rounded-circle").mouseover(function(){
        //     $(this).animate({
        //         height:'53px',
        //         width:'53px'
        //     })
        // }).mouseout(function(){
        //     $(this).animate({
        //         height:'50px',
        //         width:'50px'
        //     })
        // });


});