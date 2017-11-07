$(".n6").mouseenter(function(){
	$(this).css("border","1px solid gray");
	$(".right").css("display","block");
})
$(".n6").mouseleave(function(){
	$(this).css("border","none");
	$(".right").css("display","none");
})
$(".b1").focus(function(){
	$(this).val("");
})
$(".a2 img").mouseenter(function(){
	$(".list1").show();
})
$(".list1 li").mouseenter(function(){
    i=$(this).index();
    $(".list2").show();
    $(".list2").stop().animate({
    	"left":"220px"
    },500)
	$.ajax({
		type:"get",
		url:"js/data.json",
		success:function(json){
			var str="";
			var k="list"+(i+1);
			str=`<p><span>${json[k]["bt"]}</span>></p>	
				<a href="">${json[k]["cp1"]}</a><a href="">${json[k]["cp2"]}</a>
				<a href="">${json[k]["cp3"]}</a>`
			$(".list2").html(str);
		}
	})	
})
$(".list1").mouseleave(function(){
	$(".list2").hide().animate({"left":0},100);
	$(".list1").hide();
})
var flag=true;
$(".icon-dayuhao").click(function(){
	if(flag){
		$(this).next().find("li").show();
		flag=false;
	}else{
		$(this).next().find("li").hide();
		flag=true;
	}
})
$(".lin").mouseenter(function(){
	$(".lin").find(".sec9").hide().prev().show();
	$(this).find(".sim").hide().next().show();
	 $(this).css("height","73px").siblings().css("height","17px");
})
$(".lin").mouseleave(function(){
	 i=$(this).index();
	 $(this).find(".sim").css("display","block");
	 $(this).find(".sec9").css("display","none"); 
})

$(".lins2").mouseleave(function(){
	 $(".lin").eq(i).find(".sec9").css("display","block");
	 $(".lin").eq(i).find(".sim").css("display","none");
	 $(".lin").eq(i).css("height","73px");
})
$("#bottom li").click(function(){
   	   $("#small img").eq($(this).index()).show().siblings().hide();
   	   $("#big img").eq($(this).index()).show().siblings().hide();
   })
   $("#small").mousemove(function(e){
   	     var e=e||event;
   	     var x=e.pageX-$("#mask").width()/2-$("#box").offset().left;
   	     var y=e.pageY-$("#mask").height()/2-$("#box").offset().top;
   	     x=Math.min($("#small").width()-$("#mask").width(),Math.max(0,x));
   	     y=Math.min($("#small").height()-$("#mask").height(),Math.max(0,y));
   	     $("#mask").css({
   	     	"left":x,
   	     	 "top":y
   	     })     
   	     var x1=x*$(".bigImage").width()/$("#mm").width();
   	     var y1=y*$(".bigImage").height()/$("#mm").height();
   	     $(".bigImage").css({
   	     	"left":-x1,
   	     	 "top":-y1
   	     })
   })
   $("#small").mouseover(function(){
   	  $("#big").show();
   	  $("#mask").show();
   	  $("#layer").show();
   })
    $("#small").mouseout(function(){
   	  $("#big").hide();
   	  $("#mask").hide();
   })
    $(".list12 p").click(function(){
    	 $(".list12 p").find("span").hide();
    	 $(this).find("span").show();
    	 $(".list12 p").find("strong").css("color","");
    	 $(this).find("strong").css("color","#000");
    })
   $(".add").click(function(){
   	   i=$(".number1").html();
   	   i++;
   	   $(".number1").html(i);
   })
    $(".loss").click(function(){
   	   i=$(".number1").html();
   	   i--;
   	   if(i<1){
   	   	i=1;
   	   }
   	   $(".number1").html(i);
   })
$(".list26 a").click(function(){
     $(this).css("border-bottom","1px solid white").siblings()
     .css("border-bottom","none");;
     $(this).css("border-top","2px solid red").siblings().css("border-top","1px solid #eaeaea");
})
$(".list17 a").click(function(){
	$(this).css("background","rgba(243,236,236,0.4)")
	.siblings().css("background","");
	$(".new").eq($(this).index()).show().siblings().hide();
})
var flag=true;
$(".cbl li").click(function(){
    if(flag){
		$(".tck").animate({
			"right":"50px"
		},800,function(){
			flag=false;
		})		
	}else{
		$(".tck").css("right","-220px");
		flag=true;
	}		
})
$(".tck1 a").click(function(){
	$(".tck").css("right","-220px");
	flag=true;
})
$(".returntop").click(function(){
	 $("body,html").animate({
	 	"scrollTop":0
	 },1000)
})
 $(window).scroll(function(){
	  	 var $stop=$("body,html").scrollTop();
	  	 if($stop>$("top").height()){
	  	 	$(".nav").css({
	  	 		"position":"fixed",
	  	 		 "top":0,
	  	 		 "z-index":3	
	  	 	})
	  	 }else{
	  	 	$(".nav").css("position","static");
	  	 }
	  })

