define('app',[
   'app/router',
   'app/models/person',
   'app/models/contact',
   'app/views/contacts-view',
   'app/views/intro-view',
   'app/views/repos-view',
   'app/views/contributordetail-view',
   'app/views/acontributor-view',
   'app/views/application-view',
   'app/views/allcontributors-view',
   'app/controllers/contactsController',
   'app/controllers/aContributorController',
   'app/controllers/allContributorsController',
   'lib/ember'
   ],function(Router,
		   Person,Contact,
		   ContactsView,IntroView,ReposView,DetailsView ,OneContributorView,ApplicationView,AllContributorsView,
		   ContactsController,OneContributorController,AllContributorsController){
	
	var App = Ember.Application.create({
		
		VERSION:'1.0',
		rootElement:'#main',
		Router:Router,
		Person:Person,
		Contact:Contact,
		ContactsView:ContactsView,
		IntroView:IntroView,
		ReposView:ReposView,
		DetailsView :DetailsView ,
		IntroController:Ember.ObjectController.extend(),
		OneContributorView:OneContributorView,
		AllContributorsView:AllContributorsView,
		ApplicationView:ApplicationView,
		
		ContactsController:ContactsController,
		OneContributorController:OneContributorController,
		ApplicationController:Ember.Controller.extend(),
		AllContributorsController:AllContributorsController,
		ready:function(){
			//应用程序初始化完成自动调用
		}
		
	});
	
	return window.App = App;
	
});