const btnCart = document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

let allProducts = [];

let valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');



const productList = document.querySelector('.container-items');

productList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            tittle: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };
        //recorrre el arreglo
        const exist = allProducts.some(product => product.tittle === infoProduct.tittle);
        //aca hacemos que no se repitran los productos
        if (exist) {
            const products = allProducts.map(product => {
                if (product.tittle === infoProduct.tittle) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });

            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }
        showHTML();
    }
});
//evento para limpiar carrito
rowProduct.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const tittle = product.querySelector('p').textContent
        allProducts = allProducts.filter(
            product => product.tittle !== tittle
        );
        showHTML();
    }
})
//funcion mostrar html
const showHTML = () => {


    if (!allProducts.length) {
        containerCartProducts.innerHTML = `
        <p class="cart-empty">El carrito esta vacio :c</p>
        `
    }

    var p = [
        {
            nombre: "Camisa playera",
            precio: "$20",
            cantidad: 1
        },
        {
            nombre: "camisa playa",
            precio: "20",
            cantidad: 1
        },
        {
            nombre: "saco",
            precio: "$50",
            cantidad: 1
        },
        {
            nombre: "impermeable",
            precio: "$90",
            cantidad: 1
        },
        {
            nombre: "gafas gato",
            precio: "$50",
            cantidad: 1
        },
        {
            nombre: "juguete perro",
            precio: "$50",
            cantidad: 1
        },
        {
            nombre: "pastilla antipulgas",
            precio: "$50",
            cantidad: 1
        },
        {
            nombre: "Chalecos Hellstyle",
            precio: "$50",
            cantidad: 1
        },
        {
            nombre: "Disfraz",
            precio: "$50",
            cantidad: 1
        },
        {
            nombre: "Collar cuero",
            precio: "$50",
            cantidad: 1
        }
    ]


    //limpiar html

    rowProduct.innerHTML = " ";

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product')
        containerProduct.innerHTML = `
                     <div class="info-cart-product">
                            <span class="cantidad-producto-carrito">${product.quantity}</span>
                            <p class="titulo-producto-carrito">${product.tittle}</p>
                            <span class="precio-producto-carrito">${product.price}</span>
                        </div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="icon-close"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>

                        <button>ir al carrito</button>
        `;
        rowProduct.append(containerProduct);
        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`
    countProducts.innerText = totalOfProducts;
};