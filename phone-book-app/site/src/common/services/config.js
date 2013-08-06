angular.module('service.config', []).constant('config', {
	routes: {
		contacts: '/contacts',
		contact: '/contacts/:id',
		about: '/about'
	},
	resourceUrls: {
		contacts: '/api/contacts/:id'
	},
	templateUrls: {
		contacts: 'src/app/contacts/contacts.tmpl.html',
		contact: 'src/app/contacts/contact.tmpl.html',
		about: 'src/app/about/about.tmpl.html'
	},
	regularExpressions: {
		emailAddress: '/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/',
		twitter: '/^@+[A-Za-z0-9_]{1,15}$/'
	}
});