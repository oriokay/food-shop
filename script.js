// Main JavaScript for YD Healthy Food Jijel

// Language data
const translations = {
    fr: {
        // Navigation
        "nav-home": "Accueil",
        "nav-menu": "Menu",
        "nav-order": "Commander",
        "nav-contact": "Contact",
        
        // Site title
        "site-title": "YD Healthy Food Jijel",
        
        // Home Page
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
        
        // Menu Page
        "menu-page-title": "Notre Menu Complet",
        "menu-page-subtitle": "Découvrez toutes nos options saines et délicieuses",
        "boxes-title": "Boxes",
        "drinks-title": "Boissons",
        "supplements-title": "Suppléments",
        "ready-to-order-title": "Prêt à commander?",
        "ready-to-order-text": "Passez votre commande en ligne et recevez votre nourriture saine rapidement!",
        "order-now-btn": "Commander Maintenant",
        
        // Order Page
        "order-page-title": "Passer Votre Commande",
        "order-page-subtitle": "Remplissez le formulaire ci-dessous pour commander vos plats préférés",
        "customer-info-title": "Informations du Client",
        "name-label": "Nom Complet *",
        "phone-label": "Numéro de Téléphone *",
        "delivery-label": "Type de Commande",
        "delivery-yes-label": "Livraison (150 DA - Jijel uniquement)",
        "delivery-no-label": "Ramassage en magasin",
        "address-label": "Adresse de Livraison *",
        "order-items-title": "Votre Commande",
        "empty-order-text": "Votre panier est vide. Ajoutez des articles depuis le menu.",
        "total-text": "Total:",
        "notes-label": "Notes Spéciales (optionnel)",
        "submit-order": "Confirmer la Commande",
        "order-note": "Nous vous contacterons pour confirmer votre commande dans les 15 minutes.",
        
        "need-help-title": "Besoin d'aide?",
        "call-us-title": "Appelez-nous",
        "call-us-text": "0542299391",
        "hours-title": "Heures d'ouverture",
        "hours-text": "Lundi - Dimanche: 10h00 - 22h00",
        "delivery-info-title": "Information de livraison",
        "delivery-info-text": "Livraison: 150 DA (Jijel uniquement)",
        "delivery-time-text": "Temps de livraison: 30-45 minutes",
        
        // Contact Page
        "contact-page-title": "Contactez-Nous",
        "contact-page-subtitle": "Nous sommes là pour répondre à vos questions",
        "get-in-touch-title": "Prenez Contact",
        "get-in-touch-text": "Nous serions ravis de vous entendre. N'hésitez pas à nous contacter pour toute question, commande ou feedback.",
        "phone-title": "Téléphone",
        "phone-number": "0542299391",
        "phone-hours": "Lundi - Dimanche: 10h00 - 22h00",
        "location-title": "Adresse",
        "location-text": "Jijel, Algérie",
        "delivery-area": "Zone de livraison: Jijel uniquement",
        "delivery-title": "Livraison",
        "delivery-cost": "Coût: 150 DA",
        "delivery-time": "Temps: 30-45 minutes",
        "follow-us-title": "Suivez-Nous sur les Réseaux Sociaux",
        
        "send-message-title": "Envoyez-nous un Message",
        "contact-name-label": "Nom Complet *",
        "contact-phone-label": "Numéro de Téléphone *",
        "contact-email-label": "Email (optionnel)",
        "contact-subject-label": "Sujet *",
        "contact-message-label": "Message *",
        "submit-contact": "Envoyer le Message",
        
        "faq-title": "Questions Fréquentes",
        "faq1-question": "Quelle est votre zone de livraison?",
        "faq1-answer": "Nous livrons uniquement dans la ville de Jijel. Le coût de livraison est de 150 DA.",
        "faq2-question": "Quels sont vos horaires d'ouverture?",
        "faq2-answer": "Nous sommes ouverts du lundi au dimanche, de 10h00 à 22h00.",
        "faq3-question": "Puis-je modifier ma commande après l'avoir passée?",
        "faq3-answer": "Vous pouvez modifier votre commande dans les 10 minutes suivant sa soumission en nous appelant au 0542299391.",
        "faq4-question": "Acceptez-vous les paiements en ligne?",
        "faq4-answer": "Pour le moment, nous acceptons uniquement les paiements en espèces à la livraison ou lors du ramassage en magasin.",
        
        // Footer
        "footer-slogan": "Nourriture saine, vie équilibrée",
        "quick-links-title": "Liens Rapides",
        "contact-info-title": "Informations de Contact",
        "footer-text": "© 2023 YD Healthy Food Jijel. Tous droits réservés.",
        
        // Shopping Cart
        "cart-title": "Votre Panier",
        "cart-empty": "Votre panier est vide",
        "cart-total": "Total:",
        "view-cart": "Voir Panier",
        "checkout": "Commander",
        "remove": "Retirer",
        "add-to-cart": "Ajouter au Panier"
    },
    ar: {
        // Navigation
        "nav-home": "????????",
        "nav-menu": "????? ??????",
        "nav-order": "????",
        "nav-contact": "???? ???",
        
        // Site title
        "site-title": "??? ?? Healthy Food ????",
        
        // Home Page
        "hero-title": "???? ??? ??????? ?? ????",
        "hero-text": "???? ?????? ?????? ??????? ??? ???????? ???????? ?? ????? ?? ????. ????? ???? ?? ???? ????? ????? ????.",
        "hero-order-btn": "???? ????",
        
        "about-title": "?? YD Healthy Food",
        "about-text-1": "??? ?????? ??????? ????? ?????????. ?????? ?? ????? ????? ????? ?????? ???????? ?? ????.",
        "about-text-2": "??? ????? ???? ??????? ??????? ????? ?????? ??????? ??? ???? ????? ?? ?????? ????????.",
        
        "feature-1-title": "?????? ?????",
        "feature-1-text": "??????? ???? ??????? ????? ??????",
        "feature-2-title": "????? ????",
        "feature-2-text": "????? ??? ?????? ?? ??? ?? 45 ?????",
        "feature-3-title": "?????? ????",
        "feature-3-text": "????? ??????? ?? ??????? ??????",
        
        "popular-title": "??????? ???????",
        "view-menu-btn": "??? ??????? ???????",
        
        // Menu Page
        "menu-page-title": "??????? ???????",
        "menu-page-subtitle": "????? ???? ???????? ?????? ???????",
        "boxes-title": "?????",
        "drinks-title": "?????????",
        "supplements-title": "????????",
        "ready-to-order-title": "????? ??????",
        "ready-to-order-text": "???? ??? ???????? ?????? ????? ????? ?????!",
        "order-now-btn": "???? ????",
        
        // Order Page
        "order-page-title": "???? ????",
        "order-page-subtitle": "???? ??????? ????? ???? ?????? ???????",
        "customer-info-title": "??????? ??????",
        "name-label": "????? ?????? *",
        "phone-label": "??? ?????? *",
        "delivery-label": "??? ?????",
        "delivery-yes-label": "????? (150 ?? - ???? ???)",
        "delivery-no-label": "?????? ?? ?????",
        "address-label": "????? ??????? *",
        "order-items-title": "????",
        "empty-order-text": "??? ?????? ?????. ??? ????? ?? ???????.",
        "total-text": "???????:",
        "notes-label": "??????? ???? (???????)",
        "submit-order": "????? ?????",
        "order-note": "????? ?? ?????? ???? ?? ???? 15 ?????.",
        
        "need-help-title": "????? ???????",
        "call-us-title": "???? ???",
        "call-us-text": "0542299391",
        "hours-title": "????? ?????",
        "hours-text": "??????? - ?????: 10:00 - 22:00",
        "delivery-info-title": "??????? ???????",
        "delivery-info-text": "???????: 150 ?? (???? ???)",
        "delivery-time-text": "??? ???????: 30-45 ?????",
        
        // Contact Page
        "contact-page-title": "???? ???",
        "contact-page-subtitle": "??? ??? ??????? ??? ??????",
        "get-in-touch-title": "????? ????",
        "get-in-touch-text": "????? ?? ???? ???. ?? ????? ?? ??????? ??? ??? ???? ?? ??? ?? ???????.",
        "phone-title": "??????",
        "phone-number": "0542299391",
        "phone-hours": "??????? - ?????: 10:00 - 22:00",
        "location-title": "???????",
        "location-text": "????? ???????",
        "delivery-area": "????? ???????: ???? ???",
        "delivery-title": "???????",
        "delivery-cost": "???????: 150 ??",
        "delivery-time": "?????: 30-45 ?????",
        "follow-us-title": "?????? ??? ????? ??????? ?????????",
        
        "send-message-title": "???? ??? ?????",
        "contact-name-label": "????? ?????? *",
        "contact-phone-label": "??? ?????? *",
        "contact-email-label": "?????? ?????????? (???????)",
        "contact-subject-label": "??????? *",
        "contact-message-label": "??????? *",
        "submit-contact": "????? ???????",
        
        "faq-title": "??????? ???????",
        "faq1-question": "?? ?? ????? ??????? ?????? ???",
        "faq1-answer": "??? ????? ??? ???? ????? ????. ????? ??????? 150 ??.",
        "faq2-question": "?? ?? ????? ????? ?????? ???",
        "faq2-answer": "??? ???? ?? ??????? ??? ?????? ?? ?????? 10:00 ??? 22:00.",
        "faq3-question": "?? ?????? ????? ???? ??? ???????",
        "faq3-answer": "????? ????? ???? ???? 10 ????? ?? ?????? ?? ???? ??????? ??? ??? 0542299391.",
        "faq4-question": "?? ?????? ????? ??? ?????????",
        "faq4-answer": "??????? ???? ????? ????? ??? ??? ??????? ?? ??? ???????? ?? ?????.",
        
        // Footer
        "footer-slogan": "???? ???? ???? ???????",
        "quick-links-title": "????? ?????",
        "contact-info-title": "??????? ???????",
        "footer-text": "© 2023 YD Healthy Food Jijel. ???? ?????? ??????.",
        
        // Shopping Cart
        "cart-title": "??? ??????",
        "cart-empty": "??? ?????? ?????",
        "cart-total": "???????:",
        "view-cart": "??? ?????",
        "checkout": "?????",
        "remove": "???",
        "add-to-cart": "??? ??? ?????"
    }
};

