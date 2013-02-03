function DetailView() {
	var self = Ti.UI.createView();
	
	self.addEventListener('itemSelected', function(e) {
		
		var scrollView = Ti.UI.createScrollView({
		  top:0,
		  contentHeight: 'auto',
		  backgroundColor:'#333333',
		  backgroundImage:'assets/linen@2x.png'
		});
		
		var quickChillTitle = Titanium.UI.createLabel({
			text:'Who can make it',
			font:{fontSize:20,fontWeight:'bold'},
			color: '#ffffff',
			//highlightedColor:'#ececec',
			width:300,
			textAlign:'left',
			top:10,
			left:10,
			height:20
		});
		
		scrollView.add(quickChillTitle);
		
		var closeFriends = [
			{first_name:'Vino', facebook_id:'VinoJeyapalan'},
			{first_name:'Vijay', facebook_id:'vjeyapalan'},
			{first_name:'Dami', facebook_id:'dami.a.dina'},
			{first_name:'Chris', facebook_id:'collins.cg'},
			{first_name:'Ross', facebook_id:'ross.lai.58'},
			{first_name:'Jason', facebook_id:'imjasonli'},
			/*{first_name:'Herbert', facebook_id:'herbertlui'},
			{first_name:'Victor', facebook_id:'victor.cho.18'},
			{first_name:'Nick', facebook_id:'nick.francis1'},
			{first_name:'Vino', facebook_id:'VinoJeyapalan'},
			{first_name:'Ross', facebook_id:'ross.lai.58'},
			{first_name:'Dami', facebook_id:'dami.a.dina'}*/
		];
		
		var spacer = 0;
		for (var i = 0; i < closeFriends.length; i++) {
			var quickChillFriend = Titanium.UI.createImageView({
				image: 'https://graph.facebook.com/' + closeFriends[i].facebook_id + '/picture?width=200&height=200',
				//borderRadius:3,
				hires: true,
				width:50,
				height:50,
				left: 10 + ((i % 5) * 60),
				top: Math.floor(i/5) * 70 + 40
			});
			
			scrollView.add(quickChillFriend);
			
			var quickChillFriendName = Titanium.UI.createLabel({
				text:closeFriends[i].first_name,
				font:{fontSize:10,fontWeight:'normal'},
				color: '#ffffff',
				//highlightedColor:'#ececec',
				width:50,
				textAlign:'center',
				left: 10 + ((i % 5) * 60),
				top: Math.floor(i/5) * 70 + 95,
				height:10
			});
			
			scrollView.add(quickChillFriendName);
		}
		
		eventLocation = Titanium.Map.createAnnotation({
	        animate:true,
	        //title:'Event Name',
	        pincolor:Titanium.Map.ANNOTATION_RED,
	        latitude:parseFloat(e.locationLat),
	        //latitude:data[c]['gmap_lat'],
	        longitude:parseFloat(e.locationLng),
	        //longitude:data[c]['gmap_lon'],
	        myid:30
	      });
		
		mapview = Titanium.Map.createView({
	        mapType: Titanium.Map.STANDARD_TYPE,
	        region: {latitude: e.locationLat, longitude: e.locationLng, latitudeDelta:0.01, longitudeDelta:0.01},
	        animate:true,
	        regionFit:true,
	        userLocation:false,
	        height: 150,
	        annotations: [eventLocation],
	        top: 110 + Math.floor(closeFriends.length/5) * 70,
	        zIndex:1
	    });
	    scrollView.add(mapview);
	    
	    var transparentBackground = Titanium.UI.createImageView({
			backgroundColor: '#ffffff',
			opacity:0.8,
			width:320,
			height:40,
			left:0,
			top: 110 + Math.floor(closeFriends.length/5) * 70,
			zIndex:10
		});
		
		var locationTitle = Titanium.UI.createLabel({
			text:e.locationName,
			font:{fontSize:16,fontWeight:'bold'},
			color: '#000000',
			//highlightedColor:'#ececec',
			width:300,
			textAlign:'left',
			top:5,
			left:10,
			height:16
		});
		
		var locationDetails = Titanium.UI.createLabel({
			text:e.locationAddress,
			font:{fontSize:12,fontWeight:'normal'},
			color: '#000000',
			//highlightedColor:'#ececec',
			width:300,
			textAlign:'left',
			top:21,
			left:10,
			height:12
		});
		
		transparentBackground.add(locationTitle);
		transparentBackground.add(locationDetails);
		
		scrollView.add(transparentBackground);
		
		var quickChillTitle = Titanium.UI.createLabel({
			text:'When? ' + e.when,
			font:{fontSize:20,fontWeight:'bold'},
			color: '#ffffff',
			//highlightedColor:'#ececec',
			width:300,
			textAlign:'left',
			top:280 + Math.floor(closeFriends.length/5) * 70,
			left:10,
			height:20
		});
		
		scrollView.add(quickChillTitle);
		
		var quickChillNotes = Titanium.UI.createLabel({
			text:e.notes,
			font:{fontSize:14,fontWeight:'bold'},
			color: '#ffffff',
			//highlightedColor:'#ececec',
			width:300,
			textAlign:'left',
			top:310 + Math.floor(closeFriends.length/5) * 70,
			left:10,
			height:14
		});
		
		scrollView.add(quickChillNotes);
		
		self.add(scrollView);
	});
	return self;
};

module.exports = DetailView;
