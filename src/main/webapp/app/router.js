define('app/router',[
    'lib/handlebars',
    'lib/ember'
    ],
	function(){
		
		return Ember.Router.extend({
			
			enableLogging: true,
			root:Ember.Route.extend({
				
				showDemo:Ember.Route.transitionTo('example01'),
				showContact:Ember.Route.transitionTo('contact'),
				
				index:Ember.Route.extend({
					
					route:'/',
					connectOutlets:function(router){
						
						router.get('applicationController').connectOutlet('intro',App.Person.find())
						
					}
					
				}),
				example01:Ember.Route.extend({
					
					route:'/example01',
					
					initialState: 'contributors',
					
					contributors:Ember.Route.extend({
						
						route:'/',
						
						showContributor:Ember.Route.transitionTo('aContributor'),
						
						connectOutlets:function(router){
							
							router.get('applicationController').connectOutlet('allContributors',App.Person.find())
							
						}
						
					}),
	
					aContributor:Ember.Route.extend({
						
						route:'/:githubUserName',
						
						showDetails: Ember.Route.transitionTo('details'),
					    showRepos: Ember.Route.transitionTo('repos'),
					    
						showAllContributors:Ember.Route.transitionTo("contributors"),
						
						connectOutlets:function(router,context){
							router.get('applicationController').connectOutlet('oneContributor',context);
						},
						serialize: function(router, context){
						    return {
						      githubUserName: context.get('login')
						    }
						},
						deserialize: function(router, urlParams){
						    return App.Person.findOne(urlParams.githubUserName);
						},
						
						//childStates
						initialState: 'details',
						details: Ember.Route.extend({
							
						    route: '/',
						    connectOutlets: function(router){
						     
						      router.get('oneContributorController').connectOutlet('details');
						      router.get('oneContributorController.content').loadMoreDetails();
						    }
						  
						}),
						repos: Ember.Route.extend({
						    route: '/repos',
						    connectOutlets: function(router){
						      
						      router.get('oneContributorController').connectOutlet('repos');
						      router.get('oneContributorController.content').loadRepos();
						    }
						})
						
					})
					
				}),
				contact:Ember.Route.extend({
					
					route:'/example02',
					connectOutlets: function(router){
						
						router.get('applicationController').connectOutlet("contacts");
						
					}
					
				})
				
			})
			
		});
		
	}
);