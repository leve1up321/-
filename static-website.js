// Language and Currency System
const languages = {
    ar: {
        // Navigation
        home: "الرئيسية",
        products: "المنتجات",
        reviews: "التقييمات",
        contact: "اتصل بنا",
        
        // Hero Section
        heroTitle: "متجر لفل اب",
        heroSubtitle: "💡 ابدأ من الصفر وابنِ أول دخل رقمي لك اليوم!",
        heroDescription: "اكتشف كيف تحوّل مهاراتك أو وقتك إلى مصدر دخل مستمر من خلال بيع منتجات رقمية بسيطة تحقق لك أرباحًا حتى أثناء نومك 😴💰",
        startJourney: "ابدأ رحلتك الآن",
        shopNow: "تسوق الآن",
        
        // Products
        ourProducts: "منتجاتنا",
        productsSubtitle: "اكتشف مجموعتنا المميزة من المنتجات الرقمية",
        addToCart: "إضافة للسلة",
        viewDetails: "عرض التفاصيل",
        
        // Cart
        cart: "سلة التسوق",
        emptyCart: "السلة فارغة",
        total: "المجموع",
        checkout: "إتمام الشراء",
        
        // Footer
        footerTitle: "متجر لفل اب",
        footerDescription: "وجهتك لبناء مشروعك الرقمي",
        footerSubDescription: "💡 ابدأ من الصفر وابنِ أول دخل رقمي لك اليوم",
        quickLinks: "روابط سريعة",
        contactUs: "تواصل معنا",
        allRightsReserved: "جميع الحقوق محفوظة",
        
        // Messages
        addedToCart: "تم إضافة المنتج إلى السلة",
        removedFromCart: "تم حذف المنتج من السلة",
        checkoutSuccess: "شكراً لك! تم إتمام الطلب بنجاح.",
        checkoutProcessing: "سيتم توجيهك لصفحة الدفع...",
        emptyCartError: "السلة فارغة!",
        
        // Product Details
        backToHome: "العودة للرئيسية",
        productDescription: "وصف المنتج"
        ,
        
        // FAQ Section
        faqTitle: "الأسئلة الشائعة",
        faqSubtitle: "إجابات على أهم الأسئلة التي قد تخطر ببالك"
    },
    en: {
        // Navigation
        home: "Home",
        products: "Products",
        reviews: "Reviews",
        contact: "Contact",
        
        // Hero Section
        heroTitle: "Level Up Store",
        heroSubtitle: "💡 Start from scratch and build your first digital income today!",
        heroDescription: "Discover how to turn your skills or time into a continuous income source by selling simple digital products that generate profits even while you sleep 😴💰",
        startJourney: "Start Your Journey Now",
        shopNow: "Shop Now",
        
        // Products
        ourProducts: "Our Products",
        productsSubtitle: "Discover our premium collection of digital products",
        addToCart: "Add to Cart",
        viewDetails: "View Details",
        
        // Cart
        cart: "Shopping Cart",
        emptyCart: "Cart is empty",
        total: "Total",
        checkout: "Checkout",
        
        // Footer
        footerTitle: "Level Up Store",
        footerDescription: "Your destination for building your digital business",
        footerSubDescription: "💡 Start from scratch and build your first digital income today",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        allRightsReserved: "All rights reserved",
        
        // Messages
        addedToCart: "Product added to cart",
        removedFromCart: "Product removed from cart",
        checkoutSuccess: "Thank you! Order completed successfully.",
        checkoutProcessing: "Redirecting to payment page...",
        emptyCartError: "Cart is empty!",
        
        // Product Details
        backToHome: "Back to Home",
        productDescription: "Product Description"
        ,
        
        // FAQ Section
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Answers to the most important questions you might have"
    }
};

const currencies = {
    SAR: { symbol: "ريال", rate: 1, name: "الريال السعودي" },
    USD: { symbol: "$", rate: 0.27, name: "US Dollar" },
    EUR: { symbol: "€", rate: 0.25, name: "Euro" },
    AED: { symbol: "درهم", rate: 1, name: "الدرهم الإماراتي" },
    EGP: { symbol: "جنيه", rate: 8.4, name: "الجنيه المصري" }
};

// Current settings
let currentLanguage = localStorage.getItem('levelup-language') || 'ar';
let currentCurrency = localStorage.getItem('levelup-currency') || 'SAR';

