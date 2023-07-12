function initFE(){fixElement(300,!1,"headermain","scroll"),hideText(),fileUpload(),detailsliderInit(),videoPopup(),initConnect(),closeByClickOutside('[data-menu="mainmenu"]','[data-menutoggle="mainmenu"]'),closeByClickOutside(".tp-tooltip","[data-tooltip]"),calc()}function calc(){let t=0,e=null;$('[data-calc="select"]').on("change",(function(){t=0,$("[data-calc='select']").not(this).prop("selectedIndex",0);let n=$(this).closest('[data-calc="wrapper"]').find("[data-select]");e=n.attr("data-select");let i=$("option:selected",this).attr("data-calc"),a=$("input[data-input]:checked"),o=0;a.each((function(){o+=parseFloat($(this).attr("data-input"))})),parseFloat(i)>0?t+=parseFloat(i)+parseFloat(o):(t=0,e=null),$("[data-calc='result']").text(t),$("[data-calc='inputresult']").val(t)})),$("input[data-input]").on("change",(function(){let n=$(this).attr("data-input");e&&($(this).is(":checked")?t+=parseFloat(n):t-=parseFloat(n)),$("[data-calc='result']").text(t)}))}function initConnect(){document.getElementById("spoint1")&&(connect(document.getElementById("spoint1"),document.getElementById("epoint1"),document.getElementById("line1")),connect(document.getElementById("spoint2"),document.getElementById("epoint2"),document.getElementById("line2")),connect(document.getElementById("spoint3"),document.getElementById("epoint3"),document.getElementById("line3")),connect(document.getElementById("spoint4"),document.getElementById("epoint4"),document.getElementById("line4")))}function closeByClickOutside(t,e){$(document).click((function(n){$(n.target).closest(`${t},${e}`).length||($(e).removeClass("active"),$(t).removeClass("active"))})),$(document).keyup((function(n){"Escape"===n.key&&($(e).removeClass("active"),$(t).removeClass("active"))}))}function fileUpload(){if(document.getElementById("actual-btn")){const t=document.getElementById("actual-btn"),e=document.getElementById("file-chosen");t.addEventListener("change",(function(){e.textContent=this.files[0].name}))}}function connect(t,e,n){var i=t.offsetLeft,a=t.offsetTop,o=e.offsetLeft,l=e.offsetTop,s=i-o,c=a-l,d=Math.sqrt(s*s+c*c),u=180*Math.atan2(l-a,o-i)/Math.PI,r=t.clientWidth/2,m=t.clientWidth/2;n.style.width=d+"px",n.style.left=i+r+"px",n.style.top=a+m+"px",n.style.transform="rotate("+u+"deg)"}function hideText(){$("[data-btnhidden]").each((function(){$(this).on("click",(function(t){t.preventDefault(),$(this).toggleClass("active"),$(this).closest(".showtext").toggleClass("active"),$(this).closest("[data-wrapper]").siblings("[data-hidden]").toggleClass("active"),$(this).hasClass("active")?$(this).find("span").text("Свернуть"):$(this).find("span").text("Развернуть")}))}))}function detailsliderInit(){const t=new Swiper(".detailswiperpreview",{spaceBetween:50,scrollbar:{el:".swiper-scrollbar",draggable:!0},slidesPerView:"auto",mousewheel:!0,freeMode:!0,watchSlidesProgress:!0});new Swiper(".detailswiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:t},pagination:{el:".detailslider-pagination",clickable:!0},slidesPerView:1,effect:"fade"});$((function(){$(".zoom-box").each((function(){$(this).zoom()}))}))}function videoPopup(){$("[data-ytlink]").click((function(){var t=$(this),e=$('<iframe frameborder="0" width="720" height="480" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src",t.data("ytlink")).css({width:720,height:480});$("#video-view").html("").append(e),$("#modal_video").modal("show")})),$("#modal_video").on("hidden",(function(){$("#video-view").html("")})),$("#video-close").click((function(){$("#video-view").html("")}))}function fixElement(t,e,n,i){document.getElementById(n)&&(window.innerWidth>=1023?0===t?document.getElementById(n).classList.add(i):t&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=t?document.getElementById(n).classList.add(i):document.getElementById(n).classList.remove(i)})):0===e?document.getElementById(n).classList.add(i):e&&window.addEventListener("scroll",(t=>{scroll=window.scrollY,scroll>=e?document.getElementById(n).classList.add(i):document.getElementById(n).classList.remove(i)})))}function closeByClickOutside(t,e){$(document).click((function(n){$(n.target).closest(`${t},${e}`).length||($(e).removeClass("active"),$(t).removeClass("active"))})),$(document).keyup((function(n){"Escape"===n.key&&($(e).removeClass("active"),$(t).removeClass("active"))}))}function closeByOutsideSelect(){$(document).click((function(t){$(t.target).closest(".dropdown-select__list,.dropdown-select__title").length||$(".dropdown-select__list").hide()})),$(document).keyup((function(t){"Escape"===t.key&&$(".dropdown-select__list").hide()}))}$(document).ready((function(){(new WOW).init(),window.onresize=function(){initConnect()},$("a.scrollTo").click((function(){var t=$($(this).attr("href")).offset().top-30;return $("html:not(:animated),body:not(:animated)").animate({scrollTop:t},1100),!1})),function(t){t((function(){t("[data-headertabs]").on("click","li:not(.active)",(function(){t(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(t(this).index()).addClass("active")}))}))}(jQuery),$(".tpbutton").on("click",(function(t){t.preventDefault(),t.stopPropagation(),$(".tp-tooltip").removeClass("active"),$(this).closest("[data-tooltip='tooltip']").find(".tp-tooltip").addClass("active")})),$(".tpclose").on("click",(function(t){t.preventDefault(),t.stopPropagation(),$(this).closest("[data-tooltip='tooltip']").find(".tp-tooltip").removeClass("active")})),$(".landingheader").on("click",(function(t){t.preventDefault(),$(".landingheader__menu").slideToggle()})),$("[data-toggleclick='mainmenu']").on("click",(function(t){t.preventDefault(),$("[data-toggle='mainmenu']").toggleClass("active")})),$(".faqblock__items .faqblock__item:first").find(".faq-question").addClass("active"),$(".faqblock__items .faqblock__item:first").find(".faq-answer").show(),$(document).on("click",".faq-question",(function(){$(this).toggleClass("active"),$(this).next(".faq-answer").slideToggle().toggleClass("active")})),$("[data-menutoggle='mainmenu']").on("click",(function(t){t.preventDefault();let e=$(this).data("menutoggle");$(`[data-menu=${e}]`).toggleClass("active"),$(this).toggleClass("active")})),$("[data-menutoggle='mobilemenu']").on("click",(function(t){t.preventDefault();let e=$(this).data("menutoggle");$(`[data-menu=${e}]`).toggleClass("active"),$(this).toggleClass("active"),$(".jsbackdrop").toggleClass("active")})),$(".jsbackdrop").on("click",(function(t){$(this).removeClass("active"),$("[data-menu]").removeClass("active"),$("[data-menutoggle]").removeClass("active")})),$("input[type=tel]").mask("7 (999) 999-99-99"),function(t){t((function(){t("[data-tabsbutton]").on("click","li span:not(.active) ",(function(e){e.preventDefault(),t(this).addClass("active").parent().siblings().find("span").removeClass("active"),t(this).closest("[data-tabs]").find("[data-tabscontent]").removeClass("active").eq(t(this).parent().index()).addClass("active")}))}))}(jQuery)})),window.addEventListener("load",(function(){initFE()}));