[file name]: script.js
[file content begin]
// Main JavaScript for YD Healthy Food Jijel
// Professional Architecture with Supabase Integration

// ==================== SUPABASE CONFIGURATION ====================
// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://frsygwxoxigzslprgosd.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyc3lnd3hveGlnenNscHJnb3NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NDM2NTYsImV4cCI6MjA4NjMxOTY1Nn0.oqQWd6dM9S5dbRai6mZ6OooNTa1N2e_euBvVkb2_xY0'; // Replace with your Supabase anon key

// Initialize Supabase client
let supabase;
try {
    if (window.supabase) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase client initialized');
    } else {
        console.warn('Supabase library not loaded');
    }
} catch (error) {
    console.error('Error initializing Supabase:', error);
}

// ==================== LANGUAGE SYSTEM ====================
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
        
        "send-message-title": "Envoyez-nus un Message",
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
        "nav-home": "الرئيسية",
        "nav-menu": "قائمة الطعام",
        "nav-order": "طلب",
        "nav-contact": "اتصل بنا",
        
        // Site title
        "site-title": "واي دي Healthy Food جيجل",
        
        // Home Page
        "hero-title": "طعام صحي ومتوازن في جيجل",
        "hero-text": "اطلب أطباقك الصحية المفضلة عبر الإنترنت واستلمها في منزلك أو عملك. توصيل سريع في جميع أنحاء مدينة جيجل.",
        "hero-order-btn": "اطلب الآن",
        
        "about-title": "عن YD Healthy Food",
        "about-text-1": "نحن شغوفون بالطعام الصحي والمتوازن. مهمتنا هي تقديم وجبات لذيذة ومغذية لعملائنا في جيجل.",
        "about-text-2": "جميع أطباقنا مصنوعة من مكونات طازجة وعالية الجودة، بدون مواد حافظة أو إضافات اصطناعية.",
        
        "feature-1-title": "مكونات طازجة",
        "feature-1-text": "استخدام يومي لمكونات طازجة ومحلية",
        "feature-2-title": "توصيل سريع",
        "feature-2-text": "توصيل إلى المنزل في أقل من 45 دقيقة",
        "feature-3-title": "خيارات صحية",
        "feature-3-text": "أطباق متوازنة مع معلومات غذائية",
        
        "popular-title": "أطباقنا الشعبية",
        "view-menu-btn": "عرض القائمة الكاملة",
        
        // Menu Page
        "menu-page-title": "قائمتنا الكاملة",
        "menu-page-subtitle": "اكتشف جميع خياراتنا الصحية واللذيذة",
        "boxes-title": "بوكسات",
        "drinks-title": "مشروبات",
        "supplements-title": "مكملات",
        "ready-to-order-title": "جاهز للطلب؟",
        "ready-to-order-text": "اطلب عبر الإنترنت واستلم طعامك الصحي بسرعة!",
        "order-now-btn": "اطلب الآن",
        
        // Order Page
        "order-page-title": "قدم طلبك",
        "order-page-subtitle": "املأ النموذج أدناه لطلب أطباقك المفضلة",
        "customer-info-title": "معلومات العميل",
        "name-label": "الاسم الكامل *",
        "phone-label": "رقم الهاتف *",
        "delivery-label": "نوع الطلب",
        "delivery-yes-label": "توصيل (150 دج - جيجل فقط)",
        "delivery-no-label": "استلام من المتجر",
        "address-label": "عنوان التوصيل *",
        "order-items-title": "طلبك",
        "empty-order-text": "سلة التسوق فارغة. أضف عناصر من القائمة.",
        "total-text": "المجموع:",
        "notes-label": "ملاحظات خاصة (اختياري)",
        "submit-order": "تأكيد الطلب",
        "order-note": "سنتصل بك لتأكيد طلبك خلال 15 دقيقة.",
        
        "need-help-title": "تحتاج مساعدة؟",
        "call-us-title": "اتصل بنا",
        "call-us-text": "0542299391",
        "hours-title": "ساعات العمل",
        "hours-text": "الإثنين - الأحد: 10:00 - 22:00",
        "delivery-info-title": "معلومات التوصيل",
        "delivery-info-text": "التوصيل: 150 دج (جيجل فقط)",
        "delivery-time-text": "وقت التوصيل: 30-45 دقيقة",
        
        // Contact Page
        "contact-page-title": "اتصل بنا",
        "contact-page-subtitle": "نحن هنا للإجابة على أسئلتك",
        "get-in-touch-title": "تواصل معنا",
        "get-in-touch-text": "يسعدنا أن نسمع منك. لا تتردد في الاتصال بنا لأي سؤال أو طلب أو ملاحظات.",
        "phone-title": "هاتف",
        "phone-number": "0542299391",
        "phone-hours": "الإثنين - الأحد: 10:00 - 22:00",
        "location-title": "العنوان",
        "location-text": "جيجل، الجزائر",
        "delivery-area": "منطقة التوصيل: جيجل فقط",
        "delivery-title": "توصيل",
        "delivery-cost": "التكلفة: 150 دج",
        "delivery-time": "الوقت: 30-45 دقيقة",
        "follow-us-title": "تابعنا على وسائل التواصل الاجتماعي",
        
        "send-message-title": "أرسل لنا رسالة",
        "contact-name-label": "الاسم الكامل *",
        "contact-phone-label": "رقم الهاتف *",
        "contact-email-label": "البريد الإلكتروني (اختياري)",
        "contact-subject-label": "الموضوع *",
        "contact-message-label": "الرسالة *",
        "submit-contact": "إرسال الرسالة",
        
        "faq-title": "الأسئلة الشائعة",
        "faq1-question": "ما هي منطقة التوصيل الخاصة بك؟",
        "faq1-answer": "نحن نوصّل فقط في مدينة جيجل. تكلفة التوصيل 150 دج.",
        "faq2-question": "ما هي ساعات عملكم؟",
        "faq2-answer": "نحن مفتوحون من الإثنين إلى الأحد، من الساعة 10:00 حتى 22:00.",
        "faq3-question": "هل يمكنني تعديل طلبي بعد تقديمه؟",
        "faq3-answer": "يمكنك تعديل طلبك خلال 10 دقائق من التقديم عن طريق الاتصال بنا على 0542299391.",
        "faq4-question": "هل تقبلون الدفع الإلكتروني؟",
        "faq4-answer": "في الوقت الحالي، نقبل فقط الدفع نقدًا عند الاستلام أو عند الاستلام من المتجر.",
        
        // Footer
        "footer-slogan": "طعام صحي، حياة متوازنة",
        "quick-links-title": "روابط سريعة",
        "contact-info-title": "معلومات الاتصال",
        "footer-text": "© 2023 YD Healthy Food Jijel. جميع الحقوق محفوظة.",
        
        // Shopping Cart
        "cart-title": "سلة التسوق",
        "cart-empty": "سلة التسوق فارغة",
        "cart-total": "المجموع:",
        "view-cart": "عرض السلة",
        "checkout": "طلب",
        "remove": "إزالة",
        "add-to-cart": "أضف إلى السلة"
    }
};

