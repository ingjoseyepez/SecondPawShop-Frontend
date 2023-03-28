//Clase para los articulos del sistema.
class Articulo {
    constructor(nombre, categoria, descripcion, cantidad, precio, imagenes) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
      this.imagenes = imagenes;
    }
  }
//Funciones generales para la creación de nuevos prodcutos
function isLocalStorageAvailable() {
  return localStorage.getItem("newProducts") !== null;
}

function getNewProducts (){
  if(isLocalStorageAvailable()){

    let newProducts = JSON.parse(localStorage.getItem('newProducts'));
    let newsProducts = [];

    for (i = 0; i < newProducts.length;i++){
      newsProducts.push(JSON.parse(newProducts[i]));
    }

    return newsProducts;
  }else{
    return [];
  }

 
}

function setNewProducts(newsProducts){

  let newProducts = [];

  for(i = 0; i < newsProducts.length; i++){
    newProducts.push(JSON.stringify(newsProducts[i]));
  }
  
  localStorage.setItem('newProducts', JSON.stringify(newProducts));

}

if (document.querySelector('body').id === 'bodyUser-NewProduct'){
  //Banderas
  console.log("Hola estoy en la pag user de new product");
  console.log(getNewProducts());

  //Declaracion de variables utilizadas para la pag
  let newProducts  = getNewProducts();
  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
    if (validarFormulario()){
      takesDatesFromForm();
      alert("¡El producto se envío a aprobación!");
      resetForm();
    }else {
      alert("Algún dato ingresado no es valido, vuelva a intentarlo");
      resetForm();
    }
  });

  //Funciones utilizadas para la página de newProduct
  function validarTexto(texto) {
    const regex = /^[a-zA-Z\s,.]+$/; // Expresión regular que permite letras mayúsculas y minúsculas, espacios en blanco y ".", "."
    return regex.test(texto);
  }
  function validateNumber(valor) {
    valor = parseInt(valor)
    if(Number.isInteger(valor) && valor >= 1) {
      return true;
    }
    return false;
  }

  function validarFormulario(){
    if(validarTexto(formulario.elements['nombre-articulo'].value) && validarTexto(formulario.elements['descripcion-producto'].value) 
    && validateNumber(formulario.elements['cantidad'].value) && validateNumber(formulario.elements['precio'].value)){
      return true;
    }else{
      return false;
    }
  }  

  //Función propias para la pag de User-NewProduct;
  function resetForm(){
    formulario.elements['nombre-articulo'].value = "";
    formulario.elements['categoria'].value = "";
    formulario.elements['descripcion-producto'].value ="";
    formulario.elements['cantidad'].value = "";
    formulario.elements['precio'].value ="";
    formulario.elements['imagenes'].value= "";
  }

  function takesDatesFromForm (){
    const nombre = formulario.elements['nombre-articulo'].value;
    const categoria = formulario.elements['categoria'].value;
    const descripcion = formulario.elements['descripcion-producto'].value;
    const cantidad = formulario.elements['cantidad'].value;
    const precio = formulario.elements['precio'].value;
    const imagenes = formulario.elements['imagenes'].value;
  
    const articulo = new Articulo(nombre, categoria, descripcion, cantidad,precio, imagenes);

    if (newProducts == null){
      newProducts = [articulo];
    }else{
      newProducts.push(articulo);
    }

    setNewProducts(newProducts);
  }

}else if (document.querySelector('body').id === 'bodyAdmin-NewProduct'){
    //Bandera
    console.log("Hola estoy en adm new producto");
    console.log(getNewProducts());

    //Declaración de variables
    let newProducts  = getNewProducts();

    for(i = 0; i < newProducts.length; i++){
      agregarCartaDeArticulo(newProducts[i]);
    }

    function agregarCartaDeArticulo(articulo) {
      // Creamos un elemento div con la clase "card"
      const card = document.createElement('div');
      card.classList.add('card');
    
      // Creamos un elemento div con la clase "card__image" para mostrar la imagen del artículo
      const cardImage = document.createElement('div');
      cardImage.classList.add('card__image');
    
      // Creamos un elemento img dentro de "card__image" para mostrar la imagen del artículo
      const image = document.createElement('img');
      image.setAttribute('src', articulo.imagenes);
      image.setAttribute('alt', `Imagen de ${articulo.nombre}`);
      cardImage.appendChild(image);
    
      // Creamos un elemento div con la clase "card__info" para mostrar la información del artículo
      const cardInfo = document.createElement('div');
      cardInfo.classList.add('card__info');
    
      // Creamos un elemento h2 dentro de "card__info" para mostrar el título del artículo
      const title = document.createElement('h2');
      title.classList.add('card__title');
      title.textContent = articulo.nombre;
      cardInfo.appendChild(title);
    
      // Creamos un elemento p dentro de "card__info" para mostrar la categoría del artículo
      const category = document.createElement('p');
      category.classList.add('card__category');
      category.innerHTML = `<strong>Categoría:</strong> ${articulo.categoria}`;
      cardInfo.appendChild(category);
    
      // Creamos un elemento p dentro de "card__info" para mostrar la descripción del artículo
      const description = document.createElement('p');
      description.classList.add('card__description');
      description.innerHTML = `<strong>Descripción:</strong> ${articulo.descripcion}`;
      cardInfo.appendChild(description);
    
      // Creamos un elemento p dentro de "card__info" para mostrar la cantidad del artículo
      const quantity = document.createElement('p');
      quantity.classList.add('card__quantity');
      quantity.innerHTML = `<strong>Cantidad:</strong> ${articulo.cantidad}`;
      cardInfo.appendChild(quantity);

      const precio = document.createElement('p');
      precio.classList.add('card__quantity');
      precio.innerHTML = `<strong>Precio:</strong> ${articulo.precio}`;
      cardInfo.appendChild(precio);
    
    
      // Creamos un elemento div con la clase "card__buttons" que contendrá los botones de aceptar y rechazar
      const cardButtons = document.createElement('div');
      cardButtons.classList.add('card__buttons');
    
      // Creamos un elemento button dentro de "card__buttons" para aceptar el artículo
      const acceptButton = document.createElement('button');
      acceptButton.classList.add('card__accept');
      acceptButton.textContent = 'Aceptar';
      cardButtons.appendChild(acceptButton);
    
      // Creamos un elemento button dentro de "card__buttons" para rechazar el artículo
      const rejectButton = document.createElement('button');
      rejectButton.classList.add('card__reject');
      rejectButton.textContent = 'Rechazar';
      cardButtons.appendChild(rejectButton);
    
      // Añadimos todos los elementos creados al elemento "card"
      card.appendChild(cardImage);
      card.appendChild(cardInfo);
      card.appendChild(cardButtons);
    
      // Añadimos el elemento "card" al HTML
      const contenedorDeCartas = document.querySelector('.admin-newProduct');
      contenedorDeCartas.appendChild(card);

    }

}
  
  
