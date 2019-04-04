function getNewsData(stockname) {

	console.log("Getting News Data on " + stockname);

	//IEX API 1.0 News Call
	 $.getJSON(`https://api.iextrading.com/1.0/stock/${stockname}/news/last/5`,
	 	function(json_data) {
	 		this.json_data = json_data;
	 		console.log(this.json_data);
	 		document.getElementById('news_title').innerHTML = this.json_data[0]["news"];
	 	}
	);
}