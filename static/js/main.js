$(function() {
  var barChart = $('#bar-chart');

  new Chart(barChart, {
      type: 'bar',
      data: {
        labels: ['UK', 'Ireland'],
        datasets: [
          {
            label: "Population (idiots)",
            backgroundColor: ['#000000', '#FFFF00'],
            data: [123, 28]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Population (idiots)'
        }
      }
  });
});