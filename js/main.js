/*
header #nav
*/
$(document).ready(function () {
  $(".nav_btn_ham").click(function () {
    $("#nav,.page_cover,html").addClass("open");
  });

  $(".nav_btn_x").click(function (e) {
    e.preventDefault();
    $("#nav,.page_cover,html").removeClass("open");
  });

  $("#nav ul.nav_menu li a").click(function (e) {
    var targetId = $(this).find("span").data("link");
    if (targetId) {
      e.preventDefault();
      var target = $(targetId);
      if (target.length) {
        var offsetTop = target.offset().top;
        if (targetId === "#about") {
          offsetTop -= 60;
        }
        $("html, body").animate(
          {
            scrollTop: offsetTop,
          },
          500
        );
      }
      $("#nav,.page_cover,html").removeClass("open");
    }
  });
});


/*
main .sec1 .sec1_img
 */
(() => {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".sec1_img .p_deco").forEach((el) => {
      const pos = el.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * pos) / 110;
      const y = (window.innerHeight - e.pageY * pos) / 110;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
})();


/*
main .sec2 #slider
*/
$(document).ready(function ($) {
  let sliderEnabled = false;

  function initSlider() {
    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").outerWidth();
    var sliderUlWidth = slideCount * slideWidth;
    $("#slider ul").css({ width: sliderUlWidth, left: -slideWidth });
    $("#slider ul li:last-child").prependTo("#slider ul");
  }

  function moveLeft() {
    const slideWidth = $("#slider ul li").outerWidth();
    $("#slider ul").animate({ left: 0 }, 200, "swing", function () {
      $("#slider ul li:last-child").prependTo("#slider ul");
      $("#slider ul").css("left", -slideWidth);
    });
  }

  function moveRight() {
    const slideWidth = $("#slider ul li").outerWidth();
    $("#slider ul").animate(
      { left: -2 * slideWidth },
      200,
      "swing",
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", -slideWidth);
      }
    );
  }

  function enableSlider() {
    if (!sliderEnabled) {
      initSlider();
      $(".prev_btn").on("click", function (event) {
        event.preventDefault();
        moveLeft();
      });
      $(".next_btn").on("click", function (event) {
        event.preventDefault();
        moveRight();
      });
      sliderEnabled = true;
    }
  }

  function disableSlider() {
    if (sliderEnabled) {
      $(".prev_btn").off("click");
      $(".next_btn").off("click");
      $("#slider ul").css("left", 0);
      sliderEnabled = false;
    }
  }

  function setupSlider() {
    if (window.innerWidth < 1024) {
      enableSlider();
    } else {
      disableSlider();
    }
  }

  setupSlider();
  $(window).resize(function () {
    setupSlider();
  });
});


/*
main .sec3 .mockup
*/
const pc = document.querySelector(".sec3_contents .pc");
const left = document.querySelector(".sec3_contents .contents_left");
const pcS = pc.querySelector(".screen");
const pcM = pc.querySelector(".mask");

const aniUp = (mask, screen) => {
  let newH1 = mask.clientHeight;
  let newH2 = screen.clientHeight;
  let height = newH1 - newH2;
  gsap.to(screen, { y: height, duration: 0.7 });
};
const aniDown = (screen) => {
  gsap.to(screen, { y: 0, duration: 0.7 });
};
ScrollTrigger.create({
  trigger: ".contents_left",
  start: "top bottom",
  end: "bottom top",
  scrub: 0.5,
  onEnter: () => {
    pcM.addEventListener("mouseenter", () => aniUp(pcM, pcS));
    pcM.addEventListener("mouseleave", () => aniDown(pcS));
    gsap.fromTo(left, { xPercent: -100 }, { xPercent: 0, duration: 1 });
  },
});

const pc2 = document.querySelector(".sec3_contents2 .pc");
const left2 = document.querySelector(".sec3_contents2 .contents_left2");
const pcS2 = pc2.querySelector(".screen2");
const pcM2 = pc2.querySelector(".mask2");

