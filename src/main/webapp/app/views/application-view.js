define('app/views/application-view',[
    'lib/text!app/templates/head.html',
    'lib/ember'
    ],function(head){
	
		return Ember.ContainerView.extend({
			
			childViews:['headerView','mianView','footerView'],
			headerView:Ember.ContainerView.create({
				
				childViews:['titleView'],
				elementId:'header',
				tagName:'header',
				titleView:Ember.View.create({
					
					template:Ember.Handlebars.compile(head)
					
				})
				
			}),
			mianView:Ember.ContainerView.create({
				
				elementId:'mian',
				tagName:'section',
				childViews:['outletView'],
				outletView:Ember.View.create({
					template:Ember.Handlebars.compile('{{outlet}}')
				})
				
			}),
			footerView:Ember.ContainerView.create({
				
				elementId:'footer',
				tagName:'footer',
				childViews:['companyView'],
				companyView:Ember.View.create({
					emementId:'company-info',
					tagName:'p',
					template:function(){
						return '@Company4 Footer';
					}
				})
				
			})
			
			
		});
	
	}
);