!function(e){function t(e){var t=document.createElement("a");t.href=e;var a=function(e){if(!e)return{};var t={};e=e.slice(1).split("&");for(var a,r=0;r<e.length;r++){a=e[r].split("=");var o=a[0],i=a[1];/\[\]$/.test(o)?(t[o]=t[o]||[],t[o].push(i)):t[o]=i}return t};return{protocol:t.protocol,host:t.host,hostname:t.hostname,pathname:t.pathname,search:a(t.search),hash:t.hash}}function a(e,t){$(e).unbind(t)}new APlayer({container:document.getElementById("aplayer"),fixed:!0,autoplay:!0,order:"random",loop:"all",preload:"auto",mutex:!0,volume:.25,listFolded:!0,listMaxHeight:90,lrcType:3,audio:[{name:"西西里街区十号",artist:"西蒙Fas(苑晓东)",url:"https://music.163.com/song/media/outer/url?id=481654006",cover:"https://p1.music.126.net/GtmKWaBp8jutAavZp6RH1g==/109951162938060484.jpg?param=130y130",lrc:"p/specials/00-pure_music.lrc"},{name:"You",artist:"M.Graveyard",url:"https://music.163.com/song/media/outer/url?id=786262",cover:"https://p2.music.126.net/v22kNtMro7CvzoiCYJ4zjQ==/3315027558990599.jpg?param=130y130",lrc:"p/specials/00-pure_music.lrc"},{name:"桜花之恋冢 ~ Flower of Life",artist:"発热巫女~ず",url:"https://music.163.com/song/media/outer/url?id=745206",cover:"https://p1.music.126.net/oXcq8wcPbwBNbDoK7JhKVw==/825733232459945.jpg?param=130y130",lrc:"p/specials/03-桜花之恋冢 ~ Flower of Life.lrc"},{name:"Floating incense",artist:"一只小Pony",url:"https://music.163.com/song/media/outer/url?id=473417797",cover:"https://p1.music.126.net/oruC9MNXCjrZRIdVAqg3EQ==/109951162906920794.jpg?param=130y130",lrc:"p/specials/00-pure_music.lrc"}]});new Valine({el:"#vcomments",appId:"mFzRXM0FHsXHHi8stizVlCmT-gzGzoHsz",appKey:"P3Ok1kdKIhspgnnJmto43pAf",notify:!1,verify:!1,avatar:"mp",placeholder:"Saying something..."}),e(window).on("loaded-main-page",function(){var r=t(window.location.href),o=r.search.p||"";if("schulte_grid.md"==o){var i='<iframe src="./p/specials/schulte_grid.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>';setTimeout(function(){e("#main-page-append").html(i)},500)}else"contact/index.md"==o?(e("#main-page-append").html(""),e("#vcomments").show()):(e("#main-page-append").html(""),e("#vcomments").hide());a("#main-page","loaded-main-page")})}(Zepto);