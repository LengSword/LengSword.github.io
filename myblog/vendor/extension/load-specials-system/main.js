!function(e){function t(e){var t=document.createElement("a");t.href=e;var a=function(e){if(!e)return{};var t={};e=e.slice(1).split("&");for(var a,n=0;n<e.length;n++){a=e[n].split("=");var i=a[0],o=a[1];/\[\]$/.test(i)?(t[i]=t[i]||[],t[i].push(o)):t[i]=o}return t};return{protocol:t.protocol,host:t.host,hostname:t.hostname,pathname:t.pathname,search:a(t.search),hash:t.hash}}function a(e,t){$(e).unbind(t)}new APlayer({container:document.getElementById("aplayer"),fixed:!0,autoplay:!0,loop:"all",preload:"metadata",mutex:!0,volume:.3,listFolded:!0,listMaxHeight:90,lrcType:1,audio:[{name:"西西里街区十号",artist:"西蒙Fas(苑晓东)",url:"https://music.163.com/song/media/outer/url?id=481654006",cover:"https://p1.music.126.net/GtmKWaBp8jutAavZp6RH1g==/109951162938060484.jpg",lrc:"[00:00.00]纯音乐 请欣赏"},{name:"You",artist:"M.Graveyard",url:"https://music.163.com/song/media/outer/url?id=786262",cover:"https://p2.music.126.net/v22kNtMro7CvzoiCYJ4zjQ==/3315027558990599.jpg",lrc:"[00:00.00]纯音乐 请欣赏"}]});e(window).on("loaded-main-page",function(){e("a").on("click",function(){var n=t(this.href),i=n.search.p||"";if("schulte_grid.md"==i){var o='<iframe src="./p/specials/schulte_grid.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>';setTimeout(function(){e("#main-page-append").html(o)},500)}else if("contact/index.md"==i){var o=['<div id="vcomments"></div>',"<script>","    new Valine({","    el: '#vcomments',","    appId: 'mFzRXM0FHsXHHi8stizVlCmT-gzGzoHsz',","    appKey: 'P3Ok1kdKIhspgnnJmto43pAf',","    notify:false, ","    verify:false, ","    avatar:'mp', ","    placeholder: 'Saying something...' ","});","</script>"].join("\n");setTimeout(function(){e("#main-page-append").html(o)},500)}else e("#main-page-append").html("");a("#main-page","loaded-main-page")})})}(Zepto);