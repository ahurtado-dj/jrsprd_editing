Meteor.publish('fichas', function() {
  return Fichas.find();
});

Meteor.publish('sentencias', function() {
  return Sentencias.find();
});
