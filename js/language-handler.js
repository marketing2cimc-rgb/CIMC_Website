// language-handler.js - Language switching functionality
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
  
  // Update active language button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Save language preference
  localStorage.setItem('preferredLang', lang);
  
  // Track language change event
  if (typeof trackEvent === 'function') {
    trackEvent('Language', 'Change', lang);
  }
}

// Update text content
function updateTextContent() {
  if (!translations || !translations[currentLang]) return;
  
  for (const key in translations[currentLang]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[currentLang][key];
    }
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll(`[data-placeholder="${key}"]`);
    placeholderElements.forEach(el => {
      el.setAttribute('placeholder', translations[currentLang][key]);
    });
  }
  
  // Update footer navigation text
  const footerHome = document.getElementById('footer-home');
  const footerAbout = document.getElementById('footer-about');
  const footerProducts = document.getElementById('footer-products');
  const footerNews = document.getElementById('footer-news');
  const footerCustomers = document.getElementById('footer-customers');
  const footerContact = document.getElementById('footer-contact');
  
  if (footerHome) footerHome.textContent = translations[currentLang]['nav-home'];
  if (footerAbout) footerAbout.textContent = translations[currentLang]['nav-about'];
  if (footerProducts) footerProducts.textContent = translations[currentLang]['nav-products'];
  if (footerNews) footerNews.textContent = translations[currentLang]['nav-news'];
  if (footerCustomers) footerCustomers.textContent = translations[currentLang]['nav-customers'];
  if (footerContact) footerContact.textContent = translations[currentLang]['nav-contact'];
}