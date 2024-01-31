import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import 'boxicons/css/boxicons.min.css';
import CakeImg from "../assets/cake.png"
import "./Cakery.css"


const CakeryComponent = () => {
  // SHOW MENU
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate variables
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
      });
    }
  };

  useEffect(() => {
    showMenu('nav-toggle', 'nav-menu-id');
  }, []);

  // REMOVE MENU MOBILE
  const navLink = document.querySelectorAll('.nav-link');

  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu-id');
    navMenu.classList.remove('show-menu');
  };

  useEffect(() => {
    navLink.forEach((n) => {
      n.addEventListener('click', linkAction);
    });
  }, []);

  // SCROLL
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollActive);

    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  // CHANGE BACKGROUND HEADER
  const scrollHeader = () => {
    const nav = document.getElementById('header');

    if (window.scrollY >= 200) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  // SHOW SCROLL-TOP
  const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top');

    if (window.scrollY >= 560) {
      scrollTop.classList.add('show-scroll');
    } else {
      scrollTop.classList.remove('show-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTop);

    return () => {
      window.removeEventListener('scroll', scrollTop);
    };
  }, []);

  // SCROLL ANIMATION
  const scrollAnimation = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true,
  });

  scrollAnimation.reveal(`.home-data, .home-img,
.about-data, .about-img, .services-data, .menu-content,
.app-data, .app-img, .contact-data, .contact-button,
.footer-content`, {
    interval: 200,
  });

  // DARK/LIGHT
  const themeButton = document.getElementById('theme');
  const darkTheme = 'dark-theme';
  const iconTheme = 'bx-sun';

  // Previously selected theme
  const selectedTheme = localStorage.getItem('selected-theme');
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const selectedIcon = localStorage.getItem('selected-icon');
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

  useEffect(() => {
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }
  }, []);


  // Activate/Desactivate
  const handleThemeToggle = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  };

  
  return (
    <>
        <a href="" className="scroll_top" id="scroll-top">
            <i className="bx bx-chevrons-up scroll_top_icon" />
        </a>
        {/* Header */}
        <header id="header" className="menu-header">
            <nav className="nav-container body-container">
            <a href="" className="nav-logo">
                SweetStyleHub
            </a>
            <div className="nav-menu" id="nav-menu-id">
                <ul className="nav-list">
                <li className="nav-item ">
                    <a href="#home" className="nav-link active-link">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                    Menu
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#services" className="nav-link">
                    Services
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                    Contact
                    </a>
                </li>
                </ul>
            </div>

            <div className="nav-toggle" id="nav-toggle">
                <i className="bx bx-menu" />
            </div>
            </nav>
        </header>
        <main>
            {/* Home */}
            <section className="home" id="home">
            <div className="home-container body-container body-grid">
                <div className="home-data">
                <h1 className="home-title">
                    <span className="letter">S</span>weetHub
                </h1>
                <h2 className="home-subtitle">
                    Imagine being <br />
                    able to enjoy <br /> the finest pastries.
                </h2>
                <div className="btn-menu">
                    <a href="" className="btn-menu">
                        <button className="button1">
                            View Menu
                        </button>
                    </a>
                </div>
                </div>
                <img
                src={CakeImg}
                alt="home food picture"
                className="home-img"
                />
            </div>
            </section>
            {/* Menu */}
            <section className="menu section body-container" id="menu">
            <span className="subtitle">
                <span className="letter">S</span>pecial
            </span>
            <h2 className="title">Special of the week</h2>
            <div className="menu-container body-grid">
                <div className="menu-content">
                <img
                    src="https://raw.githubusercontent.com/Jean-carje/Responsive-website-cakery-main/master/assets/img/item1.png"
                    alt="item one"
                    className="menu-img"
                />
                <h3 className="menu-name">Special Cupcake</h3>
                <span className="menu-detail">Chocolate</span>
                <span className="menu-preci">
                    $3.50
                    <span>
                    <a href="" className="button menu-button">
                        <i className="bx bx-cart" />
                    </a>
                    </span>
                </span>
                </div>
                <div className="menu-content">
                <img
                    src="https://raw.githubusercontent.com/Jean-carje/Responsive-website-cakery-main/master/assets/img/item2.png"
                    alt="item two"
                    className="menu-img img-B"
                />
                <h3 className="menu-name">Chocolate Cake</h3>
                <span className="menu-detail">Special Birthday</span>
                <span className="menu-preci">
                    $25.00
                    <span>
                    <a href="" className="button menu-button">
                        <i className="bx bx-cart" />
                    </a>
                    </span>
                </span>
                </div>
                <div className="menu-content">
                <img
                    src="https://raw.githubusercontent.com/Jean-carje/Responsive-website-cakery-main/master/assets/img/item3.png"
                    alt="Imagen de Génesis Gabriella en Pixabay "
                    className="menu-img img-B"
                />
                <h3 className="menu-name">Cappuccino</h3>
                <span className="menu-detail">Cappuccino + Cake</span>
                <span className="menu-preci">
                    $2.00
                    <span>
                    <a href="" className="button menu-button">
                        <i className="bx bx-cart" />
                    </a>
                    </span>
                </span>
                </div>
            </div>
            </section>
            {/* Services */}
            <section className="services section body-container" id="services">
            <span className="subtitle">
                <span className="letter">O</span>ffering
            </span>
            <h2 className="title">Our amazing services</h2>
            <div className="services-container body-grid">
                <div className="services-data">
                <svg className="services-img" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M45.3205 21.5702L44.6357 19.3163C43.7659 16.756 40.9852 15.3857 38.4249 
                            16.2556C36.9847 16.7449 35.8536 17.876 35.3643 19.3163L34.6795 21.5702C34.1032 
                            23.471 33.9823 25.4807 34.3264 27.4368C34.6403 29.0838 35.6859 30.4987 37.168 
                            31.2822L36.4011 48.4267C36.2984 49.3836 36.6088 50.339 37.2544 51.0528C38.6428 
                            52.5715 40.9996 52.6771 42.5183 51.2887C42.6004 51.2136 42.6791 51.135 42.7541 
                            51.0528C43.3853 50.3592 43.6952 49.4319 43.6075 48.4982L42.8363 31.28C44.3164 
                            30.4962 45.3603 29.0822 45.6736 27.4368C46.0177 25.4807 45.8968 23.471 45.3205 
                            21.5702ZM43.5723 27.0656C43.3413 28.2488 42.4981 29.2196 41.3589 29.6139C40.9265 
                            29.7764 40.648 30.1988 40.6688 30.6603L41.4795 48.6667C41.5168 49.0199 41.4003 
                            49.372 41.1595 49.6331C40.5172 50.269 39.4828 50.269 38.8405 49.6331C38.5877 
                            49.351 38.4729 48.9712 38.5269 48.5963L39.3312 30.6603C39.352 30.1988 39.0735 
                            29.7764 38.6411 29.6139C37.5019 29.2196 36.6587 28.2488 36.4277 27.0656C36.1424 
                            25.4416 36.2429 23.7732 36.7211 22.1952L37.4059 19.9403C37.9357 18.5076 39.5267 
                            17.7758 40.9595 18.3056C41.7169 18.5858 42.314 19.183 42.5941 19.9403L43.2789 
                            22.1952C43.7565 23.7734 43.8571 25.4416 43.5723 27.0656Z"
                    />
                    <path
                    d="M28.8 16C28.2109 16 27.7333 16.4776 27.7333 17.0667V26.2251L24.8459 
                            29.1125C24.6323 29.3253 24.5187 29.6188 24.5333 29.92L25.4667 48.5867C25.4889 
                            48.9892 25.3428 49.3829 25.0635 49.6736C24.4796 50.2627 23.5287 50.2669 22.9395 
                            49.6829C22.9363 49.6799 22.9332 49.6767 22.9301 49.6736C22.6507 49.3829 22.5047 
                            48.9892 22.5269 48.5867L23.4667 29.92C23.4816 29.6189 23.3684 29.3256 23.1552 
                            29.1125L20.2667 26.2251V17.0667C20.2667 16.4776 19.7891 16 19.2 16C18.6109 
                            16 18.1333 16.4776 18.1333 17.0667V26.6667C18.1333 26.9496 18.2459 27.2208 
                            18.4459 27.4208L21.3109 30.2869L20.4011 48.4832C20.3043 50.4708 21.8371 
                            52.1607 23.8247 52.2575C25.8123 52.3543 27.5021 50.8215 27.5989 48.8339C27.6047 
                            48.7171 27.6047 48.6001 27.5989 48.4833L26.6891 30.2871L29.5541 27.4209C29.7541 
                            27.2209 29.8667 26.9497 29.8667 26.6668V17.0668C29.8667 16.4776 29.3891 16 28.8 16Z"
                    />
                    <path
                    d="M22.4 16C21.8109 16 21.3333 16.4776 21.3333 17.0667V25.6C21.3333 26.1891 
                            21.8109 26.6667 22.4 26.6667C22.9891 26.6667 23.4667 26.1891 23.4667 25.6V17.0667C23.4667 
                            16.4776 22.9891 16 22.4 16Z"
                    />
                    <path
                    d="M25.6 16C25.0109 16 24.5333 16.4776 24.5333 17.0667V25.6C24.5333 26.1891 
                            25.0109 26.6667 25.6 26.6667C26.1891 26.6667 26.6667 26.1891 26.6667 25.6V17.0667C26.6667 
                            16.4776 26.1891 16 25.6 16Z"
                    />
                    <path
                    d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 
                            64 32C63.98 14.3352 49.6648 0.02 32 0ZM32 61.8667C15.5051 61.8667 2.13333 48.4949 
                            2.13333 32C2.13333 15.5051 15.5051 2.13333 32 2.13333C48.4949 2.13333 61.8667 
                            15.5051 61.8667 32C61.8479 48.4871 48.4871 61.8479 32 61.8667Z"
                    />
                    <path
                    d="M35.4625 52.0229C35.4053 51.4367 34.8836 51.0077 34.2972 51.0649C34.2835 
                            51.0663 34.2697 51.0679 34.256 51.0697L34.2603 51.0687C32.7585 51.2431 31.2415 
                            51.2431 29.7397 51.0687C29.1544 51 28.6244 51.4188 28.5557 52.0041C28.4871 
                            52.5895 28.9059 53.1195 29.4912 53.1881C31.1567 53.3827 32.8391 53.3827 
                            34.5045 53.1881C35.0908 53.1311 35.5197 52.6093 35.4625 52.0229Z"
                    />
                    <path
                    d="M48.32 18.2549C47.9414 17.8035 47.2686 17.7445 46.8173 18.1231C46.8158 
                            18.1243 46.8144 18.1257 46.8128 18.1269C46.3625 18.5066 46.3052 19.1794 46.6848 
                            19.6298C53.1161 27.2645 52.6241 38.5537 45.553 45.5999C45.1357 46.0158 45.1345 
                            46.6914 45.5504 47.1087C45.9662 47.5261 46.6418 47.5273 47.0592 47.1114C54.9174 
                            39.283 55.4654 26.7387 48.32 18.2549Z"
                    />
                    <path
                    d="M24.851 14.0992C24.8505 14.0992 24.85 14.0991 24.8495 14.0991C24.8487 
                            14.0991 24.8478 14.0992 24.8469 14.0992H24.851Z"
                    />
                    <path
                    d="M37.0315 11.263C32.8628 10.2639 28.4908 10.5324 24.4757 12.0342C23.9243 
                            12.2415 23.6455 12.8567 23.8528 13.408C24.0091 13.8236 24.4064 14.0987 24.8503 
                            14.0991C24.9779 14.0984 25.1043 14.0751 25.2235 14.0299C28.8392 12.6778 32.7763 
                            12.4363 36.5301 13.3366C37.1028 13.475 37.6792 13.1231 37.8176 12.5504C37.956 
                            11.9778 37.6041 11.4014 37.0315 11.263Z"
                    />
                    <path
                    d="M18.3989 45.5466C14.8031 41.9569 12.7877 37.081 12.8 32C12.7895 
                            27.9405 14.0753 23.9837 16.4704 20.7061C16.8244 20.2352 16.7296 19.5665 
                            16.2587 19.2125C15.7877 18.8585 15.1191 18.9533 14.7651 19.4243C14.7588 
                            19.4327 14.7527 19.441 14.7467 19.4496C8.5796 27.928 9.48706 39.6308 
                            16.8875 47.057C17.3045 47.4744 17.9811 47.4746 18.3984 47.0576C18.8157 
                            46.6405 18.816 45.964 18.3989 45.5466Z"
                    />
                </svg>
                <h3 className="services-title">Excellent Service</h3>
                <p className="services-description">
                    We offer our clients excellent quality services for many years, with
                    the best and delicious fresh baked treat in the city.
                </p>
                </div>
                <div className="services-data">
                <svg
                    className="services-img"
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    viewBox="0 0 24 24"
                >
                    <path d="M19,5h-6V2h-2v3H5C3.346,5,2,6.346,2,8v10c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V8C22,6.346,20.654,5,19,5z M5,7h14 c0.552,0,1,0.448,1,1l0.001,3.12c-0.896,0.228-1.469,0.734-1.916,1.132C17.578,12.702,17.243,13,16.497,13 c-0.745,0-1.08-0.298-1.587-0.747C14.315,11.724,13.501,11,11.995,11c-1.505,0-2.319,0.724-2.914,1.253 C8.574,12.703,8.24,13,7.495,13c-0.743,0-1.077-0.297-1.582-0.747C5.466,11.855,4.895,11.348,4,11.12V8C4,7.448,4.448,7,5,7z M4,18v-4.714c0.191,0.123,0.374,0.274,0.583,0.461C5.178,14.276,5.991,15,7.495,15c1.505,0,2.319-0.724,2.914-1.253 C10.916,13.297,11.25,13,11.995,13s1.08,0.298,1.587,0.747C14.177,14.276,14.991,15,16.497,15s2.321-0.724,2.916-1.253 c0.211-0.188,0.395-0.34,0.588-0.464L20.002,18H4z" />
                </svg>
                <h3 className="services-title">Custom Order</h3>
                <p className="services-description">
                    We offer our clients excellent quality services for many years, with
                    the best and delicious fresh baked treat in the city.
                </p>
                </div>
                <div className="services-data">
                <svg className="services-img" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path
                        d="M19.1978 49.6016C17.4308 49.6016 15.9981 51.0342 15.9981 52.8012C15.9981 54.5682 17.4308 
                            56.0008 19.1978 56.0008C20.9648 56.0008 22.3974 54.5682 22.3974 52.8012C22.3974 51.0342 20.9648 
                            49.6016 19.1978 49.6016ZM19.1978 53.8677C18.6088 53.8677 18.1312 53.3902 18.1312 52.8012C18.1312 
                            52.2122 18.6088 51.7347 19.1978 51.7347C19.7868 51.7347 20.2643 52.2122 20.2643 52.8012C20.2643 
                            53.3902 19.7868 53.8677 19.1978 53.8677Z"
                    />
                    <path
                        d="M50.1275 49.6016C48.3605 49.6016 46.9279 51.0342 46.9279 52.8012C46.9279 54.5682 48.3605 
                            56.0008 50.1275 56.0008C51.8945 56.0008 53.3271 54.5682 53.3271 52.8012C53.3271 51.0342 51.8945 
                            49.6016 50.1275 49.6016ZM50.1275 53.8677C49.5385 53.8677 49.0609 53.3902 49.0609 52.8012C49.0609 
                            52.2122 49.5385 51.7347 50.1275 51.7347C50.7165 51.7347 51.194 52.2122 51.194 52.8012C51.194 
                            53.3902 50.7165 53.8677 50.1275 53.8677Z"
                    />
                    <path d="M3.19962 21.8715H5.3327V24.0045H3.19962V21.8715Z" />
                    <path d="M0 26.1377H2.13308V28.2708H0V26.1377Z" />
                    <path d="M52.2606 11.2061H58.6598V13.3391H52.2606V11.2061Z" />
                    <path d="M47.9944 11.2061H50.1275V13.3391H47.9944V11.2061Z" />
                    <path d="M34.1294 4.80676H44.7948V6.93985H34.1294V4.80676Z" />
                    <path d="M29.8632 4.80676H31.9963V6.93985H29.8632V4.80676Z" />
                    <path
                        d="M63.9925 59.2005V57.0674H54.8842C55.7935 56.0607 56.3575 54.7906 56.495 53.4412L63.4593 
                            49.461C63.5087 49.4266 63.5556 49.3886 63.5988 49.3469C63.6363 49.3214 63.6723 49.2928 63.7056 
                            49.2626C63.7858 49.1777 63.8514 49.0798 63.8998 48.9735C63.905 48.9636 63.9123 48.9574 63.917 
                            48.948C63.9655 48.8272 63.9915 48.6986 63.9936 48.5684C63.9936 48.5564 63.9998 48.547 63.9998 
                            48.535V38.9362C63.9951 38.9049 63.9889 38.8742 63.9806 38.8435C63.9821 38.8159 63.9821 38.7877 
                            63.9806 38.7601L61.8475 25.9616C61.8428 25.946 61.8371 25.9299 61.8308 25.9148C61.8308 25.9033 
                            61.8308 25.8903 61.8308 25.8788L60.7643 21.6127C60.645 21.1367 60.2169 20.8034 59.7264 20.8049H46.7893C46.6446 
                            20.2852 46.3696 19.8103 45.9905 19.4259L38.708 12.1435C38.1096 11.5414 37.2951 11.204 36.4457 
                            11.2061H10.6654C10.0764 11.2061 9.59888 11.6836 9.59888 12.2726V16.5388H0V18.6719H9.59888V21.8715H7.4658V24.0046H9.59888V26.1377H4.26617V28.2707H9.59888V37.8696C9.00989 
                            37.8696 8.53234 38.3472 8.53234 38.9362V48.535C8.53234 48.5574 8.54432 48.5767 8.54536 48.6001C8.55161 
                            48.6965 8.57088 48.7918 8.60264 48.8829C8.61254 48.9168 8.62451 48.9501 8.63805 48.9829C8.68805 49.0949 
                            8.75679 49.1969 8.84168 49.285L12.8178 53.2611C12.9198 54.6749 13.4911 56.0149 14.441 57.0674H0V59.2005H63.9925ZM44.1016 50.6681H25.2236C25.0929 
                            50.2984 24.9278 49.9411 24.731 49.6016H44.5943C44.3974 49.9411 44.2323 50.2984 44.1016 50.6681ZM25.597 
                            52.8012H43.7282C43.7288 54.3776 44.3141 55.8977 45.3708 57.0674H23.9545C25.0111 55.8977 25.5965 54.3776 
                            25.597 52.8012ZM45.8613 52.8012C45.8613 50.4452 47.7715 48.535 50.1275 48.535C52.4835 48.535 54.3937 
                            50.4452 54.3937 52.8012C54.3937 55.1572 52.4835 57.0674 50.1275 57.0674C47.7715 57.0674 45.8613 55.1572 45.8613 
                            52.8012ZM56.2898 51.0946C56.145 50.5723 55.9336 50.0703 55.6607 49.6016H58.9093L56.2898 51.0946ZM61.6662 
                            37.8696H51.194V27.2042H59.8894L61.6662 37.8696ZM59.4269 25.0711H50.1275C49.5385 25.0711 49.0609 25.5487 
                            49.0609 26.1377V38.9362C49.0609 39.5252 49.5385 40.0027 50.1275 40.0027H61.8595V42.1358H58.6598V44.2689H61.8595V47.4685H53.6578C51.519 
                            46.0463 48.736 46.0463 46.5972 47.4685H22.7281C20.5893 46.0463 17.8063 46.0463 15.6674 
                            47.4685H10.6654V43.2023H14.9316V41.0692H10.6654V40.0027H45.8613C46.4503 40.0027 46.9279 
                            39.5252 46.9279 38.9362V22.938H58.8937L59.4269 25.0711ZM11.732 28.2707H20.2643V26.1377H11.732V24.0046H21.3308V21.8715H11.732V18.6719H17.0647V16.5388H11.732V13.3391H36.4457C36.7285 
                            13.3402 36.9993 13.4527 37.1998 13.6516L44.4823 20.9341C44.6828 21.1341 44.7948 21.4059 44.7948 21.6892V37.8696H11.732V28.2707ZM13.6646 
                            49.6016C13.4766 49.9255 13.3177 50.2661 13.1901 50.6181L12.1736 49.6016H13.6646ZM14.9316 
                            52.8012C14.9316 50.4452 16.8418 48.535 19.1978 48.535C21.5537 48.535 23.4639 50.4452 23.4639 
                            52.8012C23.4639 55.1572 21.5537 57.0674 19.1978 57.0674C16.8418 57.0674 14.9316 55.1572 14.9316 52.8012Z"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0">
                        <rect width={64} height={64} fill="white" />
                    </clipPath>
                    </defs>
                </svg>
                <h3 className="services-title">Delivery</h3>
                <p className="services-description">
                    We offer our clients excellent quality services for many years, with
                    the best and delicious fresh baked treat in the city.
                </p>
                </div>
            </div>
            </section>
            {/* About */}
            <section className="about section body-container" id="about">
            <div className="about-container body-grid">
                <div className="about-data">
                <span className="subtitle about-initial">
                    <span className="letter">A</span>bout us
                </span>
                <h2 className="title about-initial">
                    The best classic <br /> treats.
                </h2>
                <p className="about-description">
                    Our classic treats are made daily by in-house bakers, using the
                    freshest &amp; finest ingredients, with excellent customer service
                    and at the best price, visit us.
                </p>
                <a href="" className="button2">
                    Explore history
                </a>
                </div>
                <img
                src="https://raw.githubusercontent.com/Jean-carje/Responsive-website-cakery-main/master/assets/img/about.jpg"
                alt="Imagen de yadetzy0 en Pixabay "
                className="about-img"
                />
            </div>
            </section>
            {/* Contact */}
            <section className="contact section body-container" id="contact">
            <div className="contact-container body-grid">
                <div className="contact-data">
                <span className="subtitle contact-initial">
                    <span className="letter">L</span>et's talk
                </span>
                <h2 className="title contact-initial">Contact us</h2>
                <p className="contact-description">
                    Would you like to place a Custom Order or have feedback about our
                    products or service? Please contact us.
                </p>
                </div>
                <div className="contact-button">
                <a href="" className="button2">
                    Contact us now 
                </a>
                </div>
            </div>
            </section>
        </main>
        {/* Footer */}
        <footer className="footer section body-container">
            <div className="footer-container body-grid">
            <div className="footer-content">
                <a href="" className="footer-logo">
                SweetStyleHub
                </a>
                <span className="footer-description">Cakery</span>
                <div>
                <a href="" className="footer-social">
                    <i className="bx bxl-facebook-circle" />
                </a>
                <a href="" className="footer-social">
                    <i className="bx bxl-instagram" />
                </a>
                <a href="" className="footer-social">
                    <i className="bx bxl-twitter" />
                </a>
                </div>
            </div>
            <div className="footer-content">
                <h3 className="footer-title">Services</h3>
                <ul>
                <li>
                    <a href="" className="footer-link">
                    Delivery
                    </a>
                </li>
                <li>
                    <a href="" className="footer-link">
                    Pricing
                    </a>
                </li>
                <li>
                    <a href="" className="footer-link">
                    Custom Order
                    </a>
                </li>
                <li>
                    <a href="" className="footer-link">
                    Reserve your spot
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer-content">
                <h3 className="footer-title">Information</h3>
                <ul>
                <li>
                    <a href="" className="footer-link">
                    Event
                    </a>
                </li>
                <li>
                    <a href="" className="footer-link">
                    Contact
                    </a>
                </li>
                <li>
                    <a href="" className="footer-link">
                    Privacy policy
                    </a>
                </li>
                <li>
                    <a href="" className="footer-link">
                    Terms of services
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer-content">
                <h3 className="footer-title">Adress</h3>
                <ul>
                <li>Karachi - Pakistan</li>
                <li>Lorem ipsum #999</li>
                <li>+92 332 2440544</li>
                <li>beedabluu@gmail.com</li>
                </ul>
            </div>
            </div>
            <p className="footer-copy">© 2024 SweetStyleHub. All right reserved</p>
        </footer>
    </>
  )
}

export default CakeryComponent