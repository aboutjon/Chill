//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	//some dummy data for our table view
	var events = [
		{first_name:'Michael', last_name:'Oliver', profile_picture:'https://graph.facebook.com/Devilmo666/picture?width=200&height=200', cover_picture: 'https://sphotos-a.xx.fbcdn.net/hphotos-ash4/s720x720/391593_10151200677493447_1757570864_n.jpg', event_datetime: ''},
		{first_name:'Andrei', last_name:'Savin', profile_picture:'https://graph.facebook.com/andrei.savin/picture?width=200&height=200', cover_picture: 'https://sphotos-a.xx.fbcdn.net/hphotos-snc7/p370x247/184610_10151303397802740_1630627993_n.jpg', event_datetime: ''}
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
			top:42,
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
			top:42,
			left:75 + first_name.toImage().width,
			height:16,
			zIndex:5
		});
		
		var profile_picture = Titanium.UI.createImageView({
			image: events[i].profile_picture,
			//borderRadius:3,
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
			width:300,
			height:50,
			right:0,
			top:25,
			zIndex:3
		});
		
		var imageview_ex = require('com.obscure.imageview_ex');
		var cover_picture = imageview_ex.createImageView({
			image:events[i].cover_picture,
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
		row.add(profile_picture);
		row.add(cover_picture);
		row.add(transparentBackground);
		//row.hasChild=events[i].hasChild;
		
		eventData.push(row);
	};
		
	var quickChill = Titanium.UI.createTableViewRow({
		height: 420,
		backgroundColor: '#333333',
		touchEnabled: false
	});
	
	var fb_friend_id_1 = Ti.UI.createTextField({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:20,  
	    left:10,  
	    width:300,  
	    height:20,
	    font: {fontSize: 14},
	    hintText:'FB Friend ID 1',
	    autocorrect:false,
	    keyboardType:Ti.UI.KEYBOARD_DEFAULT,  
	    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,  
	    borderStyle:Ti.UI.INPUT_BORDERSTYLE_NONE,
	    autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE  
	});  
	quickChill.add(fb_friend_id_1);
	
	var fb_friend_id_2 = Ti.UI.createTextField({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:50,  
	    left:10,  
	    width:300,  
	    height:20,
	    font: {fontSize: 14},
	    hintText:'FB Friend ID 2',
	    autocorrect:false,
	    keyboardType:Ti.UI.KEYBOARD_DEFAULT,  
	    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,  
	    borderStyle:Ti.UI.INPUT_BORDERSTYLE_NONE,
	    autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE  
	});  
	quickChill.add(fb_friend_id_2);
	
	var foursquareLocation = Ti.UI.createTextField({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:80,  
	    left:10,  
	    width:300,  
	    height:20,
	    font: {fontSize: 14},
	    hintText:'Where do you want to chill?',
	    autocorrect:false,
	    keyboardType:Ti.UI.KEYBOARD_DEFAULT,  
	    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,  
	    borderStyle:Ti.UI.INPUT_BORDERSTYLE_NONE,
	    autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE  
	});  
	quickChill.add(foursquareLocation);
	
	var timeButtonMorning = Ti.UI.createButton({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:80,  
	    left:10,  
	    width:100,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Morning'
	});  
	quickChill.add(timeButtonMorning);
	
	var timeButtonAfternoon = Ti.UI.createButton({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:80,  
	    left:110,  
	    width:100,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Afternoon'
	});  
	quickChill.add(timeButtonAfternoon);
	
	var timeButtonEvening = Ti.UI.createButton({  
	    color:'#000000',  
	    backgroundColor:'#ffffff',
	    top:80,  
	    left:210,  
	    width:100,  
	    height:40,
	    font: {fontSize: 14},
	    title:'Evening' 
	});  
	quickChill.add(timeButtonEvening);
	
	eventData.push(quickChill);
	
	//https://api.foursquare.com/v2/venues/search?intent=match&query=starbucks&ll=42.277880,-83.737857&client_id=DMVPVUB1BVVA4DV5RECMTAHD1AGNPMQNWVJXKA5KBI43WOZA&client_secret=2NPKXSXVNV1DMEVWHTKTJUA3JUUXFDBG4KI323KSFOX12KTM&v=20130202
	
	var table = Ti.UI.createTableView({
		data:eventData
	});
	self.add(table);
	
	self.addEventListener('scrollToCreateEvent', function(e) {
		table.scrollToIndex(table.data[0].rows.length - 1);
	});
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
		});
	});
	
	return self;
};

module.exports = MasterView;