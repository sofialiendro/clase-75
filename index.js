//////////// Promesas 

// const chicoDeRastasMePasoABuscarElSabado = true
// const nuevaPromesa = new Promise((resolve, reject) => {
//   if (chicoDeRastasMePasoABuscarElSabado === true) {
//     resolve("Me quede fumando hierbas y escuchando Bob Marley")
//   }
//   else {
//     reject("Me quede en casa limpiandome las uñas")
//   }
// })

// // console.log(nuevaPromesa)

// nuevaPromesa.then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })





//////////////  API MARVEL 

// fetch('https://gateway.marvel.com/v1/public/comics?apikey=a062a92deb46293f30880acc9f6bdac1')
// .then((res) => {
//   return res.json()
// })
// .then((data) => {
//   console.log(data)
  
// })


///////////

let comics = []
console.log(1)

fetch('https://gateway.marvel.com/v1/public/comics?apikey=a062a92deb46293f30880acc9f6bdac1')
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data)
  comics = data.data.results
  const seccion = document.querySelector("section")

  comics.map((comic) => {
    seccion.innerHTML += `<p>${comic.title}</p>`
  })
  
})
.catch((err) => {
  console.log(err)
  seccion.textContent = "No pudimos encontrar tu busqueda"
}) // el err por si la API falla, pero no suelen fallar











///////////// sintaxis abreviada de funciones flecha

// si la funcion tiene una sola linea, 
// las llaves y la palabra "return" son optativas
// const sumar = (sum1, sum2) => sum1 + sum2

// const sumar = (sum1, sum2) => {
//   return sum1 + sum2
// }

// si hay un solo parametro (solo uno), los parentesis son optativos
// const convertirPrimerLetraAMayuscula = nombre => {
//   const primeraLetra = nombre[0]
//   const restoDelNombre = nombre.splice(1)
//   return primeraLetra.toUpperCase() + restoDelNombre
// }


// sirve para hacer que el fetch nos quede mas limpio:
// fetch("hola")
// .then(res => res.json())
// .then(data => {
//   console.log(data)
// })




////////////////  METODOS HTTP

// hyper text transfer protocol

// GET   --> recibir informacion
// POST   --> enviar informacion
// PUT  ---> modificar informacion
// PATCH  ---> modificar informacion
// DELETE  ---> eliminar informacion


// Los metodos tiene un STATUS HTTP CODE (siempre tienen 3 cifras), como por ej: 

 // 200 --> OK 

 // 404 --> recurso no encontrado
 // 500 --> server error 

//CODIGOS HTTP:
//  Respuestas informativas (100 del 199),
//  Respuestas satisfactorias (200–299),
//  Redirecciones (300–399),
//  Errores de los clientes (400–499),
//  y errores de los servidores (500–599).



 
 // colecciones ---> recursos

 // comics ---> comic 
 // personajes ---> personaje 
// URL 
