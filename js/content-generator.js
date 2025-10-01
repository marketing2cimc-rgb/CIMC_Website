// content-generator.js - Page content generation
function generatePageContent() {
  const container = document.getElementById('content-container');
  if (!container) return;
  
  container.innerHTML = `
    <!-- Banner -->
    <section class="hero">
      <div class="container text-center">
        <h1 id="banner-title">CIMC's global strength & Local Thai expertise</h1>
        <p id="banner-subtitle">Experience excellence in every detail</p>
        <a href="#about" class="btn btn-cimc" id="banner-button">Learn More</a>
      </div>
    </section>

    <!-- About Us -->
    <section id="about" class="about-section">
      <div class="container about-content">
        <div class="about-intro">
          <h2 class="section-title" id="about-title">About CIMC Thailand</h2>
          <p id="about-p1">CIMC Thailand is a subsidiary of <span class="highlight">China International Marine Containers (Group) Co., Ltd.</span>, the world's leading supplier of logistics and energy equipment.</p>
          <p id="about-p2">With over 30 years of experience in container manufacturing, we provide innovative solutions for shipping, logistics, and specialized container applications across Southeast Asia.</p>
          <p id="about-p3">Our state-of-the-art manufacturing facility in Thailand combines global expertise with local craftsmanship to deliver high-quality products and exceptional service.</p>
        </div>

        <div class="about-features">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-globe-asia"></i>
            </div>
            <h3 id="feature1-title">Global Leader</h3>
            <p id="feature1-desc">As part of the world's largest container manufacturer, we bring international expertise to the Southeast Asian market.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-industry"></i>
            </div>
            <h3 id="feature2-title">Advanced Manufacturing</h3>
            <p id="feature2-desc">Our state-of-the-art facility in Thailand features cutting-edge technology and automated production lines.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3 id="feature3-title">Local Expertise</h3>
            <p id="feature3-desc">We combine global standards with deep understanding of the Southeast Asian logistics landscape.</p>
          </div>
        </div>

        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-value">1</div>
              <div class="stat-label" id="stat1">Global Ranking</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">43</div>
              <div class="stat-label" id="stat2">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">1000++</div>
              <div class="stat-label" id="stat3">Employees</div>
            </div>
          </div>
        </div>

        <h2 class="section-title text-center" id="journey-title">Our Journey</h2>
        <div class="timeline-section">
          <div class="timeline-item">
            <div class="timeline-year">1991</div>
            <h3 class="timeline-title" id="timeline1-title">CIMC Founded</h3>
            <p id="timeline1-desc">China International Marine Containers (Group) Co., Ltd. established as a pioneer in container manufacturing.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2010</div>
            <h3 class="timeline-title" id="timeline2-title">Southeast Asia Expansion</h3>
            <p id="timeline2-desc">CIMC begins strategic expansion into the rapidly growing Southeast Asian market.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2018</div>
            <h3 class="timeline-title" id="timeline3-title">Thailand Facility</h3>
            <p id="timeline3-desc">State-of-the-art manufacturing facility established in Rayong, Thailand to serve the ASEAN region.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2023</div>
            <h3 class="timeline-title" id="timeline4-title">Production Milestone</h3>
            <p id="timeline4-desc">CIMC Thailand celebrates production of its 100,000th container unit, cementing our position as a regional leader.</p>
          </div>
        </div>

        <h2 class="section-title" id="values-title">Our Core Values</h2>
        <div class="values-section">
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-medal"></i>
              </div>
              <h3 id="value1-title">Quality Excellence</h3>
              <p id="value1-desc">Rigorous quality control at every stage of production ensures superior products that withstand demanding conditions.</p>
            </div>

            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3 id="value2-title">Innovation</h3>
              <p id="value2-desc">Continuous R&D investment drives cutting-edge solutions that redefine industry standards.</p>
            </div>

            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h3 id="value3-title">Sustainability</h3>
              <p id="value3-desc">Eco-friendly manufacturing processes and materials reduce environmental impact across our operations.</p>
            </div>

            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 id="value4-title">Customer Focus</h3>
              <p id="value4-desc">Tailored solutions and responsive service build lasting partnerships with our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News and Event -->
    <section id="newsevent" class="services-section">
      <div class="container">
        <h2 class="section-title" id="news-title">News & Events</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <a href="./news/26092025.html" style="text-decoration: none">
                <div class="service-icon">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <h3 id="news1-date">26-28 September 2025</h3>
                <p id="news1-title">Join Us at the Thailand-China Cooperation Expo 2025</p>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <a href="./news/29062025.html" style="text-decoration: none">
                <div class="service-icon">
                  <i class="fas fa-award"></i>
                </div>
                <h3 id="news2-date">29 June 2025</h3>
                <p id="news2-title">Identified as a major Thai exporter</p>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <a href="./news/12062023.html" style="text-decoration: none">
                <div class="service-icon">
                  <i class="fas fa-industry"></i>
                </div>
                <h3 id="news3-date">12 June 2023</h3>
                <p id="news3-title">Ceremony for Second Anniversary of DS first product offline.</p>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="service-card text-center p-4">
              <a href="./news/26112021.html" style="text-decoration: none">
                <div class="service-icon">
                  <i class="fas fa-map-marked-alt"></i>
                </div>
                <h3 id="news4-date">26 November 2021</h3>
                <p id="news4-title">Land Acquisition</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product -->
    <section id="product" class="projects-section">
      <div class="container">
        <h2 class="section-title" id="products-title">Our Products</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="project-card">
              <img src="./product/flatbed.jpg" alt="CIMC Flatbed semi trailer" class="project-img">
              <div class="project-overlay">
                <h3 id="product1-title">Flatbed semi-trailer</h3>
                <p id="product1-desc">Can carry up to 35 tons</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-card">
              <img src="./product/container.jpg" alt="Container Chassis" class="project-img">
              <div class="project-overlay">
                <h3 id="product2-title">Container semi-trailer</h3>
                <p id="product2-desc">Light weight|Strong|Easy to maintain</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-card">
              <img src="./product/skeleton.jpg" alt="CIMC Fish Bone semi trailer" class="project-img">
              <div class="project-overlay">
                <h3 id="product3-title">Fish Bone</h3>
                <p id="product3-desc">Using High Tensile (500) grade steel. Light weight</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <a href="#" class="btn btn-cimc" id="products-button">View All Products</a>
        </div>
      </div>
    </section>

    <!-- Contact us -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title text-white" id="contact-title">Contact Us</h2>
        <div class="row">
          <!-- Google Maps Embed -->
          <div class="map-container mb-4 rounded overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=7%2F258%20Moo%206%2C%20Amata%20City%20Industrial%20Estate%2C%20Pluak%20Daeng%2C%20Rayong%2C%20Thailand%2021140&output=embed&markers=color:red%7Clabel:C%7C12.926499,100.9970436"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-6 mb-5 mb-lg-0">
            <form class="contact-form">
              <div id="form-alert"></div>
              <div class="row">
                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" data-placeholder="name-placeholder" required>
                </div>
                <div class="col-md-6">
                  <input type="email" name="email" class="form-control" placeholder="Your Email" data-placeholder="email-placeholder" required>
                </div>
              </div>
              <input type="text" name="subject" class="form-control" placeholder="Subject" data-placeholder="subject-placeholder" required>
              <textarea name="message" class="form-control" rows="5" placeholder="Your Message" data-placeholder="message-placeholder" required></textarea>
              <button type="submit" class="btn btn-cimc w-100" id="send-button">Send Message</button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="col-lg-6">
            <div class="ps-lg-5">
              <div class="contact-info-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 id="location-title">Our Location</h4>
                  <p id="location">7/258 Moo 6, Amata City Industrial Estate, Pluak Daeng, Rayong, Thailand 21140</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 id="phone-title">Phone Number</h4>
                  <p>+66 86 303 0526</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 id="email-title">Email Address</h4>
                  <p>cimcth@gmail.com</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div>
                  <h4 id="hours-title">Working Hours</h4>
                  <p id="weekdays">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p id="saturday">Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="footer-logo">
              <img src="./img/logo.ico" alt="CIMC Logo">
              <span id="footer-brand">CIMC Thailand</span>
            </div>
            <p id="footer-desc">Leading container manufacturing and logistics solutions provider in Southeast Asia, committed to quality, innovation, and customer satisfaction.</p>

            <div class="social-links">
              <a href="https://www.facebook.com/cimcthai" target="_blank" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/cimc-thailand/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/@cimcth1805" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
          </div>

          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="footer-title" id="footer-quick-links">Quick Links</h4>
            <div class="footer-links">
              <a href="index.html"><i class="fas fa-chevron-right"></i> <span id="footer-home">Home</span></a>
              <a href="index.html#about"><i class="fas fa-chevron-right"></i> <span id="footer-about">About Us</span></a>
              <a href="./product.html"><i class="fas fa-chevron-right"></i> <span id="footer-products">Products</span></a>
              <a href="index.html#newsevent"><i class="fas fa-chevron-right"></i> <span id="footer-news">News & Events</span></a>
              <a href="./customer.html"><i class="fas fa-chevron-right"></i> <span id="footer-customers">Our Customers</span></a>
              <a href="index.html#contact"><i class="fas fa-chevron-right"></i> <span id="footer-contact">Contact Us</span></a>
            </div>
          </div>

          <div class="col-lg-4">
            <h4 class="footer-title" id="footer-contact-title">Contact Information</h4>
            <div class="contact-info">
              <p>
                <i class="fas fa-map-marker-alt"></i>
                <span id="footer-location">7/258 Moo 6, Amata City Industrial Estate, Pluak Daeng, Rayong, Thailand 21140</span>
              </p>
              <p>
                <i class="fas fa-phone-alt"></i>
                <span>+66 86 303 0526</span>
              </p>
              <p>
                <i class="fas fa-envelope"></i>
                <span>cimcth@gmail.com</span>
              </p>
              <p>
                <i class="fas fa-clock"></i>
                <span id="footer-hours"><span id="footer-weekdays">Monday - Friday: 8:00 AM - 5:00 PM</span><br><span id="footer-saturday">Saturday: 8:00 AM - 12:00 PM</span></span>
              </p>
            </div>
          </div>
        </div>

        <div class="copyright">
          <p>&copy; 2025 CIMC Thailand. <span id="footer-rights">All Rights Reserved.</span> | <span id="footer-design">Designed with</span> <i class="fas fa-heart text-danger"></i> <span id="footer-clients">for our clients</span></p>
        </div>
      </div>
    </footer>
  `;
  
  // Update text content after generating the page
  setTimeout(updateTextContent, 0);
}