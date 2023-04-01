console.log("script chargé avec succes !");


const shop_hover = document.getElementById('shop');
const underline_shop = document.getElementById('under-shop');
shop_hover.addEventListener(
    "mouseover",
    (event) => {
        underline_shop.innerHTML= "<img src='images/katana_test.png'>";
        underline_shop.classList.add('slide-right');
        shop_hover.addEventListener(
          "mouseleave",
          (event) => {
            underline_shop.classList.add('slide-out-left');
            setTimeout(() => {
              underline_shop.classList.remove('slide-right');
              underline_shop.classList.remove('slide-out-left');
              underline_shop.innerHTML= "";
              }, 200)
          }
        )

    }
)

const propos_hover = document.getElementById('propos');
const underline_propos = document.getElementById('under-propos');
propos_hover.addEventListener(
    "mouseover",
    (event) => {
        underline_propos.innerHTML= "<img src='images/katana_test.png'>";
        underline_propos.classList.add('slide-right');
        propos_hover.addEventListener(
          "mouseleave",
          (event) => {
            underline_propos.classList.add('slide-out-left');
            setTimeout(() => {
              underline_propos.classList.remove('slide-right');
              underline_propos.classList.remove('slide-out-left');
              underline_propos.innerHTML= "";
              }, 200)
          }
        )

    }
)

const contact_hover = document.getElementById('contact');
const underline_contact = document.getElementById('under-contact');
contact_hover.addEventListener(
    "mouseover",
    (event) => {
        underline_contact.innerHTML= "<img src='images/katana_test.png'>";
        underline_contact.classList.add('slide-right');
        contact_hover.addEventListener(
          "mouseleave",
          (event) => {
            underline_contact.classList.add('slide-out-left');
            setTimeout(() => {
              underline_contact.classList.remove('slide-right');
              underline_contact.classList.remove('slide-out-left');
              underline_contact.innerHTML= "";
              }, 200)
          }
        )

    }
)

const news_hover = document.getElementById('news');
const underline_news = document.getElementById('under-news');
news_hover.addEventListener(
    "mouseover",
    (event) => {
        underline_news.innerHTML= "<img src='images/katana_test.png'>";
        underline_news.classList.add('slide-right');
        news_hover.addEventListener(
          "mouseleave",
          (event) => {
            underline_news.classList.add('slide-out-left');
            setTimeout(() => {
              underline_news.classList.remove('slide-right');
              underline_news.classList.remove('slide-out-left');
              underline_news.innerHTML= "";
              }, 200)
          }
        )

    }
)
