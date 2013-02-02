function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
		
	var createEventButton = Titanium.UI.createButton({
        title: 'Create',
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN 
    });
    
    var accountSettingsButton = Titanium.UI.createButton({
        title: 'Settings',
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN 
    });
		
	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Chill'
	});
	
	masterContainerWindow.setLeftNavButton(accountSettingsButton);
	masterContainerWindow.setRightNavButton(createEventButton);
	masterContainerWindow.add(masterView);
	
	
	var closeAccountSettingsButton = Titanium.UI.createButton({
        title: 'Close',
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN 
    });
	
	var accountSettingsModal = Ti.UI.createWindow({
		title: 'Account Settings',
		backgroundColor: '#ffffff'
	});
	
	accountSettingsModal.setRightNavButton(closeAccountSettingsButton);
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Product Details'
	});
	detailContainerWindow.add(detailView);
	
	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	
	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		navGroup.open(detailContainerWindow);
	});
	
	createEventButton.addEventListener('click', function(e) {
		masterView.fireEvent('scrollToCreateEvent',e);
	});
	
	accountSettingsButton.addEventListener('click', function(e) {
		accountSettingsModal.open({
			modal:true
		}); 
	});
	
	closeAccountSettingsButton.addEventListener('click', function(e) {
		accountSettingsModal.close(); 
	});
	
	return self;
};

module.exports = ApplicationWindow;
