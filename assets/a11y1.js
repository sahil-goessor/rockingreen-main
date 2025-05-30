$(document).ready(function () {
  $("ol > ol:empty, ul > ul:empty").each(function () {
    $(this).css("display", "none");
    $(this).parent().css("display", "none");
  });

  $(".close-cart").attr({
    tabindex: "0",
    role: "button",
    "aria-label": "Close cart",
  });

  $(".close-cart").click(function (event) {
    console.log($("a.cart-contents"));
    $("a.cart-contents").focus();
  });

  $(".close-cart").keydown(function (event) {
    if (event.which == "13") {
      $(this).click();
    }
  });

  $(".product-quantity .quantity").each(function () {
    var $quantityContainer = $(this); // Cache the current container
    var $input = $quantityContainer.find("input.qty");
    var $minusButton = $quantityContainer.find("a.minus");
    var $plusButton = $quantityContainer.find("a.plus");

    // Check initial value
    var value = parseInt($input.val(), 10);
    if (value === 1) {
      $minusButton.attr({ tabindex: "-1", "aria-disabled": "true" });
    }

    // Handle click event for the minus button
    $minusButton.on("click", function (e) {
      var updatedValue = parseInt($input.val(), 10);
      if (updatedValue === 2) {
        e.preventDefault(); // Prevent default action if disabled
        $(this).attr({ tabindex: "-1", "aria-disabled": "true" });
      } else {
        $(this).removeAttr("tabindex").removeAttr("aria-disabled");
      }
    });

    $plusButton.on("click", function (e) {
      $minusButton.removeAttr("tabindex").removeAttr("aria-disabled");
    });

    console.log("Initial value: " + value);
  });

  $("#jas-mobile-menu  #menu-main-menu > .menu-item-has-children > a").attr({
    role: "button",
  });
  $(
    "#jas-mobile-menu  #menu-main-menu > .menu-item-has-children > ul > li.black_menu > a"
  )
    .removeAttr("tabindex")
    .attr("role", "button");

  $(".a11y_searchbtn").attr("aria-expanded", "false");
  $(".a11y_searchbtn").keydown(function (event) {
    if (event.which == "13") {
      $(".a11y_searchbtn i").click();
      console.log("Clicke");
    }
  });
  $(".a11y_searchbtn").click(function () {
    $(this).attr("aria-expanded", $(this).attr("aria-expanded") == "false");
  });

  $(".product-info .price ins").prepend(
    `<span class="sr-only">Actual Price</span>`
  );
  $(".product-info .price del").prepend(
    `<span class="sr-only">Discounted Price</span>`
  );
  $(".products .jas-grid-item .jas-product-image").each(function () {
    var label_Badge = $(this).find(".jas-label").text().trim();
    var label_text = $(this).find("a.jas-pr-image-link img").attr("alt");
    $(this)
      .find("a.jas-pr-image-link")
      .attr("aria-label", `${label_Badge} ${label_text}`);
  });
  $(".jas_thumbs_img").each(function () {
    var label_Badge = $(this).find(".jas-label").text().trim();
    if (label_Badge) {
      var label_text = $(this).find("a.jas-pr-image-link img").attr("alt");
      $(this)
        .find("a.jas-pr-image-link")
        .attr("aria-label", `${label_Badge} ${label_text}`);
    }
  });

  $(".sp-accordions .panel h4").attr({ role: "heading", "aria-level": "2" });
  $(".quantity").each(function () {
    $(this)
      .find("a.plus")
      .click(function () {
        var value = $(".quantity input").val();
        value++;
        liveAnnouncement(`Qunatity updated to ${value}`);
      });
    $(this)
      .find("a.minus")
      .click(function () {
        var value = $(".quantity input").val();
        value--;
        if (value > 1) {
          liveAnnouncement(`Quantity updated to ${value}`);
        } else {
          liveAnnouncement(`Quantity is already at the minimum value of 1`);
        }
      });
  });

  $(".shopify-MyAccount-navigation .is-active > a").attr(
    "aria-current",
    "true"
  );

  $(".shopify-MyAccount-content .gl_address-new-toggle button").attr(
    "aria-expanded",
    "false"
  );
  $(".shopify-MyAccount-content .gl_address-new-toggle button").click(
    function () {
      $(this).attr("aria-expanded", $(this).attr("aria-expanded") == "false");
    }
  );

  $(".clearfix .address-new-toggle.btn_cancel").click(function () {
    $(".gl_address-new-toggle .address-new-toggle").focus();
  });

  $(".shopify-Addresses .shopify-Address").each(function () {
    const textBeforeBr = $(this)
      .find("p")
      .first()
      .html()
      .split("<br>")[0]
      .trim();
    const edit = $(this).find(".address-edit-toggle").text().trim();
    const deleted = $(this).find(".address-delete").text().trim();
    $(this)
      .find(".address-edit-toggle")
      .attr("aria-label", `${edit} ${textBeforeBr}`);
    $(this)
      .find(".address-delete")
      .attr("aria-label", `${deleted} ${textBeforeBr}`);
    console.log(textBeforeBr);
  });

  $("nav.shopify-MyAccount-navigation").attr("aria-label", "Side");

  console.log("Ready!");
});
$(window).on("load", function () {
  $(".slick-track,.slick-track .slick-slide")
    .removeAttr("role")
    .removeAttr("aria-describedby");
  $("iframe[src*='youtube']").attr("aria-label", "Youtube");
  $("#cjTag").attr("alt", "");

  setTimeout(function () {}, 2000);

  $(".slick-arrow").click(function () {
    liveAnnouncement("Slide Changed");
  });

  $(".menu-item.has-sub > a").click((event) => {
    const $SubItems = $(event.target).next();
    const $backButton = $SubItems.find("> li.black_menu > a");
    setTimeout(() => {
      $backButton.focus();
      $SubItems
        .find("> li.black_menu")
        .parents()
        .siblings()
        .attr({ "aria-hidden": "true" });
    }, 200);
  });
  $(".black_menu.menu_link_list").click((event) => {
    $(event.target).parent().parents().siblings().removeAttr("aria-hidden");
    setTimeout(() => {
      console.log($("#menu-main-menu .open").length);
      if ($("#menu-main-menu .open").length > 0) {
        $("#menu-main-menu .open")
          .last()
          .find("> ul > li.black_menu")
          .parents()
          .siblings()
          .attr({ "aria-hidden": "true" });
        console.log("back");
      } else {
        $("#menu-main-menu").parents().siblings().attr("aria-hidden", "true");
        console.log("no back");
      }
      const toFocus = $(event.target).closest("ul").prev();
      toFocus.focus();
      console.log(toFocus);
    }, 200);
  });

  console.log("Load!");
});

