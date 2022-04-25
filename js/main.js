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
  // for display divs with class product in the container div with class products
  var data_product ="<div class='product d-flex flex-column  p-2'>  </div>";
  //let div = [];
  //append product div into products div
  for(let i = 0 ; i < 10 ; i++)
  {
    //div[i] = data_product;
    //console.log(div[i]);
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
}); //end




let colors = ["F" ,  2  , "F" , "C" , "E" ,  4  ,
              "F" , "F" , "F" , "C" , "E" , "B" ,
              "E" , "C" , "F" , "F" , "E" , "C" ,
              "F" , "E" , "E" , "F" , "E" , "A" ,
              "F" , "F" , "F" ,  3  , "E" , "B" ,
              "F" , "F" , "F" ,  3  , "F"  ,"F" ]

              console.log(colors[Math.floor(Math.random()* colors.length)]);
let color_hexa = [];


  for( let i = 0 ; i < colors.length; i++ )
  {
     color_hexa.push(colors[i]);
     if(i == 5)
     "\n";
}
console.log(`#${color_hexa.join("")}`);
let finalColor = `#${color_hexa.join("")}`;
/*
let div_bg = document.getElementsByClassName('product');
div_bg.addAttribute("backgroundColor" , finalColor);
/*


let color_hexa = [];


  for( let i = 0 ; i < 6 ; i++ )
 {
      console.log(color_hexa.push(colors[Math.floor(Math.random()* colors.length)]));


}
*/
/*
let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];

for (let i = 0; i < 6; i++) {
 console.log(colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]));
 let finalColor = `#${colorParts.join("")}`;

document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;
}
*/
//div_bg.style.backgroundColor = color[i];
