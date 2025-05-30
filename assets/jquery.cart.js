 /*! shipping rates calculator to cart page. */
if (typeof Countries === "object") {
    Countries.updateProvinceLabel = function(d, a) {
        if (typeof d === "string" && Countries[d] && Countries[d].provinces) {
            if (typeof a !== "object") {
                a = document.getElementById("address_province_label");
                if (a === null) {
                    return
                }
            }
            a.innerHTML = Countries[d].label;
            var c = $(a).parent();
            var b = c.find("select");
            c.find(".custom-style-select-box-inner").html(Countries[d].provinces[0])
        }
    }
}
if (typeof Shopify.Cart === "undefined") {
    Shopify.Cart = {}
}
Shopify.Cart.ShippingCalculator = (function() {
    var _config = {
        submitButton: "Calculate shipping",
        submitButtonDisabled: "Calculating...",
        templateId: "shipping-calculator-response-template",
        wrapperId: "wrapper-response",
        customerIsLoggedIn: false,
        moneyFormat: "$ {{amount}}"
    };
    var _render = function(response) {
        var template = jQuery("#" + _config.templateId);
        var wrapper = jQuery("#" + _config.wrapperId);
        if (template.length && wrapper.length) {
            template.tmpl(response).appendTo(wrapper);
            if (typeof Currency !== "undefined" && typeof Currency.convertAll === "function") {
                var newCurrency = "";
                if (jQuery("[name=currencies]").size()) {
                    newCurrency = jQuery("[name=currencies]").val()
                } else {
                    if (jQuery(".currencies a.selected").size()) {
                        newCurrency = jQuery(".currencies a.selected").attr("data-currency")
                    }
                }
                if (newCurrency !== "") {
                    Currency.convertAll(shopCurrency, newCurrency, "#wrapper-response span.money, #estimated-shipping em span.money")
                }
            }
        }
    };
    var _enableButtons = function() {
        jQuery(".get-rates").removeAttr("disabled").removeClass("disabled").val(_config.submitButton)
    };
    var _disableButtons = function() {
        jQuery(".get-rates").val(_config.submitButtonDisabled).attr("disabled", "disabled").addClass("disabled")
    };
    var _getCartShippingRatesForDestination = function(shipping_address) {
        var params = {
            type: "GET",
            url: "/cart/shipping_rates.json",
            data: jQuery.param({
                shipping_address: shipping_address
            }),
            dataType: "json",
            success: function(response) {
              console.log(response)
                rates = response.shipping_rates;
                _onCartShippingRatesUpdate(rates, shipping_address)
            },
            error: function(XMLHttpRequest, textStatus) {
                _onError(XMLHttpRequest, textStatus)
            }
        };
        jQuery.ajax(params)
    };
    var _fullMessagesFromErrors = function(errors) {
        var fullMessages = [];
        jQuery.each(errors, function(attribute, messages) {
            jQuery.each(messages, function(index, message) {
                fullMessages.push(attribute + " " + message)
            })
        });
        return fullMessages
    };
    var _onError = function(XMLHttpRequest, textStatus) {
        jQuery("#estimated-shipping").hide();
        jQuery("#estimated-shipping em").empty();
        _enableButtons();
        var feedback = "";
        var data = eval("(" + XMLHttpRequest.responseText + ")");
        if (!!data.message) {
            feedback = data.message + "(" + data.status + "): " + data.description
        } else {
            feedback = "Error : " + _fullMessagesFromErrors(data).join("; ")
        }
        if (feedback === "Error : country is not supported.") {
            feedback = "We do not ship to this destination."
        }
        _render({
            rates: [],
            errorFeedback: feedback,
            success: false
        });
        jQuery("#" + _config.wrapperId).show()
    };
    var _onCartShippingRatesUpdate = function(rates, shipping_address) {
        _enableButtons();
        var readable_address = "";
        if (shipping_address.zip) {
            readable_address += shipping_address.zip + ", "
        }
        if (shipping_address.province) {
            readable_address += shipping_address.province + ", "
        }
        readable_address += shipping_address.country;
        if (rates[0].price == "0.00") {
            jQuery("#estimated-shipping em").html("FREE")
        } else {
            jQuery("#estimated-shipping em").html(_formatRate(rates[0].price))
        }
        jQuery("#estimated-shipping em").html(_formatRate(rates[0].price));
        _render({
            rates: rates,
            address: readable_address,
            success: true
        });
        jQuery("#" + _config.wrapperId + ", #estimated-shipping").fadeIn()
    };
    var _formatRate = function(cents) {
        if (typeof cents == "string") {
            cents = cents.replace(".", "")
        }
        var value = "";
        var patt = /\{\{\s*(\w+)\s*\}\}/;
        var formatString = _config.moneyFormat;

        function addCommas(moneyString) {
            return moneyString.replace(/(\d+)(\d{3}[\.,]?)/, "$1,$2")
        }

        function floatToString(numeric, decimals) {
            var amount = numeric.toFixed(decimals).toString();
            if (amount.match(/^\.\d+/)) {
                return "0" + amount
            } else {
                return amount
            }
        }
        switch (formatString.match(patt)[1]) {
            case "amount":
                value = addCommas(floatToString(cents / 100, 2));
                break;
            case "amount_no_decimals":
                value = addCommas(floatToString(cents / 100, 0));
                break;
            case "amount_with_comma_separator":
                value = floatToString(cents / 100, 2).replace(/\./, ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                value = addCommas(floatToString(cents / 100, 0)).replace(/\./, ",");
                break
        }
        return formatString.replace(patt, value)
    };
    _init = function() {
        new Shopify.CountryProvinceSelector("address_country", "address_province", {
            hideElement: "address_province_container"
        });
        var countriesSelect = jQuery("#address_country");
        var addressProvinceLabelEl = jQuery("#address_province_label").get(0);
        if (typeof Countries !== "undefined") {
            Countries.updateProvinceLabel(countriesSelect.val(), addressProvinceLabelEl);
            countriesSelect.change(function() {
                Countries.updateProvinceLabel(countriesSelect.val(), addressProvinceLabelEl)
            })
        }
        jQuery(".get-rates").click(function() {
            _disableButtons();
            jQuery("#" + _config.wrapperId).empty().hide();
            var shippingAddress = {};
            shippingAddress.zip = jQuery("#address_zip").val() || "";
            shippingAddress.country = jQuery("#address_country").val() || "";
            shippingAddress.province = jQuery("#address_province").val() || "";
            _getCartShippingRatesForDestination(shippingAddress)
        });
        if (_config.customerIsLoggedIn) {
            jQuery(".get-rates:eq(0)").trigger("click")
        }
    };
    return {
        show: function(params) {
            params = params || {};
            jQuery.extend(_config, params);
            jQuery(function() {
                _init()
            })
        },
        getConfig: function() {
            return _config
        },
        formatRate: function(cents) {
            return _formatRate(cents)
        }
    }
})();
