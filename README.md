# TpGestionDePersonajesDeComics

# Scaffoling
Por cuestiones de organización de código y la certeza de que esta aplicación 
no va a crecer más allá de las consignas
Los componentes se encuentran en la carpeta components, a excepción del navbar en la carpeta shared
El servicio se encuentra en la carpeta services
La interfaz de la entidad de la aplicación se encuentra en la carpeta types

# Componentes
Crear los componentes requeridos por la consigna:

characterList
characterDetail
characterForm
characterCard

Para facilitar las operaciones de ruteo generar el componente navbar

# Rutas
Declarar las rutas solicitadas en la consigna
Confirgurar el navbar para que nos permita navegar entre la lista y el formulario

# Servicio
Implementar los metodos de CRUD con json-server

# @Input y @Output
Configurar los decoradores @Input y @Output 
de los componentes correspondientes 
como dice en la consigna

# La parte sencilla
Los componentes list y card son los mas sencillos,
en el sentido que nada de estos componentes es muy especial.
Se puede decir que la responsabilidad mas compleja de CharacterListComponent
es routear a la vista de CharacterDetailComponent de cada CharacterCardComponent

# La parte compleja
El formulario es lo mas complejo de esta aplicacion.
Al igual que CharacterListComponent, maneja rutas para volver a la lista
Esto no es estrictamente necesario, nos podriamos quedar en la vista del formulario
y seguir agregando Personajes hasta que decidamos ir al lista a visualizarlos
En tal caso debemos incorporar una respuesta visual para el usuario que indique
que agregó exitosamente cada personaje que quiera agregar.