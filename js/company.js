function getStockName(stockname) {

  //IEX API 1.0 Company Call
  console.log("Getting Company Data on " + stockname);
  
  $.getJSON(`https://api.iextrading.com/1.0/stock/${stockname}/company`,
  	function(json_data) {
  		this.json_data = json_data;
      console.log(this.json_data);
  		document.getElementById('chartTitle').innerHTML = this.json_data["companyName"];
  	}
  );
}