// Sample products data
const products = [
    {
        id: 1,
        title: "15 فكرة مشروع رقمي مربح",
        shortDescription: "دليلك العملي لبدء مشروعك الرقمي من الصفر وبناء مصدر دخل حقيقي من الإنترنت مع أكثر من 15 فكرة جاهزة للتنفيذ.",
        description: "هل فكرت يومًا تبدأ مشروعك الرقمي، لكن ما عرفت من وين تبدأ؟ هذا الكتاب هو دليلك العملي لتبدأ من الصفر وتبني مصدر دخل حقيقي من الإنترنت.",
        fullDescription: `
            <h3>🚀 عن الكتاب</h3>
            <p>يقدّم لك هذا الكتاب أكثر من 15 فكرة مشروع رقمي جاهزة للتنفيذ، تقدر تبدأها من بيتك وبدون رأس مال كبير، مع شرح كامل لكل فكرة خطوة بخطوة.</p>
            
            <h3>📘 ما ستتعلمه داخل الكتاب:</h3>
            <ul>
                <li>كيف تختار الفكرة المناسبة لقدراتك ومهاراتك</li>
                <li>أدوات بسيطة لبدء مشروعك خلال يوم واحد فقط</li>
                <li>أفكار مشاريع رقمية مجرّبة تحقق أرباحًا حقيقية</li>
                <li>خطة عملية لتوسيع دخلك وتطوير عملك أونلاين</li>
                <li>أسرار النجاح في التسويق عبر TikTok وInstagram وYouTube</li>
            </ul>
            
            <h3>💡 أمثلة من المشاريع داخل الكتاب:</h3>
            <ul>
                <li>إنشاء قناة YouTube ناجحة</li>
                <li>بيع المنتجات الرقمية</li>
                <li>التسويق بالعمولة</li>
                <li>إنشاء متجر إلكتروني صغير</li>
                <li>تقديم خدمات الذكاء الاصطناعي</li>
            </ul>
            
            <h3>📦 ما ستحصل عليه:</h3>
            <ul>
                <li>كتاب رقمي بصيغة PDF تفاعلي جاهز للتحميل الفوري</li>
                <li>تصميم عصري مريح للقراءة</li>
                <li>محتوى تطبيقي وليس نظري</li>
            </ul>
        `,
        price: 57,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center",
        category: "كتب رقمية",
        features: ["PDF تفاعلي", "تحميل فوري", "15+ فكرة مشروع", "خطة عملية"],
        pages: "25 صفحة",
        readingTime: "30 دقيقة"
    },
    {
        id: 2,
        title: "الربح من المنتجات الرقمية",
        shortDescription: "الخطة الكاملة خطوة بخطوة لتبدأ مشروعك الرقمي الأول وتبني دخل حقيقي من الإنترنت.",
        description: "تتعب بالشغل كل يوم… لكن دايم تسأل نفسك: ليش غيري يربح من الإنترنت وأنا لأ؟ 💭 الجواب بسيط: لأنهم عرفوا كيف يحولون مهاراتهم إلى منتجات رقمية تبيع عنهم حتى وهم نايمين 😴💰",
        fullDescription: `
            <h3>🚀 لماذا هذا الكتاب؟</h3>
            <p>والآن، هذا الكتاب بيعطيك الخطة الكاملة خطوة بخطوة لتبدأ مشروعك الرقمي الأول وتبني دخل حقيقي من الإنترنت</p>
            
            <h3>📚 ما الذي ستتعلمه:</h3>
            <ul>
                <li>ما هي المنتجات الرقمية ولماذا تعتبر أسرع وأذكى طريقة لبناء دخل مستمر</li>
                <li>أنواع المنتجات الرقمية الأكثر مبيعًا (كتب، كورسات، قوالب، أدوات مونتاج)</li>
                <li>كيف تختار فكرة منتج تضمن لك المبيعات وتناسب مهاراتك</li>
                <li>الأدوات والمنصات التي يحتاجها أي شخص للانطلاق فورًا</li>
                <li>طريقة إنشاء متجرك الرقمي وبدء البيع خلال يوم واحد فقط</li>
                <li>أساليب التسويق الحديثة عبر TikTok وInstagram وSEO</li>
                <li>أسرار بناء دخل سلبي يجلب لك المال حتى أثناء نومك!</li>
            </ul>
            
            <h3>🎁 مميزات الكتاب:</h3>
            <ul>
                <li>سهل وواضح</li>
                <li>مختصر وفعّال</li>
                <li>بصيغة PDF</li>
                <li>تصميم احترافي</li>
                <li>مبني على خبرة حقيقية</li>
            </ul>
        `,
        price: 39,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop&crop=center",
        category: "كتب رقمية",
        features: ["PDF احترافي", "تحميل فوري", "خبرة حقيقية", "دخل سلبي"],
        pages: "10 صفحات",
        readingTime: "20 دقيقة"
    },
    {
        id: 3,
        title: "الدليل التمهيدي للربح من المنتجات الرقمية",
        shortDescription: "دليل تمهيدي بسيط يساعدك تفهم الخطوات الأساسية لبناء منتج رقمي ناجح - مثالي للمبتدئين.",
        description: "هل فكرت يومًا ليش غيرك يربح من الإنترنت بسهولة بينما أنت ما زلت محتار من أين تبدأ؟ هذا الدليل التمهيدي بيساعدك تفهم الخطوات الأساسية لبناء منتج رقمي ناجح يبيع حتى وأنت نايم 😴💰",
        fullDescription: `
            <h3>📘 ما ستتعلمه في هذا الدليل:</h3>
            <ul>
                <li>كيف تختار فكرة منتج رقمي مربحة</li>
                <li>الأساسيات اللي لازم تبني عليها متجرك أو صفحتك</li>
                <li>كيف تسوّق صح بدون ما تضيع وقتك ومالك</li>
            </ul>
            
            <h3>💡 ملاحظة مهمة:</h3>
            <p>هذا الكتاب هو مقدمة بسيطة من الكتاب الكامل "خطة بناء مشروعك الرقمي من الصفر"، اللي فيه روابط مباشرة لأدوات، ومواقع عملية تساعدك تبدأ فورًا 🚀</p>
            
            <h3>🎯 لمن هذا الكتاب؟</h3>
            <p>مثالي للمبتدئين اللي يبون يفهمون الأساسيات قبل ما يستثمرون في الكتب الأكبر.</p>
            
            <h3>💰 استثمار بسيط:</h3>
            <p>استثمر ٤ ريال فقط وخذ أول خطوة في طريقك للربح من الإنترنت 💡</p>
        `,
        price: 4,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop&crop=center",
        category: "كتب رقمية",
        features: ["دليل للمبتدئين", "أساسيات مهمة", "سعر مناسب", "خطوة أولى"],
        pages: "5 صفحات",
        readingTime: "10 دقائق"
    }
];

