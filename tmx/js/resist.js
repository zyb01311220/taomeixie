
function check(name1,name2,reg){
	var flag="";
	name1.blur(function(){
		var  str=name1.val();
		if(str!=""){
			if(reg.test(str)){
			name2.html("合法")
			name2.css({
			   "color":"#000",
			    "font-size":"14px"
			})
			 flag=true;
			}else{
				name2.html("不合法")
				name2.css({
				   "color":"red",
				    "font-size":"14px"
				})
				flag=false;
			}
		}
		return flag;
	})
}
check($(".t1"),$(".s1"),/^\w{6,12}$/);
check($(".t2"),$(".s2"),/^\w{6,10}@(163|126|qq)\.com$/);  
$(".t3").keyup(function(){
	var str=$(".t3").val();
	var reg1=/^\d+$/;
	var reg2=/^[a-z]+$/i;
    var reg3=/^[!@#$%^&*()+]+$/;
	var reg4=/\d+/;
	var reg5=/[a-z]+/i;
	var reg6=/[!@#$%^&*()+]+/;
	if(str.length<5){
		$(".span1").css("background","#c4c4c4");
		$(".span2").css("background","#c4c4c4");
		$(".span3").css("background","#c4c4c4");
		return;
	}
	if(reg1.test(str)||reg2.test(str)||reg3.test(str)){
		$(".span1").css("background","orange");
		$(".span2").css("background","#c4c4c4");
		$(".span3").css("background","#c4c4c4");
		
	}else if(reg4.test(str)&&reg5.test(str)&&reg6.test(str)){
		$(".span1").css("background","orange");
		$(".span2").css("background","orange");
		$(".span3").css("background","orange");
	}else{
		$(".span1").css("background","orange");
		$(".span2").css("background","orange");
		$(".span3").css("background","#c4c4c4");
	}
})
$(".t4").blur(function(){
	if($(".t3").val()!=""){
	    if($(".t3").val()==$(".t4").val()){
		$(".s4").html("密码一致");
	    }else{
	     $(".s4").html("密码不一致");	
	    }
	}
	$(".s4").css({
	   "color":"#000",
	   "font-size":"14px"
    })
})
check($(".t5"),$(".s5"),/^(13|15|18|17)\d{9}$/);
check($(".t6"),$(".s6"),/[\u4e00-\u9fa5]+/);
check($(".t7"),$(".s7"),/^[1-9]{6,10}$/);
check($(".t8"),$(".s8"),/^\w{6,8}$/);
check($(".t9"),$(".s9"),/^(http:\/\/www\.taomeixie\.com)$/);
$(".t11").val(checkNumber())
function rand(min,max){
       return Math.floor( Math.random()*(max-min+1)+min )
    }
	function checkNumber(){
		var arr = [];
		for( var i = 0 ; i < 4; i ++ ){
			var code = rand(48,122);
			if( code >= 58 && code <= 64 || code >= 91 && code <= 96 ){ 
				i--;
			}else{
				arr.push( String.fromCharCode(code) ) ;
			}
		}
		return arr.join("");
	}	 
	$(".t11").click(function(){
		$(this).val(checkNumber());
	})
	$(".ipt").click(function(){
		if($(".s1").html()=="合法"&&$(".s4").html()=="密码一致"){
			document.cookie="uname="+$(".t1").val();
            document.cookie="upwd="+$(".t3").val();
            location.href="login.html";
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
window.onload=function(){
	$(".header3").animate({"left":0},200);
	$(".header7").animate({"right":0},200);
}

