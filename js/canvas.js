function getStockData(stockname) {

  console.log("Getting Stock Data on " + stockname);

  //IEX API 1.0 Chart Call
  $.getJSON(`https://api.iextrading.com/1.0/stock/${stockname}/chart/1m`,
    function(json_data) {
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
}