// Menu items data
const menuItemsData = [
    // Boxes
    { id: 1, category: 'boxes', name: { fr: "Riz escalop salad oeuf", ar: "??? ??????? ???? ???" }, description: { fr: "Riz avec escalope, salade et œuf", ar: "??? ?? ???????? ???? ????" }, calories: 720, price: 350 },
    { id: 2, category: 'boxes', name: { fr: "Pasta escalop salad", ar: "????? ??????? ????" }, description: { fr: "Pâtes avec escalope et salade", ar: "??????? ?? ??????? ?????" }, calories: 750, price: 400 },
    { id: 3, category: 'boxes', name: { fr: "Soup citrouille avec un toast", ar: "????? ??? ?? ????" }, description: { fr: "Soupe de citrouille servie avec un toast", ar: "????? ??? ???? ?? ????" }, calories: 500, price: 450 },
    { id: 4, category: 'boxes', name: { fr: "Bourgouil au poulet", ar: "???????? ???????" }, description: { fr: "Boulgour au poulet", ar: "???? ???????" }, calories: 640, price: 450 },
    { id: 5, category: 'boxes', name: { fr: "Salad Cesar", ar: "???? ????" }, description: { fr: "Salade César classique", ar: "???? ???? ????????" }, calories: 550, price: 300 },
    { id: 6, category: 'boxes', name: { fr: "Salad thon oeuf", ar: "???? ???? ???" }, description: { fr: "Salade de thon avec œuf", ar: "???? ???? ?? ???" }, calories: 580, price: 400 },
    
    // Drinks
    { id: 7, category: 'drinks', name: { fr: "Jus banan date", ar: "???? ??? ???" }, description: { fr: "Jus naturel de banane et datte", ar: "???? ????? ?? ????? ??????" }, calories: null, price: 300 },
    { id: 8, category: 'drinks', name: { fr: "Vishy", ar: "????" }, description: { fr: "Eau minérale Vishy", ar: "???? ?????? ????" }, calories: null, price: 70 },
    { id: 9, category: 'drinks', name: { fr: "Bouteille d'eau", ar: "?????? ???" }, description: { fr: "Bouteille d'eau minérale", ar: "?????? ??? ?????" }, calories: null, price: 40 },
    
    // Supplements
    { id: 10, category: 'supplements', name: { fr: "Œuf supplémentaire", ar: "???? ??????" }, description: { fr: "Ajouter un œuf supplémentaire", ar: "????? ???? ??????" }, calories: null, price: 50 },
    { id: 11, category: 'supplements', name: { fr: "Escalop supplémentaire", ar: "??????? ?????" }, description: { fr: "Ajouter une escalope supplémentaire", ar: "????? ??????? ?????" }, calories: null, price: 50 }
];