const aniUp2 = (mask, screen) => {
  let newH1 = mask.clientHeight;
  let newH2 = screen.clientHeight;
  let height = newH1 - newH2;
  gsap.to(screen, { y: height, duration: 10.0 });
};
const aniDown2 = (screen) => {
  gsap.to(screen, { y: 0, duration: 10.0 });
};
ScrollTrigger.create({
  trigger: ".contents_left2",
  start: "top bottom",
  end: "bottom top",
  scrub: 20,
  onEnter: () => {
    pcM2.addEventListener("mouseenter", () => aniUp(pcM2, pcS2));
    pcM2.addEventListener("mouseleave", () => aniDown(pcS2));
    gsap.fromTo(left2, { xPercent: 100 }, { xPercent: 0, duration: 1 });
  },
});

const pc3 = document.querySelector(".sec3_contents3 .pc3");
const left3 = document.querySelector(".sec3_contents3 .contents_left3");
const pcS3 = pc3.querySelector(".screen");
const pcM3 = pc3.querySelector(".mask");

const aniUp3 = (mask, screen) => {
  let newH1 = mask.clientHeight;
  let newH2 = screen.clientHeight;
  let height = newH1 - newH2;
  gsap.to(screen, { y: height, duration: 0.5 });
};
const aniDown3 = (screen) => {
  gsap.to(screen, { y: 0, duration: 0.5 });
};
ScrollTrigger.create({
  trigger: ".contents_left3",
  start: "top bottom",
  end: "bottom top",
  scrub: 0.5,
  onEnter: () => {
    pcM3.addEventListener("mouseenter", () => aniUp(pcM3, pcS3));
    pcM3.addEventListener("mouseleave", () => aniDown(pcS3));
    gsap.fromTo(left3, { xPercent: -100 }, { xPercent: 0, duration: 1 });
  },
});

const pc4 = document.querySelector(".sec3_contents4 .pc4");
const left4 = document.querySelector(".sec3_contents4 .contents_left4");
const pcS4 = pc4.querySelector(".screen");
const pcM4 = pc4.querySelector(".mask");

ScrollTrigger.create({
  trigger: ".contents_left4",
  start: "top bottom",
  end: "bottom top",
  scrub: 0.5,
  onEnter: () => {
    gsap.fromTo(left4, { xPercent: 100 }, { xPercent: 0, duration: 1 });
  },
});


/*
main .sec4 #skill-bar
*/
const circles = document.querySelectorAll(".circular-pbar");
circles.forEach((el) => {
  const counter = el.querySelector(".circular-pbar-counter");
  const tg = counter.textContent + "%";
  const tm = gsap.timeline({
    defaults: { duration: 3, ease: "expo.out" },
    scrollTrigger: {
      trigger: el,
      toggleActions: "play pause resume reset",
    },
  });
  tm.from(counter, {
    textContent: 0,
    modifiers: {
      textContent: (textContent) => {
        return textContent.toFixed();
      },
    },
  });
  tm.to(
    el,
    {
      "--p": tg,
    },
    0
  );
});


/*
main .sec5 imgs
*/
document.addEventListener("DOMContentLoaded", () => {
  const imageLinks = {
    one: "ad.html",
    two: "ad.html",
    three: "ad.html",
    four: "ad.html",
    five: "ad.html",
    six: "ad.html",
  };

  Object.keys(imageLinks).forEach((key) => {
    const imageElement = document.querySelector(`.space_img.${key}`);
    if (imageElement) {
      imageElement.addEventListener("click", () => {
        window.open(imageLinks[key], "_blank");
      });
    }
  });
});


/*
arrow_up
*/
(() => {
  const arrowUp = document.querySelector(".arrow-up");
  const top = document.querySelector("#top");
  document.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      arrowUp.classList.add("visible");
    } else {
      arrowUp.classList.remove("visible");
    }
  });
  arrowUp.addEventListener("click", function () {
    top.scrollIntoView({ behavior: "smooth" });
  });
})();
