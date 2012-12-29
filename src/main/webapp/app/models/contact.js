define('app/models/contact',
	['lib/ember'],
	function(){
	
		var Contact = Ember.Object.extend({
			
			id:null,
			name:null,
			tell:null,
			qq:null,
			
		});
		return Contact;
	
	}
);