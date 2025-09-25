import { useState, useEffect } from "react"
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoIosImages } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaFileCode } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        // Mobile menu toggle functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-active');
            this.classList.toggle('active');
        });
        
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".service-card, .portfolio-item");
    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });

    // Hover effects for service cards
    const serviceCards = document.querySelectorAll(".service-card");
    const handleMouseEnter = (e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
    };
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup listeners & observers
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleAnchorClick)
      );
      window.removeEventListener("scroll", handleScroll);
      serviceCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

    
    return (
        <>
            <nav id="navbar">
                <div className="container">
                    <div className="nav-container">
                        <div className="brand">Hatter's Web Based Agency</div>
                        <button className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}onClick={() => setMenuOpen(!menuOpen)}>
                            <FaBars />
                        </button>
                        <ul className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="Home" className="Hero">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>

                <div className="hero-content">
                    <h1>Hatter's Web Based Agency</h1>
                    <p>Specializing in HTML, SCSS, JavaScript, ReactJS, CSS, and Bootstrap 5 to create powerful, modern web solutions that drive results.</p>
                    <a href="#contact" className="cta-btn">Start Your Project</a>
                </div>
            </section>

            <section id="services" className="services">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><FaHtml5 /></div>
                            <h3>HTML Development</h3>
                            <p>Semantic, accessible HTML5 markup that provides the perfect foundation for modern web applications.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><FaSass /></div>
                            <h3>CSS & SCSS</h3>
                            <p>Advanced styling with SCSS preprocessor and modern CSS techniques for responsive, maintainable, and beautiful designs.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><SiJavascript /></div>
                            <h3>JavaScript Development</h3>
                            <p>Interactive functionality and dynamic user experiences with modern JavaScript ES6+ and DOM manipulation.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><FaReact /></div>
                            <h3>ReactJS Applications</h3>
                            <p>Component-based React applications with hooks, state management, and modern development practices for scalable solutions.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><FaBootstrap /></div>
                            <h3>Bootstrap 5</h3>
                            <p>Rapid development with Bootstrap 5 framework for responsive layouts, components, and utility classes.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><FaMobile /></div>
                            <h3>Responsive Design</h3>
                            <p>Mobile-first responsive designs that work flawlessly across all devices using CSS Grid, Flexbox, and media queries.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="portfolio">
                <div className="container">
                    <h2 className="section-title">Our Work</h2>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <div className="portfolio-image"><FaRocket /></div>
                            <div className="portfolio-content">
                                <h3>Landing Pages</h3>
                                <p>High-converting landing pages designed to capture leads and drive conversions with compelling CTAs and optimized user flows.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">HTML5</span>
                                    <span className="tech-tag">SCSS</span>
                                    <span className="tech-tag">Bootstrap 5</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><IoCartOutline /></div>
                            <div className="portfolio-content">
                                <h3>E-commerce Websites</h3>
                                <p>Full-featured online stores with shopping carts, payment integration, and responsive product catalogs for seamless shopping experiences.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">ReactJS</span>
                                    <span className="tech-tag">Javascript</span>
                                    <span className="tech-tag">CSS3</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><IoIosImages /></div>
                            <div className="portfolio-content">
                                <h3>Responsive Image Conversion</h3>
                                <p>Converting static designs into pixel-perfect responsive websites that adapt beautifully across all devices and screen sizes.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">HTML</span>
                                    <span className="tech-tag">SCSS</span>
                                    <span className="tech-tag">CSS Grid</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><BsLightningChargeFill /></div>
                            <div className="portfolio-content">
                                <h3>Web Apps</h3>
                                <p>Interactive web applications with dynamic functionality, user authentication, and real-time features built with modern frameworks.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">ReactJS</span>
                                    <span className="tech-tag">JavaScript ES6+</span>
                                    <span className="tech-tag">Bootstrap 5</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><FaFileCode /></div>
                            <div className="portfolio-content">
                                <h3>Static Websites</h3>
                                <p>Fast-loading static websites perfect for portfolios, business sites, and informational pages with clean, maintainable code.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">HTML5</span>
                                    <span className="tech-tag">CSS3</span>
                                    <span className="tech-tag">JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><FaBuilding /></div>
                            <div className="portfolio-content">
                                <h3>Corporate Websites</h3>
                                <p>Professional business websites with content management systems, contact forms, and corporate branding integration.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">HTML5</span>
                                    <span className="tech-tag">Bootstrap 5</span>
                                    <span className="tech-tag">JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><FaPalette /></div>
                            <div className="portfolio-content">
                                <h3>Creative Portfolios</h3>
                                <p>Professional business websites with content management systems, contact forms, and corporate branding integration.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">ReactJS</span>
                                    <span className="tech-tag">SCSS</span>
                                    <span className="tech-tag">CSS3</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"><IoAnalytics /></div>
                            <div className="portfolio-content">
                                <h3>Dashboard Applications</h3>
                                <p>Data visualization dashboards and admin panels with charts, tables, and real-time data management interfaces.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">ReactJS</span>
                                    <span className="tech-tag">Javascript</span>
                                    <span className="tech-tag">Bootstrap 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-content">
                        <h2 className="section-title">Let's Work Together</h2>
                        <p>Ready to Transform your digital presence?</p>
                        
                        <div className="contact-info">
                            <div className="contact-item">
                                <h4>Email Us</h4>
                                <p>hatterwballc@gmail.com</p>
                            </div>
                            <div className="contact-item">
                                <h4>Call Us</h4>
                                <p>+1 (231) 750-6125</p>
                            </div>
                            <div className="contact-item">
                                <h4>Business Hours</h4>
                                <p>6:00 AM - 10:00 PM</p>
                            </div>
                            <div className="contact-item">
                                <h4>Response Time</h4>
                                <p>Within 24 Hours</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="cta-btn">Get Started Today</a>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2025 Hatter's Web Based Agency LLC. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}