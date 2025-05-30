$(document).ready(function () {
  if ($("#gl_shopify_error").is(":visible")) {
    setTimeout(() => {
      $("#gl_shopify_error").attr("tabindex", -1);
      $("#gl_shopify_error").focus();
    }, 200);
  }

  if ($(".shopify-message.resetSuccess").is(":visible")) {
    setTimeout(() => {
      $(".shopify-message.resetSuccess").attr("tabindex", -1);
      $(".shopify-message.resetSuccess").focus();
    }, 200);
  }

  $(".jas-menu-label.jas-menu-label-new").attr("aria-hidden", "true");

  $(".jas-menu .menu-item-has-children > a").attr("aria-haspopup", "true");

  $("#rich-text-016JB91TTR00000000002HNDCW span")
    .attr("role", "heading")
    .attr("aria-level", "2");

  $("#rich-text-016JB91TTR00000000002HNDD2 p")
    .attr("role", "heading")
    .attr("aria-level", "2");

  $(".a11y_none").attr("role", "none");
  $(".a11y_h2").attr({ role: "heading", "aria-level": "2" });
  $(".a11y_h3").attr({ role: "heading", "aria-level": "3" });

  $(".needsclick.kl-private-reset-css-Xuajs1 img").attr("alt", "");

  $("nav").attr("aria-label", "Primary");

  $(".product").each(function () {
    const text = $(this).find(".cd.chp").html();

    $(this)
      .find(".button.ajax_add_to_cart")
      .attr("aria-label", `Shop now for ${text}`);
    console.log(text);
  });

  const more = $(".fs__18.lh__1.f__libre.tc.cw");

  $(".post-info h4").attr("role", "heading").attr("aria-level", "3");

  $(".jas-push-menu-btn.pr")
    .attr("role", "button")
    .attr("aria-label", "Open Menu");

  $(".widget-title").attr("aria-expanded", "false");
  $(".widget-title").click(function () {
    $(this).attr("aria-expanded", $(this).attr("aria-expanded") == "false");
  });
  $(".widget-title").keydown(function (event) {
    if (event.which == "13") {
      $(this).click();
    }
  });

  // menu button collapsed and expanded
  $(".close-menu").attr({ "aria-label": "Close Menu", role: "button" });
  $(".close-menu").keydown(function (event) {
    if (event.which == "13") {
      $(this).click();
      setTimeout(function () {
        $(".jas-push-menu-btn").focus();
      }, 100);
    }
  });

  $("#post-29695344737 h1").attr("role", "heading").attr("aria-level", "2");

  $(".post-related h4").attr("role", "heading").attr("aria-level", "3");

  $("#post-29695344737 h3").attr("role", "heading").attr("aria-level", "2");

  $(".collection-sort__input.orderby").attr("aria-label", "sort by");

  $('.jas_footer_content a[href^="tel:"]').each(function () {
    const phoneText = $(this).text().trim();
    $(this).attr("aria-label", `Call ${phoneText} phone number`);
  });

  // footer

  const read = $(".posts .more-link").length;
  const title = $(".posts .chp").length;
  for (let i = 0; i < read; i++) {
    $(".posts .more-link").each(function (i) {
      $(this).attr("aria-labelledby", `title-${i} post-${i}`);
      $(this).attr("id", `title-${i}`);
    });
  }

  for (let i = 0; i < title; i++) {
    $(".posts .chp").each(function (i) {
      $(this).attr("id", `post-${i}`);
    });
  }

  $(".sp-accordions a.tab-heading").attr({
    role: "button",
    "aria-expanded": "false",
  });
  $(".sp-accordions .active a.tab-heading").attr({
    role: "button",
    "aria-expanded": "true",
  });
  $(".sp-accordions a.tab-heading").click(function () {
    $(this).attr("aria-expanded", $(this).attr("aria-expanded") == "false");
  });

  $("footer aside").attr("role", "none");

  function updateAttributes() {
    if ($(window).width() <= 767) {
      $(".footer__top .widget-title")
        .removeAttr("aria-level")
        .attr({ role: "button", tabindex: "0" });
    } else {
      $(".footer__top .widget-title")
        .attr("role", "heading")
        .attr("aria-level", "2")
        .removeAttr("aria-expanded");
    }
  }

  updateAttributes();

  $(window).resize(function () {
    updateAttributes();
  });

  $(".pagination-page.page-numbers li a").each(function () {
    const page = $(this).text(); // Get the text content of the current link
    $(this).attr("aria-label", `page ${page}`); // Set aria-label for the current link
  });

  $(".pagination-page.page-numbers li .page-numbers.current").attr(
    "aria-current",
    "true"
  );
  $(".jas-pagination").attr("aria-label", "Pagination");

  $(".cursor-pointer.jas-product-img-element.jas-hover-img.pa").addClass(
    "secondProduct"
  );
  $(".jas-product-image").hover(function () {
    if (
      $(
        ".cursor-pointer.jas-product-img-element.jas-hover-img.pa.secondProduct"
      ).hasClass("secondProduct")
    ) {
      $(
        ".cursor-pointer.jas-product-img-element.jas-hover-img.pa.secondProduct"
      ).removeClass("secondProduct");
    } else {
      $(".cursor-pointer.jas-product-img-element.jas-hover-img.pa").addClass(
        "secondProduct"
      );
    }
  });

  $(".jas-item-category .jas-promotion").attr({ tabindex: "0", role: "link" });

  $(".jas-item-category .jas-promotion").on("keydown", function (event) {
    if (event.key === "Enter") {
      $(this).click();
    }
  });
  $(".pe-7s-search").on("keydown", function (event) {
    if (event.key === "Enter") {
      $(this).trigger("click");
    }
  });
  $("body").prepend(
    '<a href="#jas-content" class="skip-link">Skip to Main Content</a>'
  );

  $(".close-menu").attr("tabindex", "0");
  $(".black_menu a").attr("tabindex", "0");
  $(".close-menu").on("keydown", function (event) {
    if (event.key === "Enter") {
      $(this).click();
    }
  });
  $(".black_menu a").on("keydown", function (event) {
    if (event.key === "Enter") {
      $(this).click();
    }
  });
  $(".jas-push-menu-btn").on("click", function () {
    $(".jas-canvas-menu").css("display", "block");
    $(".close-menu").focus();
    $("#jas-mobile-menu").parents().siblings().attr("aria-hidden", "true");
  });

  $(".close-menu").on("click", function () {
    $(".jas-canvas-menu")
      .css("display", "none")
      .css("transform", "translate3d(0, 0, 0);")
      .css("transition", "transform .3s ease;");
    $("#jas-mobile-menu").parents().siblings().removeAttr("aria-hidden");
  });

  $(".cart-contents").on("click", function () {
    $(".jas-mini-cart").css("display", "flex");
    $(".close-cart").focus();
    $(".widget_shopping_cart").parents().siblings().attr("aria-hidden", "true");
  });

  $(".close-cart").on("click", function () {
    $(".widget_shopping_cart").parents().siblings().removeAttr("aria-hidden");
  });

  $(".data-sheet").attr("role", "heading").attr("aria-level", "2");

  setTimeout(function () {
    $(".oke-reviewsTab").attr({ tabindex: "-1", "aria-disabled": "true" });
  }, 2000);

  $(".shopify-variation-add-to-cart .plus")
    .attr("role", "button")
    .attr("aria-label", "Increase Quantity");
  $(".shopify-variation-add-to-cart .minus")
    .attr("role", "button")
    .attr("aria-label", "Decrease Quantity");

  // Quantity code end

  let card = $("<div>", {
    class: "slide-noti sr-only",
    "aria-live": "polite",
    "aria-atomic": "true",
  });

  setTimeout(function () {
    $(".slick-list.draggable").removeAttr("aria-live");
    $(".p-thumb .slick-list.draggable").append(card);

    // $(".slick-arrow").on("click", function () {
    //   let currentIndex = $(".p-item.slick-current").attr("data-slick-index");

    //   $(".slide-noti.sr-only").text(`Slide ${parseInt(currentIndex) + 1}`);
    // });
  }, 2000);

  setTimeout(function () {
    $("<span>", {
      id: "dynamicSpan",
      class: "highlight",
      text: $('footer .klaviyo-form input[name="email"]').attr("placeholder"),
    }).insertBefore('footer .klaviyo-form input[name="email"]');
    $(".highlight").css("margin-bottom", "3px");
  }, 2000);

  // sort by code start
  $(".shopify-ordering select").attr("aria-describedby", "sort-description");
  let Sort = $("<div>", {
    class: "sr-only sort_by_announce",
    id: "sort-description",
  });

  $(".shopify-ordering").append(Sort);
  $(".sr-only.sort_by_announce").text(
    "Selecting an option will update the page."
  );

  $(".gecko-search-dropdown").keydown(function (event) {
    if (event.which == "13") {
      $(this).find(".pe-7s-search").click();
      console.log($(this).find(".pe-7s-search"));
    }
  });

  $(".gecko-search-dropdown .pe-7s-search").keydown(function(event){
    if(event.which == 13){
           $(this).click();
    }
  });

  console.log("Radies");
});
