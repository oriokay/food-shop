// Main JavaScript for YD Healthy Food Jijel

// Supabase configuration
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
let supabase;

// Initialize Supabase client
function initSupabase() {
    if (typeof supabase !== 'undefined') {
        return supabase;
    }
    
    // Create supabase client if not exists
    if (typeof window.supabase === 'undefined') {
        window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return window.supabase;
}

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
        "nav-home": "الرئيسية",
        "nav-menu": "قائمة الطعام",
        "nav-order": "طلب",
        "nav-contact": "اتصل بنا",
        
        // Site title
        "site-title": "YD Healthy Food جيجل",
        
        // Home Page
        "hero-title": "طعام صحي ومتوازن في جيجل",
        "hero-text": "اطلب أطباقك الصحية المفضلة أونلاين واستلمها في منزلك أو في العمل. توصيل سريع في جميع أنحاء مدينة جيجل.",
        "hero-order-btn": "اطلب الآن",
        
        "about-title": "عن YD Healthy Food",
        "about-text-1": "نحن شغوفون بالطعام الصحي والمتوازن. مهمتنا هي توفير وجبات لذيذة ومغذية لعملائنا في جيجل.",
        "about-text-2": "جميع أطباقنا محضرة بمكونات طازجة وعالية الجودة بدون مواد حافظة أو إضافات صناعية.",
        
        "feature-1-title": "مكونات طازجة",
        "feature-1-text": "استخدام يومي لمكونات طازجة ومحلية",
        "feature-2-title": "توصيل سريع",
        "feature-2-text": "توصيل للمنزل في أقل من 45 دقيقة",
        "feature-3-title": "خيارات صحية",
        "feature-3-text": "أطباق متوازنة مع معلومات غذائية",
        
        "popular-title": "أطباقنا الشعبية",
        "view-menu-btn": "عرض القائمة الكاملة",
        
        // Menu Page
        "menu-page-title": "قائمتنا الكاملة",
        "menu-page-subtitle": "اكتشف جميع خياراتنا الصحية واللذيذة",
        "boxes-title": "بوكسات",
        "drinks-title": "المشروبات",
        "supplements-title": "الإضافات",
        "ready-to-order-title": "مستعد للطلب؟",
        "ready-to-order-text": "قم بطلبك أونلاين واستلم طعامك الصحي بسرعة!",
        "order-now-btn": "اطلب الآن",
        
        // Order Page
        "order-page-title": "تقديم طلب",
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
        
        "need-help-title": "بحاجة لمساعدة؟",
        "call-us-title": "اتصل بنا",
        "call-us-text": "0542299391",
        "hours-title": "ساعات العمل",
        "hours-text": "الاثنين - الأحد: 10:00 - 22:00",
        "delivery-info-title": "معلومات التوصيل",
        "delivery-info-text": "التوصيل: 150 دج (جيجل فقط)",
        "delivery-time-text": "وقت التوصيل: 30-45 دقيقة",
        
        // Contact Page
        "contact-page-title": "اتصل بنا",
        "contact-page-subtitle": "نحن هنا للإجابة على أسئلتك",
        "get-in-touch-title": "تواصل معنا",
        "get-in-touch-text": "يسعدنا سماع رأيك. لا تتردد في الاتصال بنا لأي سؤال أو طلب أو تعليق.",
        "phone-title": "الهاتف",
        "phone-number": "0542299391",
        "phone-hours": "الاثنين - الأحد: 10:00 - 22:00",
        "location-title": "العنوان",
        "location-text": "جيجل، الجزائر",
        "delivery-area": "منطقة التوصيل: جيجل فقط",
        "delivery-title": "التوصيل",
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
        "faq1-question": "ما هي منطقة التوصيل لديكم؟",
        "faq1-answer": "نقوم بالتوصيل فقط في مدينة جيجل. تكلفة التوصيل 150 دج.",
        "faq2-question": "ما هي ساعات العمل لديكم؟",
        "faq2-answer": "نحن مفتوحون من الاثنين إلى الأحد من الساعة 10:00 صباحًا حتى 10:00 مساءً.",
        "faq3-question": "هل يمكنني تعديل طلبي بعد تقديمه؟",
        "faq3-answer": "يمكنك تعديل طلبك في غضون 10 دقائق من التقديم عن طريق الاتصال بنا على 0542299391.",
        "faq4-question": "هل تقبلون الدفع عبر الإنترنت؟",
        "faq4-answer": "حالياً نقبل الدفع نقداً عند التوصيل أو الاستلام من المتجر.",
        
        // Footer
        "footer-slogan": "طعام صحي حياة متوازنة",
        "quick-links-title": "روابط سريعة",
        "contact-info-title": "معلومات الاتصال",
        "footer-text": "© 2023 YD Healthy Food Jijel. جميع الحقوق محفوظة.",
        
        // Shopping Cart
        "cart-title": "سلة التسوق",
        "cart-empty": "سلة التسوق فارغة",
        "cart-total": "المجموع:",
        "view-cart": "عرض السلة",
        "checkout": "إتمام الطلب",
        "remove": "إزالة",
        "add-to-cart": "أضف إلى السلة"
    }
};

