-------------------------------
APACHE SOLR
-------------------------------
# integracion de la prueba - SOLR
solr es usado dado que por extensibilidad, es uno de loas frameworks preferidos
para las aplciaciones basadas en hadoop y hdfs; 
esto posteriormente nos permite integrarlo con una plaaforma de analytics

# AQUIRE DATA
- se hace a traves de una aplicacion (p ej meteor)
- se almacenan los datos en este caso en una db mongo

# SUBIR SOLR

	cd C:\.work\solr-5.4.0
	cd bin
	solr start
	
	# status
	solr status
	
#crear core (configuracion de solr, usar el esqueleto basico o sin parametro): similar a http://localhost:8983/solr/admin/cores?action=CREATE&name=dc_idx_jurisprudencia&instanceDir=dc_idx_jurisprudencia
	solr create -c idx_jrsprd
	# o bien adicionando el puerto y la configuracion de refeerencia: solr create -p 8983 -c idx_jrsprd -d basic_configs
	# crear los archvos de configuracion en $SOLR_HOME\server\solr\idx_jrsprd


# LOAD DATA
- se puede hacer 
(1) con mongo, usando replicaset+mongoconnector: permite redundancia de mongo a otros sistemas (http://geniuscarrier.com/real-time-search-with-mongodb-and-solr/)
	probema: lo hace siempre
(2)desde solr indicando uan estrategia de importacion, es decir, conectandose a una db mediante jdbc 
	refeerencias: 
		- https://chemifinder.wordpress.com/2015/08/19/integrating-mongodb-and-solr-part-3-integrating-mongodb-and-solr/
		- https://github.com/james75/SolrMongoImporter)
		- http://stackoverflow.com/questions/21450555/steps-to-connect-mongodb-and-solr-using-dataimporthandler 
		- https://www.packtpub.com/books/content/apache-solr-and-big-data-%E2%80%93-integration-mongodb 
		- http://www.techwhisky.com/knowledgepoint/apache-solr-configuring-data-import-handler-with-jdbc-and-indexing-data-from-database/
	- en el directorio solr/dist
		- descargar driver (2.14) de https://github.com/mongodb/mongo-java-driver/releases
		- descargar mongo.importer  (1.0.0)
	- dentro del archivo de configuracion del core creado adicionar
	
  <!-- 1: IDX :: ADICION DE LIBRERIASS -->
  <lib dir="${solr.install.dir:../../../..}/dist/" regex="solr-dataimporthandler-.*\.jar" />
  <lib dir="${solr.install.dir:../../../..}/dist/" regex="solr-mongo-importer-1.0.0.jar" />
  <lib dir="${solr.install.dir:../../../..}/dist/" regex="mongo-java-driver-2.14.0.jar" />

  <!-- 2: IDX :: DECLARACION DATAIMPORT, para definir el cargue tipo batch desde la db -->
  <requestHandler name="/dataimport" class="solr.DataImportHandler">
    <lst name="defaults">
      <str name="config">solr-data-config.xml</str>
    </lst>
  </requestHandler>

	- adicionar el archivo solr-data-config.xml al lado de solrconfig.xml
		con la siguiente informacion
		
<dataConfig>
	<dataSource type="MongoDataSource" name="mymongodb" database="meteor"  /> 
	<document name="data">
	<!-- if query="" then it imports everything -->
    <entity name="fichas"
              processor="MongoEntityProcessor"
              query=""
              collection="fichas"   
              datasource="mymongodb"
              transformer="MongoMapperTransformer">     
			  
              <field column="id"   name="id"   mongoField="_id" />               
              <field column="procesocaso_rj_nro" name="procesocaso_rj_nro" mongoField="procesocaso_rj_nro"/>                            
              <field column="jurisdiccion" name="jurisdiccion" mongoField="jurisdiccion"/>                            
              <field column="fecha_providencia" name="fecha_providencia" mongoField="fecha_providencia"/>                            
              <field column="magistrado_ponente" name="magistrado_ponente" mongoField="magistrado_ponente"/>                            
              <field column="sentido_fallo" name="sentido_fallo" mongoField="sentido_fallo"/>                            
              <field column="hechos_relevantes" name="hechos_relevantes" mongoField="hechos_relevantes"/>                            

              <entity name="ciudad"
                    processor="MongoEntityProcessor"
                    query="{'_id':'${fichas.id}'}"
                    collection="ciudad"   
                    datasource="mymongodb"
                    transformer="MongoMapperTransformer">                                             
                    <field column="nombre" name="ciudad" mongoField="ciudad_ref"/>                            
              </entity>
       </entity> 
   </document> 
</dataConfig>

	- adicionar el archivo schema.xml con la definicion de la entidad indexada en solr
  <!-- 0: IDX :: FIELDS-SOLR, para definir la entidad indexada en solr -->
  
  
	
	
	
# configurar solr para INDEXING
 <requestHandler name="/update" class="solr.UpdateRequestHandler"/>

	
	
(3) o bien usando los servicios de solr para indexar

	# conectar los datos servicio SolrCellUpdate


----------------------------------------
SUBIR APLICACION
----------------------------------------




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
