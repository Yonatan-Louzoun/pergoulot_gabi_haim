document.addEventListener('DOMContentLoaded', function() {

  // --- 1. הפעלת הגלריה (GLightbox) ---
  const lightbox = GLightbox({
    selector: '.gallery-item', 
    loop: true,        
    autoplay: {
      delay: 3000, 
      playButton: true, 
      pauseOnHover: true 
    },
    keyboardNavigation: true, 
    touchNavigation: true 
  });


  // --- 2. שנה דינמית בפוטר ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- 3. הגדרת EmailJS ---
  (function() {
   emailjs.init("OUgejeS49zS2g3GkU"); // Public Key שלך
  })();

  // --- 4. טיפול בטופס יצירת קשר (התחתון) ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      emailjs.sendForm("service_60mefgo", "template_k915wsp", this)
        .then(() => {
          alert("ההודעה נשלחה בהצלחה!");
          contactForm.reset(); 
        })
        .catch(err => {
          alert("שגיאה בשליחה: " + JSON.stringify(err));
        });
    });
  }

  // --- 5. הפעלת תפריט המבורגר ---
  const hamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');
  
  if (hamburger && navbar) {
    // פתיחה וסגירה בלחיצה על הכפתור
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });

    // סגירת התפריט בלחיצה על קישור
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('open');
      });
    });
  }

  // --- 6. הפעלת גלריית Hero (הקוד החדש) ---
  const slides = document.querySelectorAll('.hero .slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      
      currentSlide = (currentSlide + 1) % slides.length;
      
      slides[currentSlide].classList.add('active');
    }, 5000); // החלף תמונה כל 5 שניות
  }

});