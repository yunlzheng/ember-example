define("app/views/contacts-view",
	["lib/text!app/templates/contacts.html",
	 "lib/ember"],
	function(constact){
	
		return Ember.View.extend({
			
			template:Ember.Handlebars.compile(constact)
			
		});
	
	}
)