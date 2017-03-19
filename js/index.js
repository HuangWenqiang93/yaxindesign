$(function(){
	
  (function()
    {
	  var now=0,t=null,n=0,but=true;
	  var bann_div=$('.banner').children('div');
	  var ol_li=$('.banner ol').children('li');
	  
	  function Run(index,now)
	  {
		  if(index==1)
		  {
			  bann_div.eq(index).find('strong').css({opacity:0,left:-100});
			  bann_div.eq(index).find('p').css({opacity:0,left:-100});
			  bann_div.eq(index).find('a').css({opacity:0,left:100});
			  bann_div.eq(index).css({zIndex:0,opacity:0})
			  
			  bann_div.eq(index).find('strong').delay(200).animate({opacity:1,left:0},'slow','linear');
			  bann_div.eq(index).find('p').delay(200).animate({opacity:1,left:0},'slow','linear');
			  bann_div.eq(index).find('a').delay(200).animate({opacity:1,left:0},'slow','linear'); 
		  }
	
		  if(index==3)
		  {
			  bann_div.eq(index).find('strong').css({opacity:0,top:-100});
			  bann_div.eq(index).find('p').css({opacity:0,top:-50});
			  bann_div.eq(index).find('a').css({opacity:0,bottom:0});
			  bann_div.eq(index).css({zIndex:0,opacity:0})
			  
			  bann_div.eq(index).find('strong').delay(200).animate({opacity:1,top:0},'slow','linear');
			  bann_div.eq(index).find('p').delay(200).animate({opacity:1,top:50},'slow','linear');
			  bann_div.eq(index).find('a').delay(200).animate({opacity:1,bottom:40},'slow','linear'); 
		  }
		  if(index==4)
		  {
			  bann_div.eq(index).find('strong').css({opacity:0,top:-100});
			  bann_div.eq(index).find('p').css({opacity:0,top:-50});
			  bann_div.eq(index).find('a').css({opacity:0,top:40});
			  bann_div.eq(index).css({zIndex:0,opacity:0})
			  
			  bann_div.eq(index).find('strong').delay(200).animate({opacity:1,top:0},'slow','linear');
			  bann_div.eq(index).find('p').delay(200).animate({opacity:1,top:50},'slow','linear');
			  bann_div.eq(index).find('a').delay(200).animate({opacity:1,top:180},'slow','linear'); 
		  }
		    if(index==5)
		  {
			  bann_div.eq(index).find('strong').css({opacity:0,left:-100});
			  bann_div.eq(index).find('p').css({opacity:0,left:-100});
			  bann_div.eq(index).find('a').css({opacity:0,bottom:0});
			  bann_div.eq(index).css({zIndex:0,opacity:0})
			  
			  bann_div.eq(index).find('strong').delay(200).animate({opacity:1,left:0},'slow','linear');
			  bann_div.eq(index).find('p').delay(200).animate({opacity:1,left:0},'slow','linear');
			  bann_div.eq(index).find('a').delay(200).animate({opacity:1,bottom:48},'slow','linear'); 
		  }
		  bann_div.eq(now).css({zIndex:0})
		  bann_div.eq(now).animate({opacity:0},500,'swing');
		  bann_div.eq(index).animate({opacity:1},500,'swing',function(){but=true;}); 
		  bann_div.eq(index).css({zIndex:1})
		  ol_li.eq(now).removeClass('active3');
		  ol_li.eq(index).addClass('active3'); 
	  }
	//Run(2,now)  
	 
	 function autoRun()
	 {
	    	now++;
			if(now==ol_li.length)
			{
			   now=0;	
			}
			Run(now,now-1)  
	 }
	
	
  ol_li.each(function(index) 
  {
	    var Index=$(this).index();
      $(this).click(function()
	  { 
		  if(but==true)
		  {
			  but=false;
		 
			
			  if(Index!=now)
			  {
				Run(Index,now) 
			  }
			 now=Index;
		  }
	  });
    
  });
	
	$('.banner').hover(function()
	 {
		clearInterval(t);
	 },function()
	 {t=setInterval(autoRun,3000);}).trigger('mouseleave');
	
})();//-------------------------------------------------------轮播图结束
/*(function()
  {
	 var not_ul=$('.notice ul').eq(0);
	 var not_li=$('.notice li');
	 var li_len=not_li.length;
	 var up_down=$('.notice p').children('a');
	 var li_h=not_li.eq(0).height();
	 var h=0,t=null;
	 function not_src_up(obj,start,end)
	 {
		 h=start-end;
		 obj.animate({marginTop:li_h*h},'slow','linear',function()
		 {
			obj.css('margin-top',0).find('li').slice(start,end).appendTo(obj);
		 });
	 }
	 function not_src_down(obj,start,end)
	 {
		h=start-end;
	   obj.css('margin-top',li_h*h).find('li').slice(start,end).prependTo(obj);
	   obj.animate({marginTop:0},'slow','linear');	 
	 }
	 
	 $('.notice').hover(function(){
		 clearInterval(t);
		 },function()
		 {
			 t=setInterval(function()
			 {
				not_src_up(not_ul,0,1)  
			 },3000) 
		 }).trigger('mouseleave');
		 
	 up_down.eq(0).click(function(){not_src_up(not_ul,0,1);  })
     up_down.eq(1).click(function(){not_src_down(not_ul,li_len-1,li_len);  })
 })();*/
 
 //-------------------------------------------------------------------滚动公告
  
  (function(){
	  
	 var v_t=$('.video').offset().top;
	 var v_offset_t=0,v_h=0;
	
	 $(window).scroll(function()
	 {
		  v_offset_t= body_space().s_t+body_space().c_h;
		  v_h=$('.video').height();
		   if(v_offset_t>=v_t-10 && v_h==0)
		   {
			 $('.video').animate({height:200},1000,'linear',function(){
				  $('.video a').removeClass('video_h');
				 });
			 $('.video .video_text').delay(400).animate({top:0});
			 $('.video a').delay(300).animate({bottom:10},function()
			 {
				  $(this).addClass('video_h');
			 });
		
		   };
	  })
   })();//-------------------------------展现video
	
})



