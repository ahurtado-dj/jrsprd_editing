Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('fichas');
    return Meteor.subscribe('sentencias');
  }
});

Router.route('/', {name: 'homeList'});

Router.route('/fichas', {name: 'fichasList'});


Router.route('/fichas/create', {
  name: 'fichaCreate'
});

Router.route('/fichas/:_id', {
  name: 'fichaPage',
  data: function() {
          return Fichas.findOne(this.params._id);
		}
});

Router.route('/fichas/:_id/edit', {
  name: 'fichaEdit',
  data: function() {
    return Fichas.findOne(this.params._id);
  }
});


Router.route('/sentencias', {name: 'sentenciasList'});


Router.route('/sentencias/create', {
  name: 'sentenciaCreate'
});

Router.route('/sentencias/:_id', {
  name: 'sentenciasPage',
  data: function() {
          return Sentencias.findOne(this.params._id);
		}
});

Router.route('/sentencias/:_id/edit', {
  name: 'sentenciasEdit',
  data: function() {
    return Sentencias.findOne(this.params._id);
  }
});



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'fichaCreate'});
