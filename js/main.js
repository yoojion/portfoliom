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
// $(document).ready(function ($) {
//   function initSlider() {
//     var slideCount = $("#slider ul li").length;
//     var slideWidth = $("#slider ul li").outerWidth();
//     var sliderUlWidth = slideCount * slideWidth;
//     $("#slider ul").css({ width: sliderUlWidth, left: -slideWidth });
//     $("#slider ul li:last-child").prependTo("#slider ul");
//   }

//   function moveLeft() {
//     $("#slider ul").animate(
//       {
//         left: +$("#slider ul li").outerWidth(),
//       },
//       200,
//       function () {
//         $("#slider ul li:last-child").prependTo("#slider ul");
//         $("#slider ul").css("left", -$("#slider ul li").outerWidth());
//       }
//     );
//   }

//   function moveRight() {
//     $("#slider ul").animate(
//       {
//         left: -$("#slider ul li").outerWidth(),
//       },
//       200,
//       function () {
//         $("#slider ul li:first-child").appendTo("#slider ul");
//         $("#slider ul").css("left", -$("#slider ul li").outerWidth());
//       }
//     );
//   }

//   $(".prev_btn").click(function (event) {
//     event.preventDefault();
//     moveLeft();
//   });

//   $(".next_btn").click(function (event) {
//     event.preventDefault();
//     moveRight();
//   });

//   function setupSlider() {
//     if (window.innerWidth < 1024) {
//       initSlider();
//       $(".prev_btn")
//         .off("click")
//         .on("click", function (event) {
//           event.preventDefault();
//           moveLeft();
//         });

//       $(".next_btn")
//         .off("click")
//         .on("click", function (event) {
//           event.preventDefault();
//           moveRight();
//         });
//     } else {
//       $("#slider ul").css({ left: 0 });
//       $(".prev_btn").off("click");
//       $(".next_btn").off("click");
//     }
//   }

//   setupSlider();

//   $(window).resize(function () {
//     setupSlider();
//   });
// });

// -------------------------------------

// $(document).ready(function () {
//   var $slider = $("#slider ul");
//   var $slides = $("#slider ul li");
//   var slideWidth = $slides.outerWidth();

//   function initSlider() {
//     var slideCount = $slides.length;
//     var sliderUlWidth = slideCount * slideWidth;
//     $slider.css({ width: sliderUlWidth, left: -slideWidth });
//     $slides.last().prependTo($slider);
//   }

//   function moveLeft() {
//     $slider.animate({ left: "+=" + slideWidth }, 200, function () {
//       $slides.last().prependTo($slider);
//       $slider.css("left", -slideWidth);
//     });
//   }

//   function moveRight() {
//     $slider.animate({ left: "-=" + slideWidth }, 200, function () {
//       $slides.first().appendTo($slider);
//       $slider.css("left", -slideWidth);
//     });
//   }

//   function setupSlider() {
//     if (window.innerWidth < 1024) {
//       initSlider();
//       $(".prev_btn")
//         .off("click")
//         .on("click", function (e) {
//           e.preventDefault();
//           moveLeft();
//         });
//       $(".next_btn")
//         .off("click")
//         .on("click", function (e) {
//           e.preventDefault();
//           moveRight();
//         });
//     } else {
//       $slider.css("left", 0);
//       $(".prev_btn, .next_btn").off("click");
//     }
//   }

//   setupSlider();

//   $(window).resize(setupSlider);
// });

// -------------------------------------

// $(document).ready(function ($) {
//   // 슬라이더 초기화 함수
//   function initSlider() {
//     var slideCount = $("#slider ul li").length;
//     var slideWidth = $("#slider ul li").outerWidth();
//     var sliderUlWidth = slideCount * slideWidth;
//     $("#slider ul").css({ width: sliderUlWidth, left: -slideWidth }); // Set initial position with left
//     $("#slider ul li:last-child").prependTo("#slider ul");
//   }

