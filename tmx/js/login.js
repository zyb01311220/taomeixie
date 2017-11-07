
$("form").submit(function(){
	var names=$(".t1").val();
	var pass=$(".t3").val();
	var str=document.cookie;
	var arr=str.split("; ")
	var ipass;
    var iname;
	 for(var i=0;i<arr.length;i++){
	 	 item=arr[i].split("=");
	 	 if(item[0]=="uname"){
	 	 	iname=item[1];
	 	 }
	 	 if(item[0]=="upwd"){
	 	 	ipass=item[1];
	 	 }
	 }
	 if(names==iname&&pass==ipass){
        return true;
	 }
	 return false;
})
$(".t11").val(checkNumber());
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
	$(".t11").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
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
	$(".header7").animate({"left":0},200);
	$(".header3").animate({"right":0},200);
}



