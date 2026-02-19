let currentOrder = [];
const DELIVERY_FEE = 150;

document.addEventListener('DOMContentLoaded', async () => {
    await loadMenuForOrder();
    setupEventListeners();
});

async function loadMenuForOrder() {
    const items = await loadMenuItems();
    
    // Load boxes
    const boxes = items.filter(item => item.category === 'box');
    displayItems('boxes-container', boxes);
    
    // Load supplements
    const supplements = items.filter(item => item.category === 'supplement');
    displayItems('supplements-container', supplements);
    
    // Load drinks
    const drinks = items.filter(item => item.category === 'drink');
    displayItems('drinks-container', drinks);
}

function displayItems(containerId, items) {
    const container = document.getElementById(containerId);
    const lang = currentLanguage;
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item-card';
        itemDiv.innerHTML = `
            <div class="item-info">
                <h4>${lang === 'fr' ? item.name_fr : item.name_ar}</h4>
                ${item.calories ? `<p class="calories">${item.calories} KCal</p>` : ''}
                <p class="price">${item.price} DA</p>
            </div>
            <button onclick="addToOrder(${item.id}, '${lang === 'fr' ? item.name_fr : item.name_ar}', ${item.price})" class="add-btn">
                ${translations[lang]['add-to-order']}
            </button>
        `;
        container.appendChild(itemDiv);
    });
}

function addToOrder(id, name, price) {
    const existingItem = currentOrder.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        currentOrder.push({
            id,
            name,
            price,
            quantity: 1
        });
    }
    
    updateOrderSummary();
}

function removeFromOrder(id) {
    currentOrder = currentOrder.filter(item => item.id !== id);
    updateOrderSummary();
}

function updateQuantity(id, change) {
    const item = currentOrder.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromOrder(id);
        } else {
            updateOrderSummary();
        }
    }
}

function updateOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    let subtotal = 0;
    let orderHTML = '';
    
    currentOrder.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        orderHTML += `
            <div class="order-item">
                <div class="item-details">
                    <span class="item-name">${item.name}</span>
                    <div class="item-quantity">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <span class="item-price">${itemTotal} DA</span>
                <button onclick="removeFromOrder(${item.id})" class="remove-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    });
    
    if (currentOrder.length === 0) {
        orderHTML = '<p class="empty-order">Votre commande est vide</p>';
    }
    
    orderItemsContainer.innerHTML = orderHTML;
    subtotalElement.textContent = `${subtotal} DA`;
    
    const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);
    totalElement.textContent = `${total} DA`;
}

async function placeOrder() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('deliveryAddress').value;
    
    if (!name || !phone) {
        alert('Veuillez remplir vos informations');
        return;
    }
    
    if (currentOrder.length === 0) {
        alert('Veuillez ajouter des articles à votre commande');
        return;
    }
    
    const subtotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;
    
    const orderData = {
        customer_name: name,
        customer_phone: phone,
        delivery_address: address || 'Jijel',
        items: currentOrder,
        total_amount: total,
        delivery_fee: DELIVERY_FEE,
        language: currentLanguage
    };
    
    const result = await placeOrder(orderData);
    
    if (result.success) {
        showOrderConfirmation(result.order);
        currentOrder = [];
        updateOrderSummary();
        document.getElementById('customerForm').reset();
    } else {
        alert('Erreur lors de la commande. Veuillez réessayer.');
    }
}

function showOrderConfirmation(order) {
    const modal = document.getElementById('orderModal');
    const details = document.getElementById('order-details');
    
    details.innerHTML = `
        <p><strong>Numéro de commande:</strong> #${order.id}</p>
        <p><strong>Total:</strong> ${order.total_amount} DA</p>
        <p><strong>Nous vous contacterons au:</strong> ${order.customer_phone}</p>
    `;
    
    modal.style.display = 'block';
    
    // Close modal when clicking on X or outside
    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

function setupEventListeners() {
    // Phone number validation
    document.getElementById('customerPhone').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}
