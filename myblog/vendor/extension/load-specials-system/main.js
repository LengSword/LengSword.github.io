!function(e){function a(e){var a=document.createElement("a");a.href=e;var t=function(e){if(!e)return{};var a={};e=e.slice(1).split("&");for(var t,i=0;i<e.length;i++){t=e[i].split("=");var n=t[0],r=t[1];/\[\]$/.test(n)?(a[n]=a[n]||[],a[n].push(r)):a[n]=r}return a};return{protocol:a.protocol,host:a.host,hostname:a.hostname,pathname:a.pathname,search:t(a.search),hash:a.hash}}function t(e,a){$(e).unbind(a)}new APlayer({container:document.getElementById("aplayer"),fixed:!0,autoplay:!0,loop:"all",preload:"metadata",mutex:!0,volume:.3,listFolded:!0,listMaxHeight:90,lrcType:1,audio:[{name:"西西里街区十号",artist:"西蒙Fas(苑晓东)",url:"https://music.163.com/song/media/outer/url?id=481654006",cover:"https://p1.music.126.net/GtmKWaBp8jutAavZp6RH1g==/109951162938060484.jpg",lrc:"[00:00.00]纯音乐 请欣赏"},{name:"You",artist:"M.Graveyard",url:"https://music.163.com/song/media/outer/url?id=786262",cover:"https://p2.music.126.net/v22kNtMro7CvzoiCYJ4zjQ==/3315027558990599.jpg",lrc:"[00:00.00]纯音乐 请欣赏"}]});e(window).on("loaded-main-page",function(){e("a").on("click",function(){var i=a(this.href),n=i.search.p||"";if("schulte_grid.md"==n){var r='<iframe src="./p/specials/schulte_grid.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>';e("#main-page").append(r)}if("contact/index.md"==n){var r=['<div id="vcomments"></div>',"<script>","    new Valine({","    el: '#vcomments',","    appId: 'mFzRXM0FHsXHHi8stizVlCmT-gzGzoHsz',","    appKey: 'P3Ok1kdKIhspgnnJmto43pAf',","    notify:false, ","    verify:false, ","    avatar:'mp', ","    placeholder: 'Saying something...' ","});","</script>"].join("\n");e("#main-page").append(r)}t("#main-page","loaded-main-page")})})}(Zepto);