// Menu items data
const menuItemsData = [
    // Boxes
    { id: 1, category: 'boxes', name: { fr: "Riz escalop salad oeuf", ar: "أرز إسكالوب سلطة بيض" }, description: { fr: "Riz avec escalope, salade et œuf", ar: "أرز مع إسكالوب وسلطة وبيض" }, calories: 720, price: 350 },
    { id: 2, category: 'boxes', name: { fr: "Pasta escalop salad", ar: "باستا إسكالوب سلطة" }, description: { fr: "Pâtes avec escalope et salade", ar: "مكرونة مع إسكالوب وسلطة" }, calories: 750, price: 400 },
    { id: 3, category: 'boxes', name: { fr: "Soup citrouille avec un toast", ar: "شوربة قرع مع توست" }, description: { fr: "Soupe de citrouille servie avec un toast", ar: "شوربة قرع تقدم مع توست" }, calories: 500, price: 450 },
    { id: 4, category: 'boxes', name: { fr: "Bourgouil au poulet", ar: "برغل بالدجاج" }, description: { fr: "Boulgour au poulet", ar: "برغل مع دجاج" }, calories: 640, price: 450 },
    { id: 5, category: 'boxes', name: { fr: "Salad Cesar", ar: "سلطة سيزر" }, description: { fr: "Salade César classique", ar: "سلطة سيزر كلاسيكية" }, calories: 550, price: 300 },
    { id: 6, category: 'boxes', name: { fr: "Salad thon oeuf", ar: "سلطة تونة بيض" }, description: { fr: "Salade de thon avec œuf", ar: "سلطة تونة مع بيض" }, calories: 580, price: 400 },
    
    // Drinks
    { id: 7, category: 'drinks', name: { fr: "Jus banan date", ar: "عصير موز تمر" }, description: { fr: "Jus naturel de banane et datte", ar: "عصير طبيعي من الموز والتمر" }, calories: null, price: 300 },
    { id: 8, category: 'drinks', name: { fr: "Vishy", ar: "فيشي" }, description: { fr: "Eau minérale Vishy", ar: "ماء معدني فيشي" }, calories: null, price: 70 },
    { id: 9, category: 'drinks', name: { fr: "Bouteille d'eau", ar: "زجاجة ماء" }, description: { fr: "Bouteille d'eau minérale", ar: "زجاجة ماء معدني" }, calories: null, price: 40 },
    
    // Supplements
    { id: 10, category: 'supplements', name: { fr: "Œuf supplémentaire", ar: "بيض إضافي" }, description: { fr: "Ajouter un œuf supplémentaire", ar: "إضافة بيضة إضافية" }, calories: null, price: 50 },
    { id: 11, category: 'supplements', name: { fr: "Escalop supplémentaire", ar: "إسكالوب إضافي" }, description: { fr: "Ajouter une escalope supplémentaire", ar: "إضافة إسكالوب إضافي" }, calories: null, price: 50 }
];

