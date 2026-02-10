// Main JavaScript for YD Healthy Food Jijel - Professional Architecture

// ========== 1) SUPABASE CONNECTION ==========
const supabaseUrl = "YOUR_PROJECT_URL"; // Replace with your actual Supabase URL
const supabaseKey = "YOUR_PUBLIC_ANON_KEY"; // Replace with your actual Supabase Anon Key
const supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

// Language data
const translations = {
    fr: {
        "nav-home": "Accueil",
        "nav-menu": "Menu",
        "nav-order": "Commander",
        "nav-contact": "Contact",
        "site-title": "YD Healthy Food Jijel",
        "hero-title": "Nourriture Sain et Équilibrée à Jijel",
        "hero-text": "Commandez vos plats healthy préférés en ligne et recevez-les chez vous ou au travail. Livraison rapide dans toute la ville de Jijel.",
        "hero-order-btn": "Commander Maintenant",
        "about-title": "À Propos de YD Healthy Food",
        "about-text-1": "Nous sommes passionnés par la nourriture saine et équilibrée. Notre mission est de fournir des repas délicieux et nutritifs à nos clients à Jijel.",
        "about-text-2": "Tous nos plats sont préparés avec des ingrédients frais et de qualité, sans conservateurs ni additifs artificiels.",
        "feature-1-title": "Ingrédients Frais",
        "feature-1-text": "Utilisation quotidienne d'ingrédients frais et locaux",
        "feature-2-title": "Livraison Rapide",
        "feature-2-text": "Livraison à domicile en moins de 45 minutes",
        "feature-3-title": "Options Saines",
        "feature-3-text": "Plats équilibrés avec informations nutritionnelles",
        "popular-title": "Nos Plats Populaires",
        "view-menu-btn": "Voir Tout le Menu",
        "cart-title": "Votre Panier",
        "cart-empty": "Votre panier est vide",
        "cart-total": "Total:",
        "view-cart": "Voir Panier",
        "checkout": "Commander",
        "remove": "Retirer",
        "add-to-cart": "Ajouter au Panier"
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-menu": "قائمة الطعام",
        "nav-order": "طلب",
        "nav-contact": "اتصل بنا",
        "site-title": "واي دي Healthy Food جيجل",
        "hero-title": "طعام صحي ومتوازن في جيجل",
        "hero-text": "اطلب أطباقك الصحية المفضلة عبر الإنترنت واستلمها في منزلك أو عملك. توصيل سريع في جميع أنحاء مدينة جيجل.",
        "hero-order-btn": "اطلب الآن",
        "about-title": "عن YD Healthy Food",
        "about-text-1": "نحن شغوفون بالطعام الصحي والمتوازن. مهمتنا هي توفير وجبات لذيذة ومغذية لعملائنا في جيجل.",
        "about-text-2": "يتم تحضير جميع أطباقنا بمكونات طازجة وعالية الجودة، دون مواد حافظة أو إضافات اصطناعية.",
        "feature-1-title": "مكونات طازجة",
        "feature-1-text": "استخدام يومي للمكونات الطازجة والمحلية",
        "feature-2-title": "توصيل سريع",
        "feature-2-text": "توصيل للمنازل في أقل من 45 دقيقة",
        "feature-3-title": "خيارات صحية",
        "feature-3-text": "أطباق متوازنة مع معلومات غذائية",
        "popular-title": "أطباقنا الشعبية",
        "view-menu-btn": "عرض القائمة الكاملة",
        "cart-title": "سلة التسوق الخاصة بك",
        "cart-empty": "سلة التسوق الخاصة بك فارغة",
        "cart-total": "المجموع:",
        "view-cart": "عرض السلة",
        "checkout": "الدفع",
        "remove": "إزالة",
        "add-to-cart": "أضف إلى السلة"
    }
};

// Menu items data
const menuItemsData = [
    { id: 1, category: 'boxes', name: { fr: "Riz escalop salad oeuf", ar: "رز إسكالوب سلطة بيض" }, description: { fr: "Riz avec escalope, salade et œuf", ar: "رز مع إسكالوب سلطة وبيض" }, calories: 720, price: 350 },
    { id: 2, category: 'boxes', name: { fr: "Pasta escalop salad", ar: "باستا إسكالوب سلطة" }, description: { fr: "Pâtes avec escalope et salade", ar: "معكرونة مع إسكالوب سلطة" }, calories: 750, price: 400 },
    { id: 3, category: 'boxes', name: { fr: "Bourgouil au poulet", ar: "برغل بالدجاج" }, description: { fr: "Boulgour au poulet", ar: "برغل مع دجاج" }, calories: 640, price: 450 },
    { id: 4, category: 'drinks', name: { fr: "Jus banan date", ar: "عصير موز تمر" }, description: { fr: "Jus naturel de banane et datte", ar: "عصير طبيعي من الموز والتمر" }, calories: null, price: 300 },
    { id: 5, category: 'supplements', name: { fr: "Œuf supplémentaire", ar: "بيض إضافي" }, description: { fr: "Ajouter un œuf supplémentaire", ar: "إضافة بيضة إضافية" }, calories: null, price: 50 }
];