// Global variables
let currentLang = 'fr';
let cart = JSON.parse(localStorage.getItem('ydCart')) || [];

// DOM elements
let langFrBtn, langArBtn;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher if it exists on the page
    langFrBtn = document.getElementById('lang-fr');
    langArBtn = document.getElementById('lang-ar');
    
    if (langFrBtn && langArBtn) {
        // Set up language switcher
        langFrBtn.addEventListener('click', () => switchLanguage('fr'));
        langArBtn.addEventListener('click', () => switchLanguage('ar'));
        
        // Check for saved language preference
        const savedLang = localStorage.getItem('ydLanguage');
        if (savedLang) {
            switchLanguage(savedLang);
        }
    }
    
    // Create shopping cart elements if not on admin pages
    if (!window.location.pathname.includes('admin.html') && 
        !window.location.pathname.includes('dashboard.html')) {
        createShoppingCart();
    }
    
    // Update cart display
    updateCartDisplay();
    
    // Set up "Add to cart" buttons
    setupAddToCartButtons();
    
    // Setup floating cart button
    setupFloatingCartButton();
});

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    
    // Save language preference
    localStorage.setItem('ydLanguage', lang);
    
    // Update active language button
    if (langFrBtn && langArBtn) {
        if (lang === 'fr') {
            langFrBtn.classList.add('active');
            langArBtn.classList.remove('active');
            document.body.classList.remove('ar');
        } else {
            langArBtn.classList.add('active');
            langFrBtn.classList.remove('active');
            document.body.classList.add('ar');
        }
    }
    
    // Update all translatable elements
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`[id="${key}"]`);
        elements.forEach(el => {
            if (el.tagName === 'INPUT' && el.type !== 'radio' && el.type !== 'checkbox') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'LABEL' && el.htmlFor) {
                // For labels with "for" attribute
                el.textContent = translations[lang][key];
            } else if (el.tagName === 'A' && el.innerHTML.includes('<')) {
                // For links with HTML content
                const newText = translations[lang][key];
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newText;
                el.innerHTML = tempDiv.innerHTML;
            } else {
                el.textContent = translations[lang][key];
            }
        });
    });
    
    // Update menu items if on menu page
    if (window.location.pathname.includes('menu.html')) {
        updateMenuItemsLanguage();
    }
    
    // Update cart display
    updateCartDisplay();
}

