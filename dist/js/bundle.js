/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{function t(){var t,e,a,n;t=300,e=!1,a="headermain",n="scroll",document.getElementById(a)&&(window.innerWidth>=1023?0===t?document.getElementById(a).classList.add(n):t&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=t?document.getElementById(a).classList.add(n):document.getElementById(a).classList.remove(n)})):0===e?document.getElementById(a).classList.add(n):e&&window.addEventListener("scroll",(t=>{scroll=window.scrollY,scroll>=e?document.getElementById(a).classList.add(n):document.getElementById(a).classList.remove(n)}))),$("[data-btnhidden]").each((function(){$(this).on("click",(function(t){t.preventDefault(),$(this).toggleClass("active"),$(this).closest(".showtext").toggleClass("active"),$(this).closest("[data-wrapper]").siblings("[data-hidden]").toggleClass("active"),$(this).hasClass("active")?$(this).find("span").text("Свернуть"):$(this).find("span").text("Развернуть")}))})),function(){if(document.getElementById("actual-btn")){const t=document.getElementById("actual-btn"),e=document.getElementById("file-chosen");t.addEventListener("change",(function(){e.textContent=this.files[0].name}))}}(),$("[data-slider='detail']").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,autoplay:!0,autoplaySpeed:2e3}),$("[data-ytlink]").click((function(){var t=$(this),e=$('<iframe frameborder="0" width="720" height="480" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src",t.data("ytlink")).css({width:400,height:300}),a="";$("#video-view").html(a).append(e),$("#modal_video").modal("show")})),$("#video-close").click((function(){$("#video-view").html("")}))}$(document).ready((function(){(new WOW).init(),function(t){t((function(){t("[data-headertabs]").on("click","li:not(.active)",(function(){t(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(t(this).index()).addClass("active")}))}))}(jQuery),$("[data-toggleclick='mainmenu']").on("click",(function(t){t.preventDefault(),$("[data-toggle='mainmenu']").toggleClass("active")})),$("[data-menutoggle='mainmenu']").on("click",(function(t){t.preventDefault();let e=$(this).data("menutoggle");$(`[data-menu=${e}]`).toggleClass("active"),$(this).toggleClass("active")})),$("[data-menutoggle='mobilemenu']").on("click",(function(t){t.preventDefault();let e=$(this).data("menutoggle");$(`[data-menu=${e}]`).toggleClass("active"),$(this).toggleClass("active"),$(".jsbackdrop").toggleClass("active")})),$(".jsbackdrop").on("click",(function(t){$(this).removeClass("active"),$("[data-menu]").removeClass("active"),$("[data-menutoggle]").removeClass("active")})),$("input[type=tel]").mask("7 (999) 999-99-99"),function(t){t((function(){t("[data-tabsbutton]").on("click","li span:not(.active) ",(function(e){e.preventDefault(),t(this).addClass("active").parent().siblings().find("span").removeClass("active"),t(this).closest("[data-tabs]").find("[data-tabscontent]").removeClass("active").eq(t(this).parent().index()).addClass("active")}))}))}(jQuery)})),window.addEventListener("load",(function(){t()}))})(),(()=>{"use strict";t.r(e)})()})();
//# sourceMappingURL=bundle.js.map