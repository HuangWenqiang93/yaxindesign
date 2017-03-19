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
