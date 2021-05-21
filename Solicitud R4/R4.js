/*Declaro a la funcion como asíncrona. Ya que debo esperar la respuesta de la API antes de ejecutar el resto del código*/

async function generarTabla() {
  /*Esta constante games espera recibir los datos del fetch*/
  const games = await fetch(
    "https://api.rawg.io/api/games?key=9e9ca1c80d974269a87013f79911dcee"
  )
    /*Aqui la API devuelve los datos en formato Json y debo parsealos para convertilo en objeto*/
    .then((respuesta) => respuesta.json())
    /*Capturo la respuesta parseada del .then anterior y extraigo la prop "results" */
    .then((res) => {
      return res.results;
    });

  /*Traigo la tabla del HTML por el id para luego completarla con los datos recibidos de la API*/
  var tabla = document.getElementById("Tabla");
  games.forEach((elemento) => {
    var fila = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    cell1.appendChild(document.createTextNode(elemento.name));
    cell2.appendChild(document.createTextNode(elemento.released));
    cell3.appendChild(document.createTextNode(elemento.rating));
    cell4.appendChild(document.createTextNode("Loren impsum"));
    fila.appendChild(cell1);
    fila.appendChild(cell2);
    fila.appendChild(cell3);
    fila.appendChild(cell4);
    tabla.appendChild(fila);
  });

  /*Con esta propiedad, desactivamos el botón para no poder volver a crear una duplicada*/
  var boton = document.getElementById("botonTabla");
  boton.setAttribute("disabled", true);
}
