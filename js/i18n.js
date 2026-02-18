const translations = {
    fr: {
        'site-title': 'YD Healthy Food Jijel',
        'nav-home': 'Accueil',
        'nav-menu': 'Menu',
        'nav-order': 'Commander',
        'nav-contact': 'Contact',
        'hero-title': 'Mangez sainement, vivez mieux!',
        'hero-subtitle': 'Découvrez nos délicieux plats healthy à Jijel',
        'hero-cta': 'Voir le menu',
        'feature1': '100% Healthy',
        'feature1-desc': 'Des ingrédients frais et naturels',
        'feature2': 'Livraison à Jijel',
        'feature2-desc': '150DA de frais de livraison',
        'feature3': 'Préparation rapide',
        'feature3-desc': 'Commandez et dégustez',
        'popular-title': 'Nos plats populaires',
        'footer-contact': 'Contactez-nous',
        'footer-hours': 'Heures d\'ouverture',
        'footer-delivery': 'Livraison',
        'footer-delivery-text': '150DA dans tout Jijel',
        'order-title': 'Passer une commande',
        'customer-info': 'Informations client',
        'customer-name': 'Nom complet',
        'customer-phone': 'Numéro de téléphone',
        'delivery-address': 'Adresse de livraison',
        'menu-title': 'Notre Menu',
        'boxes': 'Boxes',
        'supplements': 'Suppléments (+50DA)',
        'drinks': 'Boissons',
        'order-summary': 'Récapitulatif',
        'subtotal': 'Sous-total',
        'delivery': 'Livraison',
        'total': 'Total',
        'place-order': 'Confirmer la commande',
        'order-confirmed': 'Commande confirmée!',
        'order-thanks': 'Merci pour votre commande. Nous vous contacterons bientôt.',
        'calories': 'Calories',
        'add-to-order': 'Ajouter',
        'remove': 'Retirer',
        'quantity': 'Quantité',
        'contact-title': 'Contactez-nous',
        'phone': 'Téléphone',
        'social-media': 'Réseaux sociaux',
        'follow-us': 'Suivez-nous sur',
        'facebook': 'Facebook',
        'instagram': 'Instagram',
        'tiktok': 'TikTok',
        'delivery-info': 'Informations de livraison',
        'delivery-details': 'Livraison disponible uniquement à Jijel - 150DA'
    },
    ar: {
        'nav-dashboard': 'Dashboard',
        'nav-dashboard': 'لوحة التحكم',
        'site-title': 'واي دي Healthy Food جيجل',
        'nav-home': 'الرئيسية',
        'nav-menu': 'القائمة',
        'nav-order': 'اطلب',
        'nav-contact': 'اتصل بنا',
        'hero-title': 'كل صحي، عيش أفضل!',
        'hero-subtitle': 'اكتشف أطباقنا الصحية اللذيذة في جيجل',
        'hero-cta': 'شاهد القائمة',
        'feature1': 'صحي 100%',
        'feature1-desc': 'مكونات طازجة وطبيعية',
        'feature2': 'توصيل إلى جيجل',
        'feature2-desc': '150 دج رسوم التوصيل',
        'feature3': 'تحضير سريع',
        'feature3-desc': 'اطلب واستمتع',
        'popular-title': 'أطباقنا الشعبية',
        'footer-contact': 'اتصل بنا',
        'footer-hours': 'ساعات العمل',
        'footer-delivery': 'التوصيل',
        'footer-delivery-text': '150 دج في جميع أنحاء جيجل',
        'order-title': 'تقديم طلب',
        'customer-info': 'معلومات العميل',
        'customer-name': 'الاسم الكامل',
        'customer-phone': 'رقم الهاتف',
        'delivery-address': 'عنوان التوصيل',
        'menu-title': 'قائمة الطعام',
        'boxes': 'الصناديق',
        'supplements': 'الإضافات (+50 دج)',
        'drinks': 'المشروبات',
        'order-summary': 'ملخص الطلب',
        'subtotal': 'المجموع الفرعي',
        'delivery': 'التوصيل',
        'total': 'المجموع الكلي',
        'place-order': 'تأكيد الطلب',
        'order-confirmed': 'تم تأكيد الطلب!',
        'order-thanks': 'شكراً لطلبك. سنتصل بك قريباً.',
        'calories': 'سعرة حرارية',
        'add-to-order': 'أضف',
        'remove': 'إزالة',
        'quantity': 'الكمية',
        'contact-title': 'اتصل بنا',
        'phone': 'الهاتف',
        'social-media': 'وسائل التواصل',
        'follow-us': 'تابعنا على',
        'facebook': 'فيسبوك',
        'instagram': 'انستغرام',
        'tiktok': 'تيك توك',
        'delivery-info': 'معلومات التوصيل',
        'delivery-details': 'التوصيل متوفر فقط في جيجل - 150 دج'
    }
};

let currentLanguage = 'fr';

function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(lang.toUpperCase())) {
            btn.classList.add('active');
        }
    });
    
    // Store preference
    localStorage.setItem('preferred-language', lang);
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    switchLanguage(savedLang);
});