// Create shopping cart elements
function createShoppingCart() {
    // Check if cart already exists
    if (document.getElementById('shopping-cart')) return;
    
    // Create cart container
    const cartContainer = document.createElement('div');
    cartContainer.id = 'shopping-cart';
    cartContainer.className = 'cart-container';
    
    // Cart header
    const cartHeader = document.createElement('div');
    cartHeader.className = 'cart-header';
    cartHeader.innerHTML = `
        <h3 id="cart-title">${translations[currentLang]['cart-title']}</h3>
        <div class="cart-count">0</div>
        <button class="cart-close">&times;</button>
    `;
    
    // Cart content
    const cartContent = document.createElement('div');
    cartContent.className = 'cart-content';
    cartContent.innerHTML = `
        <div class="cart-items" id="cart-items"></div>
        <div class="cart-total">
            <span id="cart-total-text">${translations[currentLang]['cart-total']}</span>
            <span id="cart-total-price">0 DA</span>
        </div>
        <div class="cart-actions">
            <a href="order.html" class="cart-action-btn view-cart-btn" id="view-cart-btn">${translations[currentLang]['view-cart']}</a>
            <a href="order.html" class="cart-action-btn checkout-btn" id="checkout-btn">${translations[currentLang]['checkout']}</a>
        </div>
    `;
    
    cartContainer.appendChild(cartHeader);
    cartContainer.appendChild(cartContent);
    
    // Add to body
    document.body.appendChild(cartContainer);
    
    // Create floating cart button
    const floatingCartBtn = document.createElement('div');
    floatingCartBtn.className = 'floating-cart-btn';
    floatingCartBtn.innerHTML = `
        <i class="fas fa-shopping-cart"></i>
        <div class="cart-icon-badge">0</div>
    `;
    document.body.appendChild(floatingCartBtn);
    
    // Add event listeners
    cartHeader.addEventListener('click', toggleCart);
    document.querySelector('.cart-close').addEventListener('click', (e) => {
        e.stopPropagation();
        closeCart();
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartContainer.contains(e.target) && !e.target.closest('.floating-cart-btn')) {
            closeCart();
        }
    });
}

