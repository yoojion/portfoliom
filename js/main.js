/*
header #nav
 */
$(document).ready(function () {
  // 햄버거 메뉴 클릭 시
  $(".nav_btn_ham").click(function () {
    $("#nav,.page_cover,html").addClass("open");
    window.location.hash = "#open"; // 해시값을 #open으로 설정
  });

  // .nav_btn_x 클릭 시 메뉴 닫기
  $(".nav_btn_x").click(function (e) {
    e.preventDefault(); // 기본 동작 (history.back())을 막음
    $("#nav,.page_cover,html").removeClass("open"); // 메뉴 닫기
    window.location.hash = ""; // 해시값을 비워서 메뉴 닫기
  });

  // 해시값 변경 시
  window.onhashchange = function () {
    // 현재 해시값이 #open이면, 메뉴를 열고
    if (location.hash === "#open") {
      $("#nav,.page_cover,html").addClass("open");
    } else {
      // 다른 해시값이면, 메뉴를 닫음
      $("#nav,.page_cover,html").removeClass("open");
    }

    // 다른 해시값이 변경되면 스크롤 위치를 해당 ID로 이동
    if (location.hash) {
      var target = $(location.hash);
      if (target.length) {
        // 여백 없이 스크롤 이동
        $('html, body').animate({
          scrollTop: target.offset().top // 여백 없이 목표 위치로 이동
        }, 500); // 500ms 동안 부드럽게 스크롤
      }
    }
  };

  // 서브 메뉴 처리
  $("#nav ul.sub_mobile").hide();
  $("#nav ul.nav_menu li").click(function () {
    $("ul", this).slideToggle("fast");
  });

  // 메뉴 항목 클릭 시 해당 ID로 이동하도록 처리
  $("#nav ul.nav_menu li a").click(function (e) {
    var targetId = $(this).find("span").data("link"); // data-link 속성 값을 가져옴
    if (targetId) {
      // 기본 링크 동작을 막음 (페이지 리로드 방지)
      e.preventDefault();
      window.location.hash = targetId; // 해시를 해당 ID로 변경
    }
  });
});

// -------------------------------------

// $(document).ready(function () {
//   $(".nav_btn_ham").click(function () {
//     $("#nav,.page_cover,html").addClass("open");
//     window.location.hash = "#open";
//   });
// });

// window.onhashchange = function () {
//   if (location.hash != "#open") {
//     $("#nav,.page_cover,html").removeClass("open");
//   }
// };

// $(document).ready(function () {
//   $("#nav ul.sub_mobile").hide();
//   $("#nav ul.nav_menu li").click(function () {
//     $("ul", this).slideToggle("fast");
//   });
// });



/*
main .sec1 .sec1_img
 */
(() => {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".sec1_img .p_deco").forEach((el) => {
      const pos = el.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * pos) / 90;
      const y = (window.innerHeight - e.pageY * pos) / 90;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
})();

/*
main .sec2 #slider
 */
jQuery(document).ready(function ($) {
  function initSlider() {
    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").outerWidth();
    var sliderUlWidth = slideCount * slideWidth;
    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $("#slider ul li:last-child").prependTo("#slider ul");
  }
  initSlider();
  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +$("#slider ul li").outerWidth(),
      },
      200,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }
  function moveRight() {
    $("#slider ul").animate(
      {
        left: -$("#slider ul li").outerWidth(),
      },
      200,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }
  $(".prev_btn").click(function (event) {
    event.preventDefault();
    moveLeft();
  });
  $(".next_btn").click(function (event) {
    event.preventDefault();
    moveRight();
  });
  $(window).resize(function () {
    initSlider();
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
  gsap.to(screen, { y: height, duration: 0.5 });
};
const aniDown = (screen) => {
  gsap.to(screen, { y: 0, duration: 0.5 });
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
  gsap.to(screen, { y: height, duration: 0.5 });
};
const aniDown2 = (screen) => {
  gsap.to(screen, { y: 0, duration: 0.5 });
};
ScrollTrigger.create({
  trigger: ".contents_left2",
  start: "top bottom",
  end: "bottom top",
  scrub: 0.5,
  onEnter: () => {
    pcM2.addEventListener("mouseenter", () => aniUp(pcM2, pcS2));
    pcM2.addEventListener("mouseleave", () => aniDown(pcS2));
    gsap.fromTo(left2, { xPercent: -100 }, { xPercent: 0, duration: 1 });
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
    gsap.fromTo(left4, { xPercent: -100 }, { xPercent: 0, duration: 1 });
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
