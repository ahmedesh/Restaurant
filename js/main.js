
$(function () {
    

    $('.slider').height($(window).height())
    $(window).on('resize' , function () {
        $('.slider').height($(window).height());
    })
    })


$(function () {
    $('.nn').animate({ left:'0px'  } , 1000 );
});

$(function () {
    $('.tt').animate({ top:0  } , 1000 );
});


$(".our-menue ul li").click(function() {
    $(this).siblings().removeClass("active");    /*siblings يعني اشقاء */
    $(this).addClass("active");

    if ($(this).data("class") === "all") {
        $(".our-menue .row >div").css("opacity", 1);
    } else {
        $(".our-menue .row >div").css("opacity", "0.2");
        $($(this).data("class")).css("opacity", 1);   // == $(.mobile).css(opacity , 1)  اكنك بتعمل كدا مثلا بس هيبقا مع كل حاجه هتضغط عليها بقا 

        // $(".our-menue .row >div").hide();
        // $($(this).data("class")).show();   // == $(.mobile).css(opacity , 1)  اكنك بتعمل كدا مثلا بس هيبقا مع كل حاجه هتضغط عليها بقا 
    }
})

// $('.our-menue .all').click(function () {
//     // $('.row >div').css('display','none');
//     // $('.row >div.main').css('display','block')
//     $('.our-menue .row >div.all').show()
// })

// $('.our-menue .piza').click(function () {
//     // $('.row >div').css('display','none');
//     // $('.row >div.one').css('display','block')
//     $('.our-menue .row >div').hide()
//     $('.our-menue .row >div.piza').show()
// })
// $('.our-menue .pasta').click(function () {
//     // $('.row >div').css('display','none');
//     // $('.row >div.two').css('display','block')
//     $('.our-menue .row >div').hide()
//     $('.our-menue .row >div.pasta').show()
// })
// $('.our-menue .salad').click(function () {
//     // $('.row >div').css('display','none');
//     // $('.row >div.three').css('display','block')
//     $('.our-menue .row >div').hide()
//     $('.our-menue .row >div.salad').show()
// })
// $('.our-menue .desert').click(function () {
//     // $('.row >div').css('display','none');
//     // $('.row >div.four').css('display','block')
//     $('.our-menue .row >div').hide()
//     $('.our-menue .row >div.desert').show()
// })



function myconnect(){
   return document.getElementById('connect');
}
myconnect();

// var myScroll = document.getElementById('scroll');
// myScroll.onclick = function(){
//     // window.scrollTo(0,document.body.clientHeight)  // === window.scrollTo(0,document.body.offsetHeight)  // === window.scrollTo(0,document.body.scrollHeight)
//      window.scrollTo(0,-500)
//     if(window.scrollY===document.body.clientHeight){
//         document.getElementById('scroll').style.display == false;
//     }
// }


// var myScroll = document.getElementById('scroll2');
// myScroll.onclick = function(){
    // window.scrollTo(0,document.body.clientHeight)  // === window.scrollTo(0,document.body.offsetHeight)  // === window.scrollTo(0,document.body.scrollHeight)
    $('#scroll2').on('click' , function () {
        $('html , body').animate({scrollTop:0} ,1000)
        //$(window).scrollTop(0)  
        //$(window.scrollTo(0,0))  تساوي الداله اللي فوقها بالظبط فالفعل
    } )
    
$(window).on('scroll' , function () {
    if($(window).scrollTop() > 500){
        $('#scroll2 i').fadeIn(1000)
    }
    else{
        $('#scroll2 i').fadeOut(1000)
    }
    
    console.log($(window).scrollTop());
})


/*
var myScroll2 = document.getElementById('scroll2');
myScroll2.onclick = function(){
    window.scrollTo(0,0)
} */

// $('#scroll3 i').on('click' , function () {
//     $('html, body').animate({
//         scrollTop: $section.offset().top
//       },500 );
// })


// ================== هام جدا  =================
    // function scrollToSection(event) {
    //   event.preventDefault();
    //   var $section = $($(this).attr('href')); 
    //   $('html, body').animate({
    //     scrollTop: $section.offset().top
    //   },1000 );
    // }
    // $(' [data-scroll]').on('click', scrollToSection);
    // //   $('#scroll3 a').on('click', scrollToSection);

    $(' #scroll3 ').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.our-story').offset().top  // دا الصح 
        },1000 );
    });

    $(' #scroll4 ').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.best-seller').offset().top  // دا الصح 
        },1000 );
    });

    $(' #scroll5 ').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.our-menue').offset().top  // دا الصح 
        },1000 );
    });

    $(' #scroll6 ').on('click', function () {
        $('html, body').animate({
            scrollTop: $('footer').offset().top  // دا الصح 
        },1000 );
    });

    $(' .news ').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.best-seller').offset().top  // دا الصح 
        },1000 );
    });
    //================
    // $(' #scroll3 a ').on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: 700
    //     },1000 );
    // });


    // لما اسجل فالفورم وبعدين اضغط عالزرار اني سجلت يظهرلي الكلمه اني سجلت
    $('.contact form').submit(function (e) {
        e.preventDefault()
        if($('.contact input').val()){
            $('.contact .success').fadeIn(1000)
        } 
    })

    
    //==================== niceScroll =======================
    $("html , body").niceScroll({
        cursorcolor:'#dc3545',
        cursoropacitymin: 0.2,
        cursorwidth: "8px",
        zindex:999,
        cursorborder: 'none',
        
    });

     // ===================== google sheet ======================
             const scriptURL = 'https://script.google.com/macros/s/AKfycbyc5kvIhz-m9luf2OCECJpe7_ZnhOpr6I_ZD7Kc/exec'
            // const scriptURL = 'https://script.google.com/macros/s/AKfycbzw2K631lB4QGR8DZ6dr1BDR0hUj33jxizwH7Khl7iv_bf-5hzH/exec'

            const form = document.forms['submit-to-google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
            })
            