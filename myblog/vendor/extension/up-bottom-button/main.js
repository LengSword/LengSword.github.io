!function(o){"use strict";o(window).on("loaded-main-page",function(){$(window).scrollTop(0),o(".toBottom").hide(),$(window).scroll(function(){$(window).scrollTop()>100?(o(".toTop").show(),o(".toBottom").hide()):(o(".toTop").hide(),o(".toBottom").show())}),o(".toTop").on("click",function(){return $(window).scrollTop(0),!1}),o(".toBottom").on("click",function(){return $(window).scrollTop(8065),!1})})}(Zepto);