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


if (document.querySelector('body').id === 'bodyUser-NewProduct'){
    console.log(JSON.parse(localStorage.getItem('newProducts')));
    console.log("Hola estoy en la pag user de new product");
    
    //let newProducts = [];
    newProducts  = localStorage.getItem('newProducts');
    newProducts = JSON.parse(newProducts);

    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
    
      const nombre = formulario.elements['nombre-articulo'].value;
      const categoria = formulario.elements['categoria'].value;
      const descripcion = formulario.elements['descripcion-producto'].value;
      const cantidad = formulario.elements['cantidad'].value;
      const precio = formulario.elements['precio'].value;
      const imagenes = formulario.elements['imagenes'].value;
    
      const articulo = new Articulo(nombre, categoria, descripcion, cantidad,precio, imagenes);
      console.log(articulo);
      console.log(typeof articulo +"   "+ typeof(newProducts));
      console.log(newProducts);

      if (newProducts == null){

        newProducts = [JSON.stringify(articulo)];

      }else{
        newProducts.push(JSON.stringify(articulo));
      }

      localStorage.setItem('newProducts', JSON.stringify(newProducts));

      console.log(JSON.parse(localStorage.getItem('newProducts')));

    });



}else if (document.querySelector('body').id === 'bodyAdmin-NewProduct'){
    console.log("Hola estoy en adm new producto");
    console.log(JSON.parse(localStorage.getItem('newProducts')));
    //let newProducts = [];
    newProducts  = localStorage.getItem('newProducts');
    newProducts = JSON.parse(newProducts);

    for(i = 0; i < newProducts.length; i++){
      console.log(typeof (JSON.parse(newProducts[i])));
      agregarCartaDeArticulo(JSON.parse(newProducts[i]));
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
  
  
