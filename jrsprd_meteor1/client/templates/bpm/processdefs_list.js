Template.processdefList.helpers({
  processdefs: function() {
    Meteor.call('listProcessDefinitions', post, function(error, result) {
      // display the error to the user and abort
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      return result.definitions;
    });
  }
});
