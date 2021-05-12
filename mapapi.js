function initialize() {
	var mapOptions = {
	center: { lat: 43.653225, lng: -79.383186},
	zoom: 13
	};
	
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
		
	
	var RyersonInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1>Ryerson University</h1><h2>350 Victoria St</h2>' +
				'Located right at Dundas Square.  ' +
				'Tons of bars and restaurants to hang out at between classes. ' +
				'The Student Learning Centre is comfy place to get some work done. ' +
				'</div>'
	});
	
	var homeInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1 class="title">My Home!</h1><h2>85 Hilton Ave</h2>' +
				'This is where I live! Right beside Castle Loma.  ' +
				'It\'s a fantastic neighborhood with bars and restaurants.  ' +
				'I actually grew up in Etobicoke but I recently moved here. ' +
				'</div>'
	});
	
	var ChinaTownInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1 class="title">ChinaTown</h1><h2>280 Spadina Ave</h2>' +
				'Amazing restaurants in this area, especially Korean BBQ.  ' +
				'Very close to Kensington Market and Graffiti Alley.  ' +
				'A few shopping centres where you can find great deals on clothing.' +
				'</div>'
	});
	
	var GraceOMalleysInfo = new google.maps.InfoWindow({
		content:'<div id="infobox">' +  
				'<h1 class="title">GraceOMalleys</h1><h2>14 Duncan St</h2>' +
				'A bar/nightclub that is perfect for going out on a Friday or Saturday night.  ' +
				'Always plays top 40 Music with a great atmosphere.  ' +
				'$5 Jager bombs and $12 Pitchers on Thursdays!' +
				'</div>'
	});
	
	var Ryerson = new google.maps.Marker({
		position: { lat: 43.65782, lng: -79.37871 },
		map: map,
		title: 'Ryerson University'
	});
	
	var home = new google.maps.Marker({
		position: { lat: 43.68090, lng: -79.41548 },
		map: map,
		title: 'Home'
	});
	
	var ChinaTown = new google.maps.Marker({
		position: { lat: 43.65303, lng: -79.39799 },
		map: map,
		title: 'ChinaTown, Old Toronto'
	});
	
	var GraceOMalleys = new google.maps.Marker({
		position: { lat: 43.64776, lng: -79.38847 },
		map: map,
		title: 'GraceOMalleys'
	});
	
	google.maps.event.addListener(Ryerson, 'click', function() {
		GuidedTour();
	});
	
	google.maps.event.addListener(home, 'click', function() {
		GuidedTour();
	});
	
	google.maps.event.addListener(ChinaTown, 'click', function() {
		GuidedTour();
	});
	
	google.maps.event.addListener(GraceOMalleys, 'click', function() {
		GuidedTour();
	});
	
	function GuidedTour() {
		GraceOMalleysInfo.close(map,ChinaTown);
		map.panTo(home.getPosition());
		homeInfo.open(map,home);
		window.setTimeout(function(){
		map.panTo(Ryerson.getPosition());
		homeInfo.close(map,home);
		RyersonInfo.open(map,Ryerson);}
		, 6000)
		window.setTimeout(function(){
		map.panTo(ChinaTown.getPosition());
		RyersonInfo.close(map,Ryerson);
		ChinaTownInfo.open(map,ChinaTown);}
		, 11000)
		window.setTimeout(function(){
		map.panTo(GraceOMalleys.getPosition());
		ChinaTownInfo.close(map,ChinaTown);
		GraceOMalleysInfo.open(map,GraceOMalleys);}
		, 16000)
	}
}
google.maps.event.addDomListener(window, 'load', initialize);