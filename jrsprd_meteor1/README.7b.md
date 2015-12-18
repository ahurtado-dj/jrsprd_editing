###... TODO: unir con el otro extracto
solr start
solr create -c idx_jrsprd -d basic_configs
# sobreescribiro archivos de configuracion
# la configuracion base se toma del ejemplo de indexacion de documetnos que tenga definiciones de español
# adicion del schema
#solr stop -p 8983
#solr status

#probar conectividad con la db
# ej; usando robomongo (instalar)
# modificar el puerto de conexion a mongo; para saber lso datos de conexion, subir meteor y en otra consola ejecutar: +
meteor mongo -U

# ejecutar indexacion: (full import) / mediante browser
# - entrar a solr: localhost:8983/solr/
# - opcion core_selector:seleccionar index
# - aparece la pantalla dataimport.
# - seleccionar el comando full-import
# comando corto: http://localhost:8983/solr/idx_jrsprd/dataimport?command=full-import

# ir a la consola de solr y verificar los documentos indexados
http://localhost:8983/solr (seleccionar el core creado)

# buscar un ejemplo
http://localhost:8983/solr/idx_jrsprd/select?q=*:*
http://localhost:8983/solr/idx_jrsprd/select?q=text:carro


#clientes de buisqueda solr
http://embed.plnkr.co/SdpbnQ/
https://github.com/evolvingweb/ajax-solr

# crear servidor con node para buscador ajax-solr
isntalar node / adicionarlo a path si es necesario
npm init
npm install express --save
node app.js

ir a http://localhost:3001/examples/reuters/ para realizar las busquedas


# alternativas
- usar node-httpserver
    npm install http-server -g
    http-server -p 3002
- usar nginx
- usar serve-static
  https://github.com/expressjs/serve-static
