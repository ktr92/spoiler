function initFE(){fixElement(300,!1,"headermain","scroll"),hideText(),fileUpload(),detailSliderInit(),videoPopup()}function fileUpload(){if(document.getElementById("actual-btn")){const e=document.getElementById("actual-btn"),t=document.getElementById("file-chosen");e.addEventListener("change",(function(){t.textContent=this.files[0].name}))}}function hideText(){$("[data-btnhidden]").each((function(){$(this).on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).closest(".showtext").toggleClass("active"),$(this).closest("[data-wrapper]").siblings("[data-hidden]").toggleClass("active"),$(this).hasClass("active")?$(this).find("span").text("Свернуть"):$(this).find("span").text("Развернуть")}))}))}function detailSliderInit(){$("[data-slider='detail']").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,autoplay:!0,autoplaySpeed:2e3})}function videoPopup(){$("[data-ytlink]").click((function(){var e=$(this),t=$('<iframe frameborder="0" width="720" height="480" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src",e.data("ytlink")).css({width:400,height:300});$("#video-view").html("").append(t),$("#modal_video").modal("show")})),$("#video-close").click((function(){$("#video-view").html("")}))}function fixElement(e,t,i,n){document.getElementById(i)&&(window.innerWidth>=1023?0===e?document.getElementById(i).classList.add(n):e&&window.addEventListener("scroll",(t=>{scroll=window.scrollY,scroll>=e?document.getElementById(i).classList.add(n):document.getElementById(i).classList.remove(n)})):0===t?document.getElementById(i).classList.add(n):t&&window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=t?document.getElementById(i).classList.add(n):document.getElementById(i).classList.remove(n)})))}function closeByClickOutside(e,t){$(document).click((function(i){$(i.target).closest(`${e},${t}`).length||($(t).removeClass("active"),$(e).removeClass("active"))})),$(document).keyup((function(i){"Escape"===i.key&&($(t).removeClass("active"),$(e).removeClass("active"))}))}function closeByOutsideSelect(){$(document).click((function(e){$(e.target).closest(".dropdown-select__list,.dropdown-select__title").length||$(".dropdown-select__list").hide()})),$(document).keyup((function(e){"Escape"===e.key&&$(".dropdown-select__list").hide()}))}$(document).ready((function(){(new WOW).init(),function(e){e((function(){e("[data-headertabs]").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),$("[data-toggleclick='mainmenu']").on("click",(function(e){e.preventDefault(),$("[data-toggle='mainmenu']").toggleClass("active")})),$("[data-menutoggle='mainmenu']").on("click",(function(e){e.preventDefault();let t=$(this).data("menutoggle");$(`[data-menu=${t}]`).toggleClass("active"),$(this).toggleClass("active")})),$("[data-menutoggle='mobilemenu']").on("click",(function(e){e.preventDefault();let t=$(this).data("menutoggle");$(`[data-menu=${t}]`).toggleClass("active"),$(this).toggleClass("active"),$(".jsbackdrop").toggleClass("active")})),$(".jsbackdrop").on("click",(function(e){$(this).removeClass("active"),$("[data-menu]").removeClass("active"),$("[data-menutoggle]").removeClass("active")})),$("input[type=tel]").mask("7 (999) 999-99-99"),function(e){e((function(){e("[data-tabsbutton]").on("click","li span:not(.active) ",(function(t){t.preventDefault(),e(this).addClass("active").parent().siblings().find("span").removeClass("active"),e(this).closest("[data-tabs]").find("[data-tabscontent]").removeClass("active").eq(e(this).parent().index()).addClass("active")}))}))}(jQuery)})),window.addEventListener("load",(function(){initFE()}));