window.onload=function(){
	
	(function()
	{
		var notice=document.getElementsByClassName('notice')[0];
		var not_ul=notice.getElementsByTagName('ul')[0];
		var not_li=notice.getElementsByTagName('li');
		var li_h=getStyle(not_li[0],'height');
		var li_len=not_li.length;
		var t=null;
	    var up_down=notice.getElementsByTagName('p')[0].getElementsByTagName('a');
		
		function not_scr_up()
		{
			startMove(not_ul,{marginTop:-li_h},function()
			{
				not_ul.appendChild(not_li[0]);
				not_ul.style.marginTop=0+'px';
			})
	    }
		function not_scr_down()
		{   
		    
		    not_ul.style.marginTop=-li_h+'px';
			not_ul.insertBefore(not_li[li_len-1],not_li[0]); 
			startMove(not_ul,{marginTop:0});
		}
		
		t=setInterval(not_scr_up,3000);
		
		notice.onmouseover=function()
		{
			clearInterval(t);
        }
		notice.onmouseout=function()
		{
			t=setInterval(not_scr_up,3000);
		}
		
		up_down[0].onclick=function()
		{
			not_scr_up();
		}
		up_down[1].onclick=function()
		{
			not_scr_down();
		}
		
	})();//------------------------------------------滚动公告
	
	(function(){
	  var oCase=document.getElementsByClassName('case')[0];
	  var case_img=oCase.getElementsByTagName('img');
      var src=null;
	  
	   window.onscroll=function()
	   {
		   var scr=body_space().s_t+body_space().c_h;
		   if(scr>=oCase.offsetTop)
		   {
			   attr_Src();
		    }
	   }
		
	  if(body_space().b_h>=oCase.offsetTop)
	    {   attr_Src();}
		  
	 function attr_Src()
	 {
		if(case_img[0].getAttribute('src')=='load.jpg')
		{
			
			for(var i=0;i<case_img.length;i++)
		     {
		     src=case_img[i].getAttribute('xsrc');
			 case_img[i].setAttribute('src',src);
			 case_img[i].style.opacity=0;
			 startMove( case_img[i],{opacity:100});
			}
		}
	}
		
	})();//延迟加载图片
	
	(function(){
		var wei=document.getElementsByTagName('footer')[0].getElementsByClassName('wei')[0];
		var wei_r=getClass(wei,'div','r')[0];
		var wei_l=getClass(wei,'div','l')[0];
		
		var wei_r_a=wei_r.getElementsByTagName('a');
		var wei_l_img=wei_l.getElementsByTagName('div');
		var wei_l_span=wei_l.getElementsByTagName('span')[0];
		var but=true;

		wei_r_a[0].onmouseover=function()
		{
			if(but==true)
			{
			but=false;
			linear(wei_l_span,'top',12,2,function(){but=true;});
			wei_l_img[0].style.zIndex=1;
			wei_l_img[1].style.zIndex=0;
			}
		}
		wei_r_a[1].onmouseover=function()
		{
			if(but==true)
			{
			but=false;
			linear(wei_l_span,'top',47,2,function(){but=true;});
			wei_l_img[0].style.zIndex=0;
			wei_l_img[1].style.zIndex=1;
			}
		}
	})();/*---------------官方微博微信---------------------*/
	
	(function(){
		
		var return_top=document.getElementsByClassName('return_top')[0];
		var tel=getClass(return_top,'div','tel')[0];
		var wewe=getClass(return_top,'div','wewe')[0];
		var re_li=return_top.getElementsByTagName('li');
		var timer=null,timer2=null,but=true;
		    re_li[1].onmouseover=function()
			{
				if(but)
				{ but=false;
				clearInterval(timer2);
			    tel.style.display='block';
			    linear(tel,'opacity',100,5,function()
				  { 
				  timer2=setTimeout(function(){but=true},200);
				   });
				}
			}
		   re_li[1].onmouseout=function()
			{
				
			    linear(tel,'opacity',0,5,function()
					{ tel.style.display='none';});
			}
		    re_li[2].onmouseover=function()
			{
				if(but)
				{ but=false;
				clearInterval(timer2);
			    wewe.style.display='block';
			    linear(wewe,'opacity',100,5,function()
				   {
					 timer2=setTimeout(function(){but=true},200);
					});
				}
			}
		    re_li[2].onmouseout=function()
			{
			    linear(wewe,'opacity',0,5,function()
				{
					wewe.style.display='none';
				});
			}
			
			window.onscroll=function()
			{
				if( body_space().s_t>300)
				{
					re_li[3].style.display='block';
					 linear(re_li[3],'opacity',100,5);
				}
				if( body_space().s_t<300)
				{
					 linear(re_li[3],'opacity',0,5,function()
					{
						re_li[3].style.display='none';
					});
				}
			}
			
			re_li[3].onclick=function()
			{
				
				timer=setInterval(function()
				{
				 document.body.scrollTop=body_space().s_t-35;
				 document.documentElement.scrollTop=body_space().s_t-35;
					if(body_space().s_t<=0)	
					{
						timer=clearInterval(timer);
						document.body.scrollTop=0;
						document.documentElement.scrollTop=0;
					}
					
				},30);
			}
	})();//---------------------------------------------返回顶部
  
}