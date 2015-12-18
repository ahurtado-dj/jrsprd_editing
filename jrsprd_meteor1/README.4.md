===================================
APP JURISPRUDENCIA (meteor)
===================================
instalar atom/sublime/visualstudiocode/brackets
instalar meteor
seguir tuttorial: http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping

SCAFFOLD CON METEOR_KiTCHEN
#instalar meteor-kitchen
#adicionarlo al path
# meteor create jrsprd

descargar en c:\.work\meteor-kitchen (Descargar de http://www.meteorkitchen.com)
set PATH=%PATH%;c:\.work\meteor-kitchen\bin\;

# generar scaffold mediante archivo o mediante los ejemplos 
# (instala en c:/users/<user>/.local lave rsion de los compnentes requeridos: meteor mongo)

meteor-kitchen example-invoices.json jrsprd
# o bien: meteor-kitchen --example-admin tmp_kitchen-example-admin

cd ./example-invoices
meteor

# ADICION DE dePENDENCIAS

meteor add aldeed:autoform
meteor add aldeed:collection2

meteor add reactive-dict
meteor add msavin:mongol

meteor add iron:router

meteor remove autopublish

#con bootstrap
meteor add twbs:bootstrap
#meteor add mizzao:bootstrap-3

#con materialdesingn
#meteor add meteoric:autoform-ionic
meteor gildaspk:autoform-materialize




























EXAMPLES

git clone https://github.com/ics-software-engineering/meteor-application-template.git
http://www.meteorkitchen.com/examples

===========================================
REFERENCIAS - METEOR
===========================================
- tutorial inicial http://meteortips.com/first-meteor-tutorial/
- formas   https://themeteorchef.com/recipes/building-complex-forms/
- ejemplo de estructira http://meteortips.com/first-meteor-tutorial/structure/
- plantilla http://ics-software-engineering.github.io/meteor-application-template/

===========================================
REFERENCIAS - FORMAS
===========================================
autoform (integrado para meteor1): https://github.com/aldeed/meteor-autoform 
autoform (integrado para meteor2):http://mycyberacademy.com/client-side-meteor-5-formularios-automaticos-con-autoform/
autoform (integrado para meteor3):https://scotch.io/tutorials/how-to-speed-up-meteor-development-with-scaffolding-and-automatic-form-generation
autoform (integrado para meteor4):https://www.discovermeteor.com/blog/meteor-pattern-two-tiered-methods/

===========================================
REFERENCIAS - SCAFFOLD
===========================================
* - meteor kitchen: genera scaffold
* scaffold meteor: http://generator-invoices.meteor.com/home_private

meteor add urigo:angular2-meteor
meteor remove blaze-html-templates
meteor remove ecmascript
