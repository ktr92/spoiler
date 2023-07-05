function initFE() {
  fixElement(300, false, "headermain", "scroll")
  hideText()
  fileUpload()
  detailsliderInit()
  videoPopup()
}

function fileUpload() {
  if (document.getElementById("actual-btn")) {
    const actualBtn = document.getElementById("actual-btn")

    const fileChosen = document.getElementById("file-chosen")

    actualBtn.addEventListener("change", function () {
      fileChosen.textContent = this.files[0].name
    })
  }
}

$(document).ready(function () {
  new WOW().init()


  $("a.scrollTo").click(function () {

    var destination = $($(this).attr("href")).offset().top - 90;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1100);
    return false;
  });

  
  ;(function ($) {
    $(function () {
      $("[data-headertabs]").on("click", "li:not(.active)", function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("[data-tabs]")
          .find("[data-contenttabs]")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active")
      })
    })
  })(jQuery)

  $("[data-toggleclick='mainmenu']").on("click", function (e) {
    e.preventDefault()
    $("[data-toggle='mainmenu']").toggleClass("active")
  })

  $(".faqblock__items .faqblock__item:first")
    .find(".faq-question")
    .addClass("active")
  $(".faqblock__items .faqblock__item:first").find(".faq-answer").show()
  $(document).on("click", ".faq-question", function () {
    $(this).toggleClass("active")
    $(this).next(".faq-answer").slideToggle().toggleClass("active")
  })

  $("[data-menutoggle='mainmenu']").on("click", function (e) {
    e.preventDefault()
    let menu = $(this).data("menutoggle")
    $(`[data-menu=${menu}]`).toggleClass("active")
    $(this).toggleClass("active")
  })
  $("[data-menutoggle='mobilemenu']").on("click", function (e) {
    e.preventDefault()
    let menu = $(this).data("menutoggle")
    $(`[data-menu=${menu}]`).toggleClass("active")
    $(this).toggleClass("active")
    $(".jsbackdrop").toggleClass("active")
  })
  $(".jsbackdrop").on("click", function (e) {
    $(this).removeClass("active")
    $("[data-menu]").removeClass("active")
    $("[data-menutoggle]").removeClass("active")
  })

  $("input[type=tel]").mask("7 (999) 999-99-99")
  ;(function ($) {
    $(function () {
      $("[data-tabsbutton]").on("click", "li span:not(.active) ", function (e) {
        e.preventDefault()
        $(this)
          .addClass("active")
          .parent()
          .siblings()
          .find("span")
          .removeClass("active")
        $(this)
          .closest("[data-tabs]")
          .find("[data-tabscontent]")
          .removeClass("active")
          .eq($(this).parent().index())
          .addClass("active")
      })
    })
  })(jQuery)
})

function hideText() {
  $("[data-btnhidden]").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault()
      $(this).toggleClass("active")
      $(this).closest(".showtext").toggleClass("active")
      $(this)
        .closest("[data-wrapper]")
        .siblings("[data-hidden]")
        .toggleClass("active")
      if ($(this).hasClass("active")) {
        $(this).find("span").text("Свернуть")
      } else {
        $(this).find("span").text("Развернуть")
      }
    })
    /* } */
  })
}

function detailsliderInit() {
  const swiper = new Swiper(".detailswiperpreview", {
    spaceBetween: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: "auto",
    mousewheel: true,
    freeMode: true,
    watchSlidesProgress: true,
  })
  const swiper2 = new Swiper(".detailswiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".detailslider-pagination",
      clickable: true,
    },
    slidesPerView: 1,

    effect: "fade"
  })

  $(function () {
    $(".zoom-box").each(function () {
      $(this).zoom()
    })
  })
}


function videoPopup() {
  $("[data-ytlink]").click(function () {
    var $this = $(this)
    var $iframe = $(
      '<iframe frameborder="0" width="720" height="480" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">'
    )
      .attr("src", $this.data("ytlink"))
      .css({ width: 720, height: 480 })
    var $title = ""
    $("#video-view").html($title).append($iframe)
    $("#modal_video").modal("show")
    /*  $("#video-popup").show() */
  })
  $('#modal_video').on('hidden', function () {
    // do something…
    $("#video-view").html("")
});
  $("#video-close").click(function () {
    $("#video-view").html("")
    
    /*  $("#video-popup").hide() */
  })
}

function fixElement(topDesktop, topMobile, elementId, className) {
  if (document.getElementById(elementId)) {
    if (window.innerWidth >= 1023) {
      if (topDesktop === 0) {
        document.getElementById(elementId).classList.add(className)
      } else {
        if (topDesktop) {
          window.addEventListener("scroll", (event) => {
            scroll = window.scrollY
            if (scroll >= topDesktop) {
              document.getElementById(elementId).classList.add(className)
            } else {
              document.getElementById(elementId).classList.remove(className)
            }
          })
        }
      }
    } else {
      if (topMobile === 0) {
        document.getElementById(elementId).classList.add(className)
      } else {
        if (topMobile) {
          window.addEventListener("scroll", (event) => {
            scroll = window.scrollY
            if (scroll >= topMobile) {
              document.getElementById(elementId).classList.add(className)
            } else {
              document.getElementById(elementId).classList.remove(className)
            }
          })
        }
      }
    }
  }
}

function closeByClickOutside(element, button) {
  $(document).click(function (event) {
    if (!$(event.target).closest(`${element},${button}`).length) {
      $(button).removeClass("active")
      $(element).removeClass("active")
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(button).removeClass("active")
      $(element).removeClass("active")
    }
  })
}
function closeByOutsideSelect() {
  $(document).click(function (event) {
    if (
      !$(event.target).closest(`.dropdown-select__list,.dropdown-select__title`)
        .length
    ) {
      $(".dropdown-select__list").hide()
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(".dropdown-select__list").hide()
    }
  })
}

window.addEventListener("load", function () {
  initFE()
})