// Setup floating cart button
function setupFloatingCartButton() {
    const floatingCartBtn = document.querySelector('.floating-cart-btn');
    if (floatingCartBtn) {
        floatingCartBtn.addEventListener('click', toggleCart);
    }
}

// Toggle cart open/close
function toggleCart() {
    const cartContainer = document.getElementById('shopping-cart');
    cartContainer.classList.toggle('open');
}

// Open cart
function openCart() {
    const cartContainer = document.getElementById('shopping-cart');
    cartContainer.classList.add('open');
}

// Close cart
function closeCart() {
    const cartContainer = document.getElementById('shopping-cart');
    cartContainer.classList.remove('open');
}

// Setup "Add to cart" buttons
function setupAddToCartButtons() {
    // Replace all "Add to order" buttons with "Add to cart"
    document.querySelectorAll('.add-to-order').forEach(button => {
        button.classList.remove('add-to-order');
        button.classList.add('add-to-cart-btn');
        button.textContent = translations[currentLang]['add-to-cart'];
        
        // Remove existing click events
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });
    
    // Add event listeners to all "Add to cart" buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            
            // Get the menu item information
            const menuItem = e.target.closest('.menu-item');
            const itemName = menuItem.querySelector('.item-name').textContent;
            const itemPrice = parseInt(menuItem.querySelector('.item-price').textContent.replace(' DA', ''));
            
            // Find the item in our data to get the ID
            const menuItemData = menuItemsData.find(item => 
                item.name.fr === itemName || item.name.ar === itemName
            );
            
            let itemId;
            if (menuItemData) {
                itemId = menuItemData.id;
            } else {
                // Fallback if we can't find the item in data
                itemId = Date.now();
            }
            
            // Add to cart
            addToCart(itemId, itemName, itemPrice);
            
            // Show cart
            openCart();
        }
    });
}

// Add item to cart
function addToCart(itemId, itemName, itemPrice) {
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === itemId);
    
    if (existingItemIndex !== -1) {
        // Increase quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('ydCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Show notification
    showNotification(`${itemName} ${translations[currentLang]['add-to-cart']}`);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('ydCart', JSON.stringify(cart));
    updateCartDisplay();
}

