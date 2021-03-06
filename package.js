Package.describe({
	name:"lepozepo:reactive-publish",
	summary: "Enable server-side reactivity for Meteor.publish",
	version:"0.1.7",
	git: "https://github.com/Lepozepo/meteor-reactive-publish"
});

Package.on_use(function(api) {
	api.versionsFrom('METEOR@1.0');
	api.use([
		'coffeescript',
		'tracker',
		'underscore',
		'peerlibrary:server-autorun',
		'accounts-base'
	], 'server');

	api.add_files('lib/reactive-publish.coffee', 'server');
});
