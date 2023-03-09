class Articulo {
    constructor(nombre, categoria, descripcion, cantidad, imagenes) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.imagenes = imagenes;
    }
  }
  
  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
  
    const nombre = formulario.elements['nombre-articulo'].value;
    const categoria = formulario.elements['categoria'].value;
    const descripcion = formulario.elements['descripcion-producto'].value;
    const cantidad = formulario.elements['cantidad'].value;
    const imagenes = formulario.elements['imagenes'].files;
  
    const articulo = new Articulo(nombre, categoria, descripcion, cantidad, imagenes);
    localStorage.setItem('newProduct', JSON.stringify(articulo));
    console.log(localStorage.getItem('newProduct'));
  });

