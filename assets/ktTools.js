(function() {
  if(document.getElementById("ktTools-css")) console.log("Error: ktTools already loaded");
  else if("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

    var shopiAlert = function(a, c) {
      "function" === typeof Shopify.Flash.error && "function" === typeof Shopify.Flash.notice && (c ? Shopify.Flash.error(a) : Shopify.Flash.notice(a))
    };
    var uniqArray = function(a) {
      a = a.concat();
      for(var c = 0; c < a.length; ++c)
        for(var b = c + 1; b < a.length; ++b) a[c] === a[b] && a.splice(b--, 1);
      return a
    },
        iconTools = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="iconTools" x="0px" y="0px" width="14px" height="100%" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"><g><path d="M18,26c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S20.206,26,18,26z"/><path d="M30,26c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S32.206,26,30,26z"/><path d="M46,30c0-2.206-1.794-4-4-4s-4,1.794-4,4s1.794,4,4,4S46,32.206,46,30z"/><path d="M2.414,30l13.293-13.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-14,14c-0.391,0.391-0.391,1.023,0,1.414 l14,14C14.488,44.902,14.744,45,15,45s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L2.414,30z"/><path d="M59.707,29.293l-14-14c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L57.586,30L44.293,43.293 c-0.391,0.391-0.391,1.023,0,1.414C44.488,44.902,44.744,45,45,45s0.512-0.098,0.707-0.293l14-14 C60.098,30.316,60.098,29.684,59.707,29.293z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
        iconTeam = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="iconTeam" x="0px" y="0px" viewBox="0 0 504.125 504.125" style="enable-background:new 0 0 504.125 504.125;" xml:space="preserve"> <path style="fill:#fff;" d="M339.772,0c0,0,44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193 c7.877-70.357,41.653-225.485,186.888-260.884c0,0-135.176,50.546-147.117,279.347c69.459,9.752,232.361,16.305,280.726-125.062 C489.536,187.817,339.772,0,339.772,0z"/> <path style="fill:#fff;" d="M145.007,498.704c147.456-58.849,254.748-196.71,269.556-361.283C384.418,56.107,339.772,0,339.772,0 s44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193c7.877-70.357,41.653-225.485,186.888-260.884 C292.053,220.31,157.279,270.73,145.007,498.704z"/> <circle style="fill:#fff;" cx="90.459" cy="171.985" r="13.785"/> <g> <circle style="fill:#fff;" cx="133.782" cy="158.2" r="9.846"/> <circle style="fill:#fff;" cx="124.921" cy="64.662" r="24.615"/> <circle style="fill:#fff;" cx="200.736" cy="120.785" r="7.877"/> <circle style="fill:#fff;" cx="266.713" cy="76.477" r="22.646"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
        iconBulkTags = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="iconBulkTags" x="0px" y="0px" width="24px" height="100%" viewBox="0 0 562.563 562.562" style="enable-background:new 0 0 562.563 562.562;" xml:space="preserve"><g><path d="M512.563,50.001H395.896c-27.5,0-65.909,15.909-85.355,35.355L114.584,281.312c-19.445,19.445-19.445,51.265,0,70.711 l145.957,145.953c19.445,19.446,51.265,19.446,70.711,0l195.954-195.953c19.447-19.446,35.357-57.856,35.357-85.356V100.001 C562.563,72.501,540.063,50.001,512.563,50.001z M445.896,216.667c-27.614,0-50-22.385-50-50c0-27.614,22.386-50,50-50 s50,22.386,50,50C495.896,194.282,473.51,216.667,445.896,216.667z M41.013,328.451l178.322,178.321 c-18.888,9.979-42.949,7.053-58.795-8.796L14.584,352.023c-19.445-19.446-19.445-51.266,0-70.711L210.541,85.356 c19.446-19.446,57.855-35.355,85.355-35.355L41.013,304.882C34.532,311.364,34.532,321.97,41.013,328.451z" fill="#FFFFFF"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
        iconInfo = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="iconInfo" x="0px" y="0px" width="24px" height="100%" viewBox="0 0 111.577 111.577" style="enable-background:new 0 0 111.577 111.577;" xml:space="preserve" width="512px" height="512px"><g><path d="M78.962,99.536l-1.559,6.373c-4.677,1.846-8.413,3.251-11.195,4.217c-2.785,0.969-6.021,1.451-9.708,1.451 c-5.662,0-10.066-1.387-13.207-4.142c-3.141-2.766-4.712-6.271-4.712-10.523c0-1.646,0.114-3.339,0.351-5.064 c0.239-1.727,0.619-3.672,1.139-5.846l5.845-20.688c0.52-1.981,0.962-3.858,1.316-5.633c0.359-1.764,0.532-3.387,0.532-4.848 c0-2.642-0.547-4.49-1.636-5.529c-1.089-1.036-3.167-1.562-6.252-1.562c-1.511,0-3.064,0.242-4.647,0.71 c-1.59,0.47-2.949,0.924-4.09,1.346l1.563-6.378c3.829-1.559,7.489-2.894,10.99-4.002c3.501-1.111,6.809-1.667,9.938-1.667 c5.623,0,9.962,1.359,13.009,4.077c3.047,2.72,4.57,6.246,4.57,10.591c0,0.899-0.1,2.483-0.315,4.747 c-0.21,2.269-0.601,4.348-1.171,6.239l-5.82,20.605c-0.477,1.655-0.906,3.547-1.279,5.676c-0.385,2.115-0.569,3.731-0.569,4.815 c0,2.736,0.61,4.604,1.833,5.597c1.232,0.993,3.354,1.487,6.368,1.487c1.415,0,3.025-0.251,4.814-0.744 C76.854,100.348,78.155,99.915,78.962,99.536z M80.438,13.03c0,3.59-1.353,6.656-4.072,9.177c-2.712,2.53-5.98,3.796-9.803,3.796 c-3.835,0-7.111-1.266-9.854-3.796c-2.738-2.522-4.11-5.587-4.11-9.177c0-3.583,1.372-6.654,4.11-9.207 C59.447,1.274,62.729,0,66.563,0c3.822,0,7.091,1.277,9.803,3.823C79.087,6.376,80.438,9.448,80.438,13.03z" fill="#FFFFFF"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
        iconPicker = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="iconPicker" x="0px" y="0px" width="18px" height="100%" viewBox="0 0 56.599 56.599" style="enable-background:new 0 0 56.599 56.599;" xml:space="preserve" width="512px" height="512px"><path d="M40.505,9c0.552,0,1-0.447,1-1V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v7C39.505,8.553,39.953,9,40.505,9z M40.505,23 c-0.552,0-1,0.447-1,1v7c0,0.553,0.448,1,1,1s1-0.447,1-1v-7C41.505,23.447,41.057,23,40.505,23z M55.505,15h-7 c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7c0.552,0,1-0.447,1-1S56.057,15,55.505,15z M25.505,17h7c0.552,0,1-0.447,1-1 s-0.448-1-1-1h-7c-0.552,0-1,0.447-1,1C24.505,16.553,24.953,17,25.505,17z M46.505,11c0.256,0,0.512-0.098,0.707-0.293l4.95-4.95 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-4.95,4.95c-0.391,0.391-0.391,1.023,0,1.414 C45.993,10.902,46.249,11,46.505,11z M47.212,21.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l4.95,4.95 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L47.212,21.293z M33.798,10.707 C33.993,10.902,34.249,11,34.505,11s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-4.95-4.95 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L33.798,10.707z M35.926,25.006l-4.242-4.242l8.75-8.75l4.242,4.242 L35.926,25.006z M4.336,56.599l-4.243-4.243L30.27,22.179l4.243,4.243L4.336,56.599z" fill="#FFFFFF"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    (function() {
      var ktToolsCss = document.createElement("link");
      ktToolsCss.type = "text/css";
      ktToolsCss.rel = "stylesheet";
      ktToolsCss.id = "ktTools-css";
      ktToolsCss.href = "//rockingreen.com/cdn/shop/t/28/assets/ktTools.scss.css?v=119774868604078597621733300903";
      document.getElementsByTagName("head")[0].appendChild(ktToolsCss)
    })();
    var $action_list = $(document).find('.te-panel__footer .ui-action-list').first();
    if($action_list.find('li #teamInfo').length == 0 ){
      var toolsBtnGroup = '<li><a href="#" id="ktTools" class="theme-editor-action-list__item">More Tools<span style="margin-top: 3px;float: right;">'+iconTools+'<span></a></li>';
      $action_list.prepend(toolsBtnGroup);
    }
    $(document).on('click','#ktTools',function(){
      if( $(document).find(".te-preview #model-3").length == 0 ){
        var floatBtnGroup = '<section class="model-3"> <div class="float-btn-group"> <button class="btn-float btn-triger pink"> <i class="icon-bars"></i> <span> '+iconTeam+' </span> </button> </div></section><section id="modal-container" class="one ktTools"> <div class="modal-background"><div class="modal showModal" id="bulkCreateProductsTags_content"> <h2 class="modalHead">Bulk Create Products Tags <span class="version"> <i>Version: Beta 1.0</i> </span> </h2> <div class="container-fluid"> <div class="tabs"> <div class="tab"> <label>Edit tags for all products in a collection</label> <div class="content row"> <div class="half"> <div class="row nomargin"> <div class="item half nopadding"> <div class="item-label">Choose a collection</div> <div class="item-select"> <select data-action="collection"><option value=""></option> </select> </div> </div> <div class="item half nopadding"> <div class="item-label">Choose an action</div> <div class="item-select"> <select data-action="action"> <option value="bulkfilter">Bulk Filter</option><option value="bulkfilterbycollection">Bulk Filter By Collection</option> <option value="add">Add</option> <option value="set">Set</option> <option value="remove">Remove</option> <option disabled="" value="toggle">Toggle</option> <option value="purge" style="background:#F44336;color:#fff">DELETE ALL</option> </select> </div> </div> </div> <div class="row nomargin"> <div class="item"> <ul> <li>Add: Adds tags to the existing ones.</li> <li>Set: Replaces tags with new ones.</li> <li>Remove: Removes matching tags.</li> <li>Toggle: Future Use, disabled...</li> </ul> </div> </div> </div> <div class="half"> <div class="item"> <div class="item-label">Set the tag</div> <textarea id="tea-form-tags" class="tea-form-control" rows="10" placeholder="Tag1,tag2..."></textarea> <button id="tea-update-tags" class="btn" data-action="update_tags">Update tags</button> </div> </div> </div> </div> </div> </div> </div> </div></section>';
      }
      $(document).find(".te-preview").append(floatBtnGroup);
      $('.float-btn-group').toggleClass('open');
      // $(document).find('.sfe-next').not( ".theme-editor--fullscreen" ).find('.theme-editor__fullscreen-toggle').trigger('click');
      var floatBtnList = $('.float-btn-group .btn-list');
      var inModal = $("#bulkCreateProductsTags_content"),
          action = $('select[data-action="action"]'),
          btnUpdate = $("#tea-update-tags"),
          collection = $('select[data-action="collection"]'),
          listNewTags = $("#tea-form-tags");
      action.change(function(a) {
        "purge" == action.val() || "set" == action.val() ? ("purge" == action.val() && listNewTags.val("").attr("disabled", "disabled"), btnUpdate.addClass("error")) : (listNewTags.removeAttr("disabled"), btnUpdate.removeClass("error"))
      });
      var price_list = ["$7-$50","$50-$150","$150-$500"];
      var checkPC = 0, productsCount = 0, productsCount_ = 0, collectionCount = 0, collectionsList =[],
          q = function(a, b, d, e) {
            var f = a.products[b].id,
                g = {
                  product: {
                    id: f,
                    tags: d
                  }
                };
            btnUpdate.text(b + "/" + a.products.length);
            $.ajax({
              type: "PUT",
              url: "/admin/products/" + f + ".json",
              data: g,
              dataType: "json",
              success: function(c) {
                btnUpdate.text(b + 1 + "/" + a.products.length);
                ++b;
                b < a.products.length ? q(a, b, d, e) : "function" === typeof e && e()
              }
            })
          },
          k = function(a, b, d, e){
            if(a.products[b].tags) {
              var f = d.replace(/, /g, ",").split(","),
                  g = a.products[b].tags.replace(/, /g, ",").split(",");
              g = $(g).not(f).get() + "";
              f = a.products[b].id;
              g = {
                product: {
                  id: f,
                  tags: g
                }
              };
              btnUpdate.text(b + "/" + a.products.length);
              $.ajax({
                type: "PUT",
                url: "/admin/products/" + f + ".json",
                data: g,
                dataType: "json",
                success: function(c) {
                  btnUpdate.text(b + 1 + "/" + a.products.length);
                  ++b;
                  b < a.products.length ? k(a, b, d, e) : "function" === typeof e && e()
                }
              })
            }
            else{
              ++b, b < a.products.length ? k(a, b, d, e) : "function" === typeof e && e()
            }
          },
          addTags = function(a, b, d, e){
            var f = d.replace(/, /g, ",").split(","),
                g = a.products[b].tags.split(",");
            g = uniqArray(f.concat(g)) + "";
            f = a.products[b].id;
            g = {
              product: {
                id: f,
                tags: g
              }
            };
            btnUpdate.text(b + 1 + "/" + a.products.length);
            $.ajax({
              type: "PUT",
              url: "/admin/products/" + f + ".json",
              data: g,
              dataType: "json",
              success: function(c) {
                ++b;
                b < a.products.length ? addTags(a, b, d, e) : e()
              }
            })
          },
          addTagsForFilter = function(dataProduct, b, listNewTags, e){
            var f = listNewTags.replace(/, /g, ",").split(","),
                g = dataProduct.products[b].tags.replace(/, /g, ",").split(",");
            var tagsObj = [];
            $.each(dataProduct.products[b].options, function(idx,optionObj) {
              if(optionObj.name === 'Title'){return false;}
              var name = optionObj.name+"  ";
              $.each(optionObj.values, function(idx,valueObj) {
                var name_ = name + valueObj;
                tagsObj.push(name_);
              });
            });
            if(dataProduct.products[b].vendor !== undefined){
              tagsObj.push('Vendor  '+dataProduct.products[b].vendor);
            }
            if(dataProduct.products[b].type !== undefined){
              tagsObj.push('Type  '+dataProduct.products[b].type);
            }
            var h = 0;
            $.each( price_list, function(i,itemPrice) {
              if(h > 0){return;}
              if(itemPrice.indexOf('+') < 0){
                var e1 = itemPrice.split('-')[0].replace(/[^0-9.]/g, ""),
                    e2 = itemPrice.split('-')[1].replace(/[^0-9.]/g, ""),
                    price = dataProduct.products[b].variants[0].price;
                    console.log(price,e1,e2,itemPrice);
                if(+e1 <= +price && +price <= +e2 && h == 0){
                  tagsObj.push('Price  '+itemPrice);h++;
                }
              }
              else if(itemPrice.indexOf('+') >= 0){
                var e1 = itemPrice.split('+')[0].replace(/[^0-9.]/g, "")
                if(+e1 <= +price && h == 0){
                  tagsObj.push('Price  '+itemPrice.replace('+',''));h++;
                }
              }
            });
            g = uniqArray(tagsObj.concat(g).concat(f)) + "";
            f = dataProduct.products[b].id;
            g = {
              product: {
                id: f,
                tags: g
              }
            };
            btnUpdate.text(b + "/" + dataProduct.products.length);
            if((g.product.tags).length > 0){
              $.ajax({
                type: "PUT",
                url: "/admin/products/" + f + ".json",
                data: g,
                dataType: "json",
                success: function(c) {
                  ++b;
                  btnUpdate.text(b + "/" + dataProduct.products.length);
                  b < dataProduct.products.length ? addTagsForFilter(dataProduct, b, listNewTags, e) : "function" === typeof e && e();
                }
              })
            }
            else{
              ++b;
              btnUpdate.text(b + "/" + dataProduct.products.length);
              b < dataProduct.products.length ? addTagsForFilter(dataProduct, b, listNewTags, e) : "function" === typeof e && e();
            }
          },
          getProductsJson = function(collection, page, action, productsCount_){
            if(action === 'bulkfilterbycollection'){
              $.ajax({
                type: "GET",
                url: "/admin/collections.json?limit=250",
                dataType: "json",
                success: function(a){
                  if(a.collections.length){
                    collectionsList = a.collections;
                    getProductsJson(a.collections[0].id, 1, 'add', productsCount_);
                  }
                }
              });
              page = page + 1;
            }
            else{
              if(collection == "all" || collection === '' ){
                var url = "/admin/products.json?page="+page+"&fields=id,tags,options,vendor,type,variants&limit=250";
              }
              else{
                var url = "/admin/products.json?collection_id=" + collection + "&page="+page+"&fields=id,tags,options,vendor,type,variants&limit=250";
              }
              $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function(dataProduct) {
                  page = page + 1;
                  checkPC = (checkPC + dataProduct.products.length) || (checkPC + dataProduct.length);
                  btnUpdate.addClass("disabled loading");
                  if(dataProduct.products.length > 0){
                    if("add" === action){
                      if(collectionsList.length > 0){
                        addTags(dataProduct, 0, collection.toString(), function(){
                          if(checkPC >= +productsCount_){
                            checkPC = 0;
                            productsCount = 0;
                            collectionCount++;
                            if(collectionCount >= collectionsList.length ){
                              collectionsList = [];
                              shopiAlert("Done. Tags have been added");
                              btnUpdate.text("Update tags").removeClass("disabled")
                            }
                            else{
                              getProductsJson(collectionsList[collectionCount].id, 1, 'add', productsCount_);
                            }
                          }
                        })
                      }
                      else{
                        addTags(dataProduct, 0, listNewTags.val(), function() {
                          if(checkPC >= +productsCount_){
                            checkPC = 0;
                            productsCount = 0;
                            shopiAlert("Done. Tags have been added");
                            btnUpdate.text("Update tags").removeClass("disabled")
                          }
                          else{
                            getProductsJson(collection, page, action);
                          }
                        })
                      }
                    }
                    else if("purge" === action || "set" === action){
                      q(dataProduct, 0, listNewTags.val(), function() {
                        if(checkPC >= +productsCount_){
                          checkPC = 0;
                          productsCount = 0;
                          shopiAlert("Done.");
                          btnUpdate.text("Update tags").removeClass("disabled")
                        }
                        else{
                          getProductsJson(collection, page, action);
                        }
                      })
                    }
                    else if("remove" === action){
                      k(dataProduct, 0, listNewTags.val(), function() {
                        if(checkPC >= +productsCount_){
                          checkPC = 0;
                          productsCount = 0;
                          shopiAlert("Matched tags have been removed.");
                          btnUpdate.text("Update tags").removeClass("disabled")
                        }
                        else{
                          getProductsJson(collection, page, action);
                        }
                      })
                    }
                    else if("bulkfilter" === action){
                      addTagsForFilter(dataProduct, 0, listNewTags.val(), function() {
                        if(checkPC >= +productsCount_){
                          checkPC = 0;
                          productsCount = 0;
                          shopiAlert("Done. Tags for filter have been added");
                          btnUpdate.text("Update tags").removeClass("disabled")
                        }
                        else{
                          getProductsJson(collection, page, action);
                        }
                      })
                    }
//                           console.log(checkPC+'>'+productsCount_)
                  }
                  else{
                    if(collectionsList.length > 0){
                      if("add" === action){
                        checkPC = 0;
                        productsCount = 0;
                        collectionCount++;
                        if(collectionCount >= collectionsList.length ){
                          collectionsList = [];
                          shopiAlert("Done. Tags have been added");
                          btnUpdate.text("Update tags").removeClass("disabled")
                        }
                        else{
                          getProductsJson(collectionsList[collectionCount].id, 1, 'add', productsCount_);
                        }
                      }
                    }
                    else{
                      shopiAlert("Done.");
                      btnUpdate.text("Update tags").removeClass("disabled")
                    }
                  }
                }
              });
            }
          };
      btnUpdate.on("click", function() {
        if(collection.val().length){
          productsCount_ = collection.find('option:selected').attr('data-pCount');
          getProductsJson(collection.val(), 1, action.val(),+productsCount_);
        } else if(action.val() === 'bulkfilter' && collection.val().length){
          productsCount_ = collection.find('option:selected').attr('data-pCount');
          getProductsJson('', 1, action.val(),+productsCount_);
        } else if(action.val() === 'bulkfilterbycollection' && collection.val().length){
          productsCount_ = collection.find('option:selected').attr('data-pCount');
          getProductsJson('', 1, action.val(),+productsCount_);
        }
        else{
          shopiAlert("Choose a collection", !0);
          return !1
        }
      });

      var createCollectionDropdown = function(){
        $.ajax({
          type: "GET",
          url: "/admin/collections.json?limit=250",
          dataType: "json",
          success: function(a) {
            if(a.collections.length){
              for(var c = "", e = 0, f = a.collections.length; e < f; e++)c += '<option value="' + a.collections[e].id + '" data-pCount="'+a.collections[e].products_count+'">' + a.collections[e].title + "</option>";
              collection.append(c).find("option:eq(0)").text("Select a collection");
              action.show();
            }
          }
        });
      }
      if(collection.find('option').length <= 1){
        $.ajax({
          type: "GET",
          url: "/admin/products/count.json",
          dataType: "json",
          success: function(a) {
            collection.append('<option value="all" data-pCount="'+a.count+'">All products</option>"');
            createCollectionDropdown();
          }
        });
      }
      $('body').toggleClass('modal-active');
    });
    $(document).on('click','.btn-triger',function(){
      $('.float-btn-group').toggleClass('open');
      $('body').toggleClass('modal-active');
    });
//     var $imagePicker_list = $(document).find('.image-picker__action-bar .js-image-picker-remove-button');
//     $imagePicker_list.before('<button class="ui-button js-image-picker-tool-button" type="button" name="button">'+iconPicker+'</button>');
//     $(document).on('click','.js-image-picker-tool-button',function(){
//       var naturalImage = $(this).parents('.js-image-picker-container').find('img.aspect-ratio__content');
//       var isImage = $(this).parents('.js-image-picker-container').find('img.aspect-ratio__content').attr('src').replace('_240x240','_1280x600');
//       $('#modal_backdrop').show();
//       $('#modal_container').addClass('ktTools ');
//       var viewboxSVG = '0 0 666 500';
//       var modalContent = '';
//       modalContent += '<div class="ui-modal__header"><div class="ui-modal__header-title"><h2 class="ui-title" id="edit_image_modal_heading">Edit image</h2></div><div class="ui-modal__header-actions"><div class="ui-modal__close-button"><button class="ui-button ui-button--transparent" aria-label="Close modal" type="button" name="button"><svg class="next-icon next-icon--color-ink-lighter next-icon--size-20"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cancel-small-minor"></use> </svg></button></div></div></div>';
//       modalContent += '<div class="ui-modal__body content imageTick"><div class="half"><svg alt="Embedded Image" xmlns="http://www.w3.org/2000/svg" viewBox="'+viewboxSVG+'"><circle class="cls-1" cx="50%" cy="50%" r="14"/></svg><img id="isImage" src="'+isImage+'" alt=""></div></div>';
//       modalContent += '<div class="ui-modal__footer"><div class="ui-modal__footer-actions"><div class="ui-modal__primary-actions"><div class="button-group button-group--right-aligned"><button class="ui-button" data-bind-event-click="action(\'hideModal\')" type="button" name="button">Cancel</button><button class="ui-button btn-primary" data-bind-event-click="action(\'editAltText\')" type="button" name="button">Save</button></div></div></div></div>';
//       $('#modal_container').html(modalContent).show()
//       $( '.ktTools .ui-modal__body img' ).on( "click", function( event ) {
//         var pos = $(this).offset();
//         console.log(pos.left)
//         $( ".ktTools #edit_image_modal_heading" ).text( "pageX: " + (event.pageX - pos.left) + ", pageY: " + (event.pageY - pos.left));
//       });
//     });

//     $(document).on('click','.ui-modal__close-button',function(){
//       $('#modal_container').removeClass('ktTools');
//       $('#modal_backdrop,#modal_container').hide();
//     });

//     //=========== priceRulesPOST
//     function priceRulesPOST(price_rules) {
//       $.ajax({
//         type: "POST",
//         url: "/admin/metafields.json",
//         dataType: "json",
//         data: {
//           metafield: {
//             namespace: "price_rules",
//             key: "price_rules",
//             value: price_rules,
//             value_type: "string"
//           }
//         },
//         success: function(a) {
//           console.log('Success import price rules');
//         },
//         error: function(a) {
//           alert('Error import price rules');
//         }
//       });
//     }
//     function priceRulesGET(crr_value) {
//       $.ajax({
//         type: "GET",
//         url: "/admin/price_rules.json",
//         dataType: "json",
//         success: function(price_rules) {
//           if(crr_value != JSON.stringify(price_rules.price_rules)){
//             priceRulesPOST(JSON.stringify(price_rules.price_rules))
//           }
//         }
//       });
//     }

//     //=========== CountryPOST
//     function CountryPOST(countries) {
//       $.ajax({
//         type: "POST",
//         url: "/admin/metafields.json",
//         dataType: "json",
//         data: {
//           metafield: {
//             namespace: "country",
//             key: "country",
//             value: countries,
//             value_type: "string"
//           }
//         },
//         success: function(a) {
//           console.log('Success import countries');
//         },
//         error: function(a) {
//           alert('Error import countries');
//         }
//       });
//     }
//     function CountryGET(crr_value) {
//       $.ajax({
//         type: "GET",
//         url: "/admin/countries.json",
//         dataType: "json",
//         success: function(countries) {
//           if(crr_value != JSON.stringify(countries.countries)){
//             CountryPOST(JSON.stringify(countries.countries))
//           }
//         }
//       });
//     }

//     //=========== CustomerSavedSearchPOST
//     function CustomerGET(CSSID) {
//       $.ajax({
//         type: "GET",
//         url: "/admin/customer_saved_searches/"+CSSID+"/customers.json",
//         dataType: "json",
//         success: function(a) {
//           console.log(a);
//         },
//         error: function(a) {
//           alert('Error import countries');
//         }
//       });
//     }
//     function CustomerSavedSearchGET(crr_value) {
//       $.ajax({
//         type: "GET",
//         url: "/admin/customer_saved_searches.json",
//         dataType: "json",
//         success: function(CSSGET) {
//           $.each(CSSGET.customer_saved_searches, function(idx,CSS) {
//             CustomerGET(CSS.id);
//           });
//           console.log(CSSGET.customer_saved_searches)
//         }
//       });
//     }

//     $.ajax({
//       type: "GET",
//       url: "/admin/metafields.json",
//       dataType: "json",
//       success: function(metafields) {
//         if(metafields.metafields.length == 0){
//           priceRulesGET('kiti')
//           CountryGET('kiti')
//           CustomerSavedSearchGET('kiti')
//         }else{
//           $.each(metafields.metafields, function(idx,metafield) {
//             if(metafield.namespace == "price_rules" ){
//               priceRulesGET(metafield.value)
//             }
//             if(metafield.namespace == "country" ){
//               CountryGET(metafield.value)
//             }
//             if(metafield.namespace == "customer_saved_searches" ){
//               CountryGET(metafield.value)
//             }
//           });
//         }
//       }
//     });
  }
})();
