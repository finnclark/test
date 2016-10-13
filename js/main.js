// About Slide

$(document).ready(function(){
  $(".about-button").click(function(){
    $(".about-wrap").addClass("active");
    $("body").addClass("active");
  });
  $(".about-close").click(function(){
    $(".about-wrap").removeClass("active");
    $("body").removeClass("active");
  });
});

// Gallery Zoom

$(document).ready(function(){
  $(".gallery-image").click(function() {
    $(this).addClass("image-active").siblings().removeClass("image-active").removeClass("image-hidden");
    $(this).siblings().addClass("image-hidden");
  });
  $(".close-btn").click(function(e) {
    let active = document.querySelector('.image-active');
    e.preventDefault();
    e.stopPropagation();
    active.classList.remove('image-active');
  });
  $(".close-btn").click(function(e) {
    $(".gallery-image").siblings().removeClass("image-hidden");
  });
});



let SoloJazz = {
  dom: {
    docImages: document.querySelector('.parallax-wrap'),
    galleryImages: document.querySelector('.gallery')
  },

  init() {
    if (this.dom.docImages) {
      this.customParallaxAnimations(this.dom.docImages);
      this.loadingItemDelay(this.dom.docImages);
    }
    if (this.dom.galleryImages) {
      this.loadingItemDelayGallery(this.dom.galleryImages);
    }
  },

  loadingItemDelayGallery(galleryImages) {
    var nav = document.getElementById('nav-slide');

    for (var i = 0; i < document.getElementById('galleryWrap').childNodes.length; i++) {
      if (i % 2 === 0) {
        i = i + 1;
        var galleryItem = document.getElementById('galleryWrap').childNodes[i];
        console.log(galleryItem);

        function lazyAddGallery(el, className, timing) {
          setTimeout(() => {
            el.classList.add(className);
          }, timing);
        }
        // Gallery
        window.onload = lazyAddGallery(galleryItem, 'visible', 2000);
        // window.onload = function () {
        //   // alert("It's loaded!");
        //   console.log("before");
        //   lazyAddGallery(galleryItem, 'visible', 350);
        //   console.log("hi");
        // }
      }
    }
    lazyAddGallery(nav, 'slide-down', 1200);
  },

  loadingItemDelay(docImages) {
    var landingImg1 = document.getElementById('landingImg1');
    var landingImg2 = document.getElementById('landingImg2');
    var landingImg3 = document.getElementById('landingImg3');
    var landingImg4 = document.getElementById('landingImg4');
    var landingImg5 = document.getElementById('landingImg5');

    var projectDescription = document.getElementById('projectDescription');
    var projectTools = document.getElementById('projectTools');

    var projectImg1 = document.getElementById('projectImg1');
    var projectImg2 = document.getElementById('projectImg2');
    var projectImg3 = document.getElementById('projectImg3');

    var nav = document.getElementById('nav-slide');


    function lazyAddClass(el, className, timing) {
      setTimeout(() => {
        el.classList.add(className);
      }, timing);
    }

    lazyAddClass(landingImg1, 'visible', 350);
    lazyAddClass(landingImg2, 'visible', 500);
    lazyAddClass(landingImg3, 'visible', 600);
    lazyAddClass(landingImg4, 'visible', 700);
    lazyAddClass(landingImg5, 'visible', 900);


    lazyAddClass(projectDescription, 'visible', 300);
    lazyAddClass(projectTools, 'visible', 300);

    lazyAddClass(projectImg1, 'visible', 600);
    lazyAddClass(projectImg2, 'visible', 750);
    lazyAddClass(projectImg3, 'visible', 900);

    lazyAddClass(nav, 'slide-down', 1200);
  },


  customParallaxAnimations(docImages) {

    var landingImg1 = document.getElementById('landingImg1');
    var landingImg2 = document.getElementById('landingImg2');
    var landingImg3 = document.getElementById('landingImg3');
    var landingImg4 = document.getElementById('landingImg4');
    var landingImg5 = document.getElementById('landingImg5');

    console.log(landingImg1);

    let tempX = 0,
        tempY = 0;

    let handleScrolling = () => {
      Parallax.init(landingImg1, 14);
      Parallax.init(landingImg2, -6);
      Parallax.init(landingImg3, -4.3);
      Parallax.init(landingImg4, -13);
      Parallax.init(landingImg5, -2);
    }

    setTimeout(function() {
      window.addEventListener('scroll', handleScrolling);
    }, 900);

    let handleShadowBoxing = (e) => {
      tempX = e.pageX
      tempY = e.pageY
      // catch possible negative values in NS4
      if (tempX < 0) {
        tempX = 0;
      }
      if (tempY < 0) {
        tempY = 0;
      }
      landingImg1.style.boxShadow = "-"+((tempY / 15) + 10)+"px "+((tempX / 15 + 20))+"px 120px -30px rgba(0,0,0,0.25)";
      landingImg2.style.boxShadow = "-"+((tempY / 15) + 10)+"px "+((tempX / 15 + 20))+"px 120px -30px rgba(0,0,0,0.25)";
      landingImg3.style.boxShadow = "-"+((tempY / 15) + 10)+"px "+((tempX / 15 + 20))+"px 120px -30px rgba(0,0,0,0.25)";
      landingImg4.style.boxShadow = "-"+((tempY / 15) + 10)+"px "+((tempX / 15 + 20))+"px 120px -30px rgba(0,0,0,0.25)";
      landingImg5.style.boxShadow = "-"+((tempY / 15) + 10)+"px "+((tempX / 15 + 20))+"px 120px -30px rgba(0,0,0,0.25)";
      return true
    }
    /*
    /     Don't start doing parallax scrolling until after the
    /     initial homepage animation, this way we can translate the elements
    /     before we hijack them with the code below
    */
    document.onmousemove = handleShadowBoxing;
  }
}

SoloJazz.init();
