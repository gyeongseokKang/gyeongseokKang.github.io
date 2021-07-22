(function () {
  // navbar
  if ($(".nav-link").length > 0) {
    $(".nav-link, .navbar-brand").on("click", function () {
      $(".nav-link.active").removeClass("active");
      $(this).addClass("active");
    });
  }

  const frondEndChart = document.querySelector("#chart_frondEnd");
  const backEndChart = document.querySelector("#chart_backEnd");
  const dataBaseChart = document.querySelector("#chart_database");
  const utilChart = document.querySelector("#chart_util");

  const defaultLayout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    margin: { t: 20, b: 20, r: 40, l: 40 },
    showlegend: false,
  };

  if (frondEndChart) {
    let data = [
      {
        type: "pie",
        labels: ["JavaScript", "TypeScript", "React", "HTML5", "CSS"],
        values: [30, 30, 20, 10, 10],
        hole: 0.3,
        textinfo: "label+percent",
        hoverinfo: "label+percent",
      },
    ];
    let layout = {
      ...defaultLayout,
      height: frondEndChart.height,
      width: frondEndChart.width,
    };

    Plotly.newPlot(frondEndChart, data, layout, { displayModeBar: false, responsive: true });
  }
  if (backEndChart) {
    let data = [
      {
        type: "pie",
        labels: ["Node.js", "Express", "Java", "Spring"],
        values: [25, 25, 25, 25],
        hole: 0.3,
        textinfo: "label+percent",
        hoverinfo: "label+percent",
      },
    ];

    let layout = {
      ...defaultLayout,
      height: frondEndChart.height,
      width: frondEndChart.width,
    };
    Plotly.newPlot(backEndChart, data, layout, { displayModeBar: false, responsive: true });
  }
  if (dataBaseChart) {
    let data = [
      {
        type: "pie",
        labels: ["OracleSQL", "Tibero", "MongoDB"],
        values: [40, 40, 20],
        hole: 0.3,
        textinfo: "label+percent",
        hoverinfo: "label+percent",
      },
    ];

    let layout = {
      ...defaultLayout,
      height: frondEndChart.height,
      width: frondEndChart.width,
    };
    Plotly.newPlot(dataBaseChart, data, layout, { displayModeBar: false, responsive: true });
  }
  if (utilChart) {
    let data = [
      {
        type: "pie",
        labels: ["GitHub", "Jest", "FireBase", "Zeplin", "etc"],
        values: [20, 20, 20, 20, 20],
        hole: 0.3,
        textinfo: "label+percent",
        hoverinfo: "label+percent",
      },
    ];

    let layout = {
      ...defaultLayout,
      height: frondEndChart.height,
      width: frondEndChart.width,
    };
    Plotly.newPlot(utilChart, data, layout, { displayModeBar: false, responsive: true });
  }

  // carousel
  if ($(".owl-carousel").length > 0) {
    $(".owl-carousel").owlCarousel({
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      items: 1,
      autoplay: false,
      dots: true,
      loop: true,
    });
  }
  // click alarm
  const audio = document.getElementById("switch_alarm");
  document.addEventListener("click", function clickAlarm(e) {
    if (e.target.getAttribute("class") && e.target.getAttribute("class").includes("click-alarm")) {
      audio.play();
    }
  });

  $(window).on("load", function () {
    function fade() {
      let animation_height = $(window).innerHeight() * 0.5;
      let ratio = Math.round((1 / animation_height) * 10000) / 10000;
      $(".fade").each(function () {
        let objectTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if (objectTop < windowBottom) {
          if (objectTop < windowBottom - animation_height) {
            $(this).css({
              transition: "opacity 0.1s linear",
              transition: "left 0.1s linear",
              opacity: 1,
              left: "0px",
            });
          } else {
            $(this).css({
              transition: "opacity 0.5s linear",
              opacity: (windowBottom - objectTop) * ratio,
              transition: "left 0.5s linear",
              left: `${200 * (1 - (windowBottom - objectTop) * ratio)}px`,
            });
          }
        } else {
          $(this).css({
            opacity: 0,
            left: "200px",
          });
        }
      });
    }
    $(".fade").css({
      opacity: 0,
      left: "200px",
    });
    fade();

    $(window).scroll(function () {
      fade();
    });
  });
})();