function liveAnnouncement(liveText) {
  const para = document.createElement("p");
  para.innerText = liveText;
  document.getElementById("live-ann").appendChild(para);
  setTimeout(function () {
    document.getElementById("live-ann").innerHTML = "";
  }, 1000);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Check if the overlay already exists
    if (document.getElementById("invisible-overlay")) return;

    // Create an invisible overlay
    const overlay = document.createElement("div");
    overlay.id = "invisible-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "transparent";
    overlay.style.zIndex = "9999"; // Ensure it is on top
    overlay.style.pointerEvents = "auto";

    // Append overlay to the body
    document.body.appendChild(overlay);
    document.body.classList.add("unfocused");

    // Blur any focused elements
    if (document.activeElement && document.activeElement !== document.body) {
      document.activeElement.blur();
    }

    // Remove overlay on mouse movement
    const removeOverlay = () => {
      overlay.remove();
      document.body.classList.remove("unfocused");
      document.removeEventListener("mousemove", removeOverlay);
    };

    document.addEventListener("mousemove", removeOverlay);
  }
});

document.addEventListener("keydown", (event) => {
  // document.body.classList.remove("unfocused");
  if (event.key == "Escape") {
    const $element = $(event.target);
    if ($element.parent().hasClass("menu-item")) {
      $element.closest("ul.sub-menu").prev().focus();
    }
  }

  const cartOverlay = document.querySelector(".jas-mini-cart");

  // Check if the overlay is visible
  if (
    cartOverlay &&
    cartOverlay.style.display === "flex" &&
    event.key === "Tab"
  ) {
    const focusableSelectors = [
      "a[href]",
      "button",
      "textarea",
      'input[type="text"]',
      'input[type="radio"]',
      'input[type="checkbox"]',
      "select",
      '[tabindex]:not([tabindex="-1"])',
    ];

    // Get all focusable elements inside the overlay

    if (event.shiftKey) {
      // Handle reverse Tab (Shift + Tab)
      const focusableElements = Array.from(
        cartOverlay.querySelectorAll(focusableSelectors.join(","))
      ).filter((el) => !el.hasAttribute("disabled"));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Handle forward Tab
      const focusableElements = Array.from(
        cartOverlay.querySelectorAll(focusableSelectors.join(","))
      ).filter((el) => !el.hasAttribute("disabled"));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
});
