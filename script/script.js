
    $(function(){
        $(".mainMenu>li").mouseover(function(){
            $(this).children(".subMenu").stop().slideDown();
        });
        $(".mainMenu>li").mouseleave(function(){
            $(this).children(".subMenu").stop().slideUp();
        });
        
        // 탭메뉴
        $(".tabMenu>a").click(function(){
            $(this).addClass("on").siblings("a").removeClass("on");
            let idx = $(this).index();  console.log(idx);
            $(".tabContents>ul").eq(idx).show().siblings("ul").hide();
        });
    
        //슬라이드
        setInterval(function(){
            $(".slide>li:first").fadeOut(1000).fadeIn(1000);
            $(".slide>li:first").insertAfter(".slide>li:last");
        }, 2000);
        
        //팝업

        $(".popUpLine").click(function(){
            $(".popUp").show(); 
        })
        $(".close").click(function(){
            $(".popUp").hide();
        });
    });   