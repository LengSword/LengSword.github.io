!function(e){"use strict";function t(e){var t=document.createElement("a");t.href=e;var a=function(e){if(!e)return{};var t={};e=e.slice(1).split("&");for(var a,n=0;n<e.length;n++){a=e[n].split("=");var o=a[0],i=a[1];/\[\]$/.test(o)?(t[o]=t[o]||[],t[o].push(i)):t[o]=i}return t};return{protocol:t.protocol,host:t.host,hostname:t.hostname,pathname:t.pathname,search:a(t.search),hash:t.hash}}e(window).on("loaded-main-page",function(){var a=t(this.href),n=a.search.p||"";if("contact/index.md"==n){var o=['<div id="vcomments"></div>',"<script>","    new Valine({","    el: '#vcomments',","    appId: 'mFzRXM0FHsXHHi8stizVlCmT-gzGzoHsz',","    appKey: 'P3Ok1kdKIhspgnnJmto43pAf',","    notify:false, ","    verify:false, ","    avatar:'mp', ","    placeholder: 'Saying something...' ","});","</script>"].join("\n");e("#main-page").append(o)}})}(Zepto);