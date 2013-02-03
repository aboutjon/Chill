//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	//some dummy data for our table view
	var events = [
		{
			first_name:'Michael', 
			last_name:'Oliver',
			profile_picture:'https://graph.facebook.com/Devilmo666/picture?width=200&height=200', 
			cover_picture: 'https://sphotos-a.xx.fbcdn.net/hphotos-ash4/s720x720/391593_10151200677493447_1757570864_n.jpg', 
			locationName: 'Starbucks',
			locationAddress: '100 Main St, Ann Arbor',
			locationLat: '42.277880',
			locationLng: '-83.737857',
			when: 'Tomorrow Morning',
			notes: 'For the math presentation prep'
		},
		{
			first_name:'Andrei', 
			last_name:'Savin', 
			profile_picture:'https://graph.facebook.com/andrei.savin/picture?width=200&height=200', 
			cover_picture: 'https://sphotos-a.xx.fbcdn.net/hphotos-snc7/p370x247/184610_10151303397802740_1630627993_n.jpg', 
			locationName: "Joe's Bar",
			locationAddress: '212 Square Rd, Ann Arbor',
			locationLat: '43.277880',
			locationLng: '-83.737857',
			when: '3 days from now in the afternoon',
			notes: 'Hope you guys can make it!'
		},
		{
			first_name:'Dami', 
			last_name:'Dina', 
			profile_picture:'https://graph.facebook.com/dami.a.dina/picture?width=200&height=200', 
			cover_picture: 'https://sphotos-b.xx.fbcdn.net/hphotos-ash4/481317_10151236013351593_1673160167_n.jpg', 
			locationName: 'Wild Wings',
			locationAddress: '42 Green Cres, Ann Arbor',
			locationLat: '43.277880',
			locationLng: '-84.737857',
			when: 'Tonight',
			notes: "I'm starvingg"
		},
		{
			first_name:'Jason', 
			last_name:'Li', 
			profile_picture:'https://graph.facebook.com/imjasonli/picture?width=200&height=200', 
			cover_picture: 'https://sphotos-b.xx.fbcdn.net/hphotos-prn1/644437_10151462184277959_1342848875_n.jpg', 
			locationName: 'Starbucks',
			locationAddress: '100 Main St, Ann Arbor',
			locationLat: '43.220880',
			locationLng: '-84.427857',
			when: 'Tomorrow Afternoon',
			notes: "Worksesh!"
		}
	];
	
	var eventData = [];
	
	for (var i = 0; i < events.length; i++) {
		var row = Titanium.UI.createTableViewRow({
			height: 100
		});
		
		var first_name = Titanium.UI.createLabel({
			text:events[i].first_name,
			font:{fontSize:16,fontWeight:'bold'},
			color: '#ffffff',
			highlightedColor:'#ececec',
			width:'auto',
			textAlign:'left',
			top:36,
			left:70,
			height:16,
			zIndex:5
		});
		
		var last_name = Titanium.UI.createLabel({
			text:events[i].last_name,
			font:{fontSize:16,fontWeight:'bold'},
			color: '#ffffff',
			highlightedColor:'#ececec',
			width:'auto',
			textAlign:'left',
			top:36,
			left:75 + first_name.toImage().width,
			height:16,
			zIndex:5
		});
		
		var details = Titanium.UI.createLabel({
			text:"Chillin' Tomorrow Morning",
			font:{fontSize:12,fontWeight:'normal'},
			color: '#ffffff',
			highlightedColor:'#ececec',
			width:'auto',
			textAlign:'left',
			top:50,
			left:70,
			height:14,
			zIndex:5
		});
		
		var profile_picture = Titanium.UI.createImageView({
			image: events[i].profile_picture,
			defaultImage:'assets/linen@2x.png',
			borderRadius:25,
			hires: true,
			width:50,
			height:50,
			left:10,
			top:25,
			zIndex:5
		});
		
		var transparentBackground = Titanium.UI.createImageView({
			backgroundColor: '#000000',
			backgroundSelectedColor: '#333333',
			opacity:0.5,
			width:280,
			height:50,
			right:0,
			top:25,
			zIndex:3
		});
		
		var imageview_ex = require('com.obscure.imageview_ex');
		var cover_picture = imageview_ex.createImageView({
			image:events[i].cover_picture,
			defaultImage:'assets/linen@2x.png',
			//backgroundColor:'#f0ede6',
			//defaultImage:'iphone/default_cover@2x.png',
			hires: true,
			contentMode: 'aspectfill',
	  		clipsToBounds: true,
			width:320,
			height:100,
			left:0,
			top:0,
			zIndex:0
		});
				 
		row.add(first_name);
		row.add(last_name);
		row.add(details);
		row.add(profile_picture);
		row.add(cover_picture);
		row.add(transparentBackground);
		
		row.first_name = events[i].first_name;
		row.last_name = events[i].last_name;
		row.locationName = events[i].locationName;
		row.locationAddress = events[i].locationAddress;
		row.locationLat = events[i].locationLat;
		row.locationLng = events[i].locationLng;
		row.when = events[i].when;
		row.notes = events[i].notes;
		
		eventData.push(row);
	};
	
	var closeFriends = [
		{first_name:'Vino', facebook_id:'VinoJeyapalan'},
		{first_name:'Vijay', facebook_id:'vjeyapalan'},
		{first_name:'Dami', facebook_id:'dami.a.dina'},
		{first_name:'Chris', facebook_id:'collins.cg'},
		{first_name:'Ross', facebook_id:'ross.lai.58'},
		{first_name:'Jason', facebook_id:'imjasonli'},
		{first_name:'Herbert', facebook_id:'herbertlui'},
		{first_name:'Victor', facebook_id:'victor.cho.18'},
		{first_name:'Nick', facebook_id:'nick.francis1'},
		{first_name:'Vino', facebook_id:'VinoJeyapalan'},
		{first_name:'Ross', facebook_id:'ross.lai.58'},
		{first_name:'Dami', facebook_id:'dami.a.dina'}
	];
		
	var quickChill = Titanium.UI.createTableViewRow({
		height: 460 + Math.floor(closeFriends.length/5) * 70,
		backgroundColor: '#333333',
		backgroundImage: 'assets/linen@2x.png',
		backgroundRepeat: true,
		touchEnabled: false,
		selectionStyle:Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
		
	});
	
	var addMore = Ti.UI.createButton({  
	    color:'#000000',
	    bottom:50,  
	    width:150,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Add More Peeps'
	});  
	quickChill.add(addMore);
	
	var askToChill = Ti.UI.createButton({  
	    color:'#000000',
	    bottom:0,  
	    left:0,  
	    width:320,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Tell them you want to Chill!'
	});  
	quickChill.add(askToChill);
	
	var quickChillTitle = Titanium.UI.createLabel({
		text:'Create a ChillSesh',
		font:{fontSize:20,fontWeight:'bold'},
		color: '#ffffff',
		//highlightedColor:'#ececec',
		width:300,
		textAlign:'left',
		top:15,
		left:10,
		height:20
	});
	
	quickChill.add(quickChillTitle);
	
	var foursquareLocation = Ti.UI.createButton({  
	    color:'#000000',
	    top:50,  
	    left:10,  
	    width:300,
	    paddingLeft:40,     // pad left by 20 pixels
    	paddingRight:10,    // pad right by 20 pixels
	    height:30,
	    backgroundImage: 'assets/locationBG@2x.png',
	    backgroundImagePressed: 'assets/locationBG@2x.png',
	    backgroundImageSelected: 'assets/locationBG@2x.png',
	    font: {fontSize: 14},
	    title:'Where do you want to chill?',
	    style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});  
	quickChill.add(foursquareLocation);
	
	var timeSelection = Titanium.UI.iOS.createTabbedBar({
	    labels:['Morning', 'Afternoon', 'Evening'],
	    backgroundColor:'#333333',
	    top:110,
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	    height:40,
	    width:300
	});
	quickChill.add(timeSelection);
	
	var dateSelection = Titanium.UI.iOS.createTabbedBar({
	    labels:['Today', 'Tomorrow', 'In 3 Days'],
	    backgroundColor:'#333333',
	    top:160,
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	    height:40,
	    width:300
	});
	quickChill.add(dateSelection);
	
	var notes = Ti.UI.createTextField({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:220,  
	    left:10,  
	    width:300,  
	    height:30,
	    paddingLeft:40,     // pad left by 20 pixels
    	paddingRight:10,    // pad right by 20 pixels
    	backgroundImage: 'assets/notesBG@2x.png',
	    font: {fontSize: 14},
	    hintText:'Some notes',
	    autocorrect:false,
	    keyboardType:Ti.UI.KEYBOARD_DEFAULT,  
	    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,  
	    borderStyle:Ti.UI.INPUT_BORDERSTYLE_NONE,
	    autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE  
	});  
	quickChill.add(notes);
	
	var quickChillPeople = Titanium.UI.createLabel({
		text:'Now just pick some friends to chill with..',
		font:{fontSize:14,fontWeight:'normal'},
		color: '#ffffff',
		//highlightedColor:'#ececec',
		width:300,
		textAlign:'left',
		top:260,
		left:10,
		height:20
	});
	
	quickChill.add(quickChillPeople);
	
	var spacer = 0;
	for (var i = 0; i < closeFriends.length; i++) {
		var quickChillFriend = Titanium.UI.createImageView({
			image: 'https://graph.facebook.com/' + closeFriends[i].facebook_id + '/picture?width=200&height=200',
			//borderRadius:3,
			hires: true,
			width:50,
			height:50,
			left: 10 + ((i % 5) * 60),
			top: Math.floor(i/5) * 70 + 290
		});
		
		quickChill.add(quickChillFriend);
		
		var quickChillFriendName = Titanium.UI.createLabel({
			text:closeFriends[i].first_name,
			font:{fontSize:10,fontWeight:'normal'},
			color: '#ffffff',
			//highlightedColor:'#ececec',
			width:50,
			textAlign:'center',
			left: 10 + ((i % 5) * 60),
			top: Math.floor(i/5) * 70 + 345,
			height:10
		});
		
		quickChill.add(quickChillFriendName);
	}
	
	quickChillFriend.addEventListener('click', function(e){
		this.opacity = 0.50;
	});
	
	var minDate = new Date();

    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()+7);

    var value = new Date();

    var datePicker = Ti.UI.createPicker({
	    type:Ti.UI.PICKER_TYPE_DATE,
	    minDate:minDate,
	    maxDate:maxDate,
	    value:value,
	    bottom:0,
	    height:200
    });
    
    var pickerToolbarDone =  Titanium.UI.createButton({
	    title:'Done',
	    style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	
	var pickerSpacer =  Titanium.UI.createButton({
	    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
    var pickerToolbar =  Ti.UI.iOS.createToolbar({
	   	bottom:216,
	    items:[pickerSpacer, pickerToolbarDone]
	});

    datePicker.addEventListener('change',function(e){
	    var pickerdate = e.value;
	    var day = pickerdate.getDate();
	    var month = pickerdate.getMonth();
	    var year = pickerdate.getFullYear();
	    var newdate = day + "/" + month + "/" + year ;
	    Ti.API.info(newdate);
	});
	
	eventData.push(quickChill);
	
	//https://api.foursquare.com/v2/venues/search?intent=match&query=starbucks&ll=42.277880,-83.737857&client_id=DMVPVUB1BVVA4DV5RECMTAHD1AGNPMQNWVJXKA5KBI43WOZA&client_secret=2NPKXSXVNV1DMEVWHTKTJUA3JUUXFDBG4KI323KSFOX12KTM&v=20130202
	// 3 days from now in the evening
	
	var table = Ti.UI.createTableView({
		data:eventData,
		borderWidth:0,
		separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		backgroundImage: 'assets/linen@2x.png',
		backgroundRepeat: true
	});
	self.add(table);
	
	self.addEventListener('scrollToCreateEvent', function(e) {
		table.scrollToIndex(table.data[0].rows.length - 1,{
		    position:Titanium.UI.iPhone.TableViewScrollPosition.TOP,
		    animated:true
		});
	});
	
	Ti.API.info(table.data[0].rows.length);
	
	pickerToolbarDone.addEventListener('click', function(e){
		self.remove(datePicker);
		self.remove(pickerToolbar);
	});
	
	var closeLocationButton = Titanium.UI.createButton({
        title: 'Close',
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN 
    });
	
	var locationModal = Ti.UI.createWindow({
		title: 'Where to chill?',
		backgroundColor: '#ffffff'
	});
	
	locationModal.setRightNavButton(closeLocationButton);
	
	closeLocationButton.addEventListener('click', function(e){
		locationModal.close();
	});
	
	foursquareLocation.addEventListener('click', function(e){
		locationModal.open({
			modal:true
		});
		
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
		Titanium.Geolocation.distanceFilter = 10;
		Titanium.Geolocation.purpose = "We'd like to show you places nearby."
		Titanium.Geolocation.getCurrentPosition(function(e)
		{
		    if (e.error)
		    {
		        alert("Whoops! We could't find your location.");
		        return;
		    }
		 
		    var longitude = e.coords.longitude;
		    var latitude = e.coords.latitude;
		 
		    //
		    //CREATE MAP VIEW
		    //
		     
		    mapview = Titanium.Map.createView({
		        mapType: Titanium.Map.STANDARD_TYPE,
		        region: {latitude: latitude, longitude: longitude, latitudeDelta:0.01, longitudeDelta:0.01},
		        animate:true,
		        regionFit:true,
		        userLocation:true,
		        height: 150,
		        top:0
		    });
		    locationModal.add(mapview);
		 
		});

		setTimeout(function(){
			//search.focus();
		}, 0);
	});
	
	//SEARCH BAR
	var search = Titanium.UI.createSearchBar({
	   barColor:'#333333',
	   height:43,
	   hintText:'Where do you want to chill?',
	   top:0
	});
	 
	 
	var locationCoffee = Ti.UI.createButton({  
	    color:'#000000',
	    top:50,  
	    left:10,  
	    width:300,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Grab coffee'
	});  
	
	var locationFood = Ti.UI.createButton({  
	    color:'#000000',
	    top:100,  
	    left:10,  
	    width:300,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Get something to eat'
	}); 
	
	var locationBar = Ti.UI.createButton({  
	    color:'#000000',
	    top:150,  
	    left:10,  
	    width:300,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Get wasted'
	}); 
	
	locationCoffee.addEventListener('click', function(e){
		search.value = 'coffee';
		autocomplete_table.remove(locationCoffee);
		autocomplete_table.remove(locationFood);
		autocomplete_table.remove(locationBar);
		self.fireEvent('searchLocation',e);
		search.fireEvent('cancel');
	});
	
	locationFood.addEventListener('click', function(e){
		search.value = 'food';
		autocomplete_table.remove(locationCoffee);
		autocomplete_table.remove(locationFood);
		autocomplete_table.remove(locationBar);
		self.fireEvent('searchLocation',e);
		search.trigger('cancel');
	});
	
	locationBar.addEventListener('click', function(e){
		search.value = 'bar';
		autocomplete_table.remove(locationCoffee);
		autocomplete_table.remove(locationFood);
		autocomplete_table.remove(locationBar);
		self.fireEvent('searchLocation',e);
		search.trigger('cancel');
	});
	
	knokContainerWindow = Ti.UI.createWindow({
		//backgroundRepeat: true,
		//barImage:'iphone/header_w_logo@2x.png',
		backgroundColor: '#f0ede6',
		navBarHidden:true,
		left: 0,
		top:0,
		zIndex: 10
	});
	
	search.addEventListener('focus', function(e){
		//autocomplete_table.add(locationCoffee);
		//autocomplete_table.add(locationFood);
		//autocomplete_table.add(locationBar);
		//locationModal.navBarHidden = true;
		//searchView.open();
		autocomplete_table.top = 0;
	});
	
	search.addEventListener('cancel', function(e){
		autocomplete_table.remove(locationCoffee);
		autocomplete_table.remove(locationFood);
		autocomplete_table.remove(locationBar);
		autocomplete_table.top = 150;
	});
	
	search.addEventListener('blur', function(e){
		autocomplete_table.remove(locationCoffee);
		autocomplete_table.remove(locationFood);
		autocomplete_table.remove(locationBar);
	});

	//AUTOCOMPLETE TABLE
	var table_data = [];
	var autocomplete_table = Titanium.UI.createTableView({
	   search: search,
	   scrollable: true,
	   top:150,
	   backgroundColor:'#ffffff',
	   zIndex:10
	});
	locationModal.add(autocomplete_table);
	
	//
	// SEARCH BAR EVENTS
	//
	var timers = [];
	var last_search = null;
	search.addEventListener('change', function(e)
	{
	   if (search.value.length > 1 && search.value !=  last_search)
	   {
		   	autocomplete_table.remove(locationCoffee);
			autocomplete_table.remove(locationFood);
			autocomplete_table.remove(locationBar);
	      clearTimeout(timers['autocomplete']);
	      timers['autocomplete'] = setTimeout(function()
	      {
	         last_search = search.value;
	         auto_complete(search.value);
	      }, 300);
	      
	   }
	   return false;
	});
	
	self.addEventListener('searchLocation', function(e) {
      	var taskRequest = Titanium.Network.createHTTPClient();
		taskRequest.onload = function() {
		    var json = this.responseText;  
			var result = JSON.parse(json); 
			var response = result.response.venues
			
			table_data = [];
			locations = [];
		    for (var i = 0; i < response.length; i++)
		    {
		       //Ti.API.info('row data - ' + data[i].value);
		       var row = Ti.UI.createTableViewRow(
		       {
		          height: 40,
		          title: response[i].name + ' - ' + response[0].location.address
		          //subtitle: 'testing',
		          //hasDetail:true
		       });
		       locations[i] = Titanium.Map.createAnnotation({
			        animate:true,
			        title:response[i].name,
			        pincolor:Titanium.Map.ANNOTATION_BLUE,
			        latitude:parseFloat(response[0].lat),
			        //latitude:data[c]['gmap_lat'],
			        longitude:parseFloat(response[0].lng),
			        //longitude:data[c]['gmap_lon'],
			        myid:30
			      });
		       // apply rows to data array
		       table_data.push(row);
		    };
		    // set data into tableView
		    autocomplete_table.setData(table_data);
		    Ti.API.error('Searching for location..');
		    Ti.API.info(response[0].name);
		    mapview.annotations = locations;
		    Ti.API.info(locations);
	    }
	    
	    var url = 'https://api.foursquare.com/v2/venues/search?intent=browse&radius=5000&query=' + escape(search.value) + '&ll=42.277880,-83.737857&client_id=DMVPVUB1BVVA4DV5RECMTAHD1AGNPMQNWVJXKA5KBI43WOZA&client_secret=2NPKXSXVNV1DMEVWHTKTJUA3JUUXFDBG4KI323KSFOX12KTM&v=20130202';
		taskRequest.open('GET', url, false);
		taskRequest.setRequestHeader('Content-Type', 'application/json');
		taskRequest.send();
	});
	 
	function auto_complete(search_term)
	{
	   if (search_term.length > 2)
	   {
			var taskRequest = Titanium.Network.createHTTPClient();
			taskRequest.onload = function() {
		    var json = this.responseText;  
			var result = JSON.parse(json); 
			var response = result.response.venues
			
			table_data = [];
			locations = [];
            for (var i = 0; i < response.length; i++)
            {
               //Ti.API.info('row data - ' + data[i].value);
               var row = Ti.UI.createTableViewRow(
               {
                  height: 40,
                  title: response[i].name + ' - ' + response[i].location.address,
                  subtitle:'Mountain View, CA',
                  //subtitle: 'testing',
                  //hasDetail:true
               });
               
               location = Titanium.Map.createAnnotation({
			        animate:true,
			        title:response[i].name,
			        subtitle:response[i].location.address,
			        pincolor:Titanium.Map.ANNOTATION_RED,
			        leftButton: '/iphone/appicon.png',
			        latitude:parseFloat(response[i].location.lat),
			        //latitude:data[c]['gmap_lat'],
			        longitude:parseFloat(response[i].location.lng),
			        //longitude:data[c]['gmap_lon'],
			        myid:30
			      });
               // apply rows to data array
               locations.push(location);
               table_data.push(row);
            };
            // set data into tableView
            autocomplete_table.setData(table_data);
            Ti.API.error('Searching..');
		    Ti.API.info(response[0].name);
		    Ti.API.info(response[0].location.address);
		    mapview.annotations = locations;
		    Ti.API.info(locations);
		}
		
		var url = 'https://api.foursquare.com/v2/venues/search?intent=browse&radius=5000&query=' + escape(search_term) + '&ll=42.277880,-83.737857&client_id=DMVPVUB1BVVA4DV5RECMTAHD1AGNPMQNWVJXKA5KBI43WOZA&client_secret=2NPKXSXVNV1DMEVWHTKTJUA3JUUXFDBG4KI323KSFOX12KTM&v=20130202';
		taskRequest.open('GET', url, false);
		taskRequest.setRequestHeader('Content-Type', 'application/json');
		taskRequest.send();

	   }
	}
	
	autocomplete_table.addEventListener('click', function(e) {
		foursquareLocation.title = e.rowData.title;
		locationModal.close();
	});
	
	table.addEventListener('click', function(e) {
		if(e.index != table.data[0].rows.length - 1){
			self.fireEvent('itemSelected', {
				first_name:e.rowData.first_name,
				last_name:e.rowData.last_name,
				locationName:e.rowData.locationName,
				locationAddress:e.rowData.locationAddress,
				locationLat:e.rowData.locationLat,
				locationLng:e.rowData.locationLng,
				when:e.rowData.when,
				notes:e.rowData.notes
			});
		}
	});
	
	//addMore.addEventListener('click', function(e){
	//	Ti.Facebook.logout();
	//});
	
	askToChill.addEventListener('click', function(e){
		
	});
	
	return self;
};

module.exports = MasterView;