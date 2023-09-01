        /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
       
       /**
     * Scrolls to an element with header offset
     */
        const scrollto = (el) => {
            let header = select('#header')
            let offset = header.offsetHeight
        
            let elementPos = select(el).offsetTop
            window.scrollTo({
              top: elementPos - offset,
              behavior: 'smooth'
            })
          }  
      /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
      
      /**
     * Scroll with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
          e.preventDefault()
    
          let navbar = select('#navbar')
          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
          }
          scrollto(this.hash)
        }
      }, true)
    
      /**
       * Scroll with offset on page load with hash links in the url
       */
      window.addEventListener('load', () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash)
          }
        }
      });

      /**
       * For Contact form
       */
       document.addEventListener("DOMContentLoaded", function() {
      const contactForm = document.getElementById("contactForm");

      contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Clear input fields
        const formInputs = contactForm.querySelectorAll("input, textarea");
        formInputs.forEach(input => {
          input.value = "";
        });

        // Optionally, you can display a confirmation message to the user
        alert("Form submitted successfully!");

        // Optionally, you can focus on the first input field after clearing
        formInputs[0].focus();
      });
    });
