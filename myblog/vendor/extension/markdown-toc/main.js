!function(t){"use strict";t(window).on("loaded-main-page",function(){t("#toc").html('<p style="text-align:center;font-size:100%;">Category</p>'),t(".markdown-toc").hide(),t("#toggle").unbind("click"),t("#toggle").on("click",function(){t(".markdown-toc").toggle()}),t("h1,h2,h3,h4,h5").each(function(e,n){var o=t(n).get(0).localName;t(n).attr("id","id"+e),"LengSword"==t(this).text()&&"h2"==o||(null==t("h1").text()?t("#toc").append('<a class="new'+(o[0]+String(parseInt(o[1])-1))+'" href="#id'+e+'">'+t(this).text()+"</a></br>"):t("#toc").append('<a class="new'+o+'" href="#id'+e+'">'+t(this).text()+"</a></br>"),t(".newh1").css({marginLeft:0,textDecoration:"none"}),t(".newh2").css({marginLeft:20,textDecoration:"none"}),t(".newh3").css({marginLeft:40,textDecoration:"none"}),t(".newh4").css({marginLeft:60,textDecoration:"none"}),t(".newh5").css({marginLeft:80,textDecoration:"none"}))})})}(Zepto);