// ==================== SHOPPING CART SYSTEM (LOCALSTORAGE) ====================
let cart = JSON.parse(localStorage.getItem("ydCart")) || [];

function saveCart() {
    localStorage.setItem("ydCart", JSON.stringify(cart));
    updateCartUI();
}

function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    saveCart();
    showNotification(`${name} ajouté au panier`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

function updateCartQuantity(id, change) {
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
        }
    }
}

function clearCart() {
    cart = [];
    saveCart();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// ==================== ORDER SUBMISSION (SUPABASE) ====================
async function submitOrderToDatabase(orderData) {
    if (!supabase) {
        console.error('Supabase not initialized');
        alert('Erreur: Système de commande non disponible. Veuillez nous appeler au 0542299391');
        return false;
    }

    try {
        const { data, error } = await supabase
            .from("orders")
            .insert([orderData])
            .select();

        if (error) {
            console.error("Database error:", error);
            alert("Erreur lors de l'envoi de la commande. Veuillez nous appeler au 0542299391");
            return false;
        }

        console.log("Order submitted successfully:", data);
        return true;
    } catch (error) {
        console.error("Error submitting order:", error);
        alert("Erreur réseau. Veuillez nous appeler au 0542299391");
        return false;
    }
}

// ==================== MAIN ORDER CONFIRMATION FUNCTION ====================
async function confirmOrder() {
    // Get form data
    const customerName = document.getElementById('customer-name')?.value;
    const customerPhone = document.getElementById('customer-phone')?.value;
    const deliveryType = document.querySelector('input[name="delivery"]:checked')?.value;
    const customerAddress = document.getElementById('customer-address')?.value || '';
    const specialNotes = document.getElementById('special-notes')?.value || '';

    // Validate
    if (!customerName || !customerPhone) {
        alert('Veuillez remplir tous les champs obligatoires (*)');
        return;
    }

    if (deliveryType === 'yes' && !customerAddress) {
        alert('Veuillez entrer votre adresse de livraison');
        return;
    }

    if (cart.length === 0) {
        alert('Votre panier est vide. Veuillez ajouter des articles.');
        return;
    }

    // Calculate total with delivery cost
    let total = getCartTotal();
    const deliveryCost = (deliveryType === 'yes') ? 150 : 0;
    total += deliveryCost;

    // Prepare order data for database
    const orderData = {
        customer_name: customerName,
        phone: customerPhone,
        delivery_type: deliveryType === 'yes' ? 'delivery' : 'pickup',
        address: deliveryType === 'yes' ? customerAddress : '',
        notes: specialNotes,
        items: cart,
        subtotal: getCartTotal(),
        delivery_cost: deliveryCost,
        total: total,
        status: 'new',
        created_at: new Date().toISOString()
    };

    // Show confirmation
    const orderSummary = `
        Récapitulatif de commande:
        
        Client: ${customerName}
        Téléphone: ${customerPhone}
        Type: ${deliveryType === 'yes' ? 'Livraison' : 'Ramassage'}
        ${deliveryType === 'yes' ? `Adresse: ${customerAddress}` : ''}
        
        Articles:
        ${cart.map(item => `  ${item.name} x${item.quantity} = ${item.price * item.quantity} DA`).join('\n')}
        
        Sous-total: ${getCartTotal()} DA
        ${deliveryType === 'yes' ? `Livraison: ${deliveryCost} DA` : ''}
        Total: ${total} DA
        
        ${specialNotes ? `Notes: ${specialNotes}` : ''}
    `;

    const confirmed = confirm(`${orderSummary}\n\nConfirmer cette commande?`);
    
    if (!confirmed) return;

    // Submit to database
    const loadingAlert = alert('Envoi de votre commande...');
    
    const success = await submitOrderToDatabase(orderData);
    
    if (success) {
        alert('Commande confirmée! Nous vous contacterons dans les 15 minutes.');
        clearCart();
        
        // Clear form
        if (document.getElementById('order-form')) {
            document.getElementById('order-form').reset();
        }
        
        // Redirect to home after 3 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }
}

// ==================== UI FUNCTIONS ====================
function updateCartUI() {
    // Update cart count badge
    const cartBadge = document.querySelector('.cart-icon-badge');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    const count = getCartCount();
    const total = getCartTotal();
    
    if (cartBadge) cartBadge.textContent = count;
    if (cartCount) cartCount.textContent = count;
    if (cartTotalPrice) cartTotalPrice.textContent = `${total} DA`;
    
    // Update cart items list
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-cart"></i>
                    <p>${translations[currentLang]['cart-empty']}</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
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
                        <button class="remove-btn" data-id="${item.id}">
                            ${translations[currentLang]['remove']}
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners
            cartItemsContainer.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    updateCartQuantity(id, -1);
                });
            });
            
            cartItemsContainer.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    updateCartQuantity(id, 1);
                });
            });
            
            cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    removeFromCart(id);
                });
            });
        }
    }
    
    // Update order page display
    updateOrderPageDisplay();
}

