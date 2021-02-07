(function () {
    // navbar
    if ($('.nav-link').length > 0) {
      $('.nav-link, .navbar-brand').on('click', function() {
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
      });
    }
  
    
    let frondEndChart = document.querySelector('#chart_frondEnd')
    let backEndChart = document.querySelector('#chart_backEnd')
    let dataBaseChart = document.querySelector('#chart_database')
    let utilChart = document.querySelector('#chart_util')

    if(frondEndChart){
      var data = [{
        values: [50, 40, 7, 3],
        labels: ['JavaScript ES6', 'React', 'HTML5', 'CSS3'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot(frondEndChart, data, layout);
    }
  
    if (chart1) {
      new Chart(chart1, {
        type: 'doughnut',
        options,
        data: {
          labels: ['JavaScript ES6', 'React', 'HTML5', 'CSS3'],
          datasets: [{
            data: [50, 40, 7, 3],
            borderColor,
            backgroundColor,
            hoverBackgroundColor,
            hoverBorderColor
          }]
        }
      });
    }
  
    if (chart2) {
      new Chart(chart2, {
        type: 'doughnut',
        options,
        data: {
          labels: ['Node.js', 'Express', 'Koa', 'Java', 'Spring'],
          datasets: [{
            data: [30, 20, 10, 20, 20],
            borderColor,
            backgroundColor,
            hoverBackgroundColor,
            hoverBorderColor
          }]
        }
      });
    }
  
    if (chart3) {
      new Chart(chart3, {
        type: 'doughnut',
        options,
        data: {
          labels: ['MongoDB', 'MySQL', 'PostgreSQL'],
          datasets: [{
            data: [40, 34, 27],
            borderColor,
            backgroundColor,
            hoverBackgroundColor,
            hoverBorderColor
          }]
        }
      });
    }
  
    if (chart4) {
      new Chart(chart4, {
        type: 'doughnut',
        options,
        data: {
          labels: ['GitHub', 'Asana', 'Trello', 'Redmine', 'Adobe Xd'],
          datasets: [{
            data: [40, 15, 15, 20, 10],
            borderColor,
            backgroundColor,
            hoverBackgroundColor,
            hoverBorderColor
          }]
        }
      });
    }
  
    // carousel
    if ($('.owl-carousel').length > 0) {
      $('.owl-carousel').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        autoplay: false,
        dots: true,
        loop: true
      });
    }
  
    // dark mode
    if ($('.btn-toggle').length > 0) {
      function switchMode(status) {
        $('link[media]').attr('media', status ? 'screen' : 'not screen');
      }
  
      $('.btn-toggle').on('click', function() {
        var useDarkMode = $(this).attr('data-use-dark-mode');
        switchMode(useDarkMode === 'true');
      });
    }
  })();
  