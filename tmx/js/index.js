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
$(".shoper").hover(function(){
	$(".shopping").show();
	$(".shop").css({
		"border":"1px solid gray",
		"border-bottom":"2px solid white",
	"top":-2});
},function(){
	$(".shopping").hide();
	$(".shop").css({
		"border":"none",
	"top":-2});
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
})
var i=0;
var time;
time=setInterval(function(){
	 i++;
	 if(i==3){
	 	i=0;
	 } 
	$(".list3 ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
	$(".list3 p span").eq(i).addClass("active").siblings().removeClass("active");
	
},1000)
$(".list3 p span").mouseover(function(){
	clearInterval(time);
	$(this).addClass("active").siblings().removeClass("active");
	$(".list3 ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
})
$(".list3 p span").mouseout(function(){
	var i=$(this).index();
	time=setInterval(function(){
		 i++;
		 if(i==3){
		 	i=0;
		 } 
		$(".list3 ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
		$(".list3 p span").eq(i).addClass("active").siblings().removeClass("active");
		
	},1000)
})
$(".list12 p").eq(0).mouseenter(function(){
	$(this).css({"border-top":"2px solid red",
	            "border-bottom":"none",
	            "border-right":"1px solid gray"
	}).siblings().css({"border-top":"1px solid gray",
   "border-bottom":"1px solid gray"});
})
   $(".list12 p").eq(1).mouseenter(function(){
	$(this).css({"border-top":"2px solid red",
	            "border-bottom":"none",
	            "border-left":"1px solid gray"
	}).siblings().css({"border-top":"1px solid gray",
   "border-bottom":"1px solid gray"});
})
$(".list12 p").mouseenter(function(){
	$(".list13 ul").eq($(this).index()).css("display","block")
	                                   .siblings().css("display","none")      
})
$.ajax({
		type:"get",
		url:"js/data1.json",
		success:function(json){
			var str="";
			var arr=json["list1"];
			for(var j=0;j<arr.length;j++){
				str+=`<li>
			   	  	 	 <img src="img/${arr[j]}" alt=""  class="imgss"/>
			   	  	 	 <p class="k1"><a href="" class="k2">2017新款百搭拖鞋</a><span class="k3">￥60.00</span></p>
			   	  	 	 <p><span class="k4">货号:</span><span class="k5">[8143]</span><img  class="imgsk"src="img/24.jpg" alt="" /><span span class="k6">人气:841</span></p>	
			   	  	 	<p class="k7">代理价:登录查看</p><p class="k8">一键上传淘宝</p>
			   	  	 	</li>`
			}
			$(".sec2 ul").html(str);	
		}
})	
$(".sec a:not(.az)").click(function(){
	i=$(this).index();
	$(this).css("background","rgba(146,160,160,0.4)").siblings().css("background","");
	$.ajax({
		type:"get",
		url:"js/data1.json",
		success:function(json){
			var str="";
			var k="list"+i;
			var arr=json[k];
			for(var j=0;j<arr.length;j++){
				str+=`<li>
			   	  	 	 <img src="img/${arr[j]}" alt=""  class="imgss"/>
			   	  	 	 <p class="k1"><a href="" class="k2">2017新款百搭拖鞋</a><span class="k3">￥60.00</span></p>
			   	  	 	 <p><span class="k4">货号:</span><span class="k5">[8143]</span><img  class="imgsk"src="img/24.jpg" alt="" /><span span class="k6">人气:841</span></p>
			   	  	 	<p class="k7">代理价:登录查看</p><p class="k8">一键上传淘宝</p>
			   	  	 	</li>`
			}
			$(".sec2 ul").html(str);
			
		}
	})		
})
$.ajax({
		type:"get",
		url:"js/data1.json",
		success:function(json){
			var str="";
			var arr=json["list3"];
			for(var j=0;j<arr.length;j++){
				str+=`<li>
			   	  	 	 <img src="img/${arr[j]}" alt=""  class="imgss"/>
			   	  	 	 <p class="k1"><a href="" class="k2">2017新款百搭拖鞋</a><span class="k3">￥60.00</span></p>
			   	  	 	 <p><span class="k4">货号:</span><span class="k5">[8143]</span><img  class="imgsk"src="img/24.jpg" alt="" /><span span class="k6">人气:841</span></p>	
			   	  	 	<p class="k7">代理价:登录查看</p><p class="k8">一键上传淘宝</p>
			   	  	 	</li>`
			}
			$(".sec4 ul").html(str);	
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
$(".list14 p").eq(0).mouseenter(function(){
	$(this).css({"border-top":"2px solid red",
	            "border-bottom":"none",
	}).siblings().css({"border-top":"1px solid gray",
   "border-bottom":"1px solid gray"});
})
   $(".list14 p").eq(1).mouseenter(function(){
	$(this).css({"border-top":"2px solid red",
	            "border-bottom":"none"
	}).siblings().css({"border-top":"1px solid gray",
   "border-bottom":"1px solid gray"});
})
$(".list14 p").mouseenter(function(){
	$(".list15 ul").eq($(this).index()).css("display","block")
	                                   .siblings().css("display","none")      
})
setInterval(function(){
   $(".list15 ul").each(function(){
	   $(this).animate({
	   	"top":-45
	   },1000,function(){
	   	 $(this).find("li").slice(0,1).clone().appendTo($(this));
	   	 $(this).css({"top":0})
	     $(this).find("li").slice(0,1).remove();
	   })  
   })
},1000)
$(".put1").focus(function(){
	$(this).val("");
})
$(".list18 a").click(function(){
	$(this).css({
		"background":"rgba(146,160,160,0.4)",
		"border-left":"1px solid #d8d0d0",
		"border-right":"1px solid #d8d0d0"
	}).siblings().css({
		"background":"",
		"border":"none"
	})
	$(".list19 li").eq($(this).index()-1).show().siblings().hide();
})
$(".lt li").click(function(){
	$("body,html").animate(
		{
		 scrollTop:$(".floor").eq($(this).index()).offset().top
		},1000)
})
$(window).scroll(function(){
    var stop=$("body,html").scrollTop();
    for(var i=0;i<$(".floor").length;i++){
    	var m=Math.abs($(".floor").eq(i).offset().top-stop);
    	var n=$(".lt li").eq(i).height();
    	if(m<n){
    		$(".lt li").eq(i).css("background","red");
    	}else{
    		$(".lt li").eq(i).css("background","");
    	}
    }
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