// Menu items data (keep for fallback, but we'll fetch from Supabase)
const menuItemsData = [
    // Boxes
    { id: 1, category: 'boxes', name: { fr: "Riz escalop salad oeuf", ar: "أرز إسكالوب سلطة بيض" }, description: { fr: "Riz avec escalope, salade et œuf", ar: "أرز مع إسكالوب وسلطة وبيض" }, calories: 720, price: 350 },
    { id: 2, category: 'boxes', name: { fr: "Pasta escalop salad", ar: "باستا إسكالوب سلطة" }, description: { fr: "Pâtes avec escalope et salade", ar: "معكرونة مع إسكالوب وسلطة" }, calories: 750, price: 400 },
    { id: 3, category: 'boxes', name: { fr: "Soup citrouille avec un toast", ar: "شوربة قرع مع توست" }, description: { fr: "Soupe de citrouille servie avec un toast", ar: "شوربة قرع تقدم مع توست" }, calories: 500, price: 450 },
    { id: 4, category: 'boxes', name: { fr: "Bourgouil au poulet", ar: "برغل بالدجاج" }, description: { fr: "Boulgour au poulet", ar: "برغل بالدجاج" }, calories: 640, price: 450 },
    { id: 5, category: 'boxes', name: { fr: "Salad Cesar", ar: "سلطة سيزر" }, description: { fr: "Salade César classique", ar: "سلطة سيزر كلاسيكية" }, calories: 550, price: 300 },
    { id: 6, category: 'boxes', name: { fr: "Salad thon oeuf", ar: "سلطة تونة بيض" }, description: { fr: "Salade de thon avec œuf", ar: "سلطة تونة مع بيض" }, calories: 580, price: 400 },
    
    // Drinks
    { id: 7, category: 'drinks', name: { fr: "Jus banan date", ar: "عصير موز تمر" }, description: { fr: "Jus naturel de banane et datte", ar: "عصير طبيعي من الموز والتمر" }, calories: null, price: 300 },
    { id: 8, category: 'drinks', name: { fr: "Vishy", ar: "فيشي" }, description: { fr: "Eau minérale Vishy", ar: "مياه معدنية فيشي" }, calories: null, price: 70 },
    { id: 9, category: 'drinks', name: { fr: "Bouteille d'eau", ar: "قنينة ماء" }, description: { fr: "Bouteille d'eau minérale", ar: "قنينة ماء معدني" }, calories: null, price: 40 },
    
    // Supplements
    { id: 10, category: 'supplements', name: { fr: "Œuf supplémentaire", ar: "بيض إضافي" }, description: { fr: "Ajouter un œuf supplémentaire", ar: "إضافة بيضة إضافية" }, calories: null, price: 50 },
    { id: 11, category: 'supplements', name: { fr: "Escalop supplémentaire", ar: "إسكالوب إضافي" }, description: { fr: "Ajouter une escalope supplémentaire", ar: "إضافة إسكالوب إضافي" }, calories: null, price: 50 }
];

// Global variables
let currentLang = 'fr';
let cart = [];

// DOM elements
let langFrBtn, langArBtn;

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Initialize Supabase
        supabase = initSupabase();
        
        // Load cart from localStorage (keep for cart persistence)
        const savedCart = localStorage.getItem('ydCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
        
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
        
        // Load menu items from Supabase if on menu page
        if (window.location.pathname.includes('menu.html')) {
            await loadMenuItemsFromSupabase();
        }
        
        // Load orders if on dashboard page
        if (window.location.pathname.includes('dashboard.html')) {
            await loadDashboardOrders();
        }
        
        // Set up real-time subscriptions if on dashboard
        if (window.location.pathname.includes('dashboard.html')) {
            setupRealtimeSubscriptions();
        }
        
    } catch (error) {
        console.error('Error initializing app:', error);
        showNotification('Erreur de connexion à la base de données', 'error');
    }
});

// Load menu items from Supabase
async function loadMenuItemsFromSupabase() {
    try {
        const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .order('category')
            .order('id');
        
        if (error) throw error;
        
        if (data && data.length > 0) {
            // Update menu display with data from Supabase
            updateMenuDisplay(data);
        } else {
            // Fallback to local data if no data in Supabase
            console.log('No menu items in Supabase, using local data');
            updateMenuDisplay(menuItemsData);
        }
    } catch (error) {
        console.error('Error loading menu items:', error);
        // Fallback to local data
        updateMenuDisplay(menuItemsData);
        showNotification('Erreur de chargement du menu', 'error');
    }
}

