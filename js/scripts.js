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

  //스크롤 연동 fade-in fade-out
  const targets = document.querySelectorAll(".fade-class");
  const options = { root: null, threshold: 0.1, rootMargin: "-0px" };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      const container = entry.target;
      if (entry.isIntersecting) {
        container.classList.add("fade-in");
      } else {
        container.classList.remove("fade-in");
      }
    });
  }, options);

  targets.forEach((target) => {
    observer.observe(target);
  });

  // dark mode support
  const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  // darkModeSwitch.disabled = true;
  darkModeSwitch.checked = userPrefersLight;

  //function that changes the theme, and sets a localStorage variable to track the theme between page loads
  function switchTheme(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      darkModeSwitch.checked = false;
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      darkModeSwitch.checked = true;
    }
  }

  //listener for changing themes
  darkModeSwitch.addEventListener("change", switchTheme, false);

  //pre-check the dark-theme checkbox if dark-theme is set
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    darkModeSwitch.checked = true;
  }

  const logoText = document.querySelector(".logo-text p");
  if (logoText) {
    logoText.innerHTML = logoText.innerText
      .split("")
      .map((char, i) => `<span style="transform:rotate(${i * 9.3}deg)">${char}</span>`)
      .join("");
  }

  const wavyText = document.querySelectorAll(".wavy");
  if (wavyText) {
    wavyText.forEach((divEl) => {
      divEl.style = "position: relative; -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));"
      const wavyTargetText = [...divEl.innerText];
      const period = (wavyTargetText.length + 1) / 10;
      divEl.innerText = "";
      wavyTargetText.forEach((char, index) => {
        if (char === " ") char = "&nbsp"
        divEl.innerHTML += `<span style="--i: ${index + 1}; animation: animate ${period}s ease-in-out infinite;animation-delay: calc(0.1s * var(--i));display: inline-block;">${char}</span>`
      })

    })
  }
})();
