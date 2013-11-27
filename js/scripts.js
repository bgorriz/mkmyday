var weatherMap = {

//Thunderstorm 
200:"electronica", 	//thunderstorm with light rain 
201:"pop", 	//thunderstorm with rain
202:"dark,heavy", 	//thunderstorm with heavy rain
210:"synth-pop", 	//light thunderstorm	
211:"shoegaze", 	//thunderstorm	
212:"techno", 	//heavy thunderstorm	
221:"hardcore", 	//ragged thunderstorm	
230:"metal", 	//thunderstorm with light drizzle
231:"jazz,samba,cumbia", 	//thunderstorm with drizzle	
232:"trash,rock", 	//thunderstorm with heavy drizzle 

//Drizzle
300:"folk", 	//light intensity drizzle 
301:"dark folk,revival", 	//drizzle	
302:"dark metal", 	//heavy intensity drizzle 
310:"progressive, rock", 	//light intensity drizzle rain	
311:"dubsteb", 	//drizzle rain	
312:"stoner", 	//heavy intensity drizzle rain	
321:"garage", 	//shower drizzle 

//Rain
500:"indie", 	//light rain	
501:"pop", 	//moderate rain	
502:"rock", 	//heavy intensity rain	
503:"bossa", 	//very heavy rain	
504:"pop", 	//extreme rain	
511:"pop", 	//freezing rain	
520:"pop", 	//light intensity shower rain	
521:"pop", 	//shower rain	
522:"pop", 	//heavy intensity shower rain	

//Snow
600:"classic", 	//light snow 
601:"gothic", 	//snow 
602:"punk", 	//heavy snow	
611:"pop", 	//sleet	
621:"pop", 	//shower snow	

//Atmosphere
701:"pop", 	//mist
711:"pop", 	//smoke
721:"pop", 	//haze
731:"pop", 	//Sand/Dust Whirls	
741:"pop", 	//Fog 

//Clouds
800:"punk rock", 	//sky is clear	
801:"rock,punk,metal,punk-rock", 	//few clouds	
802:"surf,rock,punk,classic rock", 	//scattered clouds	
803:"pop rock,indie,alt rock,country", 	//broken clouds 
804:"soul" 	//overcast clouds	
  }

var opts = {
  lines: 13, // The number of lines to draw
  length: 10, // The length of each line
  width: 5, // The line thickness
  radius: 15, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};


var genius = {

	init: function(){
		SC.initialize({
    	client_id: "7aac801076c5fc36f0b4e330079e187c"
 	 	});

	 $(".form-wrapper").on('submit',this.makeMagic);	 
	},

	makeMagic: function(event){
	 	 event.preventDefault();
	 	 var my_city=$("#textField").val();
	 	 console.log("val "+my_city);
		var current =genius.getWeather(my_city);
		 		 		
 	},
 	getWeather: function(city){	
			var uri= 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&callback=test'
			
			uri=encodeURI(uri); 
			console.log(uri);
			//Call weather
			return jQuery.get(uri,function(data,event){
					 if(data.error) { 
					   alert(data.error[0].msg);
					  } else {
					  		//print weather on screen	 		
							genius.printWeather(data);
					        //print play list
					        var generes = weatherMap[data.weather[0].id];
 		 					genius.printPlayList(generes);  
 		 					
					  }
					},"jsonp");
		 		 		
	},


	printPlayList: function(entrada){ 
		var target = document.getElementById('spin');
			var spinner = new Spinner(opts).spin(target);
		SC.get("/tracks", {limit: 500, genres: entrada}, function(tracks){
			var tracklist = new Array(10);
			for (var i = 1; i <=10; i++){
	      		tracklist[i-1] = tracks[Math.floor(Math.random()*100)];
	      		SC.oEmbed(tracklist[i-1].uri, document.getElementById("track"+i));	       		
       		}
       		spinner.stop(); 
    	});
	},

	printWeather: function(data){
		var temp = data.main.temp;
		var max = data.main.temp_max;
		var min = data.main.temp_min;
		var city = data.name;
		var desc = data.weather[0].description;
	}

};


$(document).ready(function() {
	 genius.init();
 });
