-------------------------------
SCAFFOLD
-------------------------------

meteor create jrsprd  # crear la app
meteor add twbs:bootstrap # layout
meteor add underscore
meteor add iron:router  # mecanismo de routing
meteor add sacha:spin   # loader spinner
meteor add ian:accounts-ui-bootstrap-3
meteor add accounts-password

meteor remove autopublish
meteor remove insecure

# add autoform libs

meteor add aldeed:autoform
meteor add aldeed:collection2
meteor add reactive-dict

# otros paquetes para cargar dependencias

# node/bower directamente
# meteor add meteorhacks:npm
# o crear un wrapper de librerias javascript
# meteor create --package camunda:camunda-bpm-sdk-js
# meteor add camunda:camunda-bpm-sdk-js

# agregar paquete con dependencias de node (no es necesario)
cd ..
git clone https://github.com/ahurtado-dj/camunda-bpm-sdk-js.git
##meteor create --package camunda:camunda-bpm-sdk-js
##meteor add camunda:camunda-bpm-sdk-js




meteor reset # limpiar la db de desarrollo
meteor mongo # cliente mongo-consola

#minimongo
meteor #iniciar la app

===================================
CREAR APLICACION CON: METEOR-KITCHEN GENERATOR
===================================
- descargar de http://www.meteorkitchen.com/getting_started (0.9.54)
- validar que meteor se encuentra en el path (C:\Users\andres\AppData\Local\.meteor\)
  - meterlo en el mismo lugar donde esta declarado meteor: path de usuario o path de sistema
- ejecutar:
    cd ..
    meteor-kitchen jrsprd_meteor1\kitchen.jrsprd_meteor2.json jrsprd_meteor2
    cd jrsprd_meteor2
    meteor

- KNOWN ERRORS
  - styles.less:1: Unknown import => see https://github.com/perak/kitchen-site/issues/169



================================
ANEXO: IRON-METEOR GENERATOR
================================
# helper para la generacion de elementos de meteor
npm install -g iron-meteor
iron create jrsprd
iron run
(controller: llaman a un router de pagina)

iron add aldeed:autoform
iron add aldeed:collection2
iron add twbs:bootstrap
iron add aldeed:delete-button

iron list #nostrar los paquetes cargados
iron remove autopublish
iron remove insecure

iron g:collection fichas
iron g:publish    fichas
iron g:template   fichas/fichas_list
iron g:route      '/fichas'
iron g:template   fichas/ficha_create
iron g:route      '/fichas/create'
iron g:route      '/issues/:_id/edit'
iron g:controller Fichas

iron g:collection sentencias
iron g:publish    sentencias
iron g:template   sentencias/sentencias_list
iron g:route      '/sentencias'
iron g:template   sentencias/sentencia_create
iron g:route      '/sentencias/create'
iron g:route      '/sentencias/:_id/edit'
iron g:controller Sentencias



-------------------------------
REFERENCIAS
-------------------------------
- https://themeteorchef.com/recipes/building-complex-forms/#tmc-getting-started
- https://github.com/meteoris/meteoris
- https://www.discovermeteor.com/
- https://github.com/jtolla/meteor-admin-lte
- http://meteor-boiler.meteor.com/blank
- https://medium.com/meteor-js/how-to-build-web-apps-ultra-fast-with-meteor-iron-scaffolding-and-automatic-form-generation-11734eda8e67#.hh6uy2shp
- https://scotch.io/tutorials/how-to-speed-up-meteor-development-with-scaffolding-and-automatic-form-generation
- meteor kitchen (generate app)