// ========== 2) CART SYSTEM (LOCAL STORAGE ONLY) ==========
let cart = JSON.parse(localStorage.getItem("ydCart")) || [];

function saveCart() {
    localStorage.setItem("ydCart", JSON.stringify(cart));
}

function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, qty: 1 });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`${name} added to cart`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(id, change) {
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        cart[itemIndex].qty += change;
        
        if (cart[itemIndex].qty <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// ========== 3) CALCULATE TOTAL ==========
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartItemCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ========== 4) SEND ORDER TO SUPABASE ==========
async function submitOrderToDatabase(orderData) {
    if (!supabase) {
        console.error("Supabase not initialized. Using localStorage fallback.");
        
        // Fallback to localStorage if Supabase is not configured
        const orders = JSON.parse(localStorage.getItem("ydOrders")) || [];
        orderData.id = `ORD-${Date.now().toString().slice(-6)}`;
        orderData.created_at = new Date().toISOString();
        orders.push(orderData);
        localStorage.setItem("ydOrders", JSON.stringify(orders));
        return { error: null, data: [orderData] };
    }
    
    try {
        const { data, error } = await supabase
            .from("orders")
            .insert([orderData])
            .select();
        
        if (error) {
            console.error("Database error:", error);
            throw error;
        }
        
        return { data, error: null };
    } catch (error) {
        console.error("Error submitting order:", error);
        throw error;
    }
}

// ========== 5) CONFIRM ORDER FUNCTION ==========
async function confirmOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }
    
    // Get form data
    const name = document.getElementById("customer-name")?.value;
    const phone = document.getElementById("customer-phone")?.value;
    const deliveryType = document.querySelector('input[name="delivery"]:checked')?.value;
    const address = document.getElementById("customer-address")?.value || "";
    const notes = document.getElementById("special-notes")?.value || "";
    
    // Validate required fields
    if (!name || !phone) {
        alert("Please fill in all required fields");
        return;
    }
    
    if (deliveryType === "yes" && !address) {
        alert("Please enter your delivery address");
        return;
    }
    
    // Calculate total with delivery if needed
    let total = getCartTotal();
    if (deliveryType === "yes") {
        total += 150; // Delivery cost
    }
    
    // Prepare order data
    const orderData = {
        customer_name: name,
        phone: phone,
        address: address,
        delivery_type: deliveryType === "yes" ? "delivery" : "pickup",
        items: cart,
        total: total,
        status: "new",
        notes: notes
    };
    
    // Show loading state
    const submitBtn = document.getElementById("submit-order");
    const originalText = submitBtn?.textContent;
    if (submitBtn) {
        submitBtn.textContent = "Processing...";
        submitBtn.disabled = true;
    }
    
    try {
        const result = await submitOrderToDatabase(orderData);
        
        if (result.error) {
            throw result.error;
        }
        
        // Success!
        alert("Order sent successfully! We will contact you soon.");
        
        // Clear cart
        clearCart();
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
        
    } catch (error) {
        console.error("Order submission failed:", error);
        alert("There was an error processing your order. Please try again or call us directly.");
        
        // Restore button
        if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

// ========== 6) DASHBOARD ORDER LOADING ==========
async function loadDashboardOrders() {
    if (!supabase) {
        console.error("Supabase not initialized. Using localStorage fallback.");
        
        // Fallback to localStorage
        const orders = JSON.parse(localStorage.getItem("ydOrders")) || [];
        return { data: orders, error: null };
    }
    
    try {
        const { data, error } = await supabase
            .from("orders")
            .select("*")
            .order("created_at", { ascending: false });
        
        if (error) {
            console.error("Error loading orders:", error);
            throw error;
        }
        
        return { data, error: null };
    } catch (error) {
        console.error("Failed to load orders:", error);
        return { data: [], error };
    }
}

// ========== 7) REALTIME UPDATES FOR DASHBOARD ==========
function setupRealtimeUpdates() {
    if (!supabase) {
        console.log("Supabase not initialized. Skipping realtime updates.");
        return;
    }
    
    supabase
        .channel("orders-channel")
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "orders" },
            () => {
                console.log("Order data changed, refreshing dashboard...");
                // Trigger dashboard refresh
                if (window.refreshDashboardOrders) {
                    window.refreshDashboardOrders();
                }
            }
        )
        .subscribe();
}

// ========== UI FUNCTIONS ==========
let currentLang = 'fr';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ydLanguage', lang);
    
    // Update UI elements
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`[id="${key}"]`);
        elements.forEach(el => {
            if (el.tagName === 'INPUT' && el.type !== 'radio' && el.type !== 'checkbox') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        });
    });
    
    updateCartUI();
}

