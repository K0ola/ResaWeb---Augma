    const slider = document.getElementById('slider');
    const slide_1 = document.getElementById('slide-1');
    const slide_2 = document.getElementById('slide-2');
    const slide_3 = document.getElementById('slide-3');

    const pos_slider_1 = document.getElementById('pos-1');
    const pos_slider_2 = document.getElementById('pos-2');
    const pos_slider_3 = document.getElementById('pos-3');

    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');

    slide_1.innerHTML = '<div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div><div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div><div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div>';
    slide_2.innerHTML = '<div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div><div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div><div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div>';
    slide_3.innerHTML = '<div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div><div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div><div class="spot-slide"><img src="ressources/images/header-img-1.jpg" alt="" class="image-slide"><p>dfghdsfhgdfhgqdfhgksfhd</p></div>';
    function pos1(){
        pos_slider_1.style.borderColor = "red"
        pos_slider_2.style.borderColor = "white"
        pos_slider_3.style.borderColor = "white"
    }
    function pos2(){
        pos_slider_1.style.borderColor = "white"
        pos_slider_2.style.borderColor = "red"
        pos_slider_3.style.borderColor = "white"
    }
    function pos3(){
        pos_slider_1.style.borderColor = "white"
        pos_slider_2.style.borderColor = "white"
        pos_slider_3.style.borderColor = "red"
    }

    let pos = 1;
    pos1();

    btnLeft.addEventListener("click", function() {
        if (pos == 1) {
            slider.style.transform = "translateX(-66.70%)";
          pos3();
          pos = 3;
        }  else if ( pos == 2) {
            slider.style.transform = "translateX(0%)";
          pos1();
          pos = 1;
        }  else if (pos == 3) {
            slider.style.transform = "translateX(-33.35%)";
            pos2();
            pos = 2;
        }
      });

      btnRight.addEventListener("click", function() {
        if (pos == 1) {
            slider.style.transform = "translateX(-33.35%)";
          pos2();
          pos = 2;
        }  else if ( pos == 2) {
            slider.style.transform = "translateX(-66.70%)";
          pos3();
          pos = 3;
        }  else if (pos == 3) {
            slider.style.transform = "translateX(0%)";
            pos1();
            pos = 1;
        }
      });