// Enhanced Cart functionality with better localStorage management
let cart = [];

// Load cart from localStorage
function loadCart() {
    try {
        const savedCart = localStorage.getItem('levelup-cart');
        cart = savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error('Error loading cart:', error);
        cart = [];
    }
}

// Save cart to localStorage
function saveCart() {
    try {
        localStorage.setItem('levelup-cart', JSON.stringify(cart));
        localStorage.setItem('levelup-cart-timestamp', Date.now().toString());
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

// Language and Currency functions
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('levelup-language', lang);
    updatePageLanguage();
    updateCartModal();
    loadProducts();
}

function changeCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('levelup-currency', currency);
    updateCartUI();
    updateCartModal();
    loadProducts();
}

function formatPrice(price) {
    const currency = currencies[currentCurrency];
    const convertedPrice = (price * currency.rate).toFixed(2);
    return `${convertedPrice} ${currency.symbol}`;
}

function getText(key) {
    return languages[currentLanguage][key] || key;
}

function updatePageLanguage() {
    // Update HTML direction
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = getText('home');
        else if (href === '#products') link.textContent = getText('products');
        else if (href === '#reviews') link.textContent = getText('reviews');
        else if (href === '#contact') link.textContent = getText('contact');
        else if (href === '#faq') link.textContent = getText('faqTitle');
    });
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) heroTitle.textContent = getText('heroTitle');
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = getText('heroSubtitle');
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) heroDescription.textContent = getText('heroDescription');
    
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].textContent = getText('startJourney');
    if (heroButtons[1]) heroButtons[1].textContent = getText('shopNow');
    
    // Update products section
    const productsTitle = document.querySelector('#products .section-title');
    if (productsTitle) productsTitle.textContent = getText('ourProducts');
    
    const productsSubtitle = document.querySelector('#products .section-subtitle');
    if (productsSubtitle) productsSubtitle.textContent = getText('productsSubtitle');
    
    // Update cart modal
    const cartTitle = document.querySelector('.cart-header h3');
    if (cartTitle) cartTitle.textContent = getText('cart');
    
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // Update FAQ section
    const faqTitle = document.querySelector('#faq .section-title');
    if (faqTitle) faqTitle.textContent = getText('faqTitle');
    
    const faqSubtitle = document.querySelector('#faq .section-subtitle');
    if (faqSubtitle) faqSubtitle.textContent = getText('faqSubtitle');
    if (checkoutBtn) checkoutBtn.textContent = getText('checkout');
}

