var $siteHeader=$(".site-header"),$body=$("body"),$overlay=$(".overlay");$("[data-menu]").on("click",function(){$siteHeader.toggleClass("site-header--open"),$body.css({overflow:"hidden"}),$overlay.toggleClass("overlay--enabled").one("click",function(){$siteHeader.removeClass("site-header--open"),$body.css({overflow:"auto"}),$overlay.removeClass("overlay--enabled")})});