// Update menu display with data
function updateMenuDisplay(items) {
    // Group items by category
    const boxesContainer = document.querySelector('.boxes-container');
    const drinksContainer = document.querySelector('.drinks-container');
    const supplementsContainer = document.querySelector('.supplements-container');
    
    if (boxesContainer) {
        boxesContainer.innerHTML = '';
        items.filter(item => item.category === 'boxes').forEach(item => {
            boxesContainer.appendChild(createMenuItemElement(item));
        });
    }
    
    if (drinksContainer) {
        drinksContainer.innerHTML = '';
        items.filter(item => item.category === 'drinks').forEach(item => {
            drinksContainer.appendChild(createMenuItemElement(item));
        });
    }
    
    if (supplementsContainer) {
        supplementsContainer.innerHTML = '';
        items.filter(item => item.category === 'supplements').forEach(item => {
            supplementsContainer.appendChild(createMenuItemElement(item));
        });
    }
}

// Create menu item element
function createMenuItemElement(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
        <div class="menu-item-content">
            <div class="item-header">
                <h3 class="item-name">${item.name[currentLang]}</h3>
                <span class="item-price">${item.price} DA</span>
            </div>
            <p class="item-description">${item.description[currentLang]}</p>
            ${item.calories ? `<span class="item-calories">${item.calories} cal</span>` : ''}
            <button class="add-to-cart-btn" data-id="${item.id}">${translations[currentLang]['add-to-cart']}</button>
        </div>
    `;
    return div;
}

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
    updateMenuItemsLanguage();
    
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
            const itemId = parseInt(e.target.getAttribute('data-id')) || Date.now();
            
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
    
    // Save cart to localStorage (keep for cart persistence)
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
function showNotification(message, type = 'success') {
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
        background: ${type === 'success' ? 'var(--primary-color)' : '#f44336'};
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

// Submit order to Supabase
async function submitOrderToSupabase(orderData) {
    try {
        // Ensure Supabase is initialized
        if (!supabase) {
            supabase = initSupabase();
        }
        
        // Generate order ID
        const orderId = 'ORD-' + Date.now().toString().slice(-6);
        
        // Create order object
        const order = {
            id: orderId,
            customer_name: orderData.customerName,
            customer_phone: orderData.customerPhone,
            delivery_type: orderData.deliveryType,
            delivery_address: orderData.deliveryAddress,
            items: orderData.items,
            total: orderData.total,
            notes: orderData.notes || '',
            status: 'new',
            created_at: new Date().toISOString()
        };
        
        // Insert into Supabase
        const { data, error } = await supabase
            .from('orders')
            .insert([order])
            .select();
        
        if (error) throw error;
        
        console.log('Order submitted successfully:', data);
        return orderId;
        
    } catch (error) {
        console.error('Error submitting order to Supabase:', error);
        showNotification('Erreur lors de la soumission de la commande', 'error');
        throw error;
    }
}

// Load orders from Supabase for admin dashboard
async function loadAdminOrdersFromSupabase(filter = 'all') {
    try {
        if (!supabase) {
            supabase = initSupabase();
        }
        
        let query = supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (filter !== 'all') {
            query = query.eq('status', filter);
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        return data || [];
        
    } catch (error) {
        console.error('Error loading orders from Supabase:', error);
        showNotification('Erreur de chargement des commandes', 'error');
        return [];
    }
}

// Update order status in Supabase
async function updateOrderStatusInSupabase(orderId, newStatus) {
    try {
        if (!supabase) {
            supabase = initSupabase();
        }
        
        const { data, error } = await supabase
            .from('orders')
            .update({ status: newStatus })
            .eq('id', orderId)
            .select();
        
        if (error) throw error;
        
        console.log('Order status updated successfully:', data);
        return true;
        
    } catch (error) {
        console.error('Error updating order status in Supabase:', error);
        showNotification('Erreur de mise à jour du statut', 'error');
        return false;
    }
}

// Delete order from Supabase
async function deleteOrderFromSupabase(orderId) {
    try {
        if (!supabase) {
            supabase = initSupabase();
        }
        
        const { error } = await supabase
            .from('orders')
            .delete()
            .eq('id', orderId);
        
        if (error) throw error;
        
        console.log('Order deleted successfully');
        return true;
        
    } catch (error) {
        console.error('Error deleting order from Supabase:', error);
        showNotification('Erreur de suppression de la commande', 'error');
        return false;
    }
}

// Get order statistics from Supabase
async function getOrderStatsFromSupabase() {
    try {
        if (!supabase) {
            supabase = initSupabase();
        }
        
        // Get today's date range
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Get all orders
        const { data: allOrders, error: allError } = await supabase
            .from('orders')
            .select('*');
        
        if (allError) throw allError;
        
        // Get today's orders
        const { data: todayOrders, error: todayError } = await supabase
            .from('orders')
            .select('*')
            .gte('created_at', today.toISOString())
            .lt('created_at', tomorrow.toISOString());
        
        if (todayError) throw todayError;
        
        // Get pending orders (new or preparing)
        const { data: pendingOrders, error: pendingError } = await supabase
            .from('orders')
            .select('*')
            .in('status', ['new', 'preparing']);
        
        if (pendingError) throw pendingError;
        
        // Get unique customers
        const uniqueCustomers = [...new Set(allOrders.map(order => order.customer_phone))];
        
        // Calculate today's revenue
        const todayRevenue = todayOrders.reduce((sum, order) => sum + order.total, 0);
        
        return {
            pendingOrders: pendingOrders.length,
            todayOrders: todayOrders.length,
            todayRevenue: todayRevenue,
            newCustomers: uniqueCustomers.length,
            totalOrders: allOrders.length
        };
        
    } catch (error) {
        console.error('Error getting order stats from Supabase:', error);
        return {
            pendingOrders: 0,
            todayOrders: 0,
            todayRevenue: 0,
            newCustomers: 0,
            totalOrders: 0
        };
    }
}

// Load orders for dashboard
async function loadDashboardOrders() {
    try {
        const orders = await loadAdminOrdersFromSupabase();
        displayDashboardOrders(orders);
    } catch (error) {
        console.error('Error loading dashboard orders:', error);
    }
}

// Display orders in dashboard
function displayDashboardOrders(orders) {
    const ordersContainer = document.getElementById('orders-list');
    if (!ordersContainer) return;
    
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p class="no-orders">Aucune commande trouvée</p>';
        return;
    }
    
    ordersContainer.innerHTML = orders.map(order => `
        <div class="order-card ${order.status}" data-order-id="${order.id}">
            <div class="order-header">
                <h3>Commande ${order.id}</h3>
                <span class="order-status ${getStatusClass(order.status)}">${getStatusText(order.status)}</span>
            </div>
            <div class="order-details">
                <p><strong>Client:</strong> ${order.customer_name}</p>
                <p><strong>Téléphone:</strong> ${order.customer_phone}</p>
                <p><strong>Date:</strong> ${new Date(order.created_at).toLocaleString()}</p>
                <p><strong>Total:</strong> ${order.total} DA</p>
            </div>
        </div>
    `).join('');
}

// Setup real-time subscriptions for dashboard
function setupRealtimeSubscriptions() {
    if (!supabase) return;
    
    // Subscribe to new orders
    supabase
        .channel('orders-channel')
        .on('postgres_changes', 
            { event: 'INSERT', schema: 'public', table: 'orders' },
            (payload) => {
                console.log('New order received:', payload);
                showNotification('Nouvelle commande reçue!', 'success');
                loadDashboardOrders();
            }
        )
        .on('postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'orders' },
            (payload) => {
                console.log('Order updated:', payload);
                loadDashboardOrders();
            }
        )
        .subscribe();
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

// Load orders for admin dashboard (backward compatibility)
function loadAdminOrders(filter = 'all') {
    // This function is kept for backward compatibility
    // Use loadAdminOrdersFromSupabase instead
    return loadAdminOrdersFromSupabase(filter);
}

// Update order status (backward compatibility)
function updateOrderStatus(orderId, newStatus) {
    // This function is kept for backward compatibility
    // Use updateOrderStatusInSupabase instead
    return updateOrderStatusInSupabase(orderId, newStatus);
}

// Delete order (backward compatibility)
function deleteOrder(orderId) {
    // This function is kept for backward compatibility
    // Use deleteOrderFromSupabase instead
    return deleteOrderFromSupabase(orderId);
}

// Get order statistics (backward compatibility)
function getOrderStats() {
    // This function is kept for backward compatibility
    // Use getOrderStatsFromSupabase instead
    return getOrderStatsFromSupabase();
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
        // Legacy functions (kept for backward compatibility)
        submitOrderToAdmin: submitOrderToSupabase,
        generateOrderId,
        getStatusText,
        getStatusClass,
        loadAdminOrders,
        updateOrderStatus,
        deleteOrder,
        getOrderStats,
        clearCart,
        updateCartDisplay,
        
        // New Supabase functions
        submitOrderToSupabase,
        loadAdminOrdersFromSupabase,
        updateOrderStatusInSupabase,
        deleteOrderFromSupabase,
        getOrderStatsFromSupabase
    };
}
