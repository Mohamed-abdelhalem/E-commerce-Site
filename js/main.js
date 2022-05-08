$(document).ready(function ()
{
  // for display and hide the flags at the top Nav
  $('.language').click(function()
     {      $('.flags').toggle(10);     });
  // for display and hide the mega Menu at the top header
  $('.down_menu').click(function()
       {      $('.mega_menu').toggle(10);     });
  // for display  the UL Menu at the top header in Phone
  $('.display_ul_phone').click(function()
       {      $('.for_abs').fadeIn(50);     });
   // for hide the UL Menu at the top header in Phone
  $('.hide_ul_phone').click(function()
       {      $('.for_abs').fadeOut(50);     });

  // for display and hide the show menu at the shop page
  $('.down_show').click(function()
      {      $('.ul_show ').toggle(10);     });
  // for display and hide the sort menu at the shop page
  $('.down_sort').click(function()
     {      $('.ul_sort ').toggle(10);     });

  // for display divs with class product in the container div with class products
  var data_product ="<div class='product d-flex flex-column  p-2'>  </div>";
  //append product div into products div
  for(let i = 0 ; i < 10 ; i++)
  {
    $('.products').append(data_product);
  }
  // <p> of product
  let paragraph_of_product = [ '', "<p> Cake & Milk </p>" , "<p> Organic Kiwi </p>" , "<p> Peach </p>" , "<p> Red Apple </p>" ,
                                   "<p> Snack </p>" , "<p> Vegetables </p>" , "<p> Strawberry </p>" , "<p> Black Plum </p>",
                                   "<p> Headphone</p>" ,  "<p> Coffee & Tea </p>" ];
  //<span> of product
  let span_of_product = [ '', "<span> 26 items </span>" , "<span> 28 items </span>" , "<span> 14 items </span>" , "<span> 54 items </span>",
                              "<span> 66 items </span>" , "<span> 72 items </span>" , "<span> 36 items </span>" , "<span> 128 items </span>",
                              "<span> 87 items </span>" , "<span> 34 items </span>" ]
  //background color of product
  let bg_of_product = [' ', "#F2FCE4" , "#FFFCEB" , "#ECFFEC" , "#ECFFEC" , "#FFF3EB" , "#FEEFEA" , "#F2FCE4" , " #FEEFEA" , "#FFF3EB" , "#F2FCE4" ]
  //append <img> & <p> & <span> & backgroundColor to product div
  $('.product').each( function (i)
  {
      $(this).append("<img  src='imgs/cat-"+(++i)+".png' alt = 'featured-Products-img'  />");
      $(this).append(paragraph_of_product[i]);
      $(this).append(span_of_product[i]);
      $(this).css("background-color", bg_of_product[i]);
  });

  // for display divs with class products_popular_inside in the container div with class products_popular
  var data_product_Popular ="<div class='products_popular_inside d-flex flex-column  p-3'></div>";
  // for display divs with class products_popular_inside in the container div with class products_popular
  var dataProductBestSeller ="<div class='products_best_seller_inside d-flex flex-column'></div>";
  //append product div into products div
  for(let i = 1 ; i <= 10 ; i++)
  {
    $('.products_popular').append(data_product_Popular);

  }

  // <span> of product_inside
  let typeFood = [ '', "<span class='type_food'>snak</span>" , "<span class='type_food'>Hodo Foods</span>"  , "<span class='type_food'>snak</span>"
                  , "<span class='type_food'>Vegetables</span>" , "<span class='type_food'>Pet Foods</span>" , "<span class='type_food'>Hodo Foods</span>"
                     , "<span class='type_food'>Meats</span>"  , "<span class='type_food'>snak</span>"  , "<span class='type_food'>Coffes</span>"
                     ,  "<span class='type_food'>Cream</span>"  ];
   // <p> of product_inside
 let description = [ '',"<p class='description'>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>","<p class='description'>All Natural Italian-Style Chicken Meatballs</p>"
                    ,"<p class='description'>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>","<p class='description'>Foster Farms Takeout Crispy Buffalo Wings</p>"
                    ,"<p class='description'>Blue Diamond Almonds Lightly Salted Vegetables</p>","<p class='description'>Chobani Complete Vanilla Greek Yogurt</p>"
                    ,"<p class='description'>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g</p>","<p class='description'>Encore Seafoods Stuffed Alaskan Salmon</p>"
                    ,"<p class='description'>Gorton’s Beer Battered Fish Fillets with soft paper</p>","<p class='description'>Haagen-Dazs Caramel Cone Ice Cream Ketchup</p>"
                    ,"<p class='description'>Gorton’s Beer Battered Fish Fillets with soft paper</p>","<p class='description'>Haagen-Dazs Caramel Cone Ice Cream Ketchup</p>"];
 // div of icons and icons (Star Icons)
 let divStar = "<div class='stars'></div>";
 let iconStar = "<i class='fa-solid fa-star me-1'></i>";
 let iconStarWhite = "<i class='fa-regular fa-star'></i>";
 //by owner <p> of product_inside
 let by = ["","<p class='by mb-2'>By<span class='name_of_owner'> NestFood</span></p>","<p class='by mb-2'>By<span class='name_of_owner'> Stouffer</span></p>"
             ,"<p class='by mb-2'>By<span class='name_of_owner'> StarKist</span></p>","<p class='by mb-2'>By<span class='name_of_owner'> NestFood</span></p>"
             ,"<p class='by mb-2'>By<span class='name_of_owner'> NestFood</span></p>","<p class='by mb-2'>By<span class='name_of_owner'> NestFood</span></p>"
             ,"<p class='by mb-2'>By<span class='name_of_owner'> NestFood</span></p>","<p class='by mb-2'>By<span class='name_of_owner'> NestFood</span></p>"
             ,"<p class='by mb-2'>By<span class='name_of_owner'> Old El Paso</span></p>","<p class='by mb-2'>By<span class='name_of_owner'> Tyson</span></p>"];
  let mainPrice = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
 // price-btn div of product_inside
 let priceBtn = `<div class='price_button d-flex justify-content-between align-items-center'>
                               <div class= 'price' >
                                    <span class='main_price me-1'>${'$' + 28.85}</span>
                                   <span class='old_price '>${'$' + 32.8}</span>
                              </div>
                              <button type="button" name="button" class="btn_add"> <i class="fa-solid fa-cart-shopping"></i> Add</button>
                           </div>`;
 let priceBtnWithOutAdd = `<div class='price_button d-flex justify-content-between align-items-center'>
                               <div class= 'price' >
                                    <span class='main_price me-1'>${'$' + 28.85}</span>
                                   <span class='old_price '>${'$' + 32.8}</span>
                              </div>
                           </div>`;
 //<span> of old & main price and btn
 let price = "<div class= 'price' ></div>";
 let btnAdd = "<button type='button' name='button' class='btn_add'> <i class='fa-solid fa-cart-shopping'></i> Add</button>";

  //append <img> & <p> & <span> &  to product_inside div
  $('.products_popular_inside').each( function (i)
  {
      $(this).append("<img  src='imgs/pic-"+(++i)+".png' alt = 'popular-Products-img'  />");
      $(this).append(typeFood[i]);
      $(this).append(description[i]);
      $(this).append(divStar);
      $(this).append(by[i]);
      $(this).append(priceBtn);
  });

  //append <div stars> & <p> & <span> &  to deal div
  $('.content_counter').each( function ( i)
  {
      $(this).append(description[++i]);
      $(this).append(divStar);
      $(this).append(by[i]);
      $(this).append(priceBtn);
  });

  // for display divs with classcontent_seller_inside in the container div with class seller_content
  let dataSeller ="<div class ='content_seller_inside p-2 my-3 d-flex'>  </div>";
  // for
  let divDetails = "<div class='details_seller d-flex flex-column ms-2'> </div>"
  //append product div into products div
  for(let i = 1 ; i <= 3 ; i++)
  {
    $('.seller_content').append(dataSeller);
  }

  $('.content_seller_inside').each( function (i)
  {
      $(this).append("<img  src='imgs/thumbnail-"+(++i)+".jpeg' alt = 'featured-Products-img' width='95px' height='130px'  />");
      $(this).append(divDetails);
 });
 $('.details_seller').each( function ( i)
 {
     $(this).append(description[++i]);
     $(this).append(divStar);
     $(this).append(by[i]);
     $(this).append(priceBtnWithOutAdd);
 });
 for(let i = 1 ; i <= 5 ; i++)
 {
   if(i == 5)
     $('.stars').append(iconStarWhite);
   else
    $('.stars').append(iconStar);
 }



    // for display divs with class banner_footer in the container div with class banners_footer
   var data_banner ="<div class='col-lg-2 col-sm-5 banner_footer d-flex flex-row justify-content-between p-3 my-3'> </div>";
   // for display divs with class text_of_banner in the  div with class banner_footer
   var divInBanner = "<div class='text_of_banner d-flex flex-column'></div>";
   // for display span1 & span2 with  in the  div with class text_of_banner
   var divSpan1 = ["<span>Best prices & offers</span>" , "<span> Free delivery </span>" ,
                   "<span>Great daily deal</span>" , "<span>Wide assortment</span>" , "<span>Easy returns</span>"] ;
   var divSpan2 = ["<span>Orders $50 or more</span>" , "<span>Amazing services</span>" , "<span>When you sign up</span>"
                   , "<span>Mega Discounts</span>" , "<span>Within 30 days</span>"];
    //append banner_footer div into banners_footer
   for(let i = 0 ; i < 5 ; i++)
    {
      $('.banners_footer').append(data_banner);
    }
    //append <img> & <div> to banner_footer div
    $('.banner_footer').each( function (i)
    {
        $(this).append("<img src ='imgs/icon-"+(++i)+".svg' alt='icon 1' class='mx-2' />");
        $(this).append( divInBanner);
    });
    //append 2<span> to text_of_banner div
    $('.text_of_banner').each( function ( i )
    {
      $(this).append(divSpan1[i]);
      $(this).append(divSpan2[i]);
    });
    /// shop page
    let flag = false;
    for (let i = 0; i <= 10; i++)
    {
      if(i == 0 )
      {
        $('.pagination').append(`<button type="button" name="button">  <a href="#"><i class="fa-solid fa-left-long"></i></a> </button>`);
        continue;
      }
      if(i == 10 )
      {
        $('.pagination').append(`<button type="button" name="button">  <a href="#"><i class="fa-solid fa-right-long"></i></a> </button>`);
        continue;
      }
      if( i > 3 && i < 7)
      {
        if(flag)
         continue;
         else
         {
         $('.pagination').append(`<button type='button' name='button'>  <a href='#'>... </a> </button>`);
         flag = true;
       }
      }
      if( i <= 3 || i >= 7)
      {
        $('.pagination').append(`<button type='button' name='button'>  <a href='#'> ${i} </a> </button>`);
      }

    };
}); //end
