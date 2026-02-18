// Menu items data (in case Supabase fails)
const MENU_ITEMS = {
    boxes: [
        { id: 1, name_fr: 'Riz escalop salad oeuf', name_ar: 'رز إسكالوب سلطة بيض', basePrice: 350, calories: 720 },
        { id: 2, name_fr: 'Pasta escalop salad', name_ar: 'باستا إسكالوب سلطة', basePrice: 400, calories: 750 },
        { id: 3, name_fr: 'Soup citrouille avec toast', name_ar: 'شوربة اليقطين مع توست', basePrice: 450, calories: 500 },
        { id: 4, name_fr: 'Bourgouil au poulet', name_ar: 'برغل بالدجاج', basePrice: 450, calories: 640 },
        { id: 5, name_fr: 'Salad César', name_ar: 'سلطة سيزر', basePrice: 300, calories: 550 },
        { id: 6, name_fr: 'Salad thon oeuf', name_ar: 'سلطة تونة بيض', basePrice: 400, calories: 580 }
    ],
    supplements: [
        { id: 101, name_fr: 'Œuf supplément', name_ar: 'بيضة إضافية', price: 50 },
        { id: 102, name_fr: 'Escalop supplément', name_ar: 'إسكالوب إضافي', price: 50 }
    ],
    drinks: [
        { id: 201, name_fr: 'Jus banane date', name_ar: 'عصير موز تمر', price: 300 },
        { id: 202, name_fr: 'Vishy', name_ar: 'فيشي', price: 70 },
        { id: 203, name_fr: 'Bouteille eau', name_ar: 'معدنية', price: 40 }
    ]
};

let currentOrder = [];
const DELIVERY_FEE = 150;
let currentLanguage = 'fr';

document.addEventListener('DOMContentLoaded', async () => {
    await loadMenuDisplay();
    setupEventListeners();
    loadSavedCart();
    updateCartCount();
});

async function loadMenuDisplay() {
    try {
        // Try to load from Supabase first
        const items = await loadMenuItems();
        if (items && items.length > 0) {
            displayBoxes(items.filter(item => item.category === 'box'));
            displaySupplements(items.filter(item => item.category === 'supplement'));
            displayDrinks(items.filter(item => item.category === 'drink'));
        } else {
            // Fallback to local data
            displayBoxes(MENU_ITEMS.boxes);
            displaySupplements(MENU_ITEMS.supplements);
            displayDrinks(MENU_ITEMS.drinks);
        }
    } catch (error) {
        console.error('Error loading menu, using local data:', error);
        displayBoxes(MENU_ITEMS.boxes);
        displaySupplements(MENU_ITEMS.supplements);
        displayDrinks(MENU_ITEMS.drinks);
    }
}

function displayBoxes(boxes) {
    const container = document.getElementById('boxes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    boxes.forEach(box => {
        const boxCard = document.createElement('div');
        boxCard.className = 'box-card';
        boxCard.innerHTML = `
            <div class="box-header">
                <h4>${currentLanguage === 'fr' ? box.name_fr : box.name_ar}</h4>
                <span class="box-price">${box.basePrice} DA</span>
            </div>
            <div class="box-calories">
                <i class="fas fa-fire"></i> ${box.calories} KCal
            </div>
            <div class="box-supplements">
                <h5>${currentLanguage === 'fr' ? 'Suppléments (+50DA chacun)' : 'الإضافات (+50 دج لكل إضافة)'}</h5>
                <div class="supplement-controls">
                    <div class="supplement-item">
                        <label>${currentLanguage === 'fr' ? 'Œuf' : 'بيض'}</label>
                        <div class="quantity-control">
                            <button onclick="updateBoxSupplement(${box.id}, 'egg', -1)">-</button>
                            <span id="box-${box.id}-egg">0</span>
                            <button onclick="updateBoxSupplement(${box.id}, 'egg', 1)">+</button>
                        </div>
                    </div>
                    <div class="supplement-item">
                        <label>${currentLanguage === 'fr' ? 'Escalop' : 'إسكالوب'}</label>
                        <div class="quantity-control">
                            <button onclick="updateBoxSupplement(${box.id}, 'escalop', -1)">-</button>
                            <span id="box-${box.id}-escalop">0</span>
                            <button onclick="updateBoxSupplement(${box.id}, 'escalop', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="addBoxToOrder(${box.id}, '${currentLanguage === 'fr' ? box.name_fr : box.name_ar}', ${box.basePrice}, ${box.calories})" class="add-box-btn">
                <i class="fas fa-cart-plus"></i> ${currentLanguage === 'fr' ? 'Ajouter au panier' : 'أضف إلى السلة'}
            </button>
        `;
        container.appendChild(boxCard);
    });
}

