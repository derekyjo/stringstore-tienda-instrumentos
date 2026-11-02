// Carrito de compras
let cart = [];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter__btn');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Filtros activos
let currentCategory = 'all';
let currentSearch = '';

// Inicializar la aplicación
function init() {
    // Cargar carrito desde localStorage
    loadCart();
    
    // Renderizar productos
    renderProducts();
    
    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderProducts();
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });
    
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    checkoutBtn.addEventListener('click', checkout);
}

// Renderizar productos
function renderProducts() {
    // Filtrar productos
    let filteredProducts = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
    
    // Limpiar grid
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1; padding: 2rem;">No se encontraron productos</p>';
        return;
    }
    
    // Renderizar cada producto
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product__card';
        productCard.innerHTML = `
            <div class="product__image-container">
                <img src="${product.image}" alt="${product.name}" class="product__image" onerror="this.src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500'">
            </div>
            <div class="product__info">
                <span class="product__category">${product.category}</span>
                <h3 class="product__name">${product.name}</h3>
                <p class="product__price">${formatPrice(product.price)}</p>
                <button class="product__btn" onclick="addToCart(${product.id}, event)">
                    <i class="fas fa-shopping-bag"></i>
                    Añadir al carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Añadir al carrito
function addToCart(productId, event) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Verificar si ya existe en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Mostrar feedback visual
    const btn = event.currentTarget || event.target.closest('button');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Añadido!';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }, 1200);
}

// Actualizar UI del carrito
function updateCartUI() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Renderizar items del carrito
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart__empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartTotal.textContent = formatPrice(0);
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart__item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart__item-image" onerror="this.src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500'">
            <div class="cart__item-info">
                <h4 class="cart__item-name">${item.name}</h4>
                <p class="cart__item-price">${formatPrice(item.price)}</p>
                <div class="cart__item-controls">
                    <div class="cart__item-quantity">
                        <button class="cart__item-qty-btn" onclick="decreaseQuantity(${item.id})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="cart__item-qty">${item.quantity}</span>
                        <button class="cart__item-qty-btn" onclick="increaseQuantity(${item.id})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="cart__item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Aumentar cantidad
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// Disminuir cantidad
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Abrir carrito
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar carrito
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`¡Gracias por tu compra!\nTotal: ${formatPrice(total)}\n\nPronto te contactaremos para confirmar tu pedido.`);
    
    // Limpiar carrito
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('stringstore_cart', JSON.stringify(cart));
}

// Cargar carrito desde localStorage
function loadCart() {
    const savedCart = localStorage.getItem('stringstore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Inicializar app cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
