//Language

//

//Header

//Roll

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.page__header');
    window.addEventListener('scroll', function() {
        if (window.scrollY < lastScrollY) {
            header.classList.remove('page__header-hidden');
        } else {
            header.classList.add('page__header-hidden');
        }
        lastScrollY = window.scrollY;
    });
});

//Side-bar

//

//Color

const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    if (link.classList.contains('activeLi')) {
        link.style.color = '#FF4605';
    }
});

//Main

//Animations

document.addEventListener("DOMContentLoaded", () => {
    const applyAnimations = (animations) => {
      animations.forEach(({ element, delay }) => {
        setTimeout(() => {
          if (element) element.classList.add("animate");
        }, delay);
      });
    };
  
    const animationOffers = [
      { element: document.querySelector(".container--ad"), delay: 400 },
      { element: document.querySelector(".cards__1"), delay: 700 },
      { element: document.querySelector(".cards__2"), delay: 900 },
      { element: document.querySelector(".cards__3"), delay: 1100 },
    ];
  
    const animationLocation = [
      { element: document.querySelector(".container--ad--another-pages"), delay: 400 },
      { element: document.querySelector(".page__iframe"), delay: 700 },
    ];
  
    applyAnimations([...animationOffers, ...animationLocation]);
});  
document.addEventListener("DOMContentLoaded", function () {
    const animateElements = (elements) => {
        elements.forEach(({ element, delay }) => {
            if (element) {
                setTimeout(() => {
                    element.classList.add("animate");
                }, delay);
            }
        });
    };
    const getThreshold = () => {
        const width = window.innerWidth;
        if (width <= 480) return .05;
        else if (width <= 768) return .15;
        else return .35;
    };
    const createObserver = (sectionSelector, animationData) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateElements(animationData);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: getThreshold() });
        const section = document.querySelector(sectionSelector);
        if (section) {
            observer.observe(section);
        }
    };
    const aboutAnimationData = [
        { element: document.querySelector(".header-about"), delay: 200 },
        { element: document.querySelector(".container--about"), delay: 400 },
        { element: document.querySelector(".footer-about"), delay: 600 },
    ];
    createObserver(".page__about", aboutAnimationData);
    const skillsAnimationData = [
        { element: document.querySelector(".container--skills-header-main"), delay: 200 },
        { element: document.querySelector(".footer-skills__c-1"), delay: 400 },
        { element: document.querySelector(".footer-skills__c-2"), delay: 600 },
        { element: document.querySelector(".footer-skills__c-3"), delay: 800 },
        { element: document.querySelector(".footer-skills__c-4"), delay: 1000 },
        { element: document.querySelector(".footer-skills__c-5"), delay: 1200 },
        { element: document.querySelector(".footer-skills__c-6"), delay: 1400 },
    ];
    createObserver(".page__skills", skillsAnimationData);
    const reviewsAnimationData = [
        { element: document.querySelector(".header-reviews"), delay: 200 },
        { element: document.querySelector(".container--reviews"), delay: 400 },
        { element: document.querySelector(".footer-reviews__c-1"), delay: 600 },
        { element: document.querySelector(".footer-reviews__c-2"), delay: 800 },
        { element: document.querySelector(".footer-reviews__c-3"), delay: 1000 },
    ];
    createObserver(".page__reviews", reviewsAnimationData);
});

//Footer

document.getElementById("year").textContent = new Date().getFullYear();