// DOM elements
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const mobileCartCount = document.getElementById('mobileCartCount');
const productsGrid = document.getElementById('productsGrid');
const mobileMenu = document.getElementById('mobileMenu');
const loadingScreen = document.getElementById('loadingScreen');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    showLoadingScreen();
    
    // Load saved settings and cart
    loadCart();
    updatePageLanguage();
    updateDropdownDisplays();
    
    // Load products after a short delay to simulate loading
    setTimeout(() => {
        loadProducts();
        updateCartUI();
        hideLoadingScreen();
        
        // Add scroll animations
        addScrollAnimations();
        
        // Add typing effect to hero title
        addTypingEffect();
    }, 2000);
    
    // Add smooth scrolling for navigation links
    addSmoothScrolling();
    
    // Add navbar scroll effect
    addNavbarScrollEffect();
    
    // Add parallax effect
    addParallaxEffect();
});

// Loading screen functions
function showLoadingScreen() {
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Load products into the grid
function loadProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Check if image is URL or emoji
    const isImageUrl = product.image.startsWith('http');
    const imageContent = isImageUrl 
        ? `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">`
        : `<div style="font-size: 4rem; text-align: center; padding: 2rem;">${product.image}</div>`;
    
    card.innerHTML = `
        <div class="product-image">
            ${imageContent}
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.shortDescription || product.description}</p>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                    ${getText('addToCart')}
                </button>
                <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                    ${getText('viewDetails')}
                </button>
            </div>
        </div>
    `;
    return card;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
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
    showNotification(`${getText('addedToCart')}: "${product.title}"`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    updateCartModal();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('levelup-cart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    mobileCartCount.textContent = totalItems;
    cartTotal.textContent = formatPrice(totalPrice);
    
    // Show/hide cart count badges
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
        mobileCartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
        mobileCartCount.style.display = 'none';
    }
}

// Toggle cart modal
function toggleCart() {
    cartModal.classList.toggle('active');
    updateCartModal();
}

// Update cart modal content
function updateCartModal() {
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">${getText('emptyCart')}</p>`;
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// View product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showProductPage(product);
    }
}

