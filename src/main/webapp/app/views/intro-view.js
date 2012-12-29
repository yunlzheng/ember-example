define('app/views/intro-view',
	[
	 'lib/text!app/templates/intro.html',
	 'lib/ember'
	 ],
	function(intro){
		
		return Ember.View.extend({
			template:Ember.Handlebars.compile(intro)
		});
	
	}
);