function updateOrderPageDisplay() {
    if (!window.location.pathname.includes('order.html')) return;
    
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');
    const addressGroup = document.getElementById('address-group');
    
    if (orderSummary) {
        if (cart.length === 0) {
            orderSummary.innerHTML = `
                <div class="empty-order">
                    <i class="fas fa-shopping-cart"></i>
                    <p>${translations[currentLang]['empty-order-text']}</p>
                </div>
            `;
        } else {
            orderSummary.innerHTML = cart.map(item => `
                <div class="order-item editable">
                    <div class="order-item-info">
                        <span class="order-item-name">${item.name}</span>
                        <div class="order-item-controls">
                            <div class="quantity-control">
                                <button class="quantity-btn minus" data-id="${item.id}" type="button">-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${item.id}" type="button">+</button>
                            </div>
                            <span class="order-item-price">${item.price * item.quantity} DA</span>
                            <button class="remove-order-item" data-id="${item.id}" type="button">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners for order page controls
            orderSummary.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    updateCartQuantity(id, -1);
                });
            });
            
            orderSummary.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    updateCartQuantity(id, 1);
                });
            });
            
            orderSummary.querySelectorAll('.remove-order-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    removeFromCart(id);
                });
            });
        }
    }
    
    // Update total
    if (orderTotal) {
        const deliveryType = document.querySelector('input[name="delivery"]:checked')?.value;
        const deliveryCost = (deliveryType === 'yes') ? 150 : 0;
        const total = getCartTotal() + deliveryCost;
        orderTotal.textContent = `${total} DA`;
    }
    
    // Update address group visibility
    if (addressGroup) {
        const deliveryYes = document.getElementById('delivery-yes');
        if (deliveryYes && deliveryYes.checked) {
            addressGroup.style.display = 'block';
        } else {
            addressGroup.style.display = 'none';
        }
    }
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
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== LANGUAGE SYSTEM ====================
let currentLang = localStorage.getItem('ydLanguage') || 'fr';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ydLanguage', lang);
    
    // Update UI
    updateLanguageUI();
    updateCartUI();
}

function updateLanguageUI() {
    // Update language buttons
    const langFrBtn = document.getElementById('lang-fr');
    const langArBtn = document.getElementById('lang-ar');
    
    if (langFrBtn && langArBtn) {
        langFrBtn.classList.toggle('active', currentLang === 'fr');
        langArBtn.classList.toggle('active', currentLang === 'ar');
        document.body.classList.toggle('ar', currentLang === 'ar');
    }
    
    // Update all translatable text
    Object.keys(translations[currentLang]).forEach(key => {
        const elements = document.querySelectorAll(`[id="${key}"]`);
        elements.forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        });
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    updateLanguageUI();
    
    // Set up language switchers
    document.getElementById('lang-fr')?.addEventListener('click', () => switchLanguage('fr'));
    document.getElementById('lang-ar')?.addEventListener('click', () => switchLanguage('ar'));
    
    // Create shopping cart UI if not on admin pages
    if (!window.location.pathname.includes('admin') && 
        !window.location.pathname.includes('dashboard')) {
        createCartUI();
    }
    
    // Update cart UI
    updateCartUI();
    
    // Set up add to cart buttons
    setupAddToCartButtons();
    
    // Set up order form submission
    setupOrderForm();
    
    // Set up delivery toggle
    setupDeliveryToggle();
});

function createCartUI() {
    // Check if cart already exists
    if (document.getElementById('shopping-cart')) return;
    
    // Create cart container
    const cartContainer = document.createElement('div');
    cartContainer.id = 'shopping-cart';
    cartContainer.className = 'cart-container';
    cartContainer.innerHTML = `
        <div class="cart-header">
            <h3>${translations[currentLang]['cart-title']}</h3>
            <div class="cart-count">${getCartCount()}</div>
            <button class="cart-close">&times;</button>
        </div>
        <div class="cart-content">
            <div class="cart-items" id="cart-items"></div>
            <div class="cart-total">
                <span>${translations[currentLang]['cart-total']}</span>
                <span id="cart-total-price">${getCartTotal()} DA</span>
            </div>
            <div class="cart-actions">
                <a href="order.html" class="cart-action-btn view-cart-btn">${translations[currentLang]['view-cart']}</a>
                <a href="order.html" class="cart-action-btn checkout-btn">${translations[currentLang]['checkout']}</a>
            </div>
        </div>
    `;
    
    // Create floating cart button
    const floatingBtn = document.createElement('div');
    floatingBtn.className = 'floating-cart-btn';
    floatingBtn.innerHTML = `
        <i class="fas fa-shopping-cart"></i>
        <div class="cart-icon-badge">${getCartCount()}</div>
    `;
    
    document.body.appendChild(cartContainer);
    document.body.appendChild(floatingBtn);
    
    // Add event listeners
    floatingBtn.addEventListener('click', () => {
        cartContainer.classList.toggle('open');
    });
    
    cartContainer.querySelector('.cart-header').addEventListener('click', () => {
        cartContainer.classList.toggle('open');
    });
    
    cartContainer.querySelector('.cart-close').addEventListener('click', (e) => {
        e.stopPropagation();
        cartContainer.classList.remove('open');
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartContainer.contains(e.target) && !e.target.closest('.floating-cart-btn')) {
            cartContainer.classList.remove('open');
        }
    });
}

function setupAddToCartButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            
            // Get item info
            const menuItem = e.target.closest('.menu-item');
            if (!menuItem) return;
            
            const itemName = menuItem.querySelector('.item-name')?.textContent;
            const itemPriceText = menuItem.querySelector('.item-price')?.textContent;
            
            if (!itemName || !itemPriceText) return;
            
            const itemPrice = parseInt(itemPriceText.replace(' DA', '').trim());
            const itemId = Date.now(); // Simple ID generation
            
            // Add to cart
            addToCart(itemId, itemName, itemPrice);
            
            // Open cart
            const cartContainer = document.getElementById('shopping-cart');
            if (cartContainer) {
                cartContainer.classList.add('open');
            }
        }
    });
}

function setupOrderForm() {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            confirmOrder();
        });
    }
}

function setupDeliveryToggle() {
    const deliveryYes = document.getElementById('delivery-yes');
    const deliveryNo = document.getElementById('delivery-no');
    const addressGroup = document.getElementById('address-group');
    
    if (deliveryYes && deliveryNo && addressGroup) {
        const updateAddressField = () => {
            const addressInput = document.getElementById('customer-address');
            if (deliveryYes.checked) {
                addressGroup.style.display = 'block';
                if (addressInput) addressInput.required = true;
            } else {
                addressGroup.style.display = 'none';
                if (addressInput) addressInput.required = false;
            }
            updateCartUI();
        };
        
        deliveryYes.addEventListener('change', updateAddressField);
        deliveryNo.addEventListener('change', updateAddressField);
        updateAddressField();
    }
}

// ==================== EXPORT FUNCTIONS FOR ADMIN ====================
window.ydOrderSystem = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    confirmOrder,
    updateCartUI
};
[file content end]