// Show product detail page
function showProductPage(product) {
    // Hide main content
    document.getElementById('hero').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('reviews').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    
    // Create product page content
    const productPageHTML = `
        <section id="product-detail" class="product-detail-section">
            <div class="container">
                <div class="product-detail-nav">
                    <button class="btn btn-secondary" onclick="goBackToHome()">
                        <i class="fas fa-arrow-right"></i> ${getText('backToHome')}
                    </button>
                </div>
                
                <div class="product-detail-content">
                    <div class="product-detail-image">
                        ${product.image.startsWith('http') 
                            ? `<img src="${product.image}" alt="${product.title}">`
                            : `<div class="product-emoji">${product.image}</div>`
                        }
                    </div>
                    
                    <div class="product-detail-info">
                        <div class="product-category">${product.category}</div>
                        <h1 class="product-detail-title">${product.title}</h1>
                        <div class="product-detail-price">${formatPrice(product.price)}</div>
                        
                        <div class="product-features">
                            ${product.features ? product.features.map(feature => 
                                `<span class="feature-tag">${feature}</span>`
                            ).join('') : ''}
                        </div>
                        
                        <div class="product-meta">
                            ${product.pages ? `<div class="meta-item"><i class="fas fa-file-alt"></i> ${product.pages}</div>` : ''}
                            ${product.readingTime ? `<div class="meta-item"><i class="fas fa-clock"></i> ${product.readingTime}</div>` : ''}
                        </div>
                        
                        <div class="product-actions-detail">
                            <button class="btn btn-primary btn-large" onclick="addToCart(${product.id})">
                                <i class="fas fa-cart-plus"></i> ${getText('addToCart')}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="product-description-full">
                    <h2>${getText('productDescription')}</h2>
                    <div class="description-content">
                        ${product.fullDescription || product.description}
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Add product page to body
    const existingProductPage = document.getElementById('product-detail');
    if (existingProductPage) {
        existingProductPage.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', productPageHTML);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Go back to home page
function goBackToHome() {
    // Remove product detail page
    const productPage = document.getElementById('product-detail');
    if (productPage) {
        productPage.remove();
    }
    
    // Show main content
    document.getElementById('hero').style.display = 'block';
    document.getElementById('faq').style.display = 'block';
    document.getElementById('products').style.display = 'block';
    document.getElementById('reviews').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification(getText('emptyCartError'), 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`${getText('total')}: ${formatPrice(total)}. ${getText('checkoutProcessing')}`);
    
    // Here you would typically redirect to a payment gateway
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
        toggleCart();
        showNotification(getText('checkoutSuccess'), 'success');
    }, 2000);
}

// Mobile menu functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger lines
    const btn = document.querySelector('.mobile-menu-btn');
    btn.classList.toggle('active');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.querySelector('.mobile-menu-btn').classList.remove('active');
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 1rem;
        box-shadow: var(--shadow-neon);
        z-index: 3000;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = '#22c55e';
    } else if (type === 'error') {
        notification.style.borderColor = '#ef4444';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Add smooth scrolling for navigation links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add navbar scroll effect
function addNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 20, 40, 0.98)';
        } else {
            navbar.style.background = 'rgba(30, 20, 40, 0.95)';
        }
    });
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .feature-card, 
        .product-card, 
        .review-card, 
        .contact-card,
        .stat-card
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add parallax effect
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Add typing effect to hero title
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Add particle effect
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(139, 92, 246, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS animations for particles
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
    
    @keyframes particleFloat {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.5;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-content button {
        background: none;
        border: none;
        color: var(--foreground);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    
    .notification-content button:hover {
        background: var(--muted);
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active .hamburger-line:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;

document.head.appendChild(style);

// Initialize particles after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createParticles, 2500);
});

// Add scroll to top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-primary);
        border: none;
        color: var(--primary-foreground);
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-neon);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = 'var(--shadow-neon-hover)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'var(--shadow-neon)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close cart modal with Escape key
    if (e.key === 'Escape' && cartModal.classList.contains('active')) {
        toggleCart();
    }
    
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Add click outside to close modals
document.addEventListener('click', (e) => {
    // Close cart modal when clicking outside
    if (cartModal.classList.contains('active') && e.target === cartModal) {
        toggleCart();
    }
});

// Add counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace('+', ''));
                let current = 0;
                const increment = target / 100;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateCounters, 3000);
});

// Add search functionality (for future enhancement)
function addSearchFunctionality() {
    // This could be implemented to search through products
    // For now, it's just a placeholder for future enhancement
    console.log('Search functionality ready for implementation');
}

// Add wishlist functionality (for future enhancement)
function addToWishlist(productId) {
    // This could be implemented to save products to wishlist
    // For now, it's just a placeholder for future enhancement
    showNotification('تم إضافة المنتج إلى قائمة الأمنيات');
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add error handling for failed operations
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You could show a user-friendly error message here
});

// Add service worker for offline functionality (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here
        console.log('Service worker support detected');
    });
}

// Dropdown functions
function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.dropdown:has(#languageDropdown)');
    const currencyDropdown = document.querySelector('.dropdown:has(#currencyDropdown)');
    
    // Close currency dropdown if open
    currencyDropdown.classList.remove('active');
    
    dropdown.classList.toggle('active');
}

function toggleCurrencyDropdown() {
    const dropdown = document.querySelector('.dropdown:has(#currencyDropdown)');
    const languageDropdown = document.querySelector('.dropdown:has(#languageDropdown)');
    
    // Close language dropdown if open
    languageDropdown.classList.remove('active');
    
    dropdown.classList.toggle('active');
}

// Update dropdown displays
function updateDropdownDisplays() {
    const currentLangSpan = document.getElementById('currentLang');
    const currentCurrencySpan = document.getElementById('currentCurrency');
    
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage === 'ar' ? 'العربية' : 'English';
    }
    
    if (currentCurrencySpan) {
        currentCurrencySpan.textContent = currencies[currentCurrency].symbol;
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Enhanced change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('levelup-language', lang);
    updatePageLanguage();
    updateCartModal();
    updateDropdownDisplays();
    loadProducts();
    
    // Close dropdown
    document.querySelector('.dropdown:has(#languageDropdown)').classList.remove('active');
}

// Enhanced change currency function
function changeCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('levelup-currency', currency);
    updateCartUI();
    updateCartModal();
    updateDropdownDisplays();
    loadProducts();
    
    // Close dropdown
    document.querySelector('.dropdown:has(#currencyDropdown)').classList.remove('active');
}

console.log('Level Up Store website loaded successfully! 🚀');


// FAQ Toggle functionality
function toggleFAQ(faqNumber) {
    const answer = document.getElementById(`faq-answer-${faqNumber}`);
    const icon = document.getElementById(`faq-icon-${faqNumber}`);
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other FAQs
        for (let i = 1; i <= 8; i++) {
            if (i !== faqNumber) {
                const otherAnswer = document.getElementById(`faq-answer-${i}`);
                const otherIcon = document.getElementById(`faq-icon-${i}`);
                if (otherAnswer) {
                    otherAnswer.style.display = 'none';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            }
        }
        
        // Open current FAQ
        answer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    }
}