function displaySupplements(supplements) {
    const container = document.getElementById('supplements-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    supplements.forEach(supp => {
        const suppCard = document.createElement('div');
        suppCard.className = 'menu-item-card';
        suppCard.innerHTML = `
            <div class="item-info">
                <h4>${currentLanguage === 'fr' ? supp.name_fr : supp.name_ar}</h4>
                <p class="price">${supp.price} DA</p>
            </div>
            <div class="quantity-control">
                <button onclick="updateSupplementQuantity(${supp.id}, -1)">-</button>
                <span id="supp-${supp.id}-qty">0</span>
                <button onclick="updateSupplementQuantity(${supp.id}, 1)">+</button>
            </div>
        `;
        container.appendChild(suppCard);
    });
}

function displayDrinks(drinks) {
    const container = document.getElementById('drinks-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    drinks.forEach(drink => {
        const drinkCard = document.createElement('div');
        drinkCard.className = 'menu-item-card';
        drinkCard.innerHTML = `
            <div class="item-info">
                <h4>${currentLanguage === 'fr' ? drink.name_fr : drink.name_ar}</h4>
                <p class="price">${drink.price} DA</p>
            </div>
            <div class="quantity-control">
                <button onclick="updateDrinkQuantity(${drink.id}, -1)">-</button>
                <span id="drink-${drink.id}-qty">0</span>
                <button onclick="updateDrinkQuantity(${drink.id}, 1)">+</button>
            </div>
        `;
        container.appendChild(drinkCard);
    });
}

// Box supplement tracking
let boxSupplements = {};

function updateBoxSupplement(boxId, type, change) {
    const key = `box-${boxId}-${type}`;
    if (!boxSupplements[key]) {
        boxSupplements[key] = 0;
    }
    
    const newValue = Math.max(0, boxSupplements[key] + change);
    boxSupplements[key] = newValue;
    
    const element = document.getElementById(`box-${boxId}-${type}`);
    if (element) {
        element.textContent = newValue;
    }
}

function addBoxToOrder(boxId, boxName, basePrice, calories) {
    // Get supplements for this box
    const eggQty = boxSupplements[`box-${boxId}-egg`] || 0;
    const escalopQty = boxSupplements[`box-${boxId}-escalop`] || 0;
    
    if (eggQty === 0 && escalopQty === 0) {
        // Simple box without supplements
        const existingItem = currentOrder.find(item => 
            item.id === boxId && 
            item.type === 'box' && 
            (!item.supplements || item.supplements.length === 0)
        );
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            currentOrder.push({
                id: boxId,
                type: 'box',
                name: boxName,
                basePrice: basePrice,
                calories: calories,
                quantity: 1,
                supplements: []
            });
        }
    } else {
        // Box with supplements - create a unique entry
        const supplements = [];
        if (eggQty > 0) supplements.push({ type: 'egg', quantity: eggQty, price: 50 });
        if (escalopQty > 0) supplements.push({ type: 'escalop', quantity: escalopQty, price: 50 });
        
        // Create a unique ID for this combination
        const uniqueId = `${boxId}-${eggQty}e-${escalopQty}s`;
        
        currentOrder.push({
            id: uniqueId,
            originalId: boxId,
            type: 'box',
            name: boxName,
            basePrice: basePrice,
            calories: calories,
            quantity: 1,
            supplements: supplements
        });
    }
    
    // Reset supplement counters for this box
    boxSupplements[`box-${boxId}-egg`] = 0;
    boxSupplements[`box-${boxId}-escalop`] = 0;
    
    // Update display
    document.getElementById(`box-${boxId}-egg`).textContent = '0';
    document.getElementById(`box-${boxId}-escalop`).textContent = '0';
    
    saveCart();
    updateOrderSummary();
    updateCartCount();
    showNotification('Box ajoutée au panier!', 'success');
}