//   // 왼쪽으로 슬라이드 이동
//   function moveLeft() {
//     $("#slider ul").animate(
//       {
//         left: +$("#slider ul li").outerWidth(),
//       },
//       200,
//       function () {
//         $("#slider ul li:last-child").prependTo("#slider ul");
//         $("#slider ul").css("left", -$("#slider ul li").outerWidth());
//       }
//     );
//   }

//   // 오른쪽으로 슬라이드 이동
//   function moveRight() {
//     $("#slider ul").animate(
//       {
//         left: -$("#slider ul li").outerWidth(),
//       },
//       200,
//       function () {
//         $("#slider ul li:first-child").appendTo("#slider ul");
//         $("#slider ul").css("left", -$("#slider ul li").outerWidth());
//       }
//     );
//   }

//   // 슬라이더 초기화 및 버튼 이벤트 설정
//   function setupSlider() {
//     if (window.innerWidth < 1024) {
//       // 화면이 1024px 미만일 때 슬라이더 초기화 및 작동
//       initSlider();

//       $(".prev_btn").off("click").on("click", function (event) {
//         event.preventDefault();
//         moveLeft();
//       });

//       $(".next_btn").off("click").on("click", function (event) {
//         event.preventDefault();
//         moveRight();
//       });
//     } else {
//       // 화면이 1024px 이상일 때 슬라이더 비활성화
//       $(".prev_btn, .next_btn").off("click"); // 버튼 클릭 이벤트 제거
//       $("#slider ul").css("left", 0); // 슬라이더 위치를 초기화
//     }
//   }

//   // 페이지 로딩 시 및 화면 크기 조정 시 슬라이더 설정
//   setupSlider();

//   $(window).resize(function () {
//     setupSlider(); // 화면 크기 변경 시 슬라이더 설정을 다시 호출
//   });
// });

// -------------------------------------
$(document).ready(function ($) {
  let isAnimating = false; // 애니메이션 상태 플래그 추가

  // 슬라이더 초기화 함수
  function initSlider() {
    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").outerWidth();
    var sliderUlWidth = slideCount * slideWidth;
    $("#slider ul").css({ width: sliderUlWidth, left: -slideWidth }); // Set initial position with left
    $("#slider ul li:last-child").prependTo("#slider ul");
  }

  // 왼쪽으로 슬라이드 이동
  function moveLeft() {
    if (!isAnimating) {
      isAnimating = true;
      $("#slider ul").animate(
        {
          left: +$("#slider ul li").outerWidth(),
        },
        200,
        function () {
          $("#slider ul li:last-child").prependTo("#slider ul");
          $("#slider ul").css("left", -$("#slider ul li").outerWidth());
          isAnimating = false; // 애니메이션 완료 후 플래그 해제
        }
      );
    }
  }

  // 오른쪽으로 슬라이드 이동
  function moveRight() {
    if (!isAnimating) {
      isAnimating = true;
      $("#slider ul").animate(
        {
          left: -$("#slider ul li").outerWidth(),
        },
        200,
        function () {
          $("#slider ul li:first-child").appendTo("#slider ul");
          $("#slider ul").css("left", -$("#slider ul li").outerWidth());
          isAnimating = false; // 애니메이션 완료 후 플래그 해제
        }
      );
    }
  }

  // 슬라이더 초기화 및 버튼 이벤트 설정
  function setupSlider() {
    if (window.innerWidth < 1024) {
      initSlider();

      $(".prev_btn").off("click").on("click", function (event) {
        event.preventDefault();
        moveLeft();
      });

      $(".next_btn").off("click").on("click", function (event) {
        event.preventDefault();
        moveRight();
      });
    } else {
      $(".prev_btn, .next_btn").off("click");
      $("#slider ul").css("left", 0);
    }
  }

  // 페이지 로딩 시 및 화면 크기 조정 시 슬라이더 설정
  setupSlider();

  // 리사이즈 이벤트에 디바운스를 적용하여 불필요한 호출 방지
  let resizeTimeout;
  $(window).resize(function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupSlider, 200);
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
