define('app',[
   'app/router',
   'app/models/person',
   'app/views/intro-view',
   'app/views/repos-view',
   'app/views/contributordetail-view',
   'app/views/acontributor-view',
   'app/views/application-view',
   'app/views/allcontributors-view',
   'app/controllers/aContributorController',
   'app/controllers/allContributorsController',
   'lib/ember'
   ],function(Router,
		   Person,
		   IntroView,ReposView,DetailsView ,OneContributorView,ApplicationView,AllContributorsView,
		   OneContributorController,AllContributorsController){
	
	var App = Ember.Application.create({
		
		VERSION:'1.0',
		rootElement:'#main',
		Router:Router,
		Person:Person,
		IntroView:IntroView,
		ReposView:ReposView,
		DetailsView :DetailsView ,
		IntroController:Ember.ObjectController.extend(),
		OneContributorView:OneContributorView,
		AllContributorsView:AllContributorsView,
		ApplicationView:ApplicationView,
		OneContributorController:OneContributorController,
		ApplicationController:Ember.Controller.extend(),
		AllContributorsController:AllContributorsController,
		ready:function(){
			//应用程序初始化完成自动调用
		}
		
	});
	
	return window.App = App;
	
});