// Separate supplement items (for ordering alone)
function updateSupplementQuantity(suppId, change) {
    const supp = MENU_ITEMS.supplements.find(s => s.id === suppId);
    if (!supp) return;
    
    const existingItem = currentOrder.find(item => item.id === suppId && item.type === 'supplement');
    
    if (existingItem) {
        const newQty = Math.max(0, existingItem.quantity + change);
        if (newQty === 0) {
            currentOrder = currentOrder.filter(item => !(item.id === suppId && item.type === 'supplement'));
        } else {
            existingItem.quantity = newQty;
        }
    } else if (change > 0) {
        currentOrder.push({
            id: suppId,
            type: 'supplement',
            name: currentLanguage === 'fr' ? supp.name_fr : supp.name_ar,
            price: supp.price,
            quantity: 1
        });
    }
    
    const qtyElement = document.getElementById(`supp-${suppId}-qty`);
    if (qtyElement) {
        const newItem = currentOrder.find(item => item.id === suppId && item.type === 'supplement');
        qtyElement.textContent = newItem ? newItem.quantity : 0;
    }
    
    saveCart();
    updateOrderSummary();
    updateCartCount();
}

function updateDrinkQuantity(drinkId, change) {
    const drink = MENU_ITEMS.drinks.find(d => d.id === drinkId);
    if (!drink) return;
    
    const existingItem = currentOrder.find(item => item.id === drinkId && item.type === 'drink');
    
    if (existingItem) {
        const newQty = Math.max(0, existingItem.quantity + change);
        if (newQty === 0) {
            currentOrder = currentOrder.filter(item => !(item.id === drinkId && item.type === 'drink'));
        } else {
            existingItem.quantity = newQty;
        }
    } else if (change > 0) {
        currentOrder.push({
            id: drinkId,
            type: 'drink',
            name: currentLanguage === 'fr' ? drink.name_fr : drink.name_ar,
            price: drink.price,
            quantity: 1
        });
    }
    
    const qtyElement = document.getElementById(`drink-${drinkId}-qty`);
    if (qtyElement) {
        const newItem = currentOrder.find(item => item.id === drinkId && item.type === 'drink');
        qtyElement.textContent = newItem ? newItem.quantity : 0;
    }
    
    saveCart();
    updateOrderSummary();
    updateCartCount();
}

function calculateItemPrice(item) {
    if (item.type === 'box') {
        let total = item.basePrice * item.quantity;
        if (item.supplements) {
            item.supplements.forEach(supp => {
                total += supp.price * supp.quantity * item.quantity;
            });
        }
        return total;
    } else {
        return item.price * item.quantity;
    }
}

function updateOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    let subtotal = 0;
    let orderHTML = '';
    
    currentOrder.forEach((item, index) => {
        const itemTotal = calculateItemPrice(item);
        subtotal += itemTotal;
        
        if (item.type === 'box') {
            let supplementsHtml = '';
            if (item.supplements && item.supplements.length > 0) {
                supplementsHtml = '<div class="item-supplements">';
                item.supplements.forEach(supp => {
                    supplementsHtml += `<small>+ ${supp.quantity}x ${supp.type === 'egg' ? 'Œuf' : 'Escalop'} (${supp.price * supp.quantity} DA)</small>`;
                });
                supplementsHtml += '</div>';
            }
            
            orderHTML += `
                <div class="order-item">
                    <div class="item-details">
                        <span class="item-name">${item.name} x${item.quantity}</span>
                        ${supplementsHtml}
                        <div class="item-quantity">
                            <button onclick="updateOrderItemQuantity(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateOrderItemQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <span class="item-price">${itemTotal} DA</span>
                    <button onclick="removeOrderItem(${index})" class="remove-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        } else {
            orderHTML += `
                <div class="order-item">
                    <div class="item-details">
                        <span class="item-name">${item.name} x${item.quantity}</span>
                        <div class="item-quantity">
                            <button onclick="updateOrderItemQuantity(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateOrderItemQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <span class="item-price">${itemTotal} DA</span>
                    <button onclick="removeOrderItem(${index})" class="remove-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
    });
    
    if (currentOrder.length === 0) {
        orderHTML = '<p class="empty-order">Votre commande est vide</p>';
        document.getElementById('delivery-fee').textContent = '0 DA';
    } else {
        document.getElementById('delivery-fee').textContent = DELIVERY_FEE + ' DA';
    }
    
    orderItemsContainer.innerHTML = orderHTML;
    subtotalElement.textContent = `${subtotal} DA`;
    
    const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);
    totalElement.textContent = `${total} DA`;
}

