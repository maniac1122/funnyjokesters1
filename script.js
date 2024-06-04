const products = [
    { id: 1, name: 'FunnyJokesters Stuff You Havent Seen Before DVD', price: 19.99, image: 'shirt.jpg' },
    { id: 2, name: 'FunnyJokesters.com Custom Tote Bag', price: 14.99, image: 'hat.jpg' },
    { id: 3, name: 'FunnyJokesters.com Custom T-Shirt', price: 9.99, image: 'socks.jpg' }
];

function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}

displayProducts();