function createCartUI() {
    // Create cart container if it doesn't exist
    if (document.getElementById('shopping-cart')) return;
    
    const cartHTML = `
        <div id="shopping-cart" class="cart-container">
            <div class="cart-header">
                <h3 id="cart-title">${translations[currentLang]['cart-title']}</h3>
                <div class="cart-count">${getCartItemCount()}</div>
                <button class="cart-close">&times;</button>
            </div>
            <div class="cart-content">
                <div class="cart-items" id="cart-items"></div>
                <div class="cart-total">
                    <span id="cart-total-text">${translations[currentLang]['cart-total']}</span>
                    <span id="cart-total-price">${getCartTotal()} DA</span>
                </div>
                <div class="cart-actions">
                    <a href="order.html" class="cart-action-btn view-cart-btn" id="view-cart-btn">${translations[currentLang]['view-cart']}</a>
                    <a href="order.html" class="cart-action-btn checkout-btn" id="checkout-btn">${translations[currentLang]['checkout']}</a>
                </div>
            </div>
        </div>
        
        <div class="floating-cart-btn">
            <i class="fas fa-shopping-cart"></i>
            <div class="cart-icon-badge">${getCartItemCount()}</div>
        </div>
    `;
    
    // Add to body
    document.body.insertAdjacentHTML('beforeend', cartHTML);
    
    // Add event listeners
    setupCartEventListeners();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountElement = document.querySelector('.cart-count');
    const cartTotalPriceElement = document.getElementById('cart-total-price');
    const cartIconBadge = document.querySelector('.cart-icon-badge');
    
    if (!cartItemsContainer) return;
    
    // Clear and rebuild cart items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <p id="cart-empty">${translations[currentLang]['cart-empty']}</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemHTML = `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price} DA x ${item.qty}</div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-btn" data-id="${item.id}">${translations[currentLang]['remove']}</button>
                    </div>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
        });
    }
    
    // Update counts and totals
    const total = getCartTotal();
    const count = getCartItemCount();
    
    if (cartCountElement) cartCountElement.textContent = count;
    if (cartTotalPriceElement) cartTotalPriceElement.textContent = `${total} DA`;
    if (cartIconBadge) cartIconBadge.textContent = count;
    
    // Update cart button text
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.textContent = translations[currentLang]['add-to-cart'];
    });
}

function setupCartEventListeners() {
    // Cart toggle
    document.querySelector('.cart-header')?.addEventListener('click', toggleCart);
    document.querySelector('.floating-cart-btn')?.addEventListener('click', toggleCart);
    
    // Close button
    document.querySelector('.cart-close')?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeCart();
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        const cartContainer = document.getElementById('shopping-cart');
        if (cartContainer && 
            !cartContainer.contains(e.target) && 
            !e.target.closest('.floating-cart-btn')) {
            closeCart();
        }
    });
    
    // Cart item controls
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            if (e.target.classList.contains('minus')) {
                updateCartQuantity(id, -1);
            } else if (e.target.classList.contains('plus')) {
                updateCartQuantity(id, 1);
            }
        }
        
        if (e.target.classList.contains('remove-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(id);
        }
    });
}

function toggleCart() {
    const cartContainer = document.getElementById('shopping-cart');
    cartContainer?.classList.toggle('open');
}

function closeCart() {
    const cartContainer = document.getElementById('shopping-cart');
    cartContainer?.classList.remove('open');
}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.cart-notification');
    if (existing) existing.remove();
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const savedLang = localStorage.getItem('ydLanguage') || 'fr';
    switchLanguage(savedLang);
    
    // Initialize language switcher buttons
    document.getElementById('lang-fr')?.addEventListener('click', () => switchLanguage('fr'));
    document.getElementById('lang-ar')?.addEventListener('click', () => switchLanguage('ar'));
    
    // Create cart UI (not on admin pages)
    if (!window.location.pathname.includes('dashboard.html') && 
        !window.location.pathname.includes('admin.html')) {
        createCartUI();
        updateCartUI();
    }
    
    // Setup add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            
            const menuItem = e.target.closest('.menu-item');
            const itemName = menuItem?.querySelector('.item-name')?.textContent;
            const itemPrice = parseInt(menuItem?.querySelector('.item-price')?.textContent.replace(' DA', '')) || 0;
            const itemId = parseInt(menuItem?.dataset.id) || Date.now();
            
            if (itemName && itemPrice) {
                addToCart(itemId, itemName, itemPrice);
                openCart();
            }
        }
    });
    
    // Setup confirm order button
    const confirmOrderBtn = document.getElementById('submit-order');
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            await confirmOrder();
        });
    }
    
    // Setup realtime updates for dashboard
    if (window.location.pathname.includes('dashboard.html')) {
        setupRealtimeUpdates();
        
        // Expose refresh function for realtime updates
        window.refreshDashboardOrders = async function() {
            const { data: orders } = await loadDashboardOrders();
            // Update your dashboard UI here
            console.log("Orders updated:", orders);
        };
    }
});

// ========== EXPORT FUNCTIONS FOR DASHBOARD ==========
window.ydOrderSystem = {
    loadDashboardOrders,
    submitOrderToDatabase,
    clearCart,
    getCartTotal,
    getCartItemCount
};
