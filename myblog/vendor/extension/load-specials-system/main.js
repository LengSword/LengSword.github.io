! function (e) {
    "use strict";
    function urlparser(url) {
      var a = document.createElement('a');
      a.href = url;
      
      var search = function(search) {
        if(!search) return {};
        
        var ret = {};
        search = search.slice(1).split('&');
        for(var i = 0, arr; i < search.length; i++) {
          arr = search[i].split('=');
          var key = arr[0], value = arr[1];
          if(/\[\]$/.test(key)) {
            ret[key] = ret[key] || [];
            ret[key].push(value);
          } else {
            ret[key] = value;
          }
        }
        return ret;
      };
      
      return {
        protocol: a.protocol,
        host: a.host,
        hostname: a.hostname,
        pathname: a.pathname,
        search: search(a.search),
        hash: a.hash
      }
    };

    e(window).on("loaded-main-page", function() {
        e('a').on("click", function() {
            var urlobject = urlparser(this.href);
            var cur_md_path = urlobject.search['p'] || '';
            
            if(cur_md_path == "schulte_grid.md") { //Game 0x01 - Schulte Grid
                var htmlCodes = '<iframe src="./p/specials/schulte_grid.html" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>';
                e("#main-page").append(htmlCodes);
            }
            if(cur_md_path == "online_execute.md") { //Tool 0x02 - Online Code Runner
                var htmlCodes = '<iframe src="http://www.runoob.com/try/runcode.php?filename=HelloWorld&type=python3" width="100%" height="100%" frameborder="0"></iframe>';
                e("#main-page").append(htmlCodes);
            }
        
        });
    });
    
}(Zepto);
