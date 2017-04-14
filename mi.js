window.onload=function(){
	//nav购物车
	let bgbox=document.querySelectorAll('.bgbox');
	let bgboxa=document.querySelectorAll('.bgboxa');
	let bgboxout=document.querySelectorAll('.bgboxout');
	let bgboxoutin=document.querySelectorAll('.bgboxoutin');
	let cover=document.querySelectorAll('.cover');
	let height=[];
	let width=[];
	bgboxa.forEach(function(value,index){
	 	width[index]=parseInt(getComputedStyle(value,null).width);
	})
	bgboxoutin.forEach(function(value,index){
	 	height[index]=parseInt(getComputedStyle(value,null).height);
	})
	bgbox.forEach(function(value,index){
		value.onmouseover=function(){
				bgboxa[index].classList.add('hover');
				animate(bgboxout[index],{height:height[index]},100);
				cover[index].style.width=width[index]+'px';
		}
		value.onmouseout=function(){
			bgboxa[index].classList.remove('hover');
			animate(bgboxout[index],{height:0},100);
			cover[index].style.width="0";
		}
		
	})	
	
//	banner上方
	let ball=document.querySelector('.ball');
	let babgbox=document.querySelectorAll('.ball>.bgbox1');
	let babgboxout=document.querySelector('.ball>.bgboxout1');
	let babgboxoutin=document.querySelectorAll('.ball>.bgboxout1>.bgboxoutin1');
	ball.onmouseover=function(){
		babgboxout.classList.add('border');
		animate(babgboxout,{height:230},100);
		babgbox.forEach(function(value,index){
			value.onmouseover=function(){
				babgboxoutin.forEach(function(value){
					value.style.display='none';
				})
				babgboxoutin[index].style.display='block';
			}
		})
	}
	ball.onmouseout=function(){
		animate(babgboxout,{height:0},100);
		babgboxout.classList.remove('border');
	}
		
	
//	banner左侧
	let bgboxss=document.querySelectorAll('.bgbox1');
	let bgboxass=document.querySelectorAll('.bgboxa1');
	let bgboxoutss=document.querySelector('.bgboxout1');
	let bgboxoutinss=document.querySelectorAll('.bgboxoutin1');
	let coverss=document.querySelectorAll('.cover1');
	let widthss=[];
	bgboxass.forEach(function(value,index){
	 	widthss[index]=parseInt(getComputedStyle(value,null).width);
	})
	bgboxss.forEach(function(value,index){
		value.onmouseover=function(){
				bgboxass[index].classList.add('hover');
				animate(bgboxoutss,{height:230},1);
				coverss[index].style.width=width1[index]+'px';
		}
		value.onmouseout=function(){
			bgboxass[index].classList.remove('hover');
			animate(bgboxoutss,{height:0},1);
			coverss[index].style.width="0";
		}
		
	})
	//banner left
	let bgbox1=document.querySelectorAll('.bannerall');
	let bgboxa1=document.querySelectorAll('.bannerleft1');
	let bgboxout1=document.querySelectorAll('.baout');
	let bgboxoutin1=document.querySelectorAll('.bain');
	let widtha=[];
	bgboxoutin1.forEach(function(value,index){
	 	widtha[index]=parseInt(getComputedStyle(value,null).width);
	})
	bgbox1.forEach(function(value,index){
		value.onmouseover=function(){
			bgboxa1[index].classList.add('hover');
			animate(bgboxout1[index],{width:widtha[index]},1);
		}
		value.onmouseout=function(){
			bgboxa1[index].classList.remove('hover');
			animate(bgboxout1[index],{width:0},1);
		}	
	})	
	//	轮波图banner
	const rightww=document.querySelector(".righta");
	const leftww=document.querySelector(".lefta");
	const boxww=document.querySelector(".boxall");
	const imgww=document.querySelectorAll(".boxall>img");
	const letter=document.querySelectorAll(".boxall>.bannercircle>.circle");
	let m;
	let i=0;
	function move(way="right"){
		if(way=="right"){
			i++;
			if(i>=imgww.length){
				i=0;
			}
		}else if(way=="left"){
			i--;
			if(i<0){
				i=imgww.length-1;
			}
		}
		imgww.forEach(function(value,index){
			value.style.opacity=0;
			letter[index].classList.remove("color");
		});
		imgww[i].style.opacity=1;
		letter[i].classList.add("color");
	};
	let t=setInterval(move,2000);
	boxww.onmouseover=function(){
		clearInterval(t);
	};
	boxww.onmouseout=function(){
		t=setInterval(move,2000);
	}
	letter.forEach(function(value,index){
		value.onmouseover=function(){
			m=setTimeout(function(){
				imgww.forEach(function(value,index){
					value.style.opacity=0;
					letter[index].classList.remove("color");
				});
				imgww[index].style.opacity=1;
				value.classList.add("color");
				i=index;
			},200);
		}
		value.onmouseout=function(){
			clearTimeout(m);
		}
	})
	let flagww=true;
	rightww.onclick=function(){
		if(flagww){
			flagww=false;
			move();	
		}	
	}
	leftww.onclick=function(){ 
		if(flagww){
			flagww=false;
			move("left");
		}	
	}
	imgww.forEach(function(value){
		value.addEventListener('transitionend',function(){//事件监听，当transition运行完毕，执行 
			flagww=true;
			console.log(222);
		})
	})
//轮播图2   双下标   小米明星单品
function tab2(pareat){
	let box2=pareat.querySelector(".qqall");
	let	img2=pareat.querySelectorAll(".qqall>.qq");
	let	left2=pareat.querySelector(".boxall3>.left2");
	let	right2=pareat.querySelector(".boxall3>.right2");
	let color=[left2,right2];
	let	now=0;
	let	next=0;
	let	width=parseInt(getComputedStyle(box2,null).width);
	function move2(way="right"){
		if(way=="right"){
			next=now+1;
			if(next>=img2.length){
				next=0;
			}
			img2[next].style.left="100%";
			animate(img2[now],{left:-width},400);
		}
		if(way=="left"){
			next=now-1;
			if(next<0){
				next=img2.length-1;
			}
			img2[next].style.left="-100%";
			animate(img2[now],{left:width},400);
		}
		animate(img2[next],{left:0},400,function(){
			flag2=true;
		});
		color[now].classList.remove("color");
		color[next].classList.add("color");
		now=next;
	}
	let flag5=true;
	let flag6=false;
	let flag4;
	let flag3;
	if(flag5){
		flag5=false;
		t2=setInterval(move2,8000);
		flag6=true;
		flag3=true;
		flag4=false;
	}
	if(flag6){
		flag6=false;
		t2=setInterval(move2("left"),8000);
		flag5=true;
		flag4=true;
		flag3=false;
	}
	left2.onclick=function(){
		if(flag4==true){
			flag4=false;
			flag3=true;
			clearInterval(t2);
			move2();
		}
	}
	right2.onclick=function(){
		if(flag3==true){
			flag3=false;
			flag4=true;
			clearInterval(t2);
			move2("left");
		}
	}
	right2.onmousemove=function(){
		if(flag3==true){
			right2.style.color='#FF6700';
		}
	}
	right2.onmouseout=function(){
		right2.style.color='#BDB1B0';
	}
	left2.onmousemove=function(){
		if(flag4==true){
			left2.style.color='#FF6700';
		}
	}
	left2.onmouseout=function(){
		left2.style.color='#BDB1B0';
	}
}
document.querySelectorAll(".flb").forEach(function(obj){
	 tab2(obj);})
//轮播图3 为你推荐
	let sad=document.querySelector(".sad");
	let sada1=document.querySelector(".sad>.sada>.floor8a2 ");//左
	let sada2=document.querySelector(".sad>.sada>.floor8a3 ");//右
	let sada=document.querySelector(".sadb");//大盒子
	let sadab=document.querySelectorAll(".sadb>.sadb1");//内容
	let width1=parseInt(getComputedStyle(sada,null).width);
	let length=sadab.length;
	let now1=0;
	let next1=0;
	let flag7=true;
	let flag8=false;
	let flag12=true;
	function move3(){
		next1=now1+1;
		if(now1==0){
			sada2.style.color='#B2B0B0';
			sada1.style.color='#E0E0E0';
			flag7=true;
			flag8=true;
		}
		if(now1==1){
			sada2.style.color='#B2B0B0';
			sada1.style.color='#E0E0E0';
			flag7=false;
			flag8=true;
		}
		sadab[next1].style.left="100%";
		animate(sadab[now1],{left:-width1},500);	
		animate(sadab[next1],{left:0},500,function(){
			flag12=true;
		});
		now1=next1;	
	}
	function move4(){
		next1=now1-1;
		if(now1==1){
			sada2.style.color='#B2B0B0';
			sada1.style.color='#E0E0E0';
			flag7=true;
			flag8=false;
		}
		if(now1==2){
			sada2.style.color='#B2B0B0';
			sada1.style.color='#E0E0E0';
			flag7=true;
			flag8=true;
		}
		sadab[next1].style.left="-100%";
		animate(sadab[now1],{left:width1},500);
		animate(sadab[next1],{left:0},500,function(){
			flag12=true;
		});
		now1=next1;
	}
	function panduan(){
		if(flag7){
			sada2.style.color='#B2B0B0';
			sada1.style.color='#E1E0E0';
		}
		if(flag8){
			sada1.style.color='#B2B0B0';
			sada2.style.color='#E1E0E0';
		}
		if(flag7&&flag8){
			sada1.style.color='#B2B0B0';
			sada2.style.color='#B2B0B0';
		}
	}
	sada2.onmouseover=function(){
		if(flag7){
			sada2.style.color='#FF6700';
		}
	}
	sada2.onmousedown=function(){
		if(flag7&&flag12){
			flag12=false;
			move3();
		}
	}
	sada2.onmouseout=function(){
		if(flag8){
			sada2.style.color='#B2B0B0';
		}
		panduan();
	}
	sada1.onmouseover=function(){
		if(flag8){
			sada1.style.color='#FF6700';
		}
	}
	sada1.onmousedown=function(){
		if(flag8&&flag12){
			flag12=false;
			move4();
		}
	}
	sada1.onmouseout=function(){
		if(flag8){
			sada1.style.color='#B2B0B0';
		}
		panduan();
	}	
//选项卡
   function tab(parent){
   		let title=parent.querySelectorAll('.floor5div1>.floor5span2>a');
   		let img=parent.querySelectorAll('.floor5div2>.col2');
   		for(let i=0;i<title.length;i++){
   			title[i].onmouseover=function(){
   				for(let j=0;j<img.length;j++){
   					img[j].style.display="none";
   					title[j].classList.remove("hover");
   				}
   				img[i].style.display="block";
   				title[i].classList.add("hover");
   			}
   		}	
   	}
   	document.querySelectorAll(".floor5").forEach(function(obj){
   	tab(obj);})	
//内容  轮播
	function tab4(pareat){
		let	img4=pareat.querySelectorAll(".imgall");
		let	letter4=pareat.querySelectorAll(".circle>span");
		let	left4=pareat.querySelector(".floor10left");
		let	right4=pareat.querySelector(".floor10right");
		let	now4=0;
		let	next4=0;
		let	width4=parseInt(getComputedStyle(pareat,null).width);
		img4[0].style.left="0";
		function move(way="right"){
			if(way=="right"){
				next4=now4+1;
				if(next4>img4.length-1){
					return;
				}
				img4[next4].style.left="100%";
				animate(img4[now4],{left:-width4},400);
			}
			if(way=="left"){
				next4=now4-1;
				if(next4<0){
					return;
				}
				img4[next4].style.left="-100%";
				animate(img4[now4],{left:width4},400);
			}
			animate(img4[next4],{left:0},400,function(){
				
			});
			letter4[now4].classList.remove("circle1");
			letter4[next4].classList.add("circle1");
			now4=next4;
		}
		left4.onclick=function(){
			move();
			console.log(111);
		}
		right4.onclick=function(){	
			move("left");
			console.log(222);
		}
	}
 	document.querySelectorAll(".floor10div2>a").forEach(function(obj){
   	tab4(obj);})	
}


