Sentencias = new Mongo.Collection('sentencias');


var SentenciasSchema = new SimpleSchema({

  // }, procesocaso : {
  procesocaso_rj_nro: {
    type: String,
    label: "Proceso/Caso Nro",
    max: 64
  },
  ciudad_ref :{
    type: String,
    label: "Ciudad (Ref)",
    max: 64
  },
  jurisdiccion: { // especialidad, corporacion
    type: String,
    label: "Jurisdiccion/Especialidad/Corporacion",
    max: 128
  },
  // }, decision_setencia: {

  fecha_providencia: {
    type: Date,
    label: "Fecha de Providencia",
    optional: true
  },
  magistrado_ponente: {
    type: String,
    label: "Magistrado Ponente",
    optional: true
  },
  sentido_fallo: {
    type: String,
    label: "Sentido del Fallo",
    optional: true
  }

});



/*
var SentenciasSchema = new SimpleSchema({
  // }, metadata : {
  created_by : {
    type: String,
    autoValue: function() {
      return this.userId
    }
  },
  created_date: {
    type: Date
  },

  // }, procesocaso : {
  procesocaso_rj_nro: {
    type: String,
    label: "Proceso/Caso Nro",
    max: 64
  },
  ciudad_ref :{
    type: String,
    label: "Ciudad (Ref)",
    max: 64
  },
  jurisdiccion: { // especialidad, corporacion
    type: String,
    label: "Jurisdiccion/Especialidad/Corporacion",
    max: 128
  },
  // }, decision_setencia: {
  nro_providencia: {
    type: String,
    label: "Numero de sentencia (si aplica)",
    max: 128,
    optional: true
  },
  tipo_providencia: {
    type: String,
    label: "Tipo de Providencia",
    max: 128,
    optional: true
  },
  fecha_providencia: {
    type: Date,
    label: "Fecha de Providencia",
    optional: true
  },
  magistrado_ponente: {
    type: String,
    label: "Magistrado Ponente",
    optional: true
  },
  sentido_fallo: {
    type: String,
    label: "Sentido del Fallo",
    optional: true
  }


});

*/

Sentencias.attachSchema( SentenciasSchema );

Sentencias.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  remove: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
