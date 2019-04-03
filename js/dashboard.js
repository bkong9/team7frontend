/* globals Chart:false, feather:false */

(function () {

  //IEX Cloud API Call
  $.getJSON('https://cloud.iexapis.com/beta/stock/aapl/chart/1m?token=pk_73b4fd4406b444419faf2232b75ca615',
    function(json_data) {
      alert(JSON.stringify(json_data));
      this.json_data = json_data;
      console.log(this.json_data);

      var labelArray = [
        this.json_data[json_data.length - 7]["date"],
        this.json_data[json_data.length - 6]["date"],
        this.json_data[json_data.length - 5]["date"],
        this.json_data[json_data.length - 4]["date"],
        this.json_data[json_data.length - 3]["date"],
        this.json_data[json_data.length - 2]["date"],
        this.json_data[json_data.length - 1]["date"]
      ]

      'use strict'

      feather.replace()

      // Graphs
      var ctx = document.getElementById('myChart')
      // eslint-disable-next-line no-unused-vars
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labelArray,
          datasets: [{
            data: [
              this.json_data[json_data.length - 7]["close"],
              this.json_data[json_data.length - 6]["close"],
              this.json_data[json_data.length - 5]["close"],
              this.json_data[json_data.length - 4]["close"],
              this.json_data[json_data.length - 3]["close"],
              this.json_data[json_data.length - 2]["close"],
              this.json_data[json_data.length - 1]["close"]
            ],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false
          }
        }
      })
    }
  );
}())
