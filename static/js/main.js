$(function() {
  var barChart = $('#bar-chart');
  
  var myChart = createChart(barChart, [0, 0, 0]);

  $('.refresh').click(function() {
    $.get("/data/" + $(this).data('key'), function(result) {
      myChart.destroy();

      myChart = createChart(barChart, result.data);
    });
  });
});

function createChart(canvas, data) {  
  return new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['UK', 'Ireland', 'Istanbul'],
      datasets: [
        {
          label: "Population (idiots)",
          backgroundColor: ['#000000', '#FFFF00', '#009900'],
          data: data
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
}