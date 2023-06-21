const baseEndpoint = 'https://api.github.com'; //Agrega la ruta de la API a una variable 
const usersEndpoint = `${baseEndpoint}/users`; //mediante una plantilla modifica la api para que sin importar cual sea, siempre apunte al endpoint users
const $n = document.querySelector('name'); //toma del DOM el elemento con la clase name aunque falta el . en el parámetro
const $b = document.querySelector('#blog'); // toma del DOM el elemento con el id blog
const $l = document.querySelector('.location'); //toma del DOM el elemento con clase location

function displayUser(username) { //crea una funcion que toma como parámetro el username
  $n.textContent = 'cargando...'; //a la variable $n le asigna el valor "cargando...""
  const response = await fetch(`${usersEndpoint}/${username}`); // la constante response inicializa y guarda la respuesta de la conexión a la API
  console.log(data); //Imprime el contenido de data, aunque no está definida dicha variable
  $n.textContent = '${data.name}';//mediante una plantilla asigna el valor contenido en data a la variable $n
  $b.textContent = '${data.blog}';//mediante una plantilla asigna el valor contenido en data a la variable $b
  $l.textContent = '${data.location}';//mediante una plantilla asigna el valor contenido en data a la variable $l
}

function handleError(err) { //crea una función que maneje el error que toma como parámetro dicho error
  console.log('OH NO!');//despliega el texto  OH NO! en la consola cuando se llama a la función
  console.log(err); //Y muestra el contenido de err en la consola
  n.textContent = `Algo salió mal: ${err}` //el contenido de la variable n se le asigna el texto `Algo salió mal: ${err}` el cual despliegará el error mediante la plantilla; aunque la variable n no está definida como tal. Tal vez quiso poner $n
}

displayUser('stolinski').catch(handleError);//Se llama a la función displayUser con el valor stolinski, y si hay algún error, catch se encargará de invocar a la función handleError.