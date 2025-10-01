// Language management system
const translations = {
    en: {
        // Navigation
        "brand": "CIMC Thailand",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-products": "Products",
        "nav-news": "News & Events",
        "nav-customers": "Stakeholder Network",
        "nav-contact": "Contact Us",

        // Series section
        "backLink": "Back to Product Series",

        // Product badges
        "bestSeller": "Best Seller",
        "newBadge": "New",
        "lightweight": "Lightweight",
        
        // View Details
        "viewDetails1": "View Details",
        "viewDetails2": "View Details",
        "viewDetails3": "View Details",
        "viewDetails4": "View Details",
        "viewDetails5": "View Details",
        "viewDetails6": "View Details",

        // Footer
        "footer-brand": "CIMC Thailand",
        "footer-desc": "Leading container manufacturing and logistics solutions provider in Southeast Asia, committed to quality, innovation, and customer satisfaction.",
        "footer-quick-links": "Quick Links",
        "footer-home": "Home",
        "footer-about": "About Us",
        "footer-products": "Products",
        "footer-news": "News & Events",
        "footer-customers": "Stakeholder Network",
        "footer-contact": "Contact Us",
        "footer-contact-title": "Contact Information",
        "footer-location": "7/258 Moo 6, Amata City Industrial Estate, Pluak Daeng, Rayong, Thailand 21140",
        "footer-weekdays": "Monday - Friday: 8:00 AM - 5:00 PM",
        "footer-saturday": "Saturday: 8:00 AM - 12:00 PM",
        "footer-copyright": "CIMC Thailand",
        "footer-rights": "All Rights Reserved.",
        "footer-design": "Designed with",
        "footer-clients": "for our clients"
    },
    th: {
        // Navigation
        "brand": "ซีไอเอ็มซี ประเทศไทย",
        "nav-home": "หน้าแรก",
        "nav-about": "เกี่ยวกับเรา",
        "nav-products": "ผลิตภัณฑ์",
        "nav-news": "ข่าวและกิจกรรม",
        "nav-customers": "ผู้มีส่วนได้ส่วนเสีย",
        "nav-contact": "ติดต่อเรา",

        // Series section
        "backLink": "กลับสู่หน้าชุดผลิตภัณฑ์",

        // Product badges
        "bestSeller": "ขายดีที่สุด",
        "newBadge": "ใหม่",
        "lightweight": "น้ำหนักเบา",
        
        // View Details
        "viewDetails1": "ดูรายละเอียด",
        "viewDetails2": "ดูรายละเอียด",
        "viewDetails3": "ดูรายละเอียด",
        "viewDetails4": "ดูรายละเอียด",
        "viewDetails5": "ดูรายละเอียด",
        "viewDetails6": "ดูรายละเอียด",

        // Footer
        "footer-brand": "ซีไอเอ็มซี ประเทศไทย",
        "footer-desc": "ผู้นำด้านการผลิตตู้คอนเทนเนอร์และโซลูชันโลจิสติกส์ในเอเชียตะวันออกเฉียงใต้ มุ่งมั่นในคุณภาพ นวัตกรรม และความพึงพอใจของลูกค้า",
        "footer-quick-links": "ลิงก์ด่วน",
        "footer-home": "หน้าแรก",
        "footer-about": "เกี่ยวกับเรา",
        "footer-products": "ผลิตภัณฑ์",
        "footer-news": "ข่าวและกิจกรรม",
        "footer-customers": "ลูกค้าของเรา",
        "footer-contact": "ติดต่อเรา",
        "footer-contact-title": "ข้อมูลติดต่อ",
        "footer-location": "7/258 หมู่ 6 นิคมอุตสาหกรรมอมตะซิตี้ อำเภอปลวกแดง จังหวัดระยอง 21140",
        "footer-weekdays": "วันจันทร์ - วันศุกร์: 8:00 - 17:00 น.",
        "footer-saturday": "วันเสาร์: 8:00 - 12:00 น.",
        "footer-copyright": "ซีไอเอ็มซี ประเทศไทย",
        "footer-rights": "สงวนลิขสิทธิ์.",
        "footer-design": "ออกแบบด้วย",
        "footer-clients": "สำหรับลูกค้าของเรา"
    }
};

// Current language
let currentLang = 'en';

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Add/remove Thai font class
    if (lang === 'th') {
        document.body.classList.add('thai-lang');
    } else {
        document.body.classList.remove('thai-lang');
    }

    // Update all text elements
    updateTextContent();

    // Update product badges
    updateProductBadges();

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Update text content
function updateTextContent() {
    for (const key in translations[currentLang]) {
        const elements = document.querySelectorAll(`[id="${key}"]`);
        elements.forEach(element => {
            element.textContent = translations[currentLang][key];
        });
    }
}

// Update product badges
function updateProductBadges() {
    const badges = document.querySelectorAll('.product-badge');
    badges.forEach(badge => {
        const badgeId = badge.getAttribute('id');
        if (translations[currentLang][badgeId]) {
            badge.textContent = translations[currentLang][badgeId];
        }
    });
}

// Initialize language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
    });
});