Fichas = new Mongo.Collection('fichas');

var FichasSchema = new SimpleSchema({
  // SENTENCIA.PROCESO -------------------------------------
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
  },



  // FICHA -------------------------------------

  hechos_relevantes: {
    type: String,
    label: "Hechos relevantes",
    max: 2000,
    optional: true
  }
});

/*
var FichasSchema = new SimpleSchema({
  sentencia_ref: {
    type: String,
    label: "Sentencia (Ref)",
  },
  // }, hechos_y_problema_juridico: { // evento_origen (QUE/COMO/CUANDO/DONDE)
  hechos_relevantes: {
    type: String,
    label: "Hechos relevantes",
    max: 2000,
    optional: true
  },
  problema_juridico: {
    type: String,
    label: "Problema juridico",
    max: 2000,
    optional: true
  },
  // }, fundamentos_y_soportes: {
  fundamento_legal_demanda: {
    type: String,
    label: "Fundamento legal demanda",
    max: 2000,
    optional: true
  },
  fundamento_legal_defensa: {
    type: String,
    label: "Fundamento legal defensa",
    max: 2000,
    optional: true
  },
  jurisprudencia_apoya_decision: {
    type: String,
    label: "Jurisprudencia que apoya la decision",
    max: 2000,
    optional: true
  },

});
*/


Fichas.attachSchema( FichasSchema );


Fichas.allow({
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
