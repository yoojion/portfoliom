/*
.load
*/
const loadButton = document.querySelector(".load");
const extraImages = document.querySelectorAll(".extra");

loadButton.addEventListener("click", () => {
  extraImages.forEach((extra) => {
    extra.style.display = "block";
  });
  loadButton.style.display = "none";
});

/*
#slider
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides = $("#slider ul li");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
  }

  $("#slider .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  $("#slider .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider2
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides2 = $("#slider2 ul li");
  const totalSlides2 = slides2.length;

  function showSlide(index) {
    slides2.hide();
    slides2.eq(index).show();
  }

  $("#slider2 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides2;
    showSlide(currentIndex);
  });

  $("#slider2 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides2) % totalSlides2;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider3
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides3 = $("#slider3 ul li");
  const totalSlides3 = slides3.length;

  function showSlide(index) {
    slides3.hide();
    slides3.eq(index).show();
  }

  $("#slider3 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides3;
    showSlide(currentIndex);
  });

  $("#slider3 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides3) % totalSlides3;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider4
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides4 = $("#slider4 ul li");
  const totalSlides4 = slides4.length;

  function showSlide(index) {
    slides4.hide();
    slides4.eq(index).show();
  }

  $("#slider4 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides4;
    showSlide(currentIndex);
  });

  $("#slider4 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides4) % totalSlides4;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider5
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides5 = $("#slider5 ul li");
  const totalSlides5 = slides5.length;

  function showSlide(index) {
    slides5.hide();
    slides5.eq(index).show();
  }

  $("#slider5 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides5;
    showSlide(currentIndex);
  });

  $("#slider5 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides5) % totalSlides5;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider6
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides6 = $("#slider6 ul li");
  const totalSlides6 = slides6.length;

  function showSlide(index) {
    slides6.hide();
    slides6.eq(index).show();
  }

  $("#slider6 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides6;
    showSlide(currentIndex);
  });

  $("#slider6 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides6) % totalSlides6;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider7
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides7 = $("#slider7 ul li");
  const totalSlides7 = slides7.length;

  function showSlide(index) {
    slides7.hide();
    slides7.eq(index).show();
  }

  $("#slider7 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides7;
    showSlide(currentIndex);
  });

  $("#slider7 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides7) % totalSlides7;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider8
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides8 = $("#slider8 ul li");
  const totalSlides8 = slides8.length;

  function showSlide(index) {
    slides8.hide();
    slides8.eq(index).show();
  }

  $("#slider8 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides8;
    showSlide(currentIndex);
  });

  $("#slider8 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides8) % totalSlides8;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider9
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides9 = $("#slider9 ul li");
  const totalSlides9 = slides9.length;

  function showSlide(index) {
    slides9.hide();
    slides9.eq(index).show();
  }

  $("#slider9 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides9;
    showSlide(currentIndex);
  });

  $("#slider9 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides9) % totalSlides9;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider10
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides10 = $("#slider10 ul li");
  const totalSlides10 = slides10.length;

  function showSlide(index) {
    slides10.hide();
    slides10.eq(index).show();
  }

  $("#slider10 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides10;
    showSlide(currentIndex);
  });

  $("#slider10 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides10) % totalSlides10;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider11
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides11 = $("#slider11 ul li");
  const totalSlides11 = slides11.length;

  function showSlide(index) {
    slides11.hide();
    slides11.eq(index).show();
  }

  $("#slider11 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides11;
    showSlide(currentIndex);
  });

  $("#slider11 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides11) % totalSlides11;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider12
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides12 = $("#slider12 ul li");
  const totalSlides12 = slides12.length;

  function showSlide(index) {
    slides12.hide();
    slides12.eq(index).show();
  }

  $("#slider12 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides12;
    showSlide(currentIndex);
  });

  $("#slider12 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides12) % totalSlides12;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider13
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides13 = $("#slider13 ul li");
  const totalSlides13 = slides13.length;

  function showSlide(index) {
    slides13.hide();
    slides13.eq(index).show();
  }

  $("#slider13 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides13;
    showSlide(currentIndex);
  });

  $("#slider13 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides13) % totalSlides13;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider14
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides14 = $("#slider14 ul li");
  const totalSlides14 = slides14.length;

  function showSlide(index) {
    slides14.hide();
    slides14.eq(index).show();
  }

  $("#slider14 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides14;
    showSlide(currentIndex);
  });

  $("#slider14 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides14) % totalSlides14;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});

/*
#slider15
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides15 = $("#slider15 ul li");
  const totalSlides15 = slides15.length;

  function showSlide(index) {
    slides15.hide();
    slides15.eq(index).show();
  }

  $("#slider15 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides15;
    showSlide(currentIndex);
  });

  $("#slider15 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides15) % totalSlides15;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});
/*
#slider16
*/
$(document).ready(function () {
  let currentIndex = 0;
  const slides16 = $("#slider16 ul li");
  const totalSlides16 = slides16.length;

  function showSlide(index) {
    slides16.hide();
    slides16.eq(index).show();
  }

  $("#slider16 .next_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalSlides16;
    showSlide(currentIndex);
  });

  $("#slider16 .prev_btn").click(function (e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalSlides16) % totalSlides16;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});
