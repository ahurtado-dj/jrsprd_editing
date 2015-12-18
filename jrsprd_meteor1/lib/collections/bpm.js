/*************************************\
 * camunda BPM SDK JS implementation *
\*************************************/
/*
var CamSDK = Npm.require('camunda-bpm-sdk-js');


var camClient = new CamSDK.Client({
	mock: false,
	// the following URL does not need authentication,
	// but the tradeof is that some requests will fail
	// e.g.: some filters use the reference to the user performing the request
	apiUri: 'http://localhost:8080/engine-rest'
});

var processDefinitionService  = new camClient.resource('process-definition');
*/

Meteor.methods({
	listProcessDefinitions: function() {
		// get the list of available process definitions
	  processDefinitionService.list({}, function (err, results) {
		  return [ 
			{value:1, name: "process1-1101-0x01"}, 
			{value:2, name: "process2-1102-0x02"}
		  ];
		  /*
	    thr(err);

	    // make the results suitable for inquirer choices
	    var definitions = results.items.map(function (definition) {
				console.log("bpm response received.");
	      return {
	        value: definition.id,
	        name: definition.name || definition.key || definition.id
	      };
	    });
		*/
	  });
	}

});

/*
listProcessInstances: function() {


	// get the list of process instances
	processInstanceService.list({}, function (err, instances) {
		thr(err);

		// collect the relevant process definitions in a array (suitable for CamSDK.utils.series())
		var processDefinitionRequests = {};
		instances.items.forEach(function (instance) {
			if (!processDefinitionRequests[instance.definitionId]) {
				processDefinitionRequests[instance.definitionId] = function (cb) {
					processDefinitionService.get(instance.definitionId, cb);
				};
			}
		});

		// perform the requests for the process definitions
		CamSDK.utils.series(processDefinitionRequests, function (err, definitions) {
			thr(err);

			var table = new Table({
				head: [
					'Instance ID',
					'Process name',
					'Version',
					'Description'
				],
				colWidths: [
					38,
					38,
					10,
					40
				]
			});

			instances.items.forEach(function (instance) {
				var definition = definitions[instance.definitionId];
				table.push([
					instance.id,
					definition.name || '',
					definition.version || '',
					definition.description || ''
				]);
			});

			home(table.toString());
		});
	});
	*/
