(function( $ ){
   $.fn.superplayer = function(d){
      var p = this;
	  var default_image = 'data:image/png;base64,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';
	  this.html('<div class="superplayer"></div>');
	  this.find('.superplayer').append('<div class="superplayer-audio"></div>');
	  this.find('.superplayer .superplayer-audio').append('<audio'+((d.items[0].loop)?' loop="loop"':'')+'></audio>');
	  if((typeof(d.volume)!='undefined')&&(d.volume<=100)&&(d.volume>=0)){
        $(this).find('.superplayer audio')[0].volume = d.volume/100;
	  }else if((typeof(d.volume)!='undefined')&&(d.volume<0)){
	    $(this).find('.superplayer audio')[0].volume = 0;
	  }else{
	    $(this).find('.superplayer audio')[0].volume = 1;
	  }
	  if(typeof(d.header)!='undefined'){
	    if(typeof(d.header['text'])!='undefined'){
	      this.find('.superplayer').append('<div class="superplayer-header">'+((d.header['image'])?'<span class="superplayer-header-image" style="background-image:url('+d.header['image']+');"></span> ':'')+d.header['text'].split('"').join('&quot;')+'</div>');
	    }
	  }
	  this.find('.superplayer').append('<div class="superplayer-top" style="'+((typeof(d.header)=='undefined')?'':((typeof(d.header['text'])=='undefined')?'':'border-radius:0;'))+'"></div>');
	  this.find('.superplayer .superplayer-top').append('<div class="superplayer-image" style="background-image:url('+((d.items[0].image)?d.items[0].image:default_image)+');"></div>');
	  this.find('.superplayer .superplayer-image').append('<img src="'+((d.items[0].image)?d.items[0].image:default_image)+'" width="280" style="display:none;">');
	  this.find('.superplayer .superplayer-top').append('<span class="superplayer-title" title="'+(d.items[0].title.replace(/<(?:.|\n)*?>/gm,'').split('"').join('&quot;'))+'">'+d.items[0].title.split('"').join('&quot;')+'</span>');
	  this.find('.superplayer').append('<div class="superplayer-controls"'+((d.hidecontrols)?' style="display:none;"':'')+'></div>');
	  this.find('.superplayer .superplayer-controls').append('<div class="superplayer-play"></div>');
	  this.find('.superplayer .superplayer-controls').append('<div class="superplayer-pause" style="display:none;"></div>');
	  this.find('.superplayer .superplayer-controls').append('<div class="superplayer-progress"></div>');
	  this.find('.superplayer .superplayer-progress').append('<div class="superplayer-progress-ball"></div>');
	  this.find('.superplayer .superplayer-controls').append('<div class="superplayer-time">0:00</div>');
	  this.find('.superplayer .superplayer-controls').append('<div class="superplayer-controls-more"></div>');
	  this.find('.superplayer').append('<div class="superplayer-controls superplayer-controls-second" style="display:none;"></div>');
	  this.find('.superplayer .superplayer-controls-second').append('<div class="superplayer-volume"></div>');
	  this.find('.superplayer .superplayer-controls-second').append('<div class="superplayer-volume-bar"></div>');
	  this.find('.superplayer .superplayer-volume-bar').append('<div class="superplayer-volume-bar-ball"></div>');
	  this.find('.superplayer .superplayer-controls-second').append('<div class="superplayer-loop'+((d.items[0].loop)?' superplayer-loop-activated':'')+'"></div>');
	  this.find('.superplayer .superplayer-controls-second').append('<div class="superplayer-download" style="'+((d.items[0].download)?'':'display:none;')+'" data-downlaod="'+((d.items[0].download)?d.items[0].download:'')+'"></div>');
      $.each(d.items[0].src,function(a){
        $(p).find('.superplayer audio').append('<source src="'+d.items[0].src[a].link+'" type="'+d.items[0].src[a].type+'"></source>');
      });
	  if(d.items.length > 1){
  	    this.find('.superplayer').append('<div class="superplayer-bottom"></div>');
	    $.each(d.items,function(a){
		  d.items[a].title = d.items[a].title.split('"').join('&quot;');
		  d.items[a].image = (d.items[a].image)?d.items[a].image:default_image;
	      p.find('.superplayer .superplayer-bottom').append('<div class="superplayer-song-item'+((a==0)?' superplayer-song-active':'')+'" data-title="'+(d.items[a].title)+'" data-image="'+d.items[a].image+'" data-download="'+((d.items[a].download)?d.items[a].download:'')+'" data-loop="'+((d.items[a].loop)?'true':'false')+'" title="'+d.items[a].title.replace(/<(?:.|\n)*?>/gm,'')+'">'
		  +'<div class="superplayer-song-item-sources"></div><div class="superplayer-song-item-image" style="background-image:url('+d.items[a].image+');"></div> '+d.items[a].title
		  +'</div>');
          $.each(d.items[a].src,function(b){
            p.find('.superplayer .superplayer-bottom').find('.superplayer-song-item:last .superplayer-song-item-sources').append('<li data-type="'+d.items[a].src[b].type+'">'+d.items[a].src[b].link+'</li>');
          });
	    });
	  }
	  if((typeof(d.autoplay)!='undefined')&&(d.autoplay)){
        $(this).find('.superplayer audio').trigger('play');
      }
	  this.find('.superplayer .superplayer-download').click(function(ev){
	    window.open($(this).attr('data-download'));
	  });
	  this.find('.superplayer .superplayer-controls-more').click(function(ev){
	    $(this).parent().parent().find('.superplayer-controls-second').stop().toggle();
	  });
	  this.find('.superplayer .superplayer-song-item').click(function(ev){
  	    if(!$(this).hasClass('superplayer-song-active')){
		  $(this).parent().find('.superplayer-song-active').removeClass('superplayer-song-active');
	      $(this).addClass('superplayer-song-active');
		}
	    $(this).parent().parent().find('.superplayer-title').html($(this).attr('data-title')).attr({'title':$(this).attr('data-title').replace(/<(?:.|\n)*?>/gm,'')});
	    $(this).parent().parent().find('.superplayer-image').css({'background-image':'url('+$(this).attr('data-image')+')'});
	    $(this).parent().parent().find('.superplayer-image img').attr({'src':$(this).attr('data-image')});
		$(this).parent().parent().find('.superplayer-pause').hide();
		$(this).parent().parent().find('.superplayer-play').show();
	    $(this).parent().parent().find('audio').currentTime=0;
        var a_c = '';
        $(this).find('li').each(function(a){
          a_c = a_c + '<source src="'+$(this).parent().find('li:eq('+a+')').html()+'" type="'+$(this).parent().find('li:eq('+a+')').attr('data-type')+'"></source>';
        });
        $(this).parent().parent().find('.superplayer-audio').html('<audio'+(($(this).attr('data-loop')=='true')?' loop="loop"':'')+'>'+a_c+'</audio>');
	    $(this).bind("pause",function(){
		  $(this).parent().find('.superplayer-pause').hide();
		  $(this).parent().find('.superplayer-play').show();
	    });
	    $(this).bind("play",function(){
		  $(this).parent().find('.superplayer-play').hide();
		  $(this).parent().find('.superplayer-pause').show();
	    });
		if($(this).attr('data-loop')=='true'){
	      $(this).parent().parent().find('.superplayer-loop').addClass('superplayer-loop-activated');
		}else{
	      $(this).parent().parent().find('.superplayer-loop').removeClass('superplayer-loop-activated');
		}
		if(!!$(this).attr('data-download')){
	      $(this).parent().parent().find('.superplayer-download').css({'display':'inline-block'}).attr({'data-download':$(this).attr('data-download')});
		}else{
	      $(this).parent().parent().find('.superplayer-download').hide();
		}
	  });
	  this.find('.superplayer .superplayer-loop').click(function(ev){
	    if($(this).parent().parent().find('audio').attr('loop')=='loop'){
		  $(this).parent().parent().find('audio').removeAttr('loop');
		  $(this).removeClass('superplayer-loop-activated');
		}else{
		  $(this).parent().parent().find('audio').attr({'loop':'loop'});
		  $(this).addClass('superplayer-loop-activated');
		}
	  });
	  this.find('.superplayer .superplayer-image').click(function(ev){
	  if($(this).find('img').is(':visible')){
		  $(this).find('img').hide();
		  $(this).parent().find('.superplayer-title').show();
		  $(this).parent().find('.superplayer-title').show();
		  $(this).css({'background-size':'100px','float':'left','width':'100px'});
		}else{
		  $(this).find('img').show();
		  $(this).parent().find('.superplayer-title').hide();
		  $(this).css({'background-size':'0px','float':'none','width':'280px'});
		}
	  });
	  var v = $(this).find('audio')[0].volume*100;
		if(v>=80){
		  $(this).find('.superplayer-volume').addClass('superplayer-volume-high');
		}else if(v>=20){
		  $(this).find('.superplayer-volume').addClass('superplayer-volume-mid');
		}else if(v>0){
		  $(this).find('.superplayer-volume').addClass('superplayer-volume-low');
		}
	  this.find('.superplayer .superplayer-volume').click(function(e){
	    $(this).parent().parent().find('audio')[0].volume=0;
	    $(this).removeClass('superplayer-volume-low').removeClass('superplayer-volume-mid').removeClass('superplayer-volume-high');
	  });
	  this.find('.superplayer .superplayer-progress').click(function(e){
	    var parentOffset = $(this).offset();
	    var time = ($(this).parent().parent().find('audio')[0].duration * ((e.pageX - parentOffset.left)/180)*100)/100-2;
	    $(this).parent().parent().find('audio')[0].currentTime = time;
	  });
	  this.find('.superplayer .superplayer-volume-bar').click(function(e){
	    var parentOffset = $(this).offset();
	    $(this).parent().parent().find('audio')[0].volume = (e.pageX - parentOffset.left) / 197;
	  });
	  this.find('.superplayer audio').each(function(){
	    $(this).bind("pause",function(){
		  $(this).parent().find('.superplayer-pause').hide();
		  $(this).parent().find('.superplayer-play').show();
	    });
	    $(this).bind("play",function(){
		  $(this).parent().find('.superplayer-play').hide();
		  $(this).parent().find('.superplayer-pause').show();
	    });
	  });
	  this.find('.superplayer-play').click(function(ev){
	    $(this).parent().parent().find('audio').trigger('play');
	    $(this).hide();
		$(this).parent().find('.superplayer-pause').show();
	  });
	  this.find('.superplayer-pause').click(function(ev){
	    $(this).parent().parent().find('audio').trigger('pause');
	    $(this).hide();
		$(this).parent().find('.superplayer-play').show();
	  });
      return this;
   };

})( jQuery );
setInterval(function(){
  $('.superplayer').each(function(){
    var m = String($(this).find('audio')[0].currentTime/60).split(".")[0];
    var s = String($(this).find('audio')[0].currentTime-(m*60)).split(".")[0];
    s = (s<10?'0':'')+s;
    $(this).find('.superplayer-time').html(m+':'+s);
    $(this).find('.superplayer-progress-ball').css({'margin-left':(($(this).find('audio')[0].currentTime / $(this).find('audio')[0].duration) * 165)});
    $(this).find('.superplayer-volume-bar-ball').css({'margin-left':(170*($(this).find('audio')[0].volume))});
    if($(this).find('audio')[0].volume<0.1){
      $(this).find('.superplayer-volume').addClass('superplayer-volume-low').removeClass('superplayer-volume-mid').removeClass('superplayer-volume-high');
    }else if($(this).find('audio')[0].volume>=0.8){
      $(this).find('.superplayer-volume').removeClass('superplayer-volume-low').removeClass('superplayer-volume-mid').addClass('superplayer-volume-high');
    }else if($(this).find('audio')[0].volume>=0.2){
      $(this).find('.superplayer-volume').removeClass('superplayer-volume-low').addClass('superplayer-volume-mid').removeClass('superplayer-volume-high');
    }else{
      $(this).find('.superplayer-volume').addClass('superplayer-volume-low').removeClass('superplayer-volume-mid').removeClass('superplayer-volume-high');
    }
  });
},100);