// Update item quantity in cart
function updateCartQuantity(itemId, change) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            // Remove item if quantity is 0 or less
            removeFromCart(itemId);
        } else {
            localStorage.setItem('ydCart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    // Check if cart elements exist
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountElement = document.querySelector('.cart-count');
    const cartTotalPriceElement = document.getElementById('cart-total-price');
    const cartIconBadge = document.querySelector('.cart-icon-badge');
    
    if (!cartItemsContainer) return;
    
    // Clear cart items
    cartItemsContainer.innerHTML = '';
    
    // Calculate total items and price
    let totalItems = 0;
    let totalPrice = 0;
    
    if (cart.length === 0) {
        // Show empty cart message
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <p id="cart-empty">${translations[currentLang]['cart-empty']}</p>
            </div>
        `;
    } else {
        // Add each item to cart display
        cart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} DA x ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" data-id="${item.id}" id="remove-btn">${translations[currentLang]['remove']}</button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Add event listeners for quantity controls
        cartItemsContainer.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.getAttribute('data-id'));
                updateCartQuantity(itemId, -1);
            });
        });
        
        cartItemsContainer.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.getAttribute('data-id'));
                updateCartQuantity(itemId, 1);
            });
        });
        
        // Add event listeners for remove buttons
        cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(itemId);
            });
        });
    }
    
    // Update counts and totals
    if (cartCountElement) cartCountElement.textContent = totalItems;
    if (cartTotalPriceElement) cartTotalPriceElement.textContent = `${totalPrice} DA`;
    if (cartIconBadge) cartIconBadge.textContent = totalItems;
    
    // Update language for dynamic elements
    const cartTitle = document.getElementById('cart-title');
    const cartTotalText = document.getElementById('cart-total-text');
    const viewCartBtn = document.getElementById('view-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cartTitle) cartTitle.textContent = translations[currentLang]['cart-title'];
    if (cartTotalText) cartTotalText.textContent = translations[currentLang]['cart-total'];
    if (viewCartBtn) viewCartBtn.textContent = translations[currentLang]['view-cart'];
    if (checkoutBtn) checkoutBtn.textContent = translations[currentLang]['checkout'];
    
    // Update "Add to cart" button text
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.textContent = translations[currentLang]['add-to-cart'];
    });
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Update menu items with current language
function updateMenuItemsLanguage() {
    // Update all menu items on the page
    const menuItemElements = document.querySelectorAll('.menu-item');
    
    menuItemElements.forEach(element => {
        const itemName = element.querySelector('.item-name');
        const itemDescription = element.querySelector('.item-description');
        const addButton = element.querySelector('.add-to-cart-btn');
        
        // Find the corresponding menu item in our data
        const itemText = itemName.textContent.trim();
        const menuItem = menuItemsData.find(item => 
            item.name.fr === itemText || item.name.ar === itemText
        );
        
        if (menuItem) {
            itemName.textContent = menuItem.name[currentLang];
            itemDescription.textContent = menuItem.description[currentLang];
            
            if (addButton) {
                addButton.textContent = translations[currentLang]['add-to-cart'];
            }
        }
    });
}

// ========== ADMIN ORDER MANAGEMENT FUNCTIONS ==========

// Submit order to admin system
function submitOrderToAdmin(orderData) {
    // Get existing orders
    const orders = JSON.parse(localStorage.getItem('ydOrders')) || [];
    
    // Generate order ID
    const orderId = 'ORD-' + Date.now().toString().slice(-6);
    
    // Create order object
    const order = {
        id: orderId,
        ...orderData,
        status: 'new',
        date: new Date().toISOString()
    };
    
    // Add to orders
    orders.push(order);
    
    // Save to localStorage
    localStorage.setItem('ydOrders', JSON.stringify(orders));
    
    // Notify admin if logged in
    if (localStorage.getItem('ydAdminLoggedIn') === 'true') {
        console.log('Nouvelle commande reçue:', orderId);
        // In a real app, you would use WebSockets or push notifications here
    }
    
    return orderId;
}

// Generate order ID for admin system
function generateOrderId() {
    return 'ORD-' + Date.now().toString().slice(-6);
}

// Get status text for display
function getStatusText(status) {
    switch(status) {
        case 'new': return 'Nouvelle';
        case 'preparing': return 'En préparation';
        case 'ready': return 'Prête';
        case 'delivered': return 'Livrée';
        case 'cancelled': return 'Annulée';
        default: return 'Nouvelle';
    }
}

// Get status class for styling
function getStatusClass(status) {
    switch(status) {
        case 'new': return 'status-new';
        case 'preparing': return 'status-preparing';
        case 'ready': return 'status-ready';
        case 'delivered': return 'status-delivered';
        case 'cancelled': return 'status-cancelled';
        default: return 'status-new';
    }
}

// Load orders for admin dashboard
function loadAdminOrders(filter = 'all') {
    const orders = JSON.parse(localStorage.getItem('ydOrders')) || [];
    
    if (filter === 'all') {
        return orders;
    } else {
        return orders.filter(order => order.status === filter);
    }
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const orders = JSON.parse(localStorage.getItem('ydOrders')) || [];
    const orderIndex = orders.findIndex(order => order.id === orderId);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem('ydOrders', JSON.stringify(orders));
        return true;
    }
    
    return false;
}

// Delete order
function deleteOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('ydOrders')) || [];
    const filteredOrders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('ydOrders', JSON.stringify(filteredOrders));
}

// Get order statistics
function getOrderStats() {
    const orders = JSON.parse(localStorage.getItem('ydOrders')) || [];
    const today = new Date().toDateString();
    
    const todayOrders = orders.filter(order => 
        new Date(order.date).toDateString() === today
    );
    
    const pendingOrders = orders.filter(order => 
        order.status === 'new' || order.status === 'preparing'
    ).length;
    
    const todayRevenue = todayOrders.reduce((sum, order) => sum + order.total, 0);
    
    // Get unique customers
    const customers = [...new Set(orders.map(order => order.phone))];
    const newCustomers = customers.length;
    
    return {
        pendingOrders,
        todayOrders: todayOrders.length,
        todayRevenue,
        newCustomers,
        totalOrders: orders.length
    };
}

// Clear cart function (for order confirmation)
function clearCart() {
    cart = [];
    localStorage.removeItem('ydCart');
    updateCartDisplay();
}

// Global function to update cart display (accessible from order page)
window.updateCartDisplay = updateCartDisplay;

// Export functions for use in admin pages
if (typeof window !== 'undefined') {
    window.ydOrderSystem = {
        submitOrderToAdmin,
        generateOrderId,
        getStatusText,
        getStatusClass,
        loadAdminOrders,
        updateOrderStatus,
        deleteOrder,
        getOrderStats,
        clearCart,
        updateCartDisplay
    };
}