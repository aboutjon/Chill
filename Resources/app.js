(function() {
	//determine platform and form factor and render approproate components
	//var osname = Ti.Platform.osname,
	//	version = Ti.Platform.version,
	//	height = Ti.Platform.displayCaps.platformHeight,
	//	width = Ti.Platform.displayCaps.platformWidth;
	
	//Titanium.App.Properties.removeProperty("token"); // TODO: REMOVE THIS LINE
	//Titanium.App.Properties.setString("token",'w8JCxALmSK0fUlVjsoEPzZuOr3ycGM');
	
	//var storedAuthToken = Titanium.App.Properties.getString("token");
	
	if(Ti.Facebook.getLoggedIn() == true){
		var Window;
		Window = require('ui/handheld/ios/ApplicationWindow');
	
		new Window().open();
	}else{
	
		var Window = Ti.UI.createWindow({
			backgroundImage:'assets/fb_login_template@2x.png',
			backgroundColor:'#ffffff'
		});
		
		Window.open();
		
		var fb_connect = Titanium.UI.createButton({
			backgroundImage: 'assets/fb_login@2x.png',
			backgroundFocusedImage: 'assets/fb_login_pressed@2x.png',
			backgroundSelectedImage: 'assets/fb_login_pressed@2x.png',
			width:265,
			height:50,
			bottom: 95
		});
		
		Window.add(fb_connect);
		
		fb_connect.addEventListener('click', function(e){
			Ti.Facebook.authorize();
		});
		
		Ti.Facebook.appid = '127585394079253'
		Titanium.Facebook.forceDialogAuth = false;
		Ti.Facebook.permissions = ['email', 'user_about_me', 'user_birthday', 'user_website', 'user_events', 'create_event', 'publish_stream', 'read_friendlists', 'manage_friendlists'];
		Ti.Facebook.addEventListener('login', function(e) {
		    if(e.success){
		    	Ti.API.info('success');
		        alert('Logged In');
		    }else if(e.error) {
		    	Ti.API.info('error');
		    	//alert(e.error)
		    }else if(e.cancelled) {
		    	Ti.API.info('cancelled');
		        //alert("Canceled");
		    }
		});
	}
})();
