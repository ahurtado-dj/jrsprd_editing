

========================================
APLICACION 01: JURISPRUDENCIA (mean.js)
========================================

como administrador
	bower cache clean
	npm cache clean

windows
# install node 5.1
# install git
# add to path
linux

#install node 0.12.7
wget https://nodejs.org/download/release/v0.12.8/node-v0.12.8-linux-x64.tar.gz
gunzip node-v0.12.8-linux-x64.tar.gz
tar -xvf node-v0.12.8-linux-x64.tar
#install git (sudo yum install git-all)

# add to path
sudo vi /etc/profile
export PATH=/.work/node-v0.12.8-linux-x64:$PATH
source /etc/profile

fedora 23
user: root
pwd: admin


# actualizar npm
npm update -g npm

#### instalar paquetes de node
npm install -g bower
npm install -g grunt-cli
npm install -g yo
npm install -g gulp

# instalar generador de apoyo
npm install -g generator-meanjs
npm install -g generator-meanjs-table (para usar angular-formly)

# crear proyectos-scaffold de ejemplo con este generador
cd /.apps
yo meanjs (no funciona windows)

git clone https://github.com/meanjs/mean.git jrsprd2

npm install
bower install





dependencias adicionales
* bower install api-check angular-formly angular-formly-templates-bootstrap --save

* "ng-table": "~0.3.3"

alternativas de paginacion
* http://ui-grid.info











instalar ruby & sass
-> install ruby 2.2.3
-> npm install grunt-contrib-sass --save-dev
-> adicionar al path


-> subir app
grunt --force

-> sube en el 3000
crear usuario admin
passwword: Welcome10@




===========================================
REFERENCIAS PLANTILLAS
===========================================

* Lumix (http://ui.lumapps.com/), angular-formly-templates-lumx
* admin-lte
* sb admin
* Bootstrap 3




===========================================
REFERENCIAS - MEAN.JS
===========================================
* tutorial de mean (con paginacion1): http://code.ciphertrick.com/2015/07/10/mean-tutorial-build-front-end-angularjs/
* tutorial de mean (con paginacion2): http://code.ciphertrick.com/2015/08/31/server-side-pagination-in-angularjs/
* tutorial de mean (con paginacion3):http://www.ameanmagazine.com/2014/08/top-5-angularjs-pagination-demos-2014.html


===========================================
REFERENCIAS - AUTMATIC FORM GENERATION
===========================================
* formly (meanjs-angular) 	[http://angular-formly.com/] (integtrado apra mean.js se eintegra con los schemas)
* tutorial formly1: https://scotch.io/tutorials/easy-angularjs-forms-with-angular-formly
* forms-angular 						[http://www.forms-angular.org/#/]
* angular schemaform (hace uso de json schema):  recomendado por inspinia (solo genera ls formas) https://github.com/Textalk/angular-schema-form (http://schemaform.io/) ... lo integran con meteor....
* meanjs-table: tablas y formas (lasta blas generan errores de dependencias): http://www.jlmonteagudo.com/2015/03/aumenta-tu-productividad-con-generator-meanjs-table-parte-12/