!function(e){"use strict";function n(e){var n=document.createElement("a");n.href=e;var t=function(e){if(!e)return{};var n={};e=e.slice(1).split("&");for(var t,a=0;a<e.length;a++){t=e[a].split("=");var o=t[0],i=t[1];/\[\]$/.test(o)?(n[o]=n[o]||[],n[o].push(i)):n[o]=i}return n};return{protocol:n.protocol,host:n.host,hostname:n.hostname,pathname:n.pathname,search:t(n.search),hash:n.hash}}e(window).on("before-load-main-page",function(){e("a").on("click",function(){var t=n(this.href),a=t.search.p||"";if("contact/index.md"==a){var o=['<div id="vcomments"></div>',"<script>","    new Valine({","    el: '#vcomments',","    appId: 'mFzRXM0FHsXHHi8stizVlCmT-gzGzoHsz',","    appKey: 'P3Ok1kdKIhspgnnJmto43pAf',","    notify:false, ","    verify:false, ","    avatar:'mp', ","    placeholder: 'Saying something...' ","});","</script>"].join("\n");e("#main-page").append(o)}})})}(Zepto);