function updateOrderItemQuantity(index, change) {
    const item = currentOrder[index];
    
    if (item.type === 'box') {
        const newQty = Math.max(1, item.quantity + change);
        item.quantity = newQty;
    } else {
        const newQty = item.quantity + change;
        if (newQty <= 0) {
            currentOrder.splice(index, 1);
        } else {
            item.quantity = newQty;
        }
    }
    
    saveCart();
    updateOrderSummary();
    updateCartCount();
}

function removeOrderItem(index) {
    currentOrder.splice(index, 1);
    saveCart();
    updateOrderSummary();
    updateCartCount();
}

async function placeOrder() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('deliveryAddress').value;
    
    if (!name || !phone) {
        showNotification('Veuillez remplir vos informations', 'error');
        return;
    }
    
    if (currentOrder.length === 0) {
        showNotification('Veuillez ajouter des articles à votre commande', 'error');
        return;
    }
    
    // Validate phone number (Algerian format)
    if (!phone.match(/^0[5-7][0-9]{8}$/)) {
        showNotification('Numéro de téléphone invalide (ex: 0542299391)', 'error');
        return;
    }
    
    const subtotal = currentOrder.reduce((sum, item) => sum + calculateItemPrice(item), 0);
    const total = subtotal + DELIVERY_FEE;
    
    // Prepare items for storage
    const orderItems = currentOrder.map(item => {
        if (item.type === 'box') {
            return {
                id: item.originalId || item.id,
                name: item.name,
                basePrice: item.basePrice,
                calories: item.calories,
                quantity: item.quantity,
                supplements: item.supplements || []
            };
        } else {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                type: item.type
            };
        }
    });
    
    const orderData = {
        customer_name: name,
        customer_phone: phone,
        delivery_address: address || 'Jijel',
        items: orderItems,
        total_amount: total,
        delivery_fee: DELIVERY_FEE,
        language: currentLanguage
    };
    
    // Show loading state
    const orderBtn = document.querySelector('.order-button');
    const originalText = orderBtn.textContent;
    orderBtn.textContent = currentLanguage === 'fr' ? 'Traitement...' : 'جاري المعالجة...';
    orderBtn.disabled = true;
    
    const result = await placeOrder(orderData);
    
    if (result.success) {
        showOrderConfirmation(result.order);
        // Clear cart
        currentOrder = [];
        saveCart();
        updateOrderSummary();
        updateCartCount();
        document.getElementById('customerForm').reset();
        
        // Reset all supplement counters
        document.querySelectorAll('[id^="box-"][id$="-egg"], [id^="box-"][id$="-escalop"]').forEach(el => {
            el.textContent = '0';
        });
        document.querySelectorAll('[id^="supp-"]').forEach(el => {
            el.textContent = '0';
        });
        document.querySelectorAll('[id^="drink-"]').forEach(el => {
            el.textContent = '0';
        });
        
        boxSupplements = {};
    } else {
        showNotification('Erreur lors de la commande. Veuillez réessayer.', 'error');
    }
    
    orderBtn.textContent = originalText;
    orderBtn.disabled = false;
}

function showOrderConfirmation(order) {
    const modal = document.getElementById('orderModal');
    const details = document.getElementById('order-details');
    
    let itemsList = '<ul style="list-style: none; padding: 0;">';
    order.items.forEach(item => {
        if (item.type === 'box') {
            itemsList += `<li>📦 ${item.name} x${item.quantity}`;
            if (item.supplements && item.supplements.length > 0) {
                itemsList += '<ul style="margin-left: 20px; font-size: 0.9em;">';
                item.supplements.forEach(supp => {
                    itemsList += `<li>➕ ${supp.quantity}x ${supp.type === 'egg' ? 'Œuf' : 'Escalop'}</li>`;
                });
                itemsList += '</ul>';
            }
            itemsList += '</li>';
        } else {
            itemsList += `<li>${item.type === 'drink' ? '🥤' : '➕'} ${item.name} x${item.quantity}</li>`;
        }
    });
    itemsList += '</ul>';
    
    details.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <i class="fas fa-check-circle" style="color: #4CAF50; font-size: 4rem;"></i>
        </div>
        <p><strong>${currentLanguage === 'fr' ? 'Numéro de commande' : 'رقم الطلب'}:</strong> #${order.id}</p>
        <p><strong>${currentLanguage === 'fr' ? 'Total' : 'المجموع'}:</strong> ${order.total_amount} DA</p>
        <p><strong>${currentLanguage === 'fr' ? 'Articles' : 'الأصناف'}:</strong></p>
        ${itemsList}
        <p><strong>${currentLanguage === 'fr' ? 'Téléphone' : 'الهاتف'}:</strong> ${order.customer_phone}</p>
        <p><strong>${currentLanguage === 'fr' ? 'Temps d\'attente estimé' : 'وقت الانتظار المتوقع'}:</strong> 30-45 ${currentLanguage === 'fr' ? 'minutes' : 'دقيقة'}</p>
        <hr>
        <p style="text-align: center; color: #666;">${currentLanguage === 'fr' ? 'Merci d\'avoir choisi YD Healthy Food Jijel!' : 'شكراً لاختيارك YD Healthy Food جيجل!'}</p>
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

function saveCart() {
    localStorage.setItem('ydCart', JSON.stringify(currentOrder));
}

function loadSavedCart() {
    const saved = localStorage.getItem('ydCart');
    if (saved) {
        try {
            currentOrder = JSON.parse(saved);
            updateOrderSummary();
        } catch (e) {
            console.error('Error loading saved cart:', e);
        }
    }
}

function updateCartCount() {
    const count = currentOrder.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = count;
    });
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 2rem';
    notification.style.background = type === 'success' ? '#4CAF50' : '#ff4757';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    notification.style.zIndex = '9999';
    notification.style.animation = 'slideIn 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function setupEventListeners() {
    // Phone number validation
    const phoneInput = document.getElementById('customerPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .box-card {
        background: white;
        border-radius: 10px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    
    .box-header h4 {
        color: #333;
        font-size: 1.1rem;
    }
    
    .box-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4CAF50;
    }
    
    .box-calories {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
    
    .box-calories i {
        color: #ff4757;
    }
    
    .box-supplements {
        background: #f9f9f9;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .box-supplements h5 {
        color: #333;
        margin-bottom: 0.8rem;
    }
    
    .supplement-controls {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
    .supplement-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .supplement-item label {
        color: #666;
        font-size: 0.9rem;
    }
    
    .quantity-control {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .quantity-control button {
        width: 25px;
        height: 25px;
        border: none;
        background: #4CAF50;
        color: white;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    
    .quantity-control button:hover {
        background: #45a049;
    }
    
    .quantity-control span {
        min-width: 20px;
        text-align: center;
        font-weight: 600;
    }
    
    .add-box-btn {
        width: 100%;
        padding: 0.8rem;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.3s;
    }
    
    .add-box-btn:hover {
        background: #45a049;
    }
    
    .item-supplements {
        margin: 0.3rem 0;
        color: #666;
        font-size: 0.85rem;
    }
    
    .item-supplements small {
        display: block;
        color: #ff9800;
    }
    
    .floating-cart {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #4CAF50;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: transform 0.3s;
        z-index: 999;
    }
    
    .floating-cart:hover {
        transform: scale(1.1);
    }
    
    .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ff4757;
        color: white;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
    }
`;
document.head.appendChild(style);
