/**
 * vSort 1.2.1
 * https://github.com/lastdates/vSort
 */
!function(e){var t,n,s,o,a,i,r,l=e(document),d="touchstart mousedown",c="mousemove touchmove ",p="mouseup touchend",u="dragging",v="sortitem",h=".sorthandle",_="box-shadow:0 0 0.625em rgba(0,0,0,0.5);",g=function(d){if(d.preventDefault(),t=d.pageY||d.originalEvent.touches[0].pageY,o=0,r=e(this).parent(),!r.hasClass(v))return!1;var h=r.parent(),_=r.index(),g=h.innerHeight(),m=h.children().first().offset().top,q=h.data("callback"),x=r.outerHeight(),b=r.data("restrict");if(b){var w="[data-restrict="+b+"]:first";b=r.prevAll(w),b.length&&(g+=m,m=b.offset().top+b.outerHeight(),g-=m),b=r.nextAll(w),b.length&&(g=b.offset().top-m)}return n=r.offset().top-m,s=n+x,a=r.prev().outerHeight()/2,i=r.next().outerHeight()/2,r.addClass(u),l.bind(c,function(e){e.preventDefault(),o=(e.pageY||e.originalEvent.touches[0].pageY)-t,0>n+o?o=-1*n:s+o>g?o=g-s:i>o?o+a>0||(r.insertBefore(r.prev()),f(-2*a)):(r.insertAfter(r.next()),f(2*i)),r.css({top:o+"px"})}),l.bind(p,function(){l.unbind(c+p),function t(){o>3?o-=3:-3>o?o+=3:o=0,r.css({top:o+"px"}),0==o?(r.removeClass(u),q&&r.index()!=_&&setTimeout(function(){e.globalEval(q)},20)):setTimeout(t,10)}()}),!1},f=function(e){t+=e,o-=e,n+=e,s+=e,a=r.prev().outerHeight()/2,i=r.next().outerHeight()/2};e.fn.vSort=function(){e(h).attr("unselectable","on").unbind(d,g).bind(d,g)},e("<style>."+v+"{position:relative;}."+v+" "+h+"{cursor:move;}."+v+"."+u+"{z-index:9999;opacity:.85;-webkit-"+_+_+"}</style>").appendTo("head"),l.ready(function(){l.vSort